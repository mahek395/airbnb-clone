import { ChevronLeft, ChevronRight } from "lucide-react";
import { propertyData } from "../data/propertyData";

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

function startOfMonth(d) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

function addMonths(d, n) {
  return new Date(d.getFullYear(), d.getMonth() + n, 1);
}

function sameDay(a, b) {
  return (
    a &&
    b &&
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isBetween(day, start, end) {
  if (!start || !end) return false;
  return day > start && day < end;
}

function Month({ month, checkIn, checkOut, onSelect }) {
  const first = startOfMonth(month);
  const startWeekday = first.getDay();
  const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < startWeekday; i += 1) cells.push(null);
  for (let d = 1; d <= daysInMonth; d += 1) {
    cells.push(new Date(month.getFullYear(), month.getMonth(), d));
  }

  const today = new Date(2024, 10, 1);

  return (
    <div>
      <div className="month-title">
        {month.toLocaleString("en-US", { month: "long", year: "numeric" })}
      </div>
      <div className="dow">
        {WEEKDAYS.map((d, i) => (
          <span key={`${d}-${i}`}>{d}</span>
        ))}
      </div>
      <div className="days">
        {cells.map((day, i) => {
          if (!day) return <span className="day empty" key={`e-${i}`} />;
          const disabled = day < today && day.getMonth() === 10 && day.getDate() < 8;
          const selected = sameDay(day, checkIn) || sameDay(day, checkOut);
          const inRange = isBetween(day, checkIn, checkOut);
          return (
            <button
              type="button"
              key={day.toISOString()}
              className={`day${selected ? " selected" : ""}${inRange ? " in-range" : ""}`}
              disabled={disabled}
              onClick={() => onSelect(day)}
            >
              {day.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function CalendarSection({ checkIn, checkOut, onSelect, onClear, monthOffset, setMonthOffset }) {
  const base = addMonths(new Date(2024, 10, 1), monthOffset);
  const nights =
    checkIn && checkOut
      ? Math.round((checkOut - checkIn) / 86400000)
      : 0;

  return (
    <section>
      <div className="calendar-head">
        <div>
          <h2 className="section-title" style={{ marginBottom: 0 }}>
            {nights > 0 ? `${nights} nights in Candolim` : propertyData.nightsLabel}
          </h2>
          <p className="calendar-sub">
            {checkIn && checkOut
              ? `${checkIn.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })} – ${checkOut.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}`
              : "Add your travel dates for exact pricing"}
          </p>
        </div>
        <div className="cal-nav">
          <button
            type="button"
            aria-label="Previous months"
            disabled={monthOffset <= -2}
            onClick={() => setMonthOffset((n) => n - 1)}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next months"
            onClick={() => setMonthOffset((n) => n + 1)}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      <div className="calendars">
        <Month month={base} checkIn={checkIn} checkOut={checkOut} onSelect={onSelect} />
        <Month month={addMonths(base, 1)} checkIn={checkIn} checkOut={checkOut} onSelect={onSelect} />
      </div>
      <button type="button" className="cal-clear" onClick={onClear}>
        Clear dates
      </button>
    </section>
  );
}
