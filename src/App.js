import React, { useState } from "react";
import './App.css'
import Question from "./Question";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus", "Jupiter"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the capital of Japan?",
    options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
    correctAnswer: "Tokyo",
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: "Carbon Dioxide",
  },
  {
    question: "What is the largest mammal on Earth?",
    options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale",
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // This is the final question, set quizCompleted to true
      setQuizCompleted(true);
    }
  };

  return (
    <div className="App">
      <h1>MCQ Game App</h1>
      {quizCompleted ? (
        <>
        <h2 style={{color:'teal'}}>Your Score: {score} out of {questions.length}</h2>
        <a className="btn btn-primary" href="/">Retake test</a></>
      ) : (
        <div>
          <h5 className="mt-5">Question {currentQuestion + 1}</h5>
          <Question
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            handleAnswer={handleAnswer}
          />
        </div>
      )}
    </div>
  );
}

export default App;