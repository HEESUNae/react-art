import { axiosInstance } from '../../app/instance';

// 공연 전시 리스트
export const getAllArt = async (numOfRows: number, currentPage: number) => {
  try {
    const res = await axiosInstance.get(
      `/openapi/service/rest/meta2020/getCDGAvideo?serviceKey=${
        import.meta.env.VITE_MOVIE_API_KEY
      }&numOfRows=${numOfRows}&pageNo=${currentPage}`
    );
    return res.data.response.body || [];
  } catch (e) {
    console.log(e);
    return [];
  }
};
