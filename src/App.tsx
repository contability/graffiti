import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { apis } from "./api/api";
import styled from 'styled-components';
import axios from 'axios';

function App() {
  const day_input : any = useRef("");
  const time_input: any = useRef("");
  const queryClient = useQueryClient();

  // const queryFn = () => {};

  // const {
  //   data,   // 마지막으로 성공한 resolved된 데이터(Response)
  //   dataUpdateAt,  
  //   error,    // 에러가 발생했을 때 반환되는 객체
  //   errorUpdatedAt,
  //   failureCount,
  //   isError,
  //   isFetched,
  //   isFetchedAfterMount,
  //   isFetching,   // Request가 in-flight중일 때 true
  //   isidle,
  //   isLoading,    // 현재 query의 상태가 로딩중인지
  //   isLoadingError,
  //   isPlaceholderData,
  //   isPreviousData,
  //   isRefetchError,
  //   isRefetching,
  //   isStale,
  //   isSuccess,    // 현재 query의 상태가 성공적으로 완료되었는지
  //   refetch,    // 해당 query refetch하는 함수
  //   remove,   // 해당 query cache에서 지우는 함수
  //   status    // 현재 query의 상태
  // } : any = useQuery<>("queryKey", queryFn, {
  //   cacheTime,
  //   enabled,    // 자동으로 query를 실행시킬지 말지 여부
  //   initialData,
  //   initialDataUpdatedAt,
  //   isDataEqual,
  //   keepPreviousData,   // 새롭게 fetching 시 이전 데이터 유지 여부
  //   meta,
  //   notifyOnChangeProps,
  //   notifyOnChangePropsExclusions,
  //   onError,    // query fetching 실패 시 실행할 side effect 정의
  //   onSettled,    // query fetching 완료 시 실행할 side effect 정의
  //   onSuccess,    // query fetching 성공 시 실행할 side effect 정의
  //   placeholderData,
  //   queryKeyHashFn,
  //   refetchInterval,    // 주기적으로 refetch 할지 결정하는 옵션
  //   refetchIntervalInBackground,
  //   refetchOnMount,
  //   refetchOnReconnect,
  //   refetchOnWindowFocus,
  //   retry,    // query 동작 실패 시, 자동으로 retry 할지 결정하는 옵션
  //   retryOnMount,
  //   retryDelay,
  //   select,   // 성공 시 가져온 data를 가공해서 전달
  //   staleTime,
  //   structuralSharing,
  //   suspense,
  //   useErrorBoundary
  // });

  const { isLoading, data }: any = useQuery(
    "seoul",       // query Key
    apis.getSeoul,    // fetch 로직
    {         // options
      staleTime: 100,
    }); 

  

  // const {
  //   data,
  //   error,
  //   isError,
  //   isIdle,
  //   isLoading,
  //   isPaused,
  //   isSuccess,
  //   mutate,   // mutation을 실행하는 함수. useQuery와는 다르게 자동 실행 안됨
  //   mutateAsync,    // mutate와 비슷 하지만 Promise 반환. 즉, 비동기
  //   reset,    // mutation 내부 상태 clean. data나 error 이런 것들을 clean 시켜 줌
  //   status
  //               // 대체적으로 useQuery랑 비슷. 오히려 반환하는 객체 안의 내용이 더 적다.
  // } = useMutation(newTodo => {    // useQuery보다 더 심플하게 Promise 반환 함수만 있어도 됨. 단, query key를 넣어주면 devtools에서 볼 수 있음
  //   return axios.post("/todos", newTodo)  
  // },{   // options
  //   mutationKey,
  //   onError,
  //   onMutate,   // 본격적인 Mutation 동작 전에 먼저 동작하는 함수, Optimistic update 적용할 때 유용.    // ajaxForm에 beforSubmit이랑 비슷한건가
  //   onSettled,
  //   onSuccess,
  //   retry,
  //   retryDelay,
  //   useErrorBoundary,
  //   meta
  //                 // 나머진 특별히 설명할 거 없이 useQuery랑 비슷. 오히려 option이 더 적다
  // });
  
  // optimistic update
  // 페이스북의 좋아요를 예로 들어보면
  // 좋아요를 딱 눌렀을 때 server에 저장이 되어야 하기 때문에 api 통신을 하게 될텐데
  // 얘는 항상 누르자마자 바로 초록색 불이 뜨게 되는데
  // 무슨 말이냐면 얘가 일단은 이 api가 성공할거라 보고 (optimistic: 낙관적인) UI를 먼저 업데이트 하게 된다
  // 그렇게 해놓고 성공하면 그대로 가는거고, 실패하면 롤백하면 됨
  
  const { mutate } = useMutation(apis.updateSeoul, {
    onSuccess: () => {        // 성공했을 때 로직 실행
      queryClient.invalidateQueries("seoul"); // invalidateQueries(무효화 시킬 queryKey 이름. 위에 불러왔던 queryClient를 무효화 시키고 최신 데이터가 리스트에 추가 되게 하려는 거)
      day_input.current = "";
      time_input.current = "";
    }
  });

  // 간단하게 query client를 통해 invalidate 메소드를 호출하면 끝이다.
  // Invalidate every query in the cache
  queryClient.invalidateQueries();
  // Invalidate every query with a key that starts with 'todos'
  queryClient.invalidateQueries('todos');

  // 이러면 해당 key를 가진 query는 stale 취급되고, 현재 rendering 되고 있는 query들은 백그라운드에서 refetch 된다.
  // aws cloud front의 invalidation 생각하면 됨
  // 내부에 가진 cache들을 clean 시켜서 다 없애고 자동으로 refetch되고 뭐 그런거다


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
