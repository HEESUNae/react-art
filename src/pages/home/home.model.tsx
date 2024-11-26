import { useQuery } from '@tanstack/react-query';
import { getAllPerfomance } from './home.api';

export const useHomeModel = (currentPage: number) => {
  // 공연 정보
  const fetchPfm = useQuery({
    queryKey: ['ptmList', currentPage],
    queryFn: async () => await getAllPerfomance(15, currentPage),
    staleTime: 5000,
  });

  return {
    fetchPfm,
  };
};
