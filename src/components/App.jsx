import { useState } from "react";
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from "components/Statistics/Statistics"; 
import Notification from 'components/Notification/Notification';



export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

    const feedback = { good, neutral, bad };
    const buttons = Object.keys(feedback);
    const total = Object.values(feedback).reduce((total, number) => total + number);

  const countPositiveFeedback = () => {
    return Math.round((good / (good + neutral + bad)) * 100);
  };

  const onСheckFeedback = e => {
    e.preventDefault();
    const elem = e.target.innerText.toLowerCase();
    switch (elem) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

        case 'neutral':
          setNeutral(prevState => prevState + 1);
          break;

          case 'bad':
            setBad(prevState => prevState + 1);
            break;

            default:
              return;
    }
  };

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions options={buttons} onLeaveFeedback={onСheckFeedback} />
        <h2>Statistics</h2>
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedback()}
          />
        ) : (
          <Notification
            message="There is no feedback"
            text={'No feedback'}
          />
        )}
      </Section>
    );
  }
