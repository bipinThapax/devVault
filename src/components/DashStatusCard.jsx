const DashStatusCard = ({ userProjects, statusName, icon, decoration }) => {
  return (
    <div className="project-card--total  p-7 border border-[#151515] bg-[#0b0a0aa6] rounded-md flex items-center gap-3 max-[600px]:p-3 max-[480px]:text-sm">
      <div className="projectCount">
        <div className="text-3xl font-bol max-[480px]:text-xl">
          {userProjects ? userProjects.length : 0}
        </div>
        <div className="text-gray-500">{statusName}</div>
      </div>
      <div
        className={`projectCompletedIcon text-2xl p-3 rounded-lg ${decoration} max-[480px]:text-lg`}
      >
        {icon}
      </div>
    </div>
  );
};

export default DashStatusCard;
