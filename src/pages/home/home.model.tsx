import { useCallback, useEffect, useState } from 'react';
import { getAllPerfomance } from './home.api';
import { PfmListType } from '../../shared/types/pfm-list.type';

export const useHomeModel = () => {
  const [pfmItems, setPfmItems] = useState<PfmListType[] | null>(null);

  const getPerfomance = useCallback(async () => {
    const data = await getAllPerfomance(21, 1);
    setPfmItems(data);
  }, []);

  useEffect(() => {
    getPerfomance();
  }, []);

  return {
    pfmItems,
  };
};
