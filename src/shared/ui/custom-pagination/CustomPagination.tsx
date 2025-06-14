'use client';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from '@/shared/ui';
import { useSearchParams } from 'next/navigation';
import { ComponentProps } from 'react';

type Props = {
  currentPage: number;
  totalPages: number;
  pageParam?: string;
} & ComponentProps<typeof Pagination>;

export default function CustomPagination({
  currentPage,
  totalPages,
  pageParam = '_page',
  ...props
}: Props) {
  const searchParams = useSearchParams();

  const getHref = (page: number) => {
    const params = Object.fromEntries(searchParams.entries());

    return { query: { ...params, [pageParam]: page } };
  };

  const getVisiblePages = () => {
    const visiblePages = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (currentPage <= 3) {
      endPage = Math.min(5, totalPages);
    } else if (currentPage >= totalPages - 2) {
      startPage = Math.max(totalPages - 4, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      visiblePages.push(i);
    }

    return visiblePages;
  };

  const visiblePages = getVisiblePages();

  return (
    <Pagination {...props}>
      <PaginationContent>
        {currentPage !== 1 && (
          <PaginationItem>
            <PaginationPrevious href={getHref(currentPage - 1)} />
          </PaginationItem>
        )}
        {!visiblePages.includes(1) && (
          <>
            <PaginationItem>
              <PaginationLink href={getHref(1)}>1</PaginationLink>
            </PaginationItem>
            {visiblePages[0] > 2 && <PaginationEllipsis />}
          </>
        )}
        {visiblePages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href={getHref(page)}
              isActive={page === currentPage}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        {!visiblePages.includes(totalPages) && (
          <>
            {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
              <PaginationEllipsis />
            )}
            <PaginationItem>
              <PaginationLink href={getHref(totalPages)}>
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        {currentPage !== totalPages && (
          <PaginationItem>
            <PaginationNext href={getHref(currentPage + 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
