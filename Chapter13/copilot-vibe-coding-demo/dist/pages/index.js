import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Head from 'next/head';
import FeatureCard from '../components/FeatureCard';
export default function Home() {
    return (_jsxs(_Fragment, { children: [_jsx(Head, { children: _jsx("title", { children: "Copilot Vibe Demo" }) }), _jsxs("main", { className: "min-h-screen bg-gray-100 p-8", children: [_jsx("h1", { className: "text-4xl font-bold mb-6 text-center", children: "Copilot Vibe Coding Playground" }), _jsxs("section", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [_jsx(FeatureCard, { title: "UI from Figma", description: "Generate Tailwind UI components from design screenshots using GPT-4o." }), _jsx(FeatureCard, { title: "Diagram to Code", description: "Convert Mermaid diagrams into logic flow using Copilot's multi-modal power." }), _jsx(FeatureCard, { title: "Voice-to-Code", description: "Speak your intent and Copilot builds the component logic in real-time." })] })] })] }));
}
