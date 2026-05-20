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
      <div className="border border-gray-300 shadow-lg p-5 rounded-xl transition-all duration-500 ease-in-out w-full h-[120px] flex flex-col justify-between">
        <div className="opacity-100 transition-opacity duration-500">
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
      <div className="flex flex-col border border-gray-300 shadow-lg p-5 rounded-lg ">
        <span className="text-md font-bold mb-3">Development Activity</span>
        <img
          src="https://streak-stats.demolab.com?user=devraizen&theme=tokyonight"
          alt="GitHub Streak"
        />
      </div>
    </div>
  );
}

export default CTA;
