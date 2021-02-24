import axios from 'axios';
import { ReserveData } from '../interface/ReserveData';

export const getReserveInfo = async (reserveId: string) => {
  try {
    const reserveInfo = await axios.get(`/reserve/${reserveId}`);

    // return reserveInfo;
  } catch (e) {
    throw new Error('failed get reserve info');
  }
};

export const postReserveInfo = async (reserveData: ReserveData) => {
  try {
    const { data: reserveInfo } = await axios.post('/reserve', {
      ...reserveData,
    });

    // return reserveInfo.map(({ reserveId }: { reserveId: string}) => reserveId);
  } catch (e) {
    throw new Error('failed post reserveInfo');
  }
};

export const deleteReserveInfo = async (reserveId: string) => {
  try {
    const reserveInfo = await axios.delete(`/reserve/${reserveId}`);
  } catch (e) {
    throw new Error('failed delete reserve info');
  }
};
