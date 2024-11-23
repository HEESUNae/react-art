import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getAllPerfomance } from './home.api';

export const useHomeModel = () => {
  // 공연 정보
  const fetchPfm = useQuery({
    queryKey: ['ptmList'],
    queryFn: async () => await getAllPerfomance(21, 1),
  });

  return {
    fetchPfm,
  };
};
