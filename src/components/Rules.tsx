export default function Rules() {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-background text-primary p-6">
        <h2 className="text-5xl font-bold mb-6">Festival Rules</h2>
        <p className="max-w-2xl text-lg text-center leading-relaxed mb-6">
          To ensure a fun and safe experience for everyone, please follow these guidelines.
        </p>
  
        {/* Rules List */}
        <ul className="max-w-lg text-lg list-disc text-left space-y-3">
          <li>No glass bottles allowed.</li>
          <li>Respect Boggin' folk.</li>
          <li>Placeholder</li>
        </ul>
      </div>
    );
  }
  