"use client";
import { useState } from "react";

export default function FAQ() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h2 className="text-5xl font-bold mb-6">Frequently Asked Questions</h2>
      <p className="max-w-2xl text-lg text-center leading-relaxed mb-6">
        Have questions? Find answers below!
      </p>

      <div className="max-w-lg w-full">
        <Accordion title="Can I camp at Aubfest?" content="No, camping is not available on-site. However, there are nearby campgrounds and hotels available." />
        <Accordion title="Are outside food and drinks allowed?" content="Outside food and beverages are not permitted. Vendors will be available with a variety of options." />
        <Accordion title="Is the festival family-friendly?" content="Yes! Aubfest is open to all ages, but some late-night performances may be recommended for mature audiences." />
        <Accordion title="What happens if it rains?" content="Aubfest will take place rain or shine. Bring a poncho just in case!" />
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
