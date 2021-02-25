import axios from 'axios';
import { ReserveData } from '../interface/ReserveData';

// eslint-disable-next-line no-unused-vars
export const getReserve = async (callback:((reserveInfo: ReserveData[]) => void)) => {
  const { data: reserveInfo } = await axios.get('reserve');

  reserveInfo.sort((info1: ReserveData, info2: ReserveData) => {
    if (info1.reserveId > info2.reserveId) return 1;

    if (info1.reserveId < info2.reserveId) return -1;

    return 0;
  });

  callback(reserveInfo);
};

export const postReserveInfo = async (reserveData: ReserveData) => {
  try {
    const { data: reserveInfo } = await axios.post('/reserve', {
      ...reserveData,
    });

    return reserveInfo.map(({ reserveId }: { reserveId: string }) => reserveId);
  } catch (e) {
    throw new Error('failed post reserveInfo');
  }
};

export const deleteReserveInfo = async (reserveId: string) => {
  try {
    const reserveInfo = await axios.delete(`/reserve/${reserveId}`);

    return reserveInfo;
  } catch (e) {
    throw new Error('failed delete reserve info');
  }
};
