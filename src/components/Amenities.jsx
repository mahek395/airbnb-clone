import { useState } from "react";
import {
  AirVent, Car, CookingPot, Fan, Wind, Heater, KeyRound, Microwave,
  ParkingCircle, Refrigerator, Shirt, Tv, Waves, Wifi, Bath, Trees,
  Dumbbell, LampDesk, Utensils, PawPrint, Video, BellOff,
} from "lucide-react";
import { propertyData } from "../data/propertyData";

const ICONS = {
  garden: Trees,
  kitchen: CookingPot,
  wifi: Wifi,
  workspace: LampDesk,
  pool: Waves,
  tub: Bath,
  ac: AirVent,
  tv: Tv,
  washer: Shirt,
  parking: Car,
  hair: Wind,
  fridge: Refrigerator,
  microwave: Microwave,
  kettle: Utensils,
  cooker: Heater,
  essentials: Fan,
  hangers: Shirt,
  iron: Shirt,
  gym: Dumbbell,
  patio: Trees,
  fan: Fan,
  self: KeyRound,
  pets: PawPrint,
  cameras: Video,
  "co-alarm": BellOff,
  "smoke-alarm": BellOff,
};

export default function Amenities() {
  const [all, setAll] = useState(false);
  const list = all
    ? [...propertyData.amenities, ...propertyData.extraAmenities]
    : propertyData.amenities;

  return (
    <section>
      <h2 className="section-title">What this place offers</h2>
      <div className="amenity-grid">
        {list.map((item) => {
          const Icon = ICONS[item.id] ?? ParkingCircle;
          return (
            <div
              className={`amenity${item.unavailable ? " amenity--unavailable" : ""}`}
              key={item.id}
            >
              <Icon size={24} strokeWidth={1.6} aria-hidden="true" />
              {item.label}
            </div>
          );
        })}
      </div>
      <button type="button" className="outline-btn" onClick={() => setAll((v) => !v)}>
        {all ? "Show fewer amenities" : `Show all ${propertyData.amenityTotal} amenities`}
      </button>
    </section>
  );
}