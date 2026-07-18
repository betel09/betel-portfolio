import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-[#0d1117] via-[#111827] to-[#0a1628]">
      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col-reverse md:flex-row items-center gap-12 py-16">

        {/* Left: Text */}
        <div className="flex-1">
          <span className="inline-block border border-[#f5a623]/40 text-[#f5a623] text-xs font-semibold tracking-widest px-3 py-1 rounded mb-6">
            PORTFOLIO
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#f0f4f8] mb-2">
            Hey, I&apos;m{" "}
            <span className="text-[#f5a623]">Betel Yemanebirhan</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-[#3b82f6] mb-5">
            Software Engineer
          </h2>
          <p className="text-[#8a9ab5] max-w-lg leading-relaxed mb-8">
            Motivated Software Engineering student with a strong foundation in full-stack
            development. Skilled in ASP.NET Core, Angular, React, and database optimization.
            Passionate about delivering efficient, high-quality solutions.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mb-8">
            {[
              { icon: <FaGithub size={20} />, href: "https://github.com/", label: "GitHub" },
              { icon: <FaLinkedin size={20} />, href: "https://linkedin.com/", label: "LinkedIn" },
              { icon: <FaInstagram size={20} />, href: "https://instagram.com/", label: "Instagram" },
              { icon: <FaTelegram size={20} />, href: "https://t.me/", label: "Telegram" },
            ].map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 bg-[#161d2b] border border-[#2a3a52] text-[#8a9ab5] rounded-full flex items-center justify-center hover:border-[#f5a623] hover:text-[#f5a623] transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <a
              href="/betel-resume.pdf"
              download
              className="bg-[#f5a623] text-[#0d1117] px-7 py-3 rounded-full font-bold hover:bg-[#d4880a] transition-colors"
            >
              Download CV
            </a>
            <a
              href="#projects"
              className="border-2 border-[#3b82f6] text-[#3b82f6] px-7 py-3 rounded-full font-bold hover:bg-[#3b82f6] hover:text-white transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Right: Photo */}
        <div className="flex-shrink-0">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#f5a623]/40 shadow-2xl shadow-[#f5a623]/10">
            <Image
              src="/profile.jpg"
              alt="Betel Yemanebirhan"
              width={320}
              height={320}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}