import { propertyData } from "../data/propertyData";

export default function HostSection() {
  const { host, rating, reviewCount } = propertyData;

  return (
    <section className="page-shell full-section">
      <h2 className="section-title">Meet your host</h2>
      <div className="host-card">
        <div className="host-id">
          <img src={host.avatar} alt={`${host.name} profile`} />
          <h3>{host.firstName}</h3>
          {host.isSuperhost && <span className="superhost-pill">Superhost</span>}
          <div className="host-stats">
            <div>
              <strong>{reviewCount}</strong>
              <span>Reviews</span>
            </div>
            <div>
              <strong>{rating}</strong>
              <span>Rating</span>
            </div>
            <div>
              <strong>{host.yearsHosting}</strong>
              <span>Years hosting</span>
            </div>
          </div>
        </div>
        <div className="host-copy">
          <p>{host.about}</p>
          <p>
            <strong>Host details</strong>
          </p>
          <ul>
            <li>Response rate: {host.responseRate}</li>
            <li>Responds {host.responseTime}</li>
            <li>Co-hosts: {host.coHosts.join(", ")}</li>
          </ul>
          <button type="button" className="outline-btn" style={{ marginTop: 0 }}>
            Message host
          </button>
        </div>
      </div>
    </section>
  );
}
