import React, { useState } from 'react';

// Define SpeechRecognition and SpeechRecognitionEvent types
interface SpeechRecognition {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  start(): void;
  stop(): void;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: ((event: Event) => void) | null;
}

interface SpeechRecognitionEvent {
  results: {
    [key: number]: {
      [key: number]: {
        transcript: string;
      };
    };
  };
}

// Extend the Window interface to include SpeechRecognition types
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

const VoiceInput: React.FC = () => {
  const [transcript, setTranscript] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = async () => {
    setIsRecording(true);
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const result = event.results[0][0].transcript;
      setTranscript(result);
      setIsRecording(false);
    };

    recognition.onerror = (event: Event) => {
      console.error('Speech recognition error:', event);
      setIsRecording(false);
    };

    recognition.start();
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg mt-6">
      <h2 className="text-lg font-bold mb-2">Voice to Code</h2>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={startRecording}
        disabled={isRecording}
      >
        {isRecording ? 'Listening...' : 'Start Voice Input'}
      </button>
      {transcript && (
        <p className="mt-4 text-gray-800"><strong>Transcript:</strong> {transcript}</p>
      )}
    </div>
  );
};

export default VoiceInput;
