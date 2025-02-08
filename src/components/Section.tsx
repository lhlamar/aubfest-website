type SectionProps = {
    title: string;
    content: string;
  };
  
  export default function Section({ title, content }: SectionProps) {
    return (
      <section className="section bg-gray-800">
        <h2 className="text-3xl font-bold text-blue-400">{title}</h2>
        <p className="mt-2 text-lg">{content}</p>
      </section>
    );
  }
  