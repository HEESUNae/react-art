import { useQuery } from '@tanstack/react-query';
import { getAllPerfomance } from './home.api';

export const useHomeModel = (pageNo: number) => {
  // 공연 정보
  const fetchPfm = useQuery({
    queryKey: ['ptmList', pageNo],
    queryFn: async () => await getAllPerfomance(15, pageNo),
    staleTime: 5000, // 데이터 신선도 유지 시간 설정
  });

  return {
    fetchPfm,
  };
};
