import { useState } from "react";
import { Heart, Share, LayoutGrid } from "lucide-react";
import { propertyData, requestPhotoTour } from "../data/propertyData";

export default function HeroGallery({ saved, onToggleSave }) {
  const [shareOpen, setShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: propertyData.title, url });
        return;
      } catch {
        /* fall through to menu */
      }
    }
    setShareOpen((v) => !v);
  }

  async function copyLink() {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setShareOpen(false);
    }, 1200);
  }

  return (
    <div className="page-shell">
      <div className="title-row">
        <h1>{propertyData.title}</h1>
        <div className="title-actions">
          <button type="button" className="text-icon-btn" onClick={share}>
            <Share size={16} strokeWidth={2} />
            Share
          </button>
          {shareOpen && (
            <div className="share-menu" role="menu">
              <button type="button" onClick={copyLink}>
                {copied ? "Link copied" : "Copy link"}
              </button>
            </div>
          )}
          <button type="button" className="text-icon-btn" onClick={onToggleSave} aria-pressed={saved}>
            <Heart
              size={16}
              strokeWidth={2}
              fill={saved ? "#ff385c" : "none"}
              color={saved ? "#ff385c" : "currentColor"}
            />
            Save
          </button>
        </div>
      </div>

      <div className="hero-gallery">
        {propertyData.heroGallery.map((photo) => (
          <button
            type="button"
            className="hero-cell"
            key={photo.id}
            onClick={() => requestPhotoTour(photo.id)}
            aria-label={`View photo: ${photo.alt}`}
          >
            <img src={photo.src} alt={photo.alt} />
          </button>
        ))}
        <button
          type="button"
          className="show-photos"
          onClick={() => requestPhotoTour("all")}
        >
          <LayoutGrid size={14} strokeWidth={2} />
          Show all photos
        </button>
      </div>
    </div>
  );
}
