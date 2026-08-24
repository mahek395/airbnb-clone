import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { propertyData } from "../data/propertyData";

export default function PropertyDescription() {
  const [open, setOpen] = useState(false);
  const [original, setOriginal] = useState(false);
  const { preview, previewFade, rest } = propertyData.description;

  return (
    <section>
      <div className="translation-banner">
        <span>Some info has been automatically translated. </span>
        <button type="button" onClick={() => setOriginal((v) => !v)}>
          {original ? "Show translation" : "Show original"}
        </button>
      </div>
      <p className="description">
        {preview}
        {!open && <span className="fade-text">{previewFade}</span>}
        {open && previewFade + rest}
      </p>
      <button type="button" className="show-more" onClick={() => setOpen((v) => !v)}>
        {open ? "Show less" : "Show more"}
        <ChevronRight size={16} strokeWidth={2} />
      </button>
    </section>
  );
}