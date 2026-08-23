import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { propertyData } from "../data/propertyData";

export default function PropertyDescription() {
  const [open, setOpen] = useState(false);
  const { preview, rest } = propertyData.description;

  return (
    <section>
      <p className="description">
        {preview}
        {open ? ` ${rest}` : ""}
      </p>
      <button type="button" className="show-more" onClick={() => setOpen((v) => !v)}>
        {open ? "Show less" : "Show more"}
        <ChevronRight size={16} strokeWidth={2} />
      </button>
    </section>
  );
}
