import { useState } from 'react';
import Feedback from './Feedback/Feedback';
import Section from './Section/Section';
import Value from './Value/Value';
import Message from './Message/Message';

export default function App() {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increment = buttonTitle => {
    switch (buttonTitle) {
      case 'good':
        setGood(good => good + 1);
        break;

      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;

      case 'bad':
        setBad(bad => bad + 1);
        break;

      default:
        throw new Error('Not supported type');
    }
  };

  // const resetFeedback = () => {
  //   setGood(0);
  //   setNeutral(0);
  //   setBad(0);
  // };

  const total = good + neutral + bad;
  const positiveFeedbackPercentage = (good / total) * 100;
  const options = Object.keys({ good, neutral, bad });
  return (
    <Section title="Please leave feedback">
      <Feedback
        options={options}
        increment={increment}
      />
      {total > 0 ? (
        <Value
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positiveFeedbackPercentage={positiveFeedbackPercentage}
        />
      ) : (
        <Message message="There is no feedback" />
      )}
    </Section>
  );
}
