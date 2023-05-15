import axios from 'axios';
import { RoomType } from '../../types/room';
import { makeQueryString } from '../utlis';

type GetRoomListAPIQueries = {
  location?: string | string[];
  checkInDate?: string | string[];
  checkOutDate?: string | string[];
  adultCount?: string | string[];
  childrenCount?: string | string[];
  infantsCount?: string | string[];
  latitude?: string | string[];
  longitude?: string | string[];
  limit?: string | string[];
  page?: string | string[];
};

export const getRoomListAPI = (queries: GetRoomListAPIQueries) => {
  return axios.get<RoomType[]>(makeQueryString('/api/rooms', queries));
};
