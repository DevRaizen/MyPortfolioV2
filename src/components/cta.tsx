import { useEffect, useState } from "react";

function CTA() {
  const testimonials = [
    {
      name: "John Doe",
      role: "Frontend Developer",
      comment:
        "This portfolio shows strong understanding.",
      img: "https://i.pravatar.cc/100?img=1",
    },
    {
      name: "Jane Smith",
      role: "UI/UX Designer",
      comment: "Great projects and attention to detail. Very clean UI.",
      img: "https://i.pravatar.cc/100?img=2",
    },
    {
      name: "Mark Lee",
      role: "Software Engineer",
      comment: "Impressive use of Angular and Python. Solid foundation.",
      img: "https://i.pravatar.cc/100?img=3",
    },
  ];
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div data-fx className="fx-card border border-gray-300 shadow-lg p-5 rounded-xl w-full h-[120px] flex flex-col justify-between">
        <div key={index} className="fx-swap">
          <div className="flex flex-row items-center gap-3 justify-between">
            <img
              src={current.img}
              alt={current.name}
              className="w-10 h-10 rounded-full object-cover border"
            />
            <h3 className="font-semibold text-lg">{current.name}</h3>
            <p className="text-sm text-gray-500">{current.role}</p>
          </div>
          <p className="mt-2 text-gray-700">"{current.comment}"</p>
        </div>
      </div>

      <div data-fx className="fx-card flex flex-col border border-gray-300 shadow-lg p-3 rounded-lg">
        <span className="text-md font-bold mb-3">Development Activity</span>
          <img
  src="https://github-readme-stats.vercel.app/api?username=DevRaizen&show_icons=true&hide_border=true&bg_color=111111&title_color=FAFAFA&text_color=A3A3A3&icon_color=FAFAFA"
    alt="GitHub stats"
    className="w-full"
  />
      </div>
    </div>
  );
}

export default CTA;
