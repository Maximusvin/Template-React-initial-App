import PropTypes from 'prop-types';
import { Btn } from './Button.style';

const Button = ({ children, onClick }) => (
  <Btn onClick={onClick}>{children}</Btn>
);

Button.defaultProps = {
  children: '',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
