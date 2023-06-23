import axios from 'axios';
import { Coordinates } from '../../types/map';

export type GetLocationInfoAPIResponse = {
  country: string;
  city: string;
  district: string;
  streetAddress: string;
  detailAddress: string;
  postcode: string;
  latitude: number;
  longitude: number;
};

export const getLocationInfoAPI = async ({ longitude, latitude }: Coordinates) => {
  return axios.get<GetLocationInfoAPIResponse>(`/api/maps/location?latitude=${latitude}&longitude=${longitude}`);
};

/** 구글 장소 검색 api */
export const searchPlacesAPI = (keyword: string) => {
  return axios.get<{ description: string; placeId: string }[]>(`/api/maps/places?keyword=${keyword}`);
};

/** placeId로 장소 정보 가져오기 */
export const getPlaceAPI = (placeId: string) => {
  return axios.get<{ location: string; latitude: number; longitude: number }>(`/api/maps/places/${placeId}`);
};
