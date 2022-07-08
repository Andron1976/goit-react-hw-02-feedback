import { Component } from 'react';

import Statistics from './Statistics/Statistics';
import FeedbackOptions from './Options/Options';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  setFeedback = propertyName => {
    this.setState(prevState => {
      return {
        [propertyName]: prevState[propertyName] + 1,
      };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.round(good / (total / 100));
  }

  render() {
    const { good, neutral, bad } = this.state;
    const { setFeedback } = this;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={setFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {!Boolean(total) && (
            <Notification message="There is no feedback"></Notification>
          )}
          {Boolean(total) && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={percentage}
            ></Statistics>
          )}
        </Section>
      </>
    );
  }
}

export default Feedback;