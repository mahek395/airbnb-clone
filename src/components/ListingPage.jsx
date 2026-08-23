import { useRef, useState } from "react";
import Header from "./Header";
import PropertyHeader from "./PropertyHeader";
import HeroGallery from "./HeroGallery";
import PropertyHighlights from "./PropertyHighlights";
import PropertyDescription from "./PropertyDescription";
import SleepingArrangements from "./SleepingArrangements";
import Amenities from "./Amenities";
import CalendarSection from "./CalendarSection";
import BookingCard from "./BookingCard";
import ReviewsSection from "./ReviewsSection";
import LocationSection from "./LocationSection";
import HostSection from "./HostSection";
import ThingsToKnow from "./ThingsToKnow";
import NearbyListings from "./NearbyListings";
import Footer from "./Footer";
import { propertyData } from "../data/propertyData";
import "../styles/listing.css";

export default function ListingPage() {
  const [saved, setSaved] = useState(false);
  const [checkIn, setCheckIn] = useState(new Date(2024, 10, 12));
  const [checkOut, setCheckOut] = useState(new Date(2024, 10, 17));
  const [selecting, setSelecting] = useState("in");
  const [monthOffset, setMonthOffset] = useState(0);
  const [guests, setGuests] = useState({ adults: 2, children: 0 });
  const calendarRef = useRef(null);

  function onSelectDate(day) {
    if (selecting === "in" || !checkIn || (checkOut && day <= checkIn)) {
      setCheckIn(day);
      setCheckOut(null);
      setSelecting("out");
      return;
    }
    if (day < checkIn) {
      setCheckIn(day);
      setCheckOut(null);
      setSelecting("out");
      return;
    }
    setCheckOut(day);
    setSelecting("in");
  }

  function clearDates() {
    setCheckIn(null);
    setCheckOut(null);
    setSelecting("in");
  }

  return (
    <>
      <Header />
      <main className="listing-main">
        <HeroGallery saved={saved} onToggleSave={() => setSaved((v) => !v)} />

        <div className="page-shell details-layout">
          <div>
            <PropertyHeader />

            <div className="guest-favorite">
              <div className="gf-side">
                <img className="laurel" src="/assests/laurel-left.png" alt="" />
                Guest
                <br />
                favourite
              </div>
              <div className="gf-score">{propertyData.rating.toFixed(2)}</div>
              <button type="button" className="gf-reviews" onClick={() => document.getElementById("reviews")?.scrollIntoView({ behavior: "smooth" })}>
                {propertyData.reviewCount} reviews
              </button>
              <img className="laurel" src="/assests/laurel-right.png" alt="" />
            </div>

            <hr className="section-rule" />

            <div className="hosted-row">
              <img className="host-mini" src={propertyData.host.avatar} alt="" />
              <div>
                <h3>Hosted by {propertyData.host.name}</h3>
                <p>
                  {propertyData.host.isSuperhost ? "Superhost · " : ""}
                  {propertyData.host.yearsHosting} years hosting
                </p>
              </div>
            </div>

            <hr className="section-rule" />
            <PropertyHighlights />
            <hr className="section-rule" />
            <PropertyDescription />
            <hr className="section-rule" />
            <SleepingArrangements />
            <hr className="section-rule" />
            <Amenities />
            <hr className="section-rule" />
            <div ref={calendarRef}>
              <CalendarSection
                checkIn={checkIn}
                checkOut={checkOut}
                onSelect={onSelectDate}
                onClear={clearDates}
                monthOffset={monthOffset}
                setMonthOffset={setMonthOffset}
              />
            </div>
          </div>

          <BookingCard
            checkIn={checkIn}
            checkOut={checkOut}
            guests={guests}
            setGuests={setGuests}
            datesOpen={selecting === "out"}
            onFocusDates={() => calendarRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })}
          />
        </div>

        <hr className="section-rule page-shell" />
        <ReviewsSection />
        <hr className="section-rule page-shell" />
        <LocationSection />
        <hr className="section-rule page-shell" />
        <HostSection />
        <hr className="section-rule page-shell" />
        <ThingsToKnow />
        <hr className="section-rule page-shell" />
        <NearbyListings />
      </main>
      <Footer />
    </>
  );
}
