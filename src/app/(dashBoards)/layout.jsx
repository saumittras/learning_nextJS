export default function DashboardLayout({ children }) {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="sideBar col-span-3">Dash Side Bar</div>
        <div className="dashboard col-span-9">{children}</div>
      </div>
    </div>
  );
}
