import { axiosInstance } from '../../app/instance';

// 웬진 리스트
export const getNovelItems = async (numOfRows: number, currentPage: number, infoTp: string) => {
  try {
    const res = await axiosInstance.get(
      `/openapi/API_CCA_160/request?serviceKey=${
        import.meta.env.VITE_NOVEL_API_KEY
      }&numOfRows=${numOfRows}&pageNo=${currentPage}&gubun=${infoTp}`
    );
    return res.data.response.body.items.item || [];
  } catch (e) {
    console.log(e);
    return [];
  }
};
