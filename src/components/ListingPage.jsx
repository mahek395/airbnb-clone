import { useEffect, useRef, useState } from "react";
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
import PhotoTour from "./PhotoTour";
import PhotoViewer from "./PhotoViewer";
import { propertyData, photoTourSections } from "../data/propertyData";
import "../styles/listing.css";

export default function ListingPage() {
  const [saved, setSaved] = useState(false);
  const [showSectionNav, setShowSectionNav] = useState(false);
  const [photoTourOpen, setPhotoTourOpen] = useState(false);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerIndex, setViewerIndex] = useState(0);
  const [checkIn, setCheckIn] = useState(new Date(2026, 9, 18));
  const [checkOut, setCheckOut] = useState(new Date(2026, 9, 23));
  const [selecting, setSelecting] = useState("in");
  const [monthOffset, setMonthOffset] = useState(0);
  const [guests, setGuests] = useState({ adults: 2, children: 0 });
  const calendarRef = useRef(null);

  useEffect(() => {
    function updateSectionNav() {
      setShowSectionNav(window.scrollY > 520);
    }

    updateSectionNav();
    window.addEventListener("scroll", updateSectionNav, { passive: true });
    return () => window.removeEventListener("scroll", updateSectionNav);
  }, []);

  function scrollToSection(sectionId) {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

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

  // Flatten all images for viewer navigation
  const allImages = photoTourSections.flatMap((section) =>
    section.images.map((img) => ({ 
      ...img, 
      sectionTitle: section.title,
      sectionId: section.id
    }))
  );

  function handleHeroImageClick(imageIndex) {
    setViewerIndex(imageIndex);
    setViewerOpen(true);
  }

  function handleGridClick() {
    // Open photo tour instead of viewer
    setViewerOpen(false);
    setPhotoTourOpen(true);
  }

  return (
    <>
      <Header condensed={showSectionNav} />
      <nav className={`section-nav ${showSectionNav ? "section-nav-visible" : ""}`} aria-label="Listing sections">
        <div className="section-nav-inner">
          <div className="section-nav-links">
            <button type="button" className="section-nav-link is-active" onClick={() => scrollToSection("photos")}>Photos</button>
            <button type="button" className="section-nav-link" onClick={() => scrollToSection("amenities")}>Amenities</button>
            <button type="button" className="section-nav-link" onClick={() => scrollToSection("reviews")}>Reviews</button>
            <button type="button" className="section-nav-link" onClick={() => scrollToSection("location")}>Location</button>
          </div>
          <div className="section-nav-summary">
            <div className="section-nav-rating">
              <strong>₹{propertyData.stayTotal.toLocaleString("en-IN")}</strong>
              <span>for 5 nights</span>
              <small>★ {propertyData.rating} · {propertyData.reviewCount} reviews</small>
            </div>
            <button type="button" className="section-nav-reserve" onClick={() => scrollToSection("booking")}>Reserve</button>
          </div>
        </div>
      </nav>
      <main className="listing-main">
        <div id="photos">
          <HeroGallery 
          saved={saved} 
          onToggleSave={() => setSaved((v) => !v)}
          onOpenPhotoTour={() => setPhotoTourOpen(true)}
          onImageClick={handleHeroImageClick}
          />
        </div>

        <div className="page-shell details-layout">
          <div>
            <PropertyHeader />

            <hr className="section-rule" />

            <div className="hosted-row">
              <img className="host-mini" src={propertyData.host.avatar} alt="" />
              <div>
                <h3>Hosted by {propertyData.host.name}</h3>
                <p>{propertyData.host.yearsHosting} years hosting</p>
              </div>
            </div>

            <hr className="section-rule" />
            <PropertyHighlights />
            <hr className="section-rule" />
            <PropertyDescription />
            <hr className="section-rule" />
            <SleepingArrangements />
            <hr className="section-rule" />
            <div id="amenities"><Amenities /></div>
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
        <hr className="section-rule" />
        <div id="reviews"><ReviewsSection /></div>

        <hr className="section-rule" />
        <div id="location"><LocationSection /></div>
        <hr className="section-rule" />
        <HostSection />
        <hr className="section-rule" />
        <ThingsToKnow />
        <hr className="section-rule" />
        <NearbyListings />
      </main>

      {photoTourOpen && (
        <PhotoTour
          onClose={() => setPhotoTourOpen(false)}
          saved={saved}
          onToggleSave={() => setSaved((v) => !v)}
        />
      )}

      {viewerOpen && (
        <PhotoViewer
          images={allImages}
          currentIndex={viewerIndex}
          onClose={() => setViewerOpen(false)}
          onNext={() =>
            setViewerIndex((i) => (i + 1) % allImages.length)
          }
          onPrevious={() =>
            setViewerIndex((i) => (i - 1 + allImages.length) % allImages.length)
          }
          onGridClick={handleGridClick}
        />
      )}
    </>
  );
}
