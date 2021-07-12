import { NotFoundPage } from 'components';
import { useOnGoMainPage } from 'hooks';

export const NotFoundView = () => {
  const onGoMainPage = useOnGoMainPage();

  return <NotFoundPage onGoMainPage={onGoMainPage} />;
};
