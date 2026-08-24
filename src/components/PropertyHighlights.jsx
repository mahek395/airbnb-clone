import { DoorOpen, Fan, Tent } from "lucide-react";
import { propertyData } from "../data/propertyData";

const ICONS = {
  outdoor: Tent,
  cool: Fan,
  checkin: DoorOpen,
};

export default function PropertyHighlights() {
  return (
    <div className="highlight-list">
      {propertyData.highlights.map((item) => {
        const Icon = ICONS[item.id] ?? Fan;
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
