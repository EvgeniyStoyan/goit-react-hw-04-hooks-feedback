import React, { useState } from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickGood = () => {
    setGood(prevState => prevState + 1);
  };

  const onClickNeutral = () => {
    setNeutral(prevState => prevState + 1);
  };
  const onClickBad = () => {
    setBad(prevState => prevState + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };

  return (
    <div>
      <Section>
        <FeedbackOptions
          title="Please leave feedback"
          onClickGood={onClickGood}
          onClickNeutral={onClickNeutral}
          onClickBad={onClickBad}
        />

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
}

// class oldApp extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onClickGood = () => {
//     this.setState(prevState => ({
//       good: prevState.good + 1,
//     }));
//   };

//   onClickNeutral = () => {
//     this.setState(prevState => ({
//       neutral: prevState.neutral + 1,
//     }));
//   };

//   onClickBad = () => {
//     this.setState(prevState => ({
//       bad: prevState.bad + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback();
//     return Math.round((this.state.good * 100) / total);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();
//     const { onClickGood, onClickNeutral, onClickBad } = this;
//     return (
//       <div>
//         <Section>
//           <FeedbackOptions
//             title="Please leave feedback"
//             onClickGood={onClickGood}
//             onClickNeutral={onClickNeutral}
//             onClickBad={onClickBad}
//           />

//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={total}
//             positivePercentage={positivePercentage}
//           />
//         </Section>
//       </div>
//     );
//   }
// }
