import css from './feedbackOptions.module.css';
import PropTypes from 'prop-types';


export default function FeedbackOptions({ options, onLeaveFeedback }) {


    return (
        <>
            {options.map((option, index) => (
                <button
                    key={index}
                    type="button"
                    className={css.button}
                    onClick={onLeaveFeedback}
                >
                    {firstCaps(option)}
                </button>
            ))}
        </>
    );
}

const firstCaps = string =>
string[0].toLowerCase() + string.substring(1);


FeedbackOptions.propTypes = {
    option: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
};