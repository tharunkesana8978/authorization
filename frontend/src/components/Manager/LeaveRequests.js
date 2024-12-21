import React, { useEffect, useState } from "react";
import API from "../../utils/api";

const LeaveRequests = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);

  useEffect(() => {
    const fetchLeaveRequests = async () => {
      try {
        const response = await API.get("/manager/leaves");
        setLeaveRequests(response.data.leaveRequests);
      } catch (error) {
        console.error("Error fetching leave requests:", error);
      }
    };
    fetchLeaveRequests();
  }, []);

  const handleAction = async (id, status) => {
    try {
      await API.put(`/manager/leaves/${id}`, { status });
      alert("Leave request updated!");
      setLeaveRequests(leaveRequests.filter((lr) => lr._id !== id));
    } catch (error) {
      console.error("Error updating leave request:", error);
    }
  };

  return (
    <div className="leave-requests">
      <h2>Manage Leave Requests</h2>
      <ul>
        {leaveRequests.map((request) => (
          <li key={request._id}>
            <p>Employee: {request.employee.name}</p>
            <p>Dates: {request.startDate} - {request.endDate}</p>
            <p>Status: {request.status}</p>
            <button onClick={() => handleAction(request._id, "Approved")}>Approve</button>
            <button onClick={() => handleAction(request._id, "Rejected")}>Reject</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeaveRequests;
