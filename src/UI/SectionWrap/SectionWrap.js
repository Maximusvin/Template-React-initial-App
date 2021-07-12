import PropTypes from 'prop-types';
import { Section, Title } from './SectionWrap.style';

const SectionWrap = ({ title, children }) => (
  <Section>
    {title && <Title>{title}</Title>}
    {children}
  </Section>
);

SectionWrap.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SectionWrap;
