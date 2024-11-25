import { useQuery } from '@tanstack/react-query';
import { getNovelItems } from './novel.api';

export const useNovelModel = (checkedTab: string) => {
  const novelItems = ['비평', '시', '소설'];
  // 비평
  const fetchNovel = useQuery({
    queryKey: ['novel', checkedTab],
    queryFn: async () => await getNovelItems(20, 1, checkedTab),
  });

  return {
    fetchNovel,
    novelItems,
  };
};
