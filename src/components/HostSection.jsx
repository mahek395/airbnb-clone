import { propertyData } from "../data/propertyData";
import { Shield, MapPin, GraduationCap } from "lucide-react";

const FACT_ICONS = {
  born: MapPin,
  school: GraduationCap,
};

const INITIAL_COLORS = {
  A: { bg: "#e3f2fd", color: "#1565c0" },
  M: { bg: "#e8f5e9", color: "#2e7d32" },
  P: { bg: "#ede7f6", color: "#5e35b1" },
  S: { bg: "#fce4ec", color: "#c2185b" },
  H: { bg: "#fff3e0", color: "#ef6c00" },
  R: { bg: "#f3e5f5", color: "#7b1fa2" },
  N: { bg: "#e0f7fa", color: "#006064" },
  C: { bg: "#f1f8e9", color: "#33691e" },
};

function InitialAvatar({ name, className = "cohost-initial" }) {
  const letter = (name || "A").trim().charAt(0).toUpperCase();
  const palette = INITIAL_COLORS[letter] || { bg: "#eee", color: "#333" };

  return (
    <div
      className={className}
      style={{ background: palette.bg, color: palette.color }}
      aria-label={name}
    >
      {letter}
    </div>
  );
}

export default function HostSection() {
  const { host } = propertyData;

  return (
    <section className="page-shell full-section">
      <h2 className="section-title">Meet your host</h2>

      <div className="host-layout">
        <div>
          <div className="host-id">
            <div className="host-id-top">
              <div className="host-primary">
                <div className="host-avatar-wrap">
                  <img src={host.avatar} alt={`${host.name} profile`} />
                  {host.isSuperhost && <span className="superhost-badge">✓</span>}
                </div>
                <h3>{host.firstName}</h3>
                <p className="host-caption">Host</p>
              </div>
              <div className="host-stats">
                <div className="host-stat">
                  <strong>{host.reviewCount.toLocaleString("en-IN")}</strong>
                  <span>Reviews</span>
                </div>
                <div className="host-stat">
                  <strong>{host.rating}★</strong>
                  <span>Rating</span>
                </div>
                <div className="host-stat host-stat--last">
                  <strong>{host.yearsHosting}</strong>
                  <span>Years hosting</span>
                </div>
              </div>
            </div>
          </div>

          <ul className="host-facts">
            {host.facts.map((fact) => {
              const Icon = FACT_ICONS[fact.icon] || MapPin;
              return (
                <li key={fact.text}>
                  <Icon size={20} strokeWidth={1.5} />
                  {fact.text}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="host-copy">
          <h3 className="cohost-title">Co-Hosts</h3>
          <div className="cohost-grid">
            {host.coHosts.map((c) => (
              <div className="cohost" key={c.name}>
                <InitialAvatar name={c.name} />
                <span>{c.name}</span>
              </div>
            ))}
          </div>

          <h3 className="host-details-title">Host details</h3>
          <p>Response rate: {host.responseRate}</p>
          <p>Responds {host.responseTime}</p>

          <button type="button" className="outline-btn">
            Message host
          </button>

          <p className="host-safety">
            <Shield size={16} strokeWidth={1.5} />
            To help protect your payment, always use Airbnb to send money and
            communicate with hosts.
          </p>
        </div>
      </div>
    </section>
  );
}