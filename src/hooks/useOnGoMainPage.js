import { useLocation, useHistory } from 'react-router-dom';
import { ROUTE_PATHS } from 'services/route-paths';

export const useOnGoMainPage = () => {
  const location = useLocation();
  const history = useHistory();

  const onGoMainPage = () => {
    history.push((location.pathname = ROUTE_PATHS._()));
  };

  return onGoMainPage;
};
