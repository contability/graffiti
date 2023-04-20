import { BedType } from './room';
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
  /**  건물 유형 큰 범주*/
  largeBuildingType: string | null;
  /**  건물 유형*/
  buildingType: string | null;
  /**  숙소 유형*/
  roomType: string | null;
  /**  게스트만을 위해 만들어진 숙소인가*/
  isSetUpForGuest: boolean | null;
  /**  최대 숙박 인원*/
  maximumGuestCount: number;
  /** 침실 개수*/
  bedroomCount: number;
  /** 침대 개수 */
  bedCount: number;
  /** 침대 유형 */
  bedList: { id: number; beds: { type: BedType; count: number }[] }[];
  /** 공용공간 침대 유형*/
  publicBedList: { type: BedType; count: number }[];
  /** 욕실 개수 */
  bathroomCount: number;
  /** 욕실 유형 */
  bathroomType: 'private' | 'public' | null;
  /** 국가/지역 */
  country: string;
  /** 시/도*/
  city: string;
  /** 시/군/구*/
  district: string;
  /** 도로명주소*/
  streetAddress: string;
  /** 동호수*/
  detailAddress: string;
  /** 우편번호*/
  postcode: string;
  /** 위도*/
  latitude: number;
  /** 경도*/
  longitude: number;
};
