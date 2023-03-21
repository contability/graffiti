export const monthList: string[] = [
  '1월',
  '2월',
  '3월',
  '4월',
  '5월',
  '6월',
  '7월',
  '8월',
  '9월',
  '10월',
  '11월',
  '12월',
];

/** 큰 범위 건물 유형의 숙소*/
export const largeBuildingTypeList = ['아파트', '주택', '별채', '독특한 숙소', 'B&B', '부티크호텔'];

// 맵핑 함수의 첫번째 인자 언더스코어는 특별한 인자가 아니라, 불필요한 인자의 공간을 채우기 위한 용도.

// dayList랑 똑같은 배열 return 받으려면
// export const dayList = Array.from({ length: 31 }, (_, i) => String(i + 1));
// 이렇게 다른 표현 방식의 유사 배열 넣어도 됨. 유사 배열이란게 length 속성을 가진 object니까

// for(let i = 0; i < Array.length; i++){ dayList.push(i + 1)};
// 옛날 코드로 치면 결국 이거임
export const dayList = Array.from(Array(31), (_, i) => String(i + 1));

export const yearList = Array.from(Array(124), (_, i) => String(2023 - i));
