import propTypes from 'prop-types';
import { StatisticNumber, StatisticText } from './Statistics.styled';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StatisticText>
        Good: <StatisticNumber>{good}</StatisticNumber>
      </StatisticText>
      <StatisticText>
        Neutral: <StatisticNumber>{neutral}</StatisticNumber>
      </StatisticText>
      <StatisticText>
        Bad: <StatisticNumber>{bad}</StatisticNumber>
      </StatisticText>

      <StatisticText>
        Total: <StatisticNumber>{total}</StatisticNumber>
      </StatisticText>
      <StatisticText>
        Positive feedback:{' '}
        <StatisticNumber>{positivePercentage}%</StatisticNumber>
      </StatisticText>
    </>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};
