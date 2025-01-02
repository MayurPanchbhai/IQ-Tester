import { createContext, useContext, useState } from 'react';

export const Questions = createContext("");



export const MyQuestions =({children})=> {
    const [counter , setConter] = useState(0);
    const age=8;
    const [score , setScore] = useState(0);

    function updateCounter(){
      if(counter < quiz.length-1){
        setConter(counter+1);
      }
      
    }

    function updateScore(){
      setScore(score+1);
    }


    const quiz = [
        {
          question: "What comes next in the series: 2, 4, 8, 16, ?",
          options: [30, 32, 64, 128],
          correctAnswer: 32
        },
        {
          question: "Which number is the odd one out: 5, 9, 11, 15, 17",
          options: [5, 9, 11, 17],
          correctAnswer: 15
        },
        {
          question: "If all roses are flowers, and some flowers fade quickly, can we say that all roses fade quickly?",
          options: ["Yes", "No", "Can't be determined", "Always true"],
          correctAnswer: "Can't be determined"
        },
        {
          question: "What is the next number in the series: 1, 1, 2, 3, 5, ?",
          options: [6, 7, 8, 9],
          correctAnswer: 8
        },
        {
          question: "What is the capital of France?",
          options: ["Berlin", "Madrid", "Paris", "Rome"],
          correctAnswer: "Paris"
        },
        {
          question: "Which number completes the pattern: 3, 9, 27, ?",
          options: [81, 54, 72, 64],
          correctAnswer: 81
        },
        {
          question: "Which word is the odd one out: 'Cat', 'Dog', 'Apple', 'Lion'",
          options: ["Cat", "Dog", "Apple", "Lion"],
          correctAnswer: "Apple"
        },
        {
          question: "Which number is next in the series: 11, 14, 17, 20, ?",
          options: [23, 25, 24, 22],
          correctAnswer: 23
        },
        {
          question: "What is 18 ÷ 3?",
          options: [4, 5, 6, 7],
          correctAnswer: 6
        },
        {
          question: "What comes next: J, F, M, A, M, ?",
          options: ["J", "E", "F", "M"],
          correctAnswer: "J"
        },
        {
          question: "Which of the following is an anagram of 'listen'?",
          options: ["silent", "slent", "sentil", "slint"],
          correctAnswer: "silent"
        },
        {
          question: "Which number is missing in the sequence: 3, 6, 9, __, 15, 18?",
          options: [12, 10, 11, 13],
          correctAnswer: 12
        },
        {
          question: "Which word is the opposite of 'truth'?",
          options: ["Lie", "Fact", "Deception", "Real"],
          correctAnswer: "Lie"
        },
        {
          question: "How many sides does a triangle have?",
          options: [2, 3, 4, 5],
          correctAnswer: 3
        },
        {
          question: "If a train travels at 60 miles per hour, how far will it travel in 2 hours?",
          options: ["120 miles", "100 miles", "80 miles", "150 miles"],
          correctAnswer: 120
        },
        {
          question: "Which number is a prime number: 6, 7, 9, 10?",
          options: [6, 7, 9, 10],
          correctAnswer: 7
        },
        {
          question: "Which number is missing: 2, 5, 10, 17, ?",
          options: [24, 26, 28, 22],
          correctAnswer: 26
        },
        {
          question: "What is the area of a square with side length 4?",
          options: [16, 12, 18, 14],
          correctAnswer:16
        },
        {
          question: "Which of the following is the largest: 1/2, 1/4, 1/3, 1/5?",
          options: ["1/2", "1/4", "1/3", "1/5"],
          correctAnswer: "1/2"
        },
        {
          question: "If two pencils cost $1.20, how much does one pencil cost?",
          options: ["$0.50", "$0.60", "$0.80", "$0.90"],
          correctAnswer: "$0.60"
        },
        {
          question: "If all dogs have tails, and Spot is a dog, does Spot have a tail?",
          options: ["Yes", "No", "Not enough information", "Always true"],
          correctAnswer: "Yes"
        },
      ];
    return (
        <Questions.Provider value={{counter,updateCounter,score,updateScore , age , quiz}}>
            {children}
        </Questions.Provider>
    )
} 