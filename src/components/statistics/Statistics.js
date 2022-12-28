import PropTypes from 'prop-types';
import { Section, Title, StatList, Item } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section className="statistics">
      {title && <Title className="title">{title}</Title>}

      <StatList className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <Item
            style={{ backgroundColor: getRandomHexColor() }}
            className="item"
            key={id}
          >
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
          </Item>
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
// ДЗ 6 по JS
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}