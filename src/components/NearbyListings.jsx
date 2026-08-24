import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { formatInr, propertyData } from "../data/propertyData";

const PAGE_SIZE = 5;

export default function NearbyListings() {
  const trackRef = useRef(null);
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(propertyData.nearbyListings.length / PAGE_SIZE);

  const scrollByPage = (dir) => {
    const next = Math.min(Math.max(page + dir, 0), totalPages - 1);
    setPage(next);
    trackRef.current?.scrollTo({
      left: next * trackRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="page-shell full-section">
      <div className="nearby-header">
        <h2 className="section-title">More stays nearby</h2>
        <div className="nearby-nav">
          <span className="nearby-page">
            {page + 1} / {totalPages}
          </span>
          <button
            type="button"
            className="nearby-arrow"
            onClick={() => scrollByPage(-1)}
            disabled={page === 0}
            aria-label="Previous"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            className="nearby-arrow"
            onClick={() => scrollByPage(1)}
            disabled={page === totalPages - 1}
            aria-label="Next"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="nearby-track" ref={trackRef}>
        {propertyData.nearbyListings.map((stay) => (
          <article className="nearby-card" key={stay.id}>
            <img src={stay.image} alt={stay.title} />
            <p className="nearby-title">{stay.title}</p>
            <p className="nearby-price">
              {formatInr(stay.price)}{" "}
              <span className="nearby-rating">
                <Star size={12} fill="#222" stroke="none" /> {stay.rating}
              </span>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}