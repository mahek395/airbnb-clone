import { useState } from "react";
import { ChevronDown, ChevronUp, Minus, Plus } from "lucide-react";
import { formatInr, nightsBetween, propertyData } from "../data/propertyData";

function fmt(d) {
  if (!d) return "Add date";
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

export default function BookingCard({
  checkIn,
  checkOut,
  guests,
  setGuests,
  onFocusDates,
  datesOpen,
}) {
  const [guestOpen, setGuestOpen] = useState(false);
  const nights = nightsBetween(checkIn, checkOut) || 5;
  const stay = propertyData.pricePerNight * nights;
  const service = Math.round(stay * propertyData.serviceFeeRate);
  const total = stay + propertyData.cleaningFee + service;
  const guestLabel = `${guests.adults + guests.children} guest${guests.adults + guests.children === 1 ? "" : "s"}`;

  function change(key, delta, min, max) {
    setGuests((g) => {
      const next = { ...g, [key]: g[key] + delta };
      const people = next.adults + next.children;
      if (next[key] < min || next[key] > max || people > propertyData.guests || people < 1) {
        return g;
      }
      return next;
    });
  }

  return (
    <aside className="booking-wrap">
      <div className="booking-card">
        <div className="price-row">
          <strong>{formatInr(propertyData.pricePerNight)}</strong>
          <span>night</span>
        </div>

        <div className="date-box">
          <div className="date-box-top">
            <button
              type="button"
              className={`date-field${datesOpen ? " is-open" : ""}`}
              onClick={onFocusDates}
            >
              <div className="date-label">CHECK-IN</div>
              <div className="date-value">{fmt(checkIn)}</div>
            </button>
            <button type="button" className="date-field" onClick={onFocusDates}>
              <div className="date-label">CHECKOUT</div>
              <div className="date-value">{fmt(checkOut)}</div>
            </button>
          </div>
          <button
            type="button"
            className={`guest-field${guestOpen ? " is-open" : ""}`}
            onClick={() => setGuestOpen((v) => !v)}
            aria-expanded={guestOpen}
          >
            <span>
              <div className="date-label">GUESTS</div>
              <div className="date-value" style={{ color: "#222" }}>
                {guestLabel}
              </div>
            </span>
            {guestOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

        {guestOpen && (
          <div className="guest-panel">
            <div className="guest-row">
              <div>
                <h4>Adults</h4>
                <p>Age 13+</p>
              </div>
              <div className="stepper">
                <button
                  type="button"
                  aria-label="Decrease adults"
                  disabled={guests.adults <= 1}
                  onClick={() => change("adults", -1, 1, 2)}
                >
                  <Minus size={14} />
                </button>
                <span>{guests.adults}</span>
                <button
                  type="button"
                  aria-label="Increase adults"
                  onClick={() => change("adults", 1, 1, 2)}
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>
            <div className="guest-row">
              <div>
                <h4>Children</h4>
                <p>Ages 2–12</p>
              </div>
              <div className="stepper">
                <button
                  type="button"
                  aria-label="Decrease children"
                  disabled={guests.children <= 0}
                  onClick={() => change("children", -1, 0, 1)}
                >
                  <Minus size={14} />
                </button>
                <span>{guests.children}</span>
                <button
                  type="button"
                  aria-label="Increase children"
                  onClick={() => change("children", 1, 0, 1)}
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>
          </div>
        )}

        <button type="button" className="reserve-btn">
          Reserve
        </button>
        <p className="charge-note">You won&apos;t be charged yet</p>

        <div className="fee-row">
          <span>
            {formatInr(propertyData.pricePerNight)} x {nights} nights
          </span>
          <span>{formatInr(stay)}</span>
        </div>
        <div className="fee-row">
          <span>Cleaning fee</span>
          <span>{formatInr(propertyData.cleaningFee)}</span>
        </div>
        <div className="fee-row">
          <span>Airbnb service fee</span>
          <span>{formatInr(service)}</span>
        </div>
        <div className="fee-total">
          <span>Total before taxes</span>
          <span>{formatInr(total)}</span>
        </div>
      </div>
    </aside>
  );
}
