import TodoList, { IProps } from '../components/TodoList';
import { getTodosAPI } from '../lib/api/todos';
import { wrapper } from '../store';
import { todoActions } from '../store/todo';

// const todos: TodoType[] = [
//   {
//     id: 1,
//     text: '마트 가서 장보기',
//     color: 'red',
//     checked: false,
//   },
//   {
//     id: 2,
//     text: '수학 숙제하기',
//     color: 'orange',
//     checked: false,
//   },
//   {
//     id: 3,
//     text: '코딩하기',
//     color: 'yellow',
//     checked: true,
//   },
//   {
//     id: 4,
//     text: '넥스트 공부하기',
//     color: 'green',
//     checked: true,
//   },
//   {
//     id: 5,
//     text: '요리 연습하기',
//     color: 'blue',
//     checked: false,
//   },
//   {
//     id: 6,
//     text: '분리수거 하기',
//     color: 'navy',
//     checked: false,
//   },
// ];

const Index = ({ todos }: IProps) => {
  console.log(process.env.NEXT_PUBLIC_API_URL, '클라이언트');
  // return <TodoList todos={todos} />;
  return <TodoList todos={[]} />;
};

// export const getServerSideProps: GetServerSideProps = async () => {
//   try {
//     console.log(process.env.NEXT_PUBLIC_API_URL, '서버');

//     const { data } = await getTodosAPI();
//     console.log(data);
//     return { props: { todos: data } };
//   } catch (error) {
//     console.log(error);
//     return { props: { todos: [] } };
//   }
// };

// export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
export const getServerSideProps = wrapper.getServerSideProps(store => async context => {
  console.log(store);
  console.log(context);
  try {
    const { data } = await getTodosAPI();
    // return { props: { todos: data } };
    store.dispatch(todoActions.setTodo(data));
    return { props: { todos: [] } };
  } catch (error) {
    console.log(error);
    return { props: { todos: [] } };
  }
});

export default Index;
