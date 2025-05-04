import React from 'react';

const projects = [
  {
    title: "E-Commerce Website",
    description: "A full-featured e-commerce platform with secure payment gateway integration.",
    imageUrl: "https://via.placeholder.com/600x400", // Replace with real image
    link: "https://foreverbuy.in"
  },
  {
    title: "Chat App (MERN + Socket.io)",
    description: "Real-time chat application using MongoDB, Express, React, Node.js, and Socket.io.",
    imageUrl: "https://via.placeholder.com/600x400", // Replace with real image
    link: "https://yourchatapp.com"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React showcasing my projects and skills.",
    imageUrl: "https://via.placeholder.com/600x400", // Replace with real image
    link: "https://yourportfolio.com"
  }
];

const Cards = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6">
      {projects.map((project, index) => (
        <div 
          key={index} 
          className="backdrop-blur-3xl bg-slate-900/10 border border-white/20 rounded-2xl shadow-lg overflow-hidden transition hover:shadow-2xl"
        >
          <img
            className="w-full h-48 object-cover"
            src={project.imageUrl}
            alt={project.title}
          />
          <div className="p-5">
            <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
            <p className="text-white/80 text-sm mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white/20 text-white px-4 py-2 rounded hover:bg-white/30 transition"
            >
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
