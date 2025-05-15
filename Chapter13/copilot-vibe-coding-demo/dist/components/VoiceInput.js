import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const VoiceInput = () => {
    const [transcript, setTranscript] = useState('');
    const [isRecording, setIsRecording] = useState(false);
    const startRecording = async () => {
        setIsRecording(true);
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
        recognition.onresult = (event) => {
            const result = event.results[0][0].transcript;
            setTranscript(result);
            setIsRecording(false);
        };
        recognition.onerror = (event) => {
            console.error('Speech recognition error:', event);
            setIsRecording(false);
        };
        recognition.start();
    };
    return (_jsxs("div", { className: "bg-white p-4 shadow-md rounded-lg mt-6", children: [_jsx("h2", { className: "text-lg font-bold mb-2", children: "Voice to Code" }), _jsx("button", { className: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700", onClick: startRecording, disabled: isRecording, children: isRecording ? 'Listening...' : 'Start Voice Input' }), transcript && (_jsxs("p", { className: "mt-4 text-gray-800", children: [_jsx("strong", { children: "Transcript:" }), " ", transcript] }))] }));
};
export default VoiceInput;
