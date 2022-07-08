import PropTypes from 'prop-types';

import style from '../Feedback.module.css';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const item = <ul className={style.wrap}>
      {options.map(el => (
    <li>
      <button onClick={() => onLeaveFeedback(`${el}`)} className={style.btn}>
        {capitalizeFirstLetter(el)}
      </button>
    </li>
)
)}
</ul>;
  return item;
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    })
  ),
  onLeaveFeedback: PropTypes.func.isRequired,
};