import type { CSSProperties } from "react";
export const stackItems = {
  Framework: ["Angular", "React", "Tailwind CSS"],
  Frontend: ["HTML", "CSS", "JavaScript", "TypeScript"],
  Backend: ["Node.js", "Python", "Java"],
  Tools: ["Git", "WordPress", "shadcn", "prisma"],
};

function Stack() {
  let c = 0;
  return (
    <div id="stack" data-fx className="fx-card fx-stk border border-gray-300 shadow-lg pt-4 rounded-lg ">
      <span className="text-lg text-black font-bold px-4">My Stack</span>
      <div className="px-4 py-2">
        {Object.entries(stackItems).map(([category, technologies]) => (
          <div key={category} className="mb-4">
            <h3 className="text-md font-semibold text-gray-700">{category}</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  style={{ "--c": c++ } as CSSProperties}
                  className="fx-chip bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stack;
