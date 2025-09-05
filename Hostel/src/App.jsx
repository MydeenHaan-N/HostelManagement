import React, { useState } from "react";

export default function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const addStudent = () => {
    if (!name || !room) return;
    setStudents([...students, { id: Date.now(), name, room }]);
    setName("");
    setRoom("");
  };

  const removeStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Hostel Management System</h1>
        
        {/* Add Student Form */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Room Number"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addStudent}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>

        {/* Student List */}
        <div>
          {students.length === 0 ? (
            <p className="text-center text-gray-500">No students added yet.</p>
          ) : (
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border px-4 py-2">Name</th>
                  <th className="border px-4 py-2">Room</th>
                  <th className="border px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s) => (
                  <tr key={s.id} className="text-center">
                    <td className="border px-4 py-2">{s.name}</td>
                    <td className="border px-4 py-2">{s.room}</td>
                    <td className="border px-4 py-2">
                      <button
                        onClick={() => removeStudent(s.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
