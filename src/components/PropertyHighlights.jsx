import { KeyRound, Waves, Wifi } from "lucide-react";
import { propertyData } from "../data/propertyData";

const ICONS = {
  checkin: KeyRound,
  pool: Waves,
  wifi: Wifi,
};

export default function PropertyHighlights() {
  return (
    <div className="highlight-list">
      {propertyData.highlights.map((item) => {
        const Icon = ICONS[item.id] ?? Wifi;
        return (
          <div className="highlight" key={item.id}>
            <Icon size={24} strokeWidth={1.6} aria-hidden="true" />
            <div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
