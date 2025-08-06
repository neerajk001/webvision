import React from 'react';

const teamMembers = [
  {
    name: 'dheeraj prajapati',
    role: 'react developer',
    experience: '7+ month experience',
  },
  {
    name: 'dheeraj prajapati',
    role: 'react developer',
    experience: '7+ month experience',
  },
  {
    name: 'dheeraj prajapati',
    role: 'react developer',
    experience: '7+ month experience',
  },
];

const TeamSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">our Awesome Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-md shadow-md p-6 flex flex-col items-center"
            >
              {/* Placeholder avatar */}
              <div className="w-32 h-32 rounded-full bg-gray-300 mb-4 border-1 border-black">
                {/* Replace with actual <img src={...} /> or Avatar component */}
              </div>
              <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                {member.name}
              </span>
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md text-sm font-semibold">
                <p>{member.role}</p>
                <p className="text-xs mt-1">{member.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
