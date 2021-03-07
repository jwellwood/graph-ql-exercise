import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

interface Props {
  pageInfo: any;
  onChangePage: (e, page: number) => void;
  page: number;
}

const CustomPagination: React.FC<Props> = ({
  pageInfo,
  onChangePage,
  page,
}) => {
  const { pages } = pageInfo;
  return (
    <Pagination
      count={pages}
      color="primary"
      page={page}
      onChange={onChangePage}
    />
  );
};

export default CustomPagination;
