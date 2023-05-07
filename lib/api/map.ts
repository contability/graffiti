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
  axios.get<{ description: string; placeId: string }[]>(`/api/maps/places?keyword=${keyword}`);
};
