import biriyaniOnly from "../../../public/biriyaniOnly.png";
import Chicken from "../../../public/chicken.jpg";
import PythonPos from "../../../public/pythonPos.png";
import mobile from "../../../public/mobileShop.png";
import Port1 from "../../../public/port1.jpg";
import Port2 from "../../../public/port2.png";
import devYard from "../../../public/devYard.png";
import hungryAdmin from "../../../public/hungryAdmin.png";
import hungryClient from "../../../public/hungryClient.png";
import ResPos from "../../../public/resPos.png";
import Image from "next/image";
export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Resturent POS Desktop App",
      description:
        "This Resturent POS Desktop App is a user-friendly interface for Buying foods. It is built using Next.js & Electron.",
      image: ResPos,
      technologies: ["Next.js", "Tailwind CSS","Firebase"],
      techColors: ["bg-sky-600, bg-yellow-500", "bg-red-600", "bg-sky-600"],
    },
    {
      id: 2,
      title: "A company Static Website using Next.js",
      description:
        "This Website is a static website created using Next.js, and Tailwind CSS.",
      image: devYard,
      technologies: ["Next.js", "Tailwind CSS"],
      techColors: ["bg-sky-600, bg-yellow-500", "bg-red-600"],
    },
    {
      id: 3,
      title: "A Food Delivery Website using Next.js & Shadcn UI",
      description:
        "This Food Delivery Website is a user-friendly interface for Buying foods. It is built using Next.js and Shadcn UI.",
      image: hungryClient,
      technologies: ["Next.js", "Tailwind CSS", "Shadcn UI","Firebase","Supabase"],
      techColors: ["bg-sky-600, bg-yellow-600", "bg-pink-600", "bg-sky-600", "bg-yellow-600", "bg-red-600"],
    },
    {
      id: 4,
      title: "Food Ordering Website",
      description:
        "This project is a full-featured e-commerce platform for ordering biriyani, built with Next.js, MongoDB, Firebase, Tailwind CSS, and Google Authentication for login/logout.",
      image: biriyaniOnly,
      technologies: ["React", "Node.js", "Firebase"],
      techColors: ["bg-blue-600", "bg-green-600", "bg-purple-600"],
    },
    {
      id: 5,
      title:
        "Real-Time Chicken Disease Diagnosis via Fecal  Image Analysis and Tamil Folk Medicine  Recommendation Using CNNs",
      description: "",
      image: Chicken,
      technologies: ["Python", "Machine learning"],
      techColors: ["bg-orange-600", "bg-violet-900", "bg-pink-600"],
    },
    {
      id: 6,
      title: "Restaurant Billing System Using Python",
      description:
        "The Restaurant Billing System is a user-friendly desktop application designed to streamline the billing process in restaurants.",
      image: PythonPos,
      technologies: ["Python"],
      techColors: ["bg-orange-600", "bg-violet-900", "bg-pink-600"],
    },
    {
      id: 7,
      title: "E-commerce Website",
      description:
        "This project showcases a fully functional e-commerce website with an emphasis on user experience, robust backend management, and secure data handling.",
      image: mobile,
      technologies: ["React", "MongoDB", "Node.js"],
      techColors: ["bg-pink-600", "bg-blue-600", "bg-green-600"],
    },
    {
      id: 8,
      title: "Personal Portfolio Website",
      description:
        "This project utilizes a combination of modern web development technologies, including React, Bootstrap, HTML, CSS, Git, and Node.js, to deliver a responsive and aesthetically pleasing user experience.",
      image: Port1,
      technologies: ["React", "Bootstrap"],
      techColors: ["bg-emerald-600", "bg-blue-600", "bg-sky-600"],
    },
    {
      id: 9,
      title:
        "A Food Delivery Website Admin Dashboard using Next.js & Shadcn UI",
      description:
        "This Food Delivery Website Admin Dashboard is a user-friendly interface for managing food delivery orders, customers, and restaurants.",
      image: hungryAdmin,
      technologies: ["Next.js", "Tailwind CSS", "Shadcn UI","firebase","supabase"],
      techColors: ["bg-sky-600, bg-yellow-600", "bg-red-600", "bg-blue-600", "bg-sky-600"],
    },
    {
      id: 10,
      title: "Personal Portfolio Website using framer motion",
      description:
        "I developed a Personal Portfolio Website using Framer Motion, a popular library for creating smooth and engaging animations in web applications.",
      image: Port2,
      technologies: ["Framer Motion"],
      techColors: ["bg-sky-600", "bg-yellow-600", "bg-red-600"],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full
            stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-700 hover:border-slate-600"
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                width={500}
                height={300}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-100 mb-3">
                  {project.title}
                </h3>
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
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <i className="fab fa-github"></i> Code
                  </a>
                  {/* <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                    <i className="fas fa-external-link-alt"></i> Demo
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
