import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import coreatelier from "../assets/coreatelier.png";
import tval from "../assets/Tval.webp";
import mayweather from "../assets/MayWeather.webp";


const projects = [
  {
    id: 1,
    title: "Core Atelier",
    description:
      "A Web-based booking system that streamlines client appointments and business operations.",
    img: coreatelier,
    stack: ["WordPress", "Tailwind CSS", "Amelia", "ACF", "WooCommerce"],
    link: "https://coreatelierpilates.com/"
  },
  {
    id: 2,
    title: "Teacher Evaluation System",
    description:
      "A Faculty evaluation system for students to rate teachers and generate feedback reports.",
    img: tval,
    stack: ["Angular", "Tailwind CSS", "Node.js", "PHP", "Python", "MySQL"],
    link: "https://evaluation-cgv.pages.dev/login"
  },
  {
    id: 3,
    title: "MayWeather",
    description:
      "A weather app with real-time updates via API integration and a clean responsive UI.",
    img: mayweather,
    stack: ["Ionic", "Tailwind CSS", "Node.js", "Sqlite"],
  },
];

function Projects() {
  const [active, setActive] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="border border-gray-300 shadow-lg pt-4 rounded-lg overflow-hidden">
      <span className="text-lg text-black font-bold px-4">
        Featured Projects
      </span>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        slidesPerView={1}
        spaceBetween={0}
        onSwiper={setSwiper}
        onSlideChange={(s) => setActive(s.realIndex)}
      >
        {projects.map((project) => (
          <SwiperSlide className="cursor-pointer" key={project.id}>
            <a href={project.link} className="p-4 rounded-lg grid grid-cols-2 gap-4">
              <div className="w-full h-48 overflow-hidden rounded-md">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center gap-2">
                <h3 className="text-lg font-bold text-center">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.stack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom banner */}
      <div className="flex items-center justify-between gap-3 bg-gray-900 text-white px-4 py-2.5">
        <p className="text-sm font-medium truncate">
          <span className="text-gray-400">
            Project {active + 1} of {projects.length}:
          </span>{" "}
          {projects[active].title}
        </p>

        <div className="flex items-center gap-1.5 shrink-0">
          {projects.map((project, i) => (
            <button
              key={project.id}
              onClick={() => swiper?.slideTo(i)}
              aria-label={`Show ${project.title}`}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? "w-6 bg-white" : "w-1.5 bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;