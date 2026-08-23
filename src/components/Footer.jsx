import { Globe } from "lucide-react";

const COLS = [
  {
    title: "Support",
    links: ["Help Centre", "AirCover", "Anti-discrimination", "Disability support", "Cancellation options"],
  },
  {
    title: "Hosting",
    links: ["Airbnb your home", "AirCover for Hosts", "Hosting resources", "Community forum"],
  },
  {
    title: "Airbnb",
    links: ["Newsroom", "New features", "Careers", "Investors", "Gift cards"],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-cols">
          {COLS.map((col) => (
            <div key={col.title}>
              <h3>{col.title}</h3>
              {col.links.map((link) => (
                <button type="button" key={link}>
                  {link}
                </button>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-bar">
          <div className="footer-bar-links">
            <span>© 2026 Airbnb, Inc.</span>
            <span>·</span>
            <button type="button">Privacy</button>
            <span>·</span>
            <button type="button">Terms</button>
            <span>·</span>
            <button type="button">Sitemap</button>
          </div>
          <div className="footer-bar-links">
            <button type="button">
              <Globe size={14} /> English (IN)
            </button>
            <button type="button">₹ INR</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
