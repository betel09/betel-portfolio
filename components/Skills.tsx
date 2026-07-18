const skillGroups = [
  {
    category: "Languages",
    skills: ["C#", "Java", "JavaScript", "TypeScript", "Python", "SQL", "C++"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["ASP.NET Core", "Angular", "React", "Entity Framework Core"],
  },
  {
    category: "Databases & Tools",
    skills: ["Microsoft SQL Server", "PostgreSQL", "Git/GitHub", "Docker", "Postman"],
  },
  {
    category: "Professional Skills",
    skills: ["SDLC", "OOP", "RESTful APIs", "Agile", "Responsive Design", "Problem Solving"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0a0f1a]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2 text-[#f5a623]">Skills</h2>
        <div className="w-16 h-1 bg-[#f5a623] rounded mb-10" />

        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map(({ category, skills }) => (
            <div key={category} className="bg-[#161d2b] border border-[#2a3a52] rounded-2xl p-6">
              <h3 className="font-bold text-[#f0f4f8] mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm font-medium px-3 py-1 rounded-full border border-[#f5a623]/30 bg-[#f5a623]/10 text-[#f5a623]"
                  >
                    {skill}
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