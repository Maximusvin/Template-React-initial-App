import Pagination from '@material-ui/lab/Pagination';
import { Wrapper } from './PaginationBox.style';

const PaginationBox = ({ count, currentPage, onChangePage }) => (
  <Wrapper>
    <Pagination
      count={count}
      variant="outlined"
      shape="rounded"
      color="secondary"
      onChange={(event, pages) => {
        onChangePage(pages);
      }}
      page={currentPage}
    />
  </Wrapper>
);

export default PaginationBox;
