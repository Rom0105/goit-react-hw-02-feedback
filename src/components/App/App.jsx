import React, { Component } from 'react';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const label = event.target.textContent;
    this.setState(prevState => ({ [label]: (prevState[label] += 1) }));
  };

  countTotalFeedback = () => {
    const total = Object.keys(this.state).reduce((acc, value) => acc + this.state[value], 0);

    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const percent = Math.round((this.state.good * 100) / this.countTotalFeedback());

    return percent;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { state,onLeaveFeedback,countTotalFeedback,countPositiveFeedbackPercentage } = this;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={state}
           onLeaveFeedback={onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countTotalFeedback={countTotalFeedback}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          />
        </Section>
      </>
    );
  }
}

export default App;
