import { useQuery } from '@tanstack/react-query';
import { getAllPerfomance } from './home.api';

export const useHomeModel = (pageNo: number) => {
  // 공연 정보
  const fetchPfm = useQuery({
    queryKey: ['ptmList', pageNo],
    queryFn: async () => await getAllPerfomance(15, pageNo),
    staleTime: 5000,
  });

  return {
    fetchPfm,
  };
};
