export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "fas fa-code",
      color: "text-blue-400",
      hoverColor: "hover:border-blue-500",
      skills: [
        "• React.js & Next.js",
        "• Vue.js & Nuxt.js",
        "• TypeScript",
        "• Tailwind CSS",
        "• Redux & Vuex"
      ]
    },
    {
      title: "Backend",
      icon: "fas fa-server",
      color: "text-green-400",
      hoverColor: "hover:border-green-500",
      skills: [
        "• Node.js & Express",
        "• Python & Django",
        "• PHP & Laravel",
        "• REST & GraphQL APIs",
        "• Microservices"
      ]
    },
    {
      title: "Database",
      icon: "fas fa-database",
      color: "text-purple-400",
      hoverColor: "hover:border-purple-500",
      skills: [
        "• PostgreSQL & MySQL",
        "• MongoDB",
        "• Redis",
        "• Firebase",
        "• Prisma ORM"
      ]
    },
    {
      title: "DevOps & Tools",
      icon: "fas fa-tools",
      color: "text-orange-400",
      hoverColor: "hover:border-orange-500",
      skills: [
        "• Docker & Kubernetes",
        "• AWS & Digital Ocean",
        "• Git & GitHub Actions",
        "• Jest & Cypress",
        "• Linux & Bash"
      ]
    }
  ];

  const skillBadges = [
    { name: "React", icon: "fab fa-react", color: "hover:bg-blue-600" },
    { name: "Node.js", icon: "fab fa-node-js", color: "hover:bg-green-600" },
    { name: "Python", icon: "fab fa-python", color: "hover:bg-blue-600" },
    { name: "JavaScript", icon: "fab fa-js-square", color: "hover:bg-yellow-600" },
    { name: "TypeScript", icon: "", color: "hover:bg-blue-600" },
    { name: "Vue.js", icon: "fab fa-vuejs", color: "hover:bg-green-600" },
    { name: "GraphQL", icon: "", color: "hover:bg-purple-600" },
    { name: "PostgreSQL", icon: "", color: "hover:bg-blue-600" },
    { name: "MongoDB", icon: "", color: "hover:bg-green-600" },
    { name: "AWS", icon: "fab fa-aws", color: "hover:bg-orange-600" },
    { name: "Docker", icon: "fab fa-docker", color: "hover:bg-blue-600" },
    { name: "Redis", icon: "", color: "hover:bg-red-600" }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category) => (
            <div key={category.title} className={`bg-slate-800 p-6 rounded-xl border border-slate-700 ${category.hoverColor} transition-all`}>
              <div className={`${category.color} text-3xl mb-4`}>
                <i className={category.icon}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-4">{category.title}</h3>
              <ul className="space-y-2 text-slate-400">
                {category.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Skill Badges */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-slate-100 mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skillBadges.map((skill) => (
              <span 
                key={skill.name}
                className={`px-4 py-2 bg-slate-700 text-slate-300 rounded-full text-sm font-medium ${skill.color} hover:text-white transition-all cursor-default`}
              >
                {skill.icon && <i className={`${skill.icon} mr-2`}></i>}
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
