import { UserType } from './user';

export type UserState = UserType & {
  isLogged: boolean;
};

export type CommonState = {
  validateMode: boolean;
};

export type AuthState = {
  authMode: 'signUp' | 'login';
};

export type RegisterRoomState = {
  // 건물 유형 큰 범주
  largeBuildingType: string | null;
  // 건물 유형
  buildingType: string | null;
  // 숙소 유형
  roomType: string | null;
  // 게스트만을 위해 만들어진 숙소인가
  isSetUpForGuest: boolean | null;
};
