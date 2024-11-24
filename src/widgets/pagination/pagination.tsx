import React, { SetStateAction, useEffect, useState } from 'react';
import { StyledPagination } from './pagination.style';

interface PaginationProps {
  fetchPfm: any;
  currentPage: number;
  currentTab: number;
  setCurrentTab: React.Dispatch<SetStateAction<number>>;
  setCurrentPage: React.Dispatch<SetStateAction<number>>;
}

export function Pagination({ fetchPfm, currentPage, currentTab, setCurrentTab, setCurrentPage }: PaginationProps) {
  const oneTabCount: number = 5;
  const totalPage = Math.ceil(fetchPfm.data.totalCount / fetchPfm.data.numOfRows);
  const [pageCount, setPageCount] = useState<number[]>([]);

  // 이전페이지
  const handlePrev = () => {
    if (currentPage === 1) return;
    if (currentPage % oneTabCount === 1) {
      setCurrentTab((prev) => prev - 1);
    }
    setCurrentPage((prev) => prev - 1);
  };

  // 다음페이지
  const handleNext = () => {
    if (currentPage === totalPage) return;
    if (currentPage % oneTabCount === 0) {
      setCurrentTab((prev) => prev + 1);
    }
    setCurrentPage((prev) => prev + 1);
  };

  // 페이지 액티브
  const handlePageCount = (pageNum: number) => {
    setCurrentPage(pageNum);
  };

  // 페이지 숫자 배열 생성
  useEffect(() => {
    const start = oneTabCount * currentTab + 1;
    const end = Math.min(start + oneTabCount - 1, totalPage);
    setPageCount(Array.from({ length: end - start + 1 }, (_, idx) => idx + start));
  }, [currentTab]);

  return (
    <StyledPagination>
      {currentPage - oneTabCount > 0 && (
        <button onClick={handlePrev}>
          <img src="/icons/arrow-right.svg" alt="이전" className="prev-arrow" />
        </button>
      )}

      {pageCount.map((pageNum: number) => (
        <button
          key={pageNum}
          onClick={() => handlePageCount(pageNum)}
          className={`page ${currentPage === pageNum && 'active'}`}
        >
          {pageNum}
        </button>
      ))}
      {oneTabCount * (currentTab + 1) < totalPage && (
        <button onClick={handleNext}>
          <img src="/icons/arrow-right.svg" alt="다음" />
        </button>
      )}
    </StyledPagination>
  );
}
