import axios from 'axios';
import { useState } from 'react';
import { styled } from 'styled-components';
import { IPosts } from '../..';

const RegisterForm = styled.div`
  width: 400px;
  padding: 32px;
  background-color: white;

  .register-form__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;

    input {
      width: 250px;
      border: 1px solid black;
    }
  }

  .register-form__body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;

    textarea {
      width: 250px;
      border: 1px solid black;
    }
  }

  .register-form__footer {
    float: right;
  }
`;

const RegisterPost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [result, setResult] = useState<IPosts>();

  const submitHandler = () => {
    const postBody = {
      userId: 1,
      title,
      body,
    };

    const res = axios.post('http://localhost:3000/api/post/register', postBody);

    console.log(res);
  };

  return (
    <RegisterForm>
      <div className="register-form__header">
        <span>user id</span>
        <span>
          <input type="text" />
        </span>
      </div>
      <div className="register-form__header">
        <span>title</span>
        <span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </span>
      </div>
      <div className="register-form__body">
        <span>body</span>
        <span>
          <textarea
            cols={30}
            rows={10}
            onChange={(e) => setBody(e.target.value)}
          >
            {body}
          </textarea>
        </span>
      </div>
      <div className="register-form__footer">
        <button onClick={submitHandler}>submit</button>
      </div>
    </RegisterForm>
  );
};

export default RegisterPost;
