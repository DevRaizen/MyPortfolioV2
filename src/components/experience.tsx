function Experience() {
const jobs = [
  {
    role: "Junior Developer Intern",
    company: "Greydient Lab",
    period: "Feb – May 2026",
  },
];
 
  return (
    <div className="border border-gray-300 shadow-lg pt-4 rounded-lg ">
      <span className="text-lg text-black font-bold px-4">Experience</span>
      <div className="px-4 py-2">
       <ol className="mt-5 ml-1.5 border-l border-[#3b4261]">
        {jobs.map((job) => (
          <li key={job.company} className="relative pl-6 pb-2">
            <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-black ring-4 ring-[#7aa2f7]/20" />
            <p className="font-semibold text-black">{job.role}</p>
            <p className="text-sm text-black">{job.company}</p>
            <p className="text-xs text-black mt-1">{job.period}</p>
          </li>
        ))}
      </ol>
      </div>
    </div>
  );
}
export default Experience;
 