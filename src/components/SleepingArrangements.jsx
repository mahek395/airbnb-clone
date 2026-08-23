import { propertyData } from "../data/propertyData";

export default function SleepingArrangements() {
  return (
    <section>
      <h2 className="section-title">Where you&apos;ll sleep</h2>
      <div className="sleep-grid">
        {propertyData.sleeping.map((room) => (
          <article className="sleep-card" key={room.title}>
            <img src={room.image} alt={room.title} />
            <h3>{room.title}</h3>
            <p>{room.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
