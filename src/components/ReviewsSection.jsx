import { Star } from "lucide-react";
import { propertyData, uiAssets } from "../data/propertyData";

export default function ReviewsSection() {
  return (
    <section className="page-shell full-section" id="reviews">
      <div className="rating-hero">
        <div className="rating-laurels">
          <img src={uiAssets.laurelLeft} alt="" />
          <div className="rating-big">{propertyData.rating.toFixed(2)}</div>
          <img src={uiAssets.laurelRight} alt="" />
        </div>
        <p className="rating-caption">Guest favourite</p>
        <p className="rating-sub">
          This home is in the top 5% of eligible listings based on ratings, reviews and reliability
        </p>
      </div>

      <div className="rated-highly" aria-label="Rated highly for">
        {propertyData.ratedHighly.map((chip) => (
          <div className="chip" key={chip.label}>
            <img src={chip.icon} alt="" />
            <p>{chip.label}</p>
          </div>
        ))}
      </div>

      <div className="category-grid">
        {propertyData.ratingCategories.map((cat) => (
          <div className="cat-row" key={cat.id}>
            <span>{cat.label}</span>
            <div className="cat-bar" aria-hidden="true">
              <span style={{ width: `${(cat.score / 5) * 100}%` }} />
            </div>
            <strong>{cat.score.toFixed(1)}</strong>
          </div>
        ))}
      </div>

      <div className="review-grid">
        {propertyData.reviews.map((review) => (
          <article key={review.id}>
            <div className="review-person">
              <img src={review.avatar} alt="" />
              <div>
                <h3>{review.name}</h3>
                <p>
                  {review.years} · {review.location}
                </p>
              </div>
            </div>
            <p className="review-date">
              <Star size={12} fill="#222" stroke="none" /> {review.date}
            </p>
            <p className="review-text">{review.text}</p>
          </article>
        ))}
      </div>

      <button type="button" className="outline-btn">
        Show all {propertyData.reviewCount} reviews
      </button>
    </section>
  );
}
