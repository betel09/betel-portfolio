export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#0a0f1a]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2 text-[#f5a623]">Experience & Education</h2>
        <div className="w-16 h-1 bg-[#f5a623] rounded mb-10" />

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#f0f4f8]">Work Experience</h3>
            <div className="relative border-l-2 border-[#f5a623]/30 pl-6">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#f5a623]" />
              <div className="bg-[#161d2b] border border-[#2a3a52] rounded-2xl p-6">
                <p className="text-xs text-[#f5a623] font-semibold uppercase tracking-wide mb-1">
                  March 2025 – June 2025
                </p>
                <h4 className="font-bold text-lg text-[#f0f4f8]">Developer Intern</h4>
                <p className="text-[#8a9ab5] mb-3">Custer Computing Plc · Addis Ababa, Ethiopia</p>
                <ul className="list-disc list-inside text-sm text-[#8a9ab5] space-y-2">
                  <li>Built scalable web apps with ASP.NET Core & Angular, improving reliability by 15%</li>
                  <li>Optimized SQL Server databases with EF Core, reducing data retrieval times by 20%</li>
                  <li>Resolved 30+ technical issues through debugging and unit testing</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-[#f0f4f8]">Education</h3>
            <div className="relative border-l-2 border-[#3b82f6]/30 pl-6 space-y-4">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#3b82f6]" />
              <div className="bg-[#161d2b] border border-[#2a3a52] rounded-2xl p-6">
                <p className="text-xs text-[#3b82f6] font-semibold uppercase tracking-wide mb-1">
                  Expected 2026
                </p>
                <h4 className="font-bold text-lg text-[#f0f4f8]">BSc Software Engineering</h4>
                <p className="text-[#8a9ab5]">Debre Berhan University · Debre Berhan, Amhara</p>
              </div>

              <div className="bg-[#161d2b] border border-[#2a3a52] rounded-2xl p-6">
                <p className="text-xs text-[#3b82f6] font-semibold uppercase tracking-wide mb-1">
                  Certifications
                </p>
                <ul className="text-sm text-[#8a9ab5] space-y-2">
                  <li>✅ Computer Education Certificate</li>
                  <li>✅ Use WordPress to Create a Blog — Coursera</li>
                  <li>✅ Create a Website Using WordPress — Coursera</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}