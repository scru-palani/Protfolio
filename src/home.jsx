import React, { useState, useEffect } from "react";
import "./App.css";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  User,
  ExternalLink,
  Code,
  Award,
  Briefcase,
  Menu,
  X,
} from "lucide-react";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skills = [
    { name: "React", image: "/react.png", icon: "⚛️" },
    { name: "HTML5", image: "/html.png", icon: "🧡" },
    { name: "CSS", image: "/css.svg", icon: "🔵" },
    { name: "JavaScript", image: "/js.svg", icon: "🟨" },
    { name: "Node.js", image: "/nodejs.svg", icon: "🔷" },
    { name: "Tailwindcss", image: "/tailwind-css-2.svg", icon: "🟢" },
    { name: "MongoDB", image: "/mangodb.png", icon: "🍃" },
    { name: "Git", image: "/git.svg", icon: "🔧" },
    { name: "PHP", image: "/php.svg", icon: "🟣" },
    { name: "Wordpress", image: "/wordpress.svg", icon: "⚡" },
    { name: "Figma", image: "/figma.svg", icon: "🔧" },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      link: "https://sanaecom.netlify.app/",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "Firebase", "Material-UI", "Socket.io"],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      link: "#",
    },
    {
      title: "Event Management System ",
      description:
        "An Event Management System developed using PHP and MySQL is a web-based application that facilitates the planning, eventadd, and management of events through a combination of server-side scripting (PHP) and a relational database management system (MySQL)..",
      tech: ["HTML", "CSS", "JS", "PHP", "MYSQL"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      link: "#",
    },
    {
      title: "Library Management System",
      description:
        "Designing a PHP application for Library Management System backed SQL as the relational database. This will enable the   application to run as a service in the Xampp Web Server..",
      tech: ["HTML", "CSS", "JS", "PHP", "MYSQL"],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      link: "#",
    },
  ];

  const experiences = [
    {
      title: "Developer & Juniour Analyst",
      company: "Scrutiny Soft Solution - Chennai",
      period: "Nov-2024 - Present",
      description:
        "Developed responsive web applications, collaborated with design teams, and implemented modern UI/UX practices.",
    },
    {
      title: "Digital Marketing Internship",
      company: "Fueldigi Marketing Pvt Ltd - Chennai",
      period: "01-Jul-2024 - 30-Sep-2024",
      description:
        "Skilled in SEO optimization, and social media management, with a proven track record of achieving significant increases in website traffic, lead generation, and engagement. Adept at conducting in-depth research and identifying new opportunities to drive digital marketing performance.",
    },
    {
      title: "PHP Developement Project Intership",
      company: "Alagappa University",
      period: "2024",
      description:
        "Lead frontend development team, architected scalable PHP applications, and mentored junior developers.",
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.mobile &&
      formData.email &&
      formData.message
    ) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", mobile: "", email: "", message: "" });
      }, 3000);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-blue bg-opacity-20 backdrop-blur-md z-50 border-b border-white border-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center animate-pulse">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Palanikumar
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                "home",
                "about",
                "skills",
                "projects",
                "experience",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-blue-400 transform hover:scale-105 ${
                    activeSection === item
                      ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                      : "text-gray-300"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-blue-400 transition-colors"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white border-opacity-10">
              <div className="flex flex-col space-y-4">
                {[
                  "home",
                  "about",
                  "skills",
                  "projects",
                  "experience",
                  "contact",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`text-left text-sm font-medium transition-all duration-300 hover:text-blue-400 ${
                      activeSection === item ? "text-blue-400" : "text-gray-300"
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Profile Photo */}
            <div className="flex justify-center lg:justify-start animate-fade-in-left">
              <div className="relative">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 animate-bounce">
                  <img
                    src=""
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full animate-bounce"></div>
              </div>
            </div>

            {/* Right side - Name and Title */}
            <div className="text-center lg:text-right animate-fade-in-right">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
                Palani{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Kumar
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-8 animate-pulse">
                Developer, Digital Brand Strategist
              </h2>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-end space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                  Download CV
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="border border-white border-opacity-20 text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black bg-opacity-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              I am a skilled professional with over 1 year of experience in
              React and PHP development, along with expertise as a Digital Brand
              Strategist and Graphic Designer. I build dynamic, user-centric web
              applications, solve real-world problems with clean code, and
              design engaging digital experiences that align with brand goals.
              With a strong foundation in full-stack development and creative
              strategy, I thrive in collaborative, fast-paced environments where
              innovation meets impact. My passion lies in turning complex
              challenges into intuitive, functional, and visually appealing
              solutions that drive growth for both businesses and users.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="text-center group animate-fade-in-up hover:transform hover:scale-110 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black bg-opacity-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-gradient-to-r from-blue-700 to-purple-800 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 animate-fade-in-up group shadow-lg hover:shadow-2xl hover:shadow-blue-500/10"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black from-opacity-60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500 bg-opacity-20 text-white-100 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => window.open(project.link, "_blank")}
                    className="flex items-center text-blue-100 hover:text-blue-400 transition-colors font-medium"
                  >
                    View Project <ExternalLink className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className="relative pl-8 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
                <div className="absolute left-2 top-4 w-0.5 h-full bg-gradient-to-b from-blue-500 to-transparent opacity-50"></div>
                <div className="bg-gradient-to-r from-blue-700 to-purple-800 backdrop-blur-sm rounded-xl p-6 hover:bg-white hover:bg-opacity-10 transition-all duration-300 transform hover:translate-x-2 hover:shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <span className="text-blue-400 font-semibold">
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-purple-300 font-semibold mb-2">
                    {exp.company}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black bg-opacity-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>
          <div className="max-w-2xl mx-auto">
            {!isSubmitted ? (
              <div className="space-y-6 animate-fade-in-up">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gradient-to-r from-blue-700 to-purple-800 placeholder-white border border-white border-opacity-20 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:bg-opacity-20 transition-all duration-300"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Mobile Number"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gradient-to-r from-blue-700 to-purple-800 placeholder-white border border-white border-opacity-20 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:bg-opacity-20 transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gradient-to-r from-blue-700 to-purple-800 placeholder-white border border-white border-opacity-20 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:bg-opacity-20 transition-all duration-300"
                  />
                </div>
                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="6"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gradient-to-r from-blue-700 to-purple-800 placeholder-white border border-white border-opacity-20 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:bg-opacity-20 transition-all duration-300 resize-none"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    onClick={handleSubmit}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 font-semibold"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center animate-bounce">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-gray-300">
                  Your message has been sent successfully. I'll get back to you
                  soon!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer with Social Media */}
      <footer className="py-8 border-t border-white border-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 Palani Kumar. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes ping {
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: none;
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Home;
