import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Grip } from "lucide-react";
import "../styles/photo-tour.css";

export default function PhotoViewer({ images, currentIndex, onClose, onNext, onPrevious, onGridClick }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && currentIndex < images.length - 1) onNext();
      if (e.key === "ArrowLeft" && currentIndex > 0) onPrevious();
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onNext, onPrevious, currentIndex, images.length]);

  const currentImage = images[currentIndex];
  const currentNumber = currentIndex + 1;
  const totalImages = images.length;

  return (
    <div className="photo-viewer">
      {/* Top Navigation Bar */}
      <div className="photo-viewer-header">
        <div className="photo-viewer-header-inner">
          {/* Grid Icon */}
          <button
            type="button"
            className="photo-viewer-grid-btn"
            onClick={onGridClick}
            aria-label="View all photos"
          >
            <Grip size={20} strokeWidth={1.5} />
          </button>

          {/* Title */}
          <div className="photo-viewer-title">
            {currentImage.sectionTitle || currentImage.title || "Photos"}
          </div>

          {/* Counter and Close */}
          <div className="photo-viewer-right">
            <div className="photo-viewer-counter">
              {currentNumber} of {totalImages}
            </div>
            <button
              type="button"
              className="photo-viewer-close"
              onClick={onClose}
              aria-label="Close"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Image Area */}
      <div className="photo-viewer-main">
        {/* Previous Button */}
        <button
          type="button"
          className="photo-viewer-nav photo-viewer-prev"
          onClick={onPrevious}
          aria-label="Previous photo"
          disabled={currentIndex === 0}
        >
          <ChevronLeft size={32} strokeWidth={2} />
        </button>

        {/* Image */}
        <div className="photo-viewer-image-container">
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="photo-viewer-image"
          />
        </div>

        {/* Next Button */}
        <button
          type="button"
          className="photo-viewer-nav photo-viewer-next"
          onClick={onNext}
          aria-label="Next photo"
          disabled={currentIndex === images.length - 1}
        >
          <ChevronRight size={32} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}