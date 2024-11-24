import { axiosInstance } from '../../app/instance';

// 전체 공연 리스트
export const getAllPerfomance = async (numOfRows: number, currentPage: number) => {
  try {
    const res = await axiosInstance.get(
      `/openapi/API_CCA_148/request?serviceKey=${
        import.meta.env.VITE_PFM_API_KEY
      }&numOfRows=${numOfRows}&pageNo=${currentPage}`
    );
    return res.data.response.body || [];
  } catch (e) {
    console.log(e);
    return [];
  }
};
