export default function Footer() {
  return (
    <footer className="bg-slate-800 border-t border-slate-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="text-2xl font-bold text-gradient mb-4">
            Yukenthiran Yathu
          </div>
          <p className="text-slate-400 mb-6">Full Stack Developer crafting digital experiences</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              <i className="fab fa-github text-xl"></i>
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-400 text-sm">
              © 2024 Yukenthiran Yathu. All rights reserved. Built with passion and modern technologies.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
