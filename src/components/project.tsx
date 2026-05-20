import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
  },
  {
    id: 2,
    title: "Teacher Evaluation System",
    description:
      "A Faculty evaluation system for students to rate teachers and generate feedback reports.",
    img: tval,
    stack: ["Angular", "Tailwind CSS", "Node.js", "PHP", "Python", "MySQL"],
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
  return (
    <div className="border border-gray-300 shadow-lg pt-4 rounded-lg ">
      <span className="text-lg text-black font-bold px-4">
        Featured Projects
      </span>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        slidesPerView={1}
        spaceBetween={0}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="p-4 rounded-lg grid grid-cols-2 gap-4">
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Projects;
