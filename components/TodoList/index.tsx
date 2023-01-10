import React, { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';
import { TodoType } from '../../types/todo';
import CheckMarkIcon from '../../svg/icons/system/system_check.svg';
import TrashCanIcon from '../../svg/icons/system/system_trash_can.svg';
import { checkTodoAPI, deleteTodoAPI } from '../../lib/api/todos';
import { useRouter } from 'next/router';
import AddTodo from '../AddTodo';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Container = styled.div`
  width: 100%;

  .todo-num {
    margin-left: 12px;
  }

  .todo-list-header {
    padding: 12px;
    border-bottom: 1px solid ${palette.gray};

    .todo-list-last-todo {
      font-size: 14px;
      span {
        margin-left: 8px;
      }
    }
  }

  .todo-list-header-colors {
    display: flex;
    .todo-list-header-color-num {
      display: flex;
      margin-right: 8px;
      p {
        font-size: 14px;
        line-height: 16px;
        margin: 0;
        margin-left: 6px;
      }
      .todo-list-header-round-color {
        width: 16px;
        height: 16px;
        border-radius: 50%;
      }
    }
  }

  .bg-blue {
    background-color: ${palette.blue};
  }
  .bg-green {
    background-color: ${palette.green};
  }
  .bg-navy {
    background-color: ${palette.navy};
  }
  .bg-orange {
    background-color: ${palette.orange};
  }
  .bg-red {
    background-color: ${palette.red};
  }
  .bg-yellow {
    background-color: ${palette.yellow};
  }

  .todo-list {
    .todo-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 52px;
      border-bottom: 1px solid ${palette.gray};

      .todo-left-side {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        .todo-color-block {
          width: 12px;
          height: 100%;
        }

        .checked-todo-text {
          color: ${palette.gray};
          text-decoration: line-through;
        }
        .todo-text {
          margin-left: 12px;
          font-size: 16px;
        }
      }

      .todo-right-side {
        display: flex;
        margin-right: 12px;

        svg {
          &:first-child {
            margin-right: 16px;
          }
        }

        .todo-trash-can {
          width: 22px;
          path {
            fill: ${palette.deep_red};
          }
        }

        .todo-check-mark {
          fill: ${palette.deep_green};
        }

        .todo-button {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 1px solid ${palette.gray};
          background-color: transparent;
          outline: none;
        }
      }
    }
  }
`;

export interface IProps {
  todos: TodoType[];
}

type ObjectIndexType = {
  [key: string]: number | undefined;
};

// const TodoList: React.FC<IProps> = ({ todos }: IProps) => {
const TodoList: React.FC<IProps> = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const [localTodos, setLocalTodos] = useState(todos);
  const getTodoColorNums = useMemo(() => {
    const colors: ObjectIndexType = {};
    todos.map(todo => {
      const value = colors[todo.color];
      if (!value) colors[`${todo.color}`] = 1;
      else colors[`${todo.color}`] = value + 1;
    });

    return colors;
  }, [todos]);

  const checkTodo = async (id: number) => {
    try {
      await checkTodoAPI(id);
      console.log('체크하였습니다.');

      // 방법 1. 새로고침을 통하여 페이지를 새로 받아오기 때문에 여기서 적절하진 않은 것 같음.
      // router.reload();

      // 방법 2. 클라이언트 측 내비게이션을 이용하여 setServerSideProps를 실행 -> 데이터 다시 받아옴.
      // router.push('/');

      // 방법3. useState 활용
      const newTodos = localTodos.map(todo => {
        if (todo.id === id) return { ...todo, checked: !todo.checked };
        return todo;
      });

      setLocalTodos(newTodos);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      await deleteTodoAPI(id);
      const newTodos = localTodos.filter(todo => todo.id !== id);
      setLocalTodos(newTodos);
      console.log('삭제했습니다.');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <div className="todo-list-header">
        <p className="todo-list-last-todo">
          남은 TODO <span>{localTodos.length}개</span>
        </p>
        <div className="todo-list-header-colors">
          {Object.keys(getTodoColorNums).map((color, colorIndex) => (
            <div className="todo-list-header-color-num" key={colorIndex}>
              <div className={`todo-list-header-round-color bg-${color}`}></div>
              <p>{getTodoColorNums[color]}개</p>
            </div>
          ))}
        </div>
      </div>
      {/* <AddTodo /> */}
      <ul className="todo-list">
        {localTodos.map(todo => (
          <li className="todo-item" key={todo.id}>
            <div className="todo-left-side">
              <div className={`todo-color-block bg-${todo.color}`} />
              <p className={`todo-text ${todo.checked ? 'checked-todo-text' : ''}`}>{todo.text}</p>
            </div>
            <div className="todo-right-side">
              {todo.checked ? (
                <>
                  <TrashCanIcon
                    className="todo-trash-can"
                    onClick={() => {
                      deleteTodo(todo.id);
                    }}
                  />
                  <CheckMarkIcon className="todo-check-mark" onClick={() => checkTodo(todo.id)} />
                </>
              ) : (
                <button type="button" className="todo-button" onClick={() => checkTodo(todo.id)}></button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default TodoList;
