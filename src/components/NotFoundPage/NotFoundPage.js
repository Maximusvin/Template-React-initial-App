import { NotFoundWrap, Button } from './NotFoundPage.style';

const NotFoundPage = ({ onGoMainPage }) => {
  return (
    <NotFoundWrap>
      <h2>404. Page not found</h2>
      <Button onClick={onGoMainPage}>Go to main page</Button>
    </NotFoundWrap>
  );
};

export default NotFoundPage;
