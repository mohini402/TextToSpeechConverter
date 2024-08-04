import './App.css';
import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit'; //hook for speech

function App() {
  const [inputText, setInputText] = useState('');
  const [voiceIndex, setVoiceIndex] = useState(null);
  const [rate, setRate]=useState(0.1);
  const { speak, voices } = useSpeechSynthesis();

  // Function to handle the speak action
  function handleSpeak() {
    const voice = voices[voiceIndex] || null;
    speak({ text: inputText, rate: rate, voice });
  }

  // Return JSX
  return (
    <div className="App">
      <h1>Text To Speech Converter</h1>
      <textarea
        cols="80"
        rows="20"
        placeholder="Enter The Text"
        onChange={(e) => setInputText(e.target.value)}
      ></textarea><br />

      <select onChange={(e) => setVoiceIndex(e.target.value)} value={voiceIndex || ''}>
        <option value="">default</option>
        {voices.map((item, index) => (
          <option key={item.name} value={index}>
            {item.name}
          </option>
        ))}
      </select>

      <div id='slider'>
        <input type='range' min='0.1' max='1' step='0.01' value={rate} onChange={(e)=>setRate(e.target.value)}/>
      </div>
      <h3>Current Speech Rate is {rate}</h3>
      <button id='btn' onClick={handleSpeak}>Speech</button>
    </div>
  );
}

export default App;
