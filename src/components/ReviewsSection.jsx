import {
  Star,
  SprayCan,
  CheckCircle2,
  KeyRound,
  MessageSquare,
  Map,
  Tag,
} from "lucide-react";
import { chips, propertyData, uiAssets } from "../data/propertyData";

const reviewMetrics = [
  { label: "Overall rating", bars: [82, 6, 0, 0, 0] },
  { label: "Cleanliness", value: 5.0, Icon: SprayCan },
  { label: "Accuracy", value: 5.0, Icon: CheckCircle2 },
  { label: "Check-in", value: 5.0, Icon: KeyRound },
  { label: "Communication", value: 5.0, Icon: MessageSquare },
  { label: "Location", value: 4.8, Icon: Map },
  { label: "Value", value: 4.8, Icon: Tag },
];

const reviewBadges = [
  { label: "Comfort", count: 6, image: chips.comfort },
  { label: "Accuracy", count: 5, image: chips.accuracy },
  { label: "Hot tub", count: 5, image: chips.hotTub },
  { label: "Condition", count: 4, image: chips.condition },
  { label: "Hospitality", count: 8, image: chips.hospitality },
  { label: "Cleanliness", count: 4, image: chips.cleanliness },
  { label: "Amenities", count: 2, image: chips.amenities },
  { label: "Decor", count: 2, image: chips.decor },
  { label: "Indoor spaces", count: 2, image: chips.indoorSpaces },
  { label: "Location", count: 2, image: chips.location },
];

const initialColors = [
  { background: "#f5e6d3", color: "#9a5b16" },
  { background: "#eee7f8", color: "#7652a8" },
  { background: "#e6f2ed", color: "#20734b" },
  { background: "#fce8ed", color: "#bb375b" },
];

function ReviewInitial({ name, index }) {
  const palette = initialColors[index % initialColors.length];
  return (
    <div
      className="review-initial"
      style={{ backgroundColor: palette.background, color: palette.color }}
      aria-label={`${name} profile`}
    >
      {name.charAt(0).toUpperCase()}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="guest-favourite-section">
      <div className="guest-favourite-inner">
        <div className="guest-score-wrap">
          <img src={uiAssets.laurelLeft} alt="" className="guest-laurel guest-laurel-left" />
          <div className="guest-score">{propertyData.rating.toFixed(2)}</div>
          <img src={uiAssets.laurelRight} alt="" className="guest-laurel guest-laurel-right" />
        </div>

        <h3 className="guest-favourite-title">Guest favourite</h3>
        <p className="guest-favourite-copy">
          This home is a guest favourite based on ratings, reviews and reliability
        </p>

        <a href="#" className="guest-reviews-how">How reviews work</a>

        <div className="guest-metrics-grid">
          {reviewMetrics.map((metric) => (
            <div key={metric.label} className="guest-metric-column">
              <div className="guest-metric-label">{metric.label}</div>

              {metric.label === "Overall rating" ? (
                <div className="guest-overall-graph" aria-hidden="true">
                  {[5, 4, 3, 2, 1].map((n, i) => (
                    <div
                      key={n}
                      className={`guest-overall-row ${n === 5 ? "guest-overall-row--active" : ""}`}
                    >
                      <span>{n}</span>
                      <div className="guest-bar">
                        <div style={{ width: `${metric.bars[i]}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="guest-metric-value-wrap">
                  <div className="guest-metric-value">{metric.value.toFixed(1)}</div>
                  <div className="guest-metric-icon" aria-hidden="true">
                    <metric.Icon size={38} strokeWidth={1.8} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="guest-badge-row">
          {reviewBadges.map((badge) => (
            <div key={badge.label} className="guest-badge-pill">
              <span className="guest-badge-icon" aria-hidden="true">
                <img src={badge.image} alt="" />
              </span>
              {badge.label} {badge.count}
            </div>
          ))}
        </div>

        <div className="review-grid">
          {propertyData.reviews.map((review, index) => (
            <article className="review-card" key={review.id}>
              <div className="review-person">
                <ReviewInitial name={review.name} index={index} />
                <div>
                  <h3>{review.name}</h3>
                  <p>{review.years}</p>
                </div>
              </div>
              <div className="review-date">★★★★★ · {review.date}</div>
              <p className="review-text">{review.text}</p>
              {review.text.length > 150 && (
                <button type="button" className="review-show-more">Show more</button>
              )}
            </article>
          ))}
        </div>

        <button type="button" className="show-all-reviews">
          Show all {propertyData.reviewCount} reviews
        </button>
      </div>
    </section>
  );
}