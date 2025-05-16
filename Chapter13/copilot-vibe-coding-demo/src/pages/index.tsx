import React from 'react';
import Head from 'next/head';
import FeatureCard from '../components/FeatureCard';

export default function Home() {
  return (
    <>
      <Head>
        <title>Copilot Vibe Demo</title>
      </Head>
      <main className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-4xl font-bold mb-6 text-center">Copilot Vibe Coding Playground</h1>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            title="UI from Figma"
            description="Generate Tailwind UI components from design screenshots using GPT-4o."
          />
          <FeatureCard
            title="Diagram to Code"
            description="Convert Mermaid diagrams into logic flow using Copilot's multi-modal power."
          />
          <FeatureCard
            title="Voice-to-Code"
            description="Speak your intent and Copilot builds the component logic in real-time."
          />
        </section>
      </main>
    </>
  );
}
