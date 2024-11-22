import { axiosInstance } from '../../../app/instance';

export const getAllPerfomance = async (numOfRows: number, currentPage: number) => {
  try {
    const res = await axiosInstance.get(
      `/openapi/API_CCA_148/request?serviceKey=${
        import.meta.env.VITE_API_KEY
      }&numOfRows=${numOfRows}&pageNo=${currentPage}`
    );
    return res.data.response.body.items.item;
  } catch (e) {
    console.log(e);
    return [];
  }
};
