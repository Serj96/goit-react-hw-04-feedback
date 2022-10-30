import React, { Component } from 'react';
import Feedback from './Feedback/Feedback';
import Section from './Section/Section';
import Value from './Value/Value';
import Message from './Message/Message';

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
};

Increment = (key) => {
    this.setState(prevState => ({
            [key]: prevState[key] +1,
        }));
};

countTotalFeedback = () => {
  return this.state.good + this.state.neutral + this.state.bad; 

};
countPositiveFeedbackPercentage= () => {
return Math.round((this.state.good / this.countTotalFeedback()) * 100)
};
render(){
  const {good, neutral, bad} = this.state;
  const total = this.countTotalFeedback();
  const countPositiveFeedback = this.countPositiveFeedbackPercentage();
  const options = Object.keys(this.state);
  return (<>
    <Section title="Please leave feedback">
      <Feedback 
      options={options} 
      Increment={this.Increment}/>
      {total > 0 ? ( <Value 
      good={good} 
      neutral={neutral} 
      bad={bad} 
      total={total} 
      countPositiveFeedback={countPositiveFeedback}/> ) 
      :
      ( <Message  
      message="There is no feedback" 
      /> )}
    </Section>
    </>)
};
}

export default App;