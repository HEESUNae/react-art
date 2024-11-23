import { useQuery } from '@tanstack/react-query';
import { getNovelItems } from './novel.api';

export const useNovelModel = () => {
  // 비평
  const fetchNovel = useQuery({
    queryKey: ['novel'],
    queryFn: async () => await getNovelItems(20, 1, '비평'),
  });

  return {
    fetchNovel,
  };
};
