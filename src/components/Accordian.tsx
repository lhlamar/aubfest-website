import { useState } from "react";

export default function Accordion({ title, content }: { title: string; content: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b py-4">
      <button onClick={() => setIsOpen(!isOpen)} className="text-lg font-bold">
        {title} {isOpen ? "▲" : "▼"}
      </button>
      {isOpen && <p className="mt-2">{content}</p>}
    </div>
  );
}
