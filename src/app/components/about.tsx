'use client'
import profile from "../../../public/profile.png"
import Image from "next/image"


export default function About() {
  const handleNavClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image 
              src={profile}
              alt="Professional developer portrait" 
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:mx-0"
              width={500}
              height={500}
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-100">Full Stack Developer</h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              {"I'm a passionate full stack developer with expertise in modern web technologies.I love creating efficient, scalable, and user-friendly applications that solve real-world problems."}
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              {"With experience in both frontend and backend development, I bring ideas to life through clean code, innovative solutions, and attention to detail. I'm always eager to learn new technologies and take on challenging projects."}
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
                <div className="text-slate-300">Years Experience</div>
              </div>
              <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <div className="text-3xl font-bold text-blue-400 mb-2">25+</div>
                <div className="text-slate-300">Projects Completed</div>
              </div>
            </div>
            
            <button
              //  onClick={() => handleNavClick("contact")}
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              <span>{"Let's Work Together"}</span>
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
