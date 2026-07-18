import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "CUSTOR – Portal System",
    role: "Backend Developer",
    description:
      "A full-featured customer portal system built for Custer Computing Plc. I designed and implemented the backend architecture using ASP.NET Core, built RESTful APIs for seamless frontend integration, managed Microsoft SQL Server databases with Entity Framework Core, and handled authentication and authorization logic.",
    tech: ["ASP.NET Core", "C#", "Entity Framework Core", "Microsoft SQL Server", "RESTful API", "Git"],
    github: "https://github.com/betel09/CUSTOR-portal", 
    live: "",   // leave empty if no live link
    badge: "Backend Dev",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    title: "Used Car Price Prediction",
    role: "ML Engineer",
    description:
      "A machine learning project that predicts used car prices based on features such as mileage, brand, year, fuel type, and condition. Involved data cleaning, exploratory data analysis, feature engineering, and training regression models. Evaluated model accuracy using RMSE and R² metrics.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Jupyter Notebook"],
    github: "https://github.com/betel09/used-car-price-prediction", 
    live: "",
    badge: "Machine Learning",
    badgeColor: "bg-green-100 text-green-700",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2 text-[#a0690a]">Projects</h2>
        <div className="w-16 h-1 bg-[#a0690a] rounded mb-10" />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white/70 rounded-2xl p-7 shadow-sm border border-[#e8c99a] flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              {/* Top */}
              <div>
                <div className="flex items-start justify-between mb-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${project.badgeColor}`}>
                    {project.badge}
                  </span>
                  <div className="flex gap-3 text-gray-500">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#a0690a] transition-colors"
                        aria-label="GitHub"
                      >
                        <FaGithub size={18} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#a0690a] transition-colors"
                        aria-label="Live Demo"
                      >
                        <FaExternalLinkAlt size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="font-bold text-xl text-[#1a1a1a] mb-1">{project.title}</h3>
                <p className="text-xs text-[#a0690a] font-medium mb-3">🔧 {project.role}</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{project.description}</p>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[#e8c99a]">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-[#a0690a]/10 text-[#a0690a] px-2.5 py-1 rounded-full border border-[#a0690a]/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}