import { useQuery } from '@tanstack/react-query';
import { getAllArt } from './art.api';

export const useArtModel = () => {
  // 공연 정보
  const fetchArt = useQuery({
    queryKey: ['artList'],
    queryFn: async () => await getAllArt(43, 1),
    staleTime: 5000,
  });

  return {
    fetchArt,
  };
};
