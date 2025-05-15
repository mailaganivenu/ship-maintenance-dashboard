// src/pages/ShipDetailPage.jsx
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShipsContext } from '../contexts/ShipsContext';
import { ComponentsContext } from '../contexts/ComponentsContext';
import { JobsContext } from '../contexts/JobsContext';

const ShipDetailPage = () => {
  const { id } = useParams();
  const { ships } = useContext(ShipsContext);
  const { components } = useContext(ComponentsContext);
  const { jobs } = useContext(JobsContext);

  const ship = ships.find((s) => s.id === id);
  const shipComponents = components.filter((c) => c.shipId === id);
  const shipJobs = jobs.filter((j) => j.shipId === id);

  if (!ship) {
    return <div className="p-4 text-red-600">Ship not found.</div>;
  }

  return (
    <div className="container mx-auto p-4 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Ship Profile: {ship.name}</h2>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4">General Information</h3>
        <p><strong>IMO Number:</strong> {ship.imo}</p>
        <p><strong>Flag:</strong> {ship.flag}</p>
        <p><strong>Status:</strong> {ship.status}</p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4">Components</h3>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Serial Number</th>
              <th className="border px-4 py-2">Last Maintenance</th>
            </tr>
          </thead>
          <tbody>
            {shipComponents.map((component) => (
              <tr key={component.id}>
                <td className="border px-4 py-2">{component.name}</td>
                <td className="border px-4 py-2">{component.serialNumber}</td>
                <td className="border px-4 py-2">{component.lastMaintenanceDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Maintenance Jobs</h3>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="border px-4 py-2">Job Type</th>
              <th className="border px-4 py-2">Priority</th>
              <th className="border px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {shipJobs.map((job) => (
              <tr key={job.id}>
                <td className="border px-4 py-2">{job.type}</td>
                <td className="border px-4 py-2">{job.priority}</td>
                <td className="border px-4 py-2">{job.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShipDetailPage;
