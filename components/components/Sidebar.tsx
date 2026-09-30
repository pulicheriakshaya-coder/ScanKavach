import {
  Activity,
  ScanLine,
  Database,
  Layers,
  Bot,
  HeartPulse,
  FileSearch,
  Info,
  LogOut,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const navigation = [
  { to: "/", label: "Dashboard", icon: Activity },
  { to: "/analyze", label: "Analyze", icon: ScanLine },
  { to: "/bank", label: "Image Bank", icon: Database },
  { to: "/batch", label: "Batch Screening", icon: Layers },
  { to: "/classifier", label: "Classifier", icon: FileSearch },
  { to: "/assistant", label: "AI Assistant", icon: Bot },
  { to: "/hub", label: "Health Hub", icon: HeartPulse },
  { to: "/audit", label: "Audit Log", icon: FileSearch },
  { to: "/about", label: "About", icon: Info },
];

export function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("scankavach_authenticated");
    navigate("/login");
  };

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">
          <Activity size={22} />
        </div>

        <div>
          <strong>ScanKavach</strong>
          <span>Medical Screening</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navigation.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              `nav-item ${isActive ? "active" : ""}`
            }
          >
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <button className="logout-button" onClick={logout}>
        <LogOut size={18} />
        <span>Logout</span>
      </button>
    </aside>
  );
}
