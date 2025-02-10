export default function Schedule() {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-background text-text_primary  p-6">
        <h2 className="text-5xl font-bold mb-6">Festival Schedule</h2>
        <p className="max-w-2xl text-lg text-center leading-relaxed mb-6">
          Check out the events happening at Aubfest! More details will be announced soon.
        </p>
        
        {/* Placeholder Schedule Table */}
        <div className="bg-background p-6 rounded-lg shadow-lg">
          <table className="text-left w-full border-collapse">
            <thead>
              <tr className="text-accent">
                <th className="p-2 border-b border-gray-600">Time</th>
                <th className="p-2 border-b border-gray-600">Event</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-b border-gray-600">8:00 AM</td>
                <td className="p-2 border-b border-gray-600">Opening</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-gray-600">1:30 PM</td>
                <td className="p-2 border-b border-gray-600">Placeholder</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-gray-600">3:00 PM</td>
                <td className="p-2 border-b border-gray-600">Placeholder</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-gray-600">5:00 PM</td>
                <td className="p-2 border-b border-gray-600">Placeholder</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  