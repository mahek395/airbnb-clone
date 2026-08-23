import { propertyData } from "../data/propertyData";

export default function ThingsToKnow() {
  return (
    <section className="page-shell full-section">
      <h2 className="section-title">Things to know</h2>
      <div className="things">
        <div>
          <h3>House rules</h3>
          <ul>
            {propertyData.houseRules.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <button type="button" className="show-more">
            Show more
          </button>
        </div>
        <div>
          <h3>Safety &amp; property</h3>
          <ul>
            {propertyData.safety.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <button type="button" className="show-more">
            Show more
          </button>
        </div>
        <div>
          <h3>Cancellation policy</h3>
          <ul>
            {propertyData.cancellation.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <button type="button" className="show-more">
            Show more
          </button>
        </div>
      </div>
    </section>
  );
}
