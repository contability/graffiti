import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { apis } from "./api/api";
import styled from 'styled-components';

function App() {
  const day_input : any = useRef("");
  const time_input: any = useRef("");
  const queryClient = useQueryClient();

  const { isLoading, data }: any = useQuery(
    "seoul",       // query Key
    apis.getSeoul,    // fetch 로직
    {         // options
      staleTime: 100,
    }); 
  
  const { mutate } = useMutation(apis.updateSeoul, {
    onSuccess: () => {        // 성공했을 때 로직 실행
      queryClient.invalidateQueries("seoul"); // invalidateQueries(무효화 시킬 queryKey 이름. 위에 불러왔던 queryClient를 무효화 시키고 최신 데이터가 리스트에 추가 되게 하려는 거)
      day_input.current = "";
      time_input.current = "";
    }
  });


  return (
    <AppBox>
      {isLoading ||
        Object.keys(data?.data).map((v, i) => (
          <div key={i}>
            {data?.data[v]}
          </div>
        ))
      }
      <div>
        <input ref={day_input} />
        <input ref={time_input} />
        <button onClick={() => {
          const data = {
            title: day_input.current,
            body: time_input.current
          }

          mutate(data);       {/* 위에서 만든 업데이트 실행 */}
        }}>데이터 추가</button>
      </div>
    </AppBox>
  );
}

const AppBox = styled.div`
  width: 100%;
  height: 100%;
`;

export default App;
