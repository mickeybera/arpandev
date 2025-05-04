import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from 'react-icons/fa';

const About = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 text-white">
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text">
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Text Content */}
        <div>
          <p className="text-lg text-white/80 leading-relaxed">
            Hello! I'm a passionate and detail-oriented full-stack developer with a focus on building responsive, user-friendly web applications.
            I specialize in technologies like <span className="font-semibold text-white">React</span>, <span className="font-semibold text-white">Node.js</span>, <span className="font-semibold text-white">MongoDB</span>, and <span className="font-semibold text-white">Tailwind CSS</span>.
            My goal is to create meaningful digital experiences that are both aesthetically pleasing and technically robust.
          </p>

          <p className="text-lg text-white/80 leading-relaxed mt-4">
            I've built projects ranging from a modern e-commerce platform with secure payment integration, to a real-time chat app using Socket.io, and even this portfolio site you're viewing now!
            I'm always exploring new tools and best practices, and I love collaborating on exciting ideas.
          </p>

          <p className="text-lg text-white/80 leading-relaxed mt-4">
            When I'm not coding, you’ll find me experimenting with UI animations, learning about backend scaling, or contributing to open-source.
            Let’s connect and create something awesome together!
          </p>

          {/* Education */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-white mb-2">Education</h3>
            <p className="text-white/80">
              I’m currently in my <span className="font-semibold text-white">3rd year</span> at the <span className="font-semibold text-white">Government College of Engineering and Leather Technology (GCELT)</span>, Kolkata.
            </p>
          </div>
        </div>

        {/* College Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg backdrop-blur-xl bg-white/10 border border-white/20">
          <img
            src="https://www.credenc.com/images/colleges/government-college-of-engineering-and-leather-technology-gcelt-saltlake.jpg"
            alt="Government College of Engineering and Leather Technology (GCELT)"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold text-white mb-4">Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
          {/* React */}
          <div className="flex flex-col items-center transform transition duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-400/40 hover:cursor-pointer">
            <FaReact className="text-6xl text-cyan-400 mb-2" />
            <p className="text-white/80">React.js</p>
          </div>

          {/* Node.js */}
          <div className="flex flex-col items-center transform transition duration-300 hover:scale-110 hover:shadow-lg hover:shadow-green-400/40 hover:cursor-pointer">
            <FaNodeJs className="text-6xl text-green-500 mb-2" />
            <p className="text-white/80">Node.js</p>
          </div>

          {/* MongoDB */}
          <div className="flex flex-col items-center transform transition duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-400/40 hover:cursor-pointer">
            <FaDatabase className="text-6xl text-emerald-400 mb-2" />
            <p className="text-white/80">MongoDB</p>
          </div>

          {/* Tailwind CSS */}
          <div className="flex flex-col items-center transform transition duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-400/40 hover:cursor-pointer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
              alt="Tailwind CSS"
              className="w-16 h-16 mb-2"
            />
            <p className="text-white/80">Tailwind CSS</p>
          </div>

          {/* Python */}
          <div className="flex flex-col items-center transform transition duration-300 hover:scale-110 hover:shadow-lg hover:shadow-yellow-400/40 hover:cursor-pointer">
            <FaPython className="text-6xl text-yellow-300 mb-2" />
            <p className="text-white/80">Python</p>
          </div>

          {/* HTML5 */}
          <div className="flex flex-col items-center transform transition duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-400/40 hover:cursor-pointer">
            <FaHtml5 className="text-6xl text-orange-500 mb-2" />
            <p className="text-white/80">HTML5</p>
          </div>

          {/* CSS3 */}
          <div className="flex flex-col items-center transform transition duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-400/40 hover:cursor-pointer">
            <FaCss3Alt className="text-6xl text-blue-500 mb-2" />
            <p className="text-white/80">CSS3</p>
          </div>

          {/* JavaScript */}
          <div className="flex flex-col items-center transform transition duration-300 hover:scale-110 hover:shadow-lg hover:shadow-yellow-300/40 hover:cursor-pointer">
            <FaJsSquare className="text-6xl text-yellow-300 mb-2" />
            <p className="text-white/80">JavaScript</p>
          </div>

          {/* Express.js */}
          <div className="flex flex-col items-center transform transition duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gray-400/40 hover:cursor-pointer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
              alt="Express.js"
              className="w-16 h-16 object-contain mb-2"
            />
            <p className="text-white/80">Express.js</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
