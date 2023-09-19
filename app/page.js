"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import TextField from './components/textfield';
import Button from './components/button';
import SecondaryButton from './components/secondaryButton';
import Layout from './layout';
import Link from 'next/link';
import { rows } from './api/rows';

export default function Home() {
  const [randomRow, setRandomRow] = useState(rows[Math.floor(Math.random() * rows.length)]);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const checkTranslation = () => {
    if (userInput.toLowerCase() === randomRow.english.toLowerCase()) {
      setFeedback('Correct!'); // Display positive feedback
    } else {
      setFeedback('Incorrect. Try again.'); // Display negative feedback
    }
  };

  const generateNewRandomRow = () => {
    setUserInput('');
    setFeedback('');
    setRandomRow(rows[Math.floor(Math.random() * rows.length)]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center md:mx-24">
      <div className="lg:w-1/2 pt-48">
        <div className="justify-center">
          <h1 className="text-3xl font-semibold pb-8">🚀 Ale's Amazing Translation App</h1>
          <TextField
            className="m-16"
            value={randomRow.norwegian}
          />
          <TextField
            placeholder="Your answer"
            value={userInput}
            onChange={handleUserInput}
          />
          <Button label="Check" onClick={checkTranslation} />
          {feedback && <p className={feedback === 'Correct!' ? 'text-green-500' : 'text-red-500'}>{feedback}</p>}
          <SecondaryButton label="New Word" onClick={generateNewRandomRow} />
        </div>
      </div>
    </main>
  );
}
