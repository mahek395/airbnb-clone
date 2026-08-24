import { useState } from "react";
import { CalendarX, Key, ShieldCheck } from "lucide-react";
import { propertyData } from "../data/propertyData";

function ThingsColumn({ icon: Icon, title, items, footer }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? items : items.slice(0, 3);

  return (
    <div>
      <Icon size={28} strokeWidth={1.5} aria-hidden="true" />
      <h3>{title}</h3>
      <ul>
        {visible.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {footer && <p className="things-footer">{footer}</p>}
      <button
        type="button"
        className="show-more"
        onClick={() => setExpanded((v) => !v)}
      >
        {expanded ? "Show less" : "Learn more"}
      </button>
    </div>
  );
}

export default function ThingsToKnow() {
  const houseRules = propertyData.houseRules.map((rule) =>
    rule.includes("guests maximum") ? `${propertyData.guests} guests maximum` : rule
  );

  return (
    <section className="page-shell full-section">
      <h2 className="section-title">Things to know</h2>
      <div className="things">
        <ThingsColumn
          icon={CalendarX}
          title="Cancellation policy"
          items={propertyData.cancellation}
        />
        <ThingsColumn
          icon={Key}
          title="House rules"
          items={houseRules}
        />
        <ThingsColumn
          icon={ShieldCheck}
          title="Safety & property"
          items={propertyData.safety}
        />
      </div>
    </section>
  );
}