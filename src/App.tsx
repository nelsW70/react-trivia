import React, { useState } from 'react';
// components
import QuestionCard from './components/QuestionCard';

const App = () => {
  const [loading, setLoading] = useState(false);
  const startTrivia = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
    <div className="App">
      <h1>REACTQUIZ</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score</p>
      <p>Loading Questions...</p>
      <QuestionCard />
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;

// https://opentdb.com/api.php?amount=10&type=multiple
