const DashboardCard = ({ children,label}) => {
  return (
    <div className="dark:bg-slate-800 dark:text-slate-100 bg-slate-100 text-slate-800 p-4 rounded-lg border-b-2 border-slate-400">
      <h2 className="border-b-2 border-slate-400 p-2">{label?.toUpperCase()}</h2>
      <div className="h-40 overflow-scroll">
        {children}
      </div>
    </div>
  );
};

export default DashboardCard;