'use client';
export default function Hero() {
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
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <div className="animate-float">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-slate-200 mb-2">{"Hi, I'm"}</span>
            <span className=" animate-gradient">
              Yukenthiran Yathu
            </span>
          </h1>
        </div>
        <p className="text-xl sm:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
          {"Full Stack Developer crafting digital experiences with modern technologies and innovative solutions"}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
             onClick={() => handleNavClick("projects")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
          >
            View My Work
          </button>
          <button
            // onClick={() => handleNavClick("contact")}
            className="border border-slate-600 hover:border-blue-500 text-slate-300 hover:text-blue-400 px-8 py-3 rounded-lg font-semibold transition-all"
          >
            Get In Touch
          </button>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors" aria-label="GitHub">
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors" aria-label="LinkedIn">
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors" aria-label="Email">
            <i className="fas fa-envelope text-2xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
