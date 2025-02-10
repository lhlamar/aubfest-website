export default function Location() {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-background text-text_primary p-6">
        <h2 className="text-5xl font-bold mb-6">Where is Aubfest?</h2>
        <p className="max-w-2xl text-lg text-center leading-relaxed mb-6">
          Aubfest is located at Boggin' On The Plains in Auburn, AL.
          <br/> You can use this link to find it!
        </p>
        <a
          href="https://www.google.com/maps?q=Downtown+Auburn+AL"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-background_dark rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-600 transition"
        >
          Open in Google Maps
        </a>
      </div>
    );
  }
  