export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0d1117]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2 text-[#f5a623]">About Me</h2>
        <div className="w-16 h-1 bg-[#f5a623] rounded mb-10" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-[#8a9ab5] leading-relaxed mb-4">
              I&apos;m a Software Engineer Graguated from Debre Berhan University. (graduating 2026),
               I have hands-on internship experience building
              scalable web applications using <strong className="text-[#f0f4f8]">ASP.NET Core</strong> and{" "}
              <strong className="text-[#f0f4f8]">Angular</strong>.
            </p>
            <p className="text-[#8a9ab5] leading-relaxed mb-4">
              During my internship at <strong className="text-[#f0f4f8]">Custer Computing Plc</strong>, I improved system
              I got  a knowledge about ASP.NET Core, Angular, React, and database optimization. I&apos;m passionate about delivering efficient, high-quality solutions and continuously learning new technologies to enhance my skills.
            </p>
            <p className="text-[#8a9ab5] leading-relaxed">
              I&apos;m fluent in <strong className="text-[#f0f4f8]">English</strong> and{" "}
              <strong className="text-[#f0f4f8]">Ethiopian Sign Language</strong>, and I thrive in
              collaborative, agile team environments.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Name", value: "Betel Yemanebirhan" },
              { label: "Email", value: "yemanebetel@gmail.com" },
              { label: "Phone", value: "+251 90 664 4386" },
              { label: "Location", value: "Addis Ababa, Ethiopia" },
              { label: "Degree", value: "BSc Software Engineering" },
              { label: "Graduation", value: "2026" },
            ].map(({ label, value }) => (
              <div key={label} className="bg-[#161d2b] border border-[#2a3a52] rounded-xl p-4">
                <p className="text-xs text-[#f5a623] font-semibold uppercase tracking-wide mb-1">{label}</p>
                <p className="text-sm font-medium text-[#f0f4f8]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}