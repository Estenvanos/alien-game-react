import PropTypes from 'prop-types';

const CurrentScore = ({score}) => {
  const scoreStyle = {
    fontFamily: '"Permanent Marker", cursive',
    fontSize: 80,
    fill: '#ffffff',
  };

  return (
    <g filter="url(#shadow)">
      <text style={scoreStyle} x="300" y="80">
        {score}
      </text>
    </g>
  );
};

CurrentScore.propTypes = {
  score: PropTypes.number.isRequired,
};

export default CurrentScore;