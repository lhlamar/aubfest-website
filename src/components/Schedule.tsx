export default function Schedule() {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gray-700 text-white p-6">
        <h2 className="text-5xl font-bold mb-6">Festival Schedule</h2>
        <p className="max-w-2xl text-lg text-center leading-relaxed mb-6">
          Check out the events happening at Aubfest! More details will be announced soon.
        </p>
        
        {/* Placeholder Schedule Table */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <table className="text-left w-full border-collapse">
            <thead>
              <tr className="text-blue-400">
                <th className="p-2 border-b border-gray-600">Time</th>
                <th className="p-2 border-b border-gray-600">Event</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-b border-gray-600">12:00 PM</td>
                <td className="p-2 border-b border-gray-600">Opening Ceremony</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-gray-600">1:30 PM</td>
                <td className="p-2 border-b border-gray-600">Live Performance - Artist 1</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-gray-600">3:00 PM</td>
                <td className="p-2 border-b border-gray-600">Vendor Village Opens</td>
              </tr>
              <tr>
                <td className="p-2 border-b border-gray-600">5:00 PM</td>
                <td className="p-2 border-b border-gray-600">Main Stage - Artist 2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  