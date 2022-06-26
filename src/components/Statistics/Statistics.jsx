import {ContainerStatistics, Title, StatList, Item  } from "./Statistics.styled";
import PropTypes from 'prop-types';

function Statistics({title, stats}) {
    return (
        <ContainerStatistics>
  <Title>{title}</Title>

  <StatList >
  {stats.map(stat => <Item key={stat.id}>
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}</span>
    </Item>)} 

  </StatList>
</ContainerStatistics>
    )
}
export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};