import StatisticsLine from "./StatisticLine";
const Statistics = (props) => {
  const { good, neutral, bad, total, average, pourcentagePositive } = props;

  if (total === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticsLine text="Good" value={good} />
          <StatisticsLine text="Neutral" value={neutral} />
          <StatisticsLine text="Bad" value={bad} />
          <StatisticsLine text="Total" value={total} />
          <StatisticsLine text="Average" value={average} />
          <StatisticsLine text="Positive" value={pourcentagePositive} />
        </tbody>
      </table>
    </div>
  );
};
export default Statistics;
