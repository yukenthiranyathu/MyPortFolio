import biriyaniOnly from "../../../public/biriyaniOnly.png";
export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Food Ordering Website",
      description: "This project is a full-featured e-commerce platform for ordering biriyani, built with Next.js, MongoDB, Firebase, Tailwind CSS, and Google Authentication for login/logout.",
      image: biriyaniOnly,
      technologies: ["React", "Node.js", "Firebase"],
      techColors: ["bg-blue-600", "bg-green-600", "bg-purple-600"]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      technologies: ["Next.js", "Socket.io", "MongoDB"],
      techColors: ["bg-cyan-600", "bg-yellow-600", "bg-red-600"]
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "A comprehensive analytics dashboard with interactive charts, real-time data visualization, and customizable reporting features.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      technologies: ["Vue.js", "Python", "D3.js"],
      techColors: ["bg-indigo-600", "bg-orange-600", "bg-teal-600"]
    },
    {
      id: 4,
      title: "Social Media Platform",
      description: "A full-featured social media platform with user profiles, posts, messaging, and real-time notifications.",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      technologies: ["React Native", "GraphQL", "Express"],
      techColors: ["bg-pink-600", "bg-blue-600", "bg-green-600"]
    },
    {
      id: 5,
      title: "Learning Management System",
      description: "An educational platform with course creation, student progress tracking, and interactive learning materials.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      technologies: ["Django", "React", "SQLite"],
      techColors: ["bg-emerald-600", "bg-blue-600", "bg-gray-600"]
    },
    {
      id: 6,
      title: "Weather Forecast App",
      description: "A responsive weather application with location-based forecasts, interactive maps, and weather alerts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      technologies: ["Flutter", "Firebase", "API Integration"],
      techColors: ["bg-sky-600", "bg-orange-600", "bg-green-600"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full stack development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-slate-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-700 hover:border-slate-600">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-100 mb-3">{project.title}</h3>
                <p className="text-slate-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={tech}
                      className={`px-3 py-1 text-xs text-white rounded-full ${project.techColors[index]}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                    <i className="fab fa-github"></i> Code
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                    <i className="fas fa-external-link-alt"></i> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
