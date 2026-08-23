import { Star } from "lucide-react";
import { formatInr, propertyData } from "../data/propertyData";

export default function NearbyListings() {
  return (
    <section className="page-shell full-section">
      <h2 className="section-title">More places to stay in Candolim</h2>
      <div className="nearby-row">
        {propertyData.nearbyListings.map((stay) => (
          <article className="nearby-card" key={stay.id}>
            <img src={stay.image} alt={stay.subtitle} />
            <div className="nearby-top">
              <span>{stay.title}</span>
              <span>
                <Star size={12} fill="#222" stroke="none" /> {stay.rating}
              </span>
            </div>
            <p className="nearby-sub">{stay.subtitle}</p>
            <p className="nearby-price">
              <strong>{formatInr(stay.price)}</strong> for {stay.nights} nights
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
