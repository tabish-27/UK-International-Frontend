import React, { useState, useEffect } from "react";

const AdminPanel = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
const response = await fetch("https://your-hosted-backend-url.com/api/leads", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) throw new Error("Failed to fetch enquiries");
        const data = await response.json();
        if (data.success) {
          setEnquiries(data.data || []);
        } else {
          throw new Error("Invalid response format");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEnquiries();
  }, []);

  return (
    <div className="p-6 mt-20 bg-gradient-to-b from-[#FDDCEE] to-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-black text-center">
        📋 Admin Panel - Enquiries
      </h1>
      <div className="w-20 h-1 bg-[#F8069D] mx-auto mb-8 rounded"></div>

      {loading && (
        <div className="text-[#F8069D] font-medium text-center">
          Loading enquiries...
        </div>
      )}
      {error && (
        <div className="text-red-600 font-medium text-center">
          Error: {error}
        </div>
      )}

      {!loading && !error && enquiries.length === 0 && (
        <div className="text-gray-500 italic text-center">
          No enquiries found.
        </div>
      )}

      {!loading && !error && enquiries.length > 0 && (
        <div className="overflow-x-auto shadow-lg rounded-xl border border-[#FDDCEE]">
          <table className="w-full bg-white rounded-xl">
            <thead className="bg-[#FDDCEE] text-black">
              <tr>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Phone</th>
                <th className="px-4 py-3 text-left">City</th>
                <th className="px-4 py-3 text-left">Course</th>
                <th className="px-4 py-3 text-left">Source/Button</th>
                <th className="px-4 py-3 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.map((enq) => (
                <tr
                  key={enq._id}
                  className="hover:bg-[#FDDCEE]/40 transition"
                >
                  <td className="px-4 py-2 border">{enq.name}</td>
                  <td className="px-4 py-2 border">{enq.phone}</td>
                  <td className="px-4 py-2 border">{enq.city || "N/A"}</td>
                  <td className="px-4 py-2 border">{enq.course || "N/A"}</td>
                  <td className="px-4 py-2 border">{enq.source || "Unknown"}</td>
                  <td className="px-4 py-2 border">
                    {new Date(enq.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;