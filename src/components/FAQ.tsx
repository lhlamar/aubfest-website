"use client";
import { useState } from "react";

export default function FAQ() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-background text-primary p-6">
      <h2 className="text-5xl font-bold mb-6">Frequently Asked Questions</h2>
      <p className="max-w-2xl text-lg text-center leading-relaxed mb-6">
        Have questions? Find answers below!
      </p>

      <div className="max-w-lg w-full">
        <Accordion title="Can I camp at Aubfest?" content="Yes, camping is available at Boggin'!" />
        <Accordion title="Are outside food and drinks allowed?" content="Yes, but no glass at all. There will also be a concession style food verndor there." />
        <Accordion title="Is the festival family-friendly?" content="Yes!" />
        <Accordion title="What happens if it rains?" content="Placeholder" />
      </div>
    </div>
  );
}

/* Reusable Accordion Component */
function Accordion({ title, content }: { title: string; content: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left text-lg font-semibold flex justify-between items-center"
      >
        {title}
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && <p className="mt-2 text-gray-300">{content}</p>}
    </div>
  );
}
