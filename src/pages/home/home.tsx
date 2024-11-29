import { useState } from 'react';
import { PfmListType } from '../../shared/types/pfm-list.type';
import { PerfomanceCard } from '../../widgets/pfm-card/prm-card';
import { Pagination } from '../../widgets/pagination/pagination';
import { useHomeModel } from './home.model';
import { StyledHome } from './home.style';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTab, setCurrentTab] = useState(0);
  const { fetchPfm } = useHomeModel(currentPage);

  if (!fetchPfm.isSuccess) return <></>;

  return (
    <StyledHome>
      <div className="banner"></div>
      <div className="perfomance-container">
        {fetchPfm.data.items.item.map((item: PfmListType) => (
          <PerfomanceCard item={item} key={item.LOCAL_ID} />
        ))}
        -
      </div>
      <Pagination
        fetchPfm={fetchPfm}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
    </StyledHome>
  );
}
