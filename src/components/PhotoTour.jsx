import { useState, useEffect, useRef } from "react";
import { ArrowLeft, Share, Heart, X, ChevronLeft } from "lucide-react";
import { propertyData, photoTourSections } from "../data/propertyData";
import PhotoViewer from "./PhotoViewer";
import "../styles/photo-tour.css";

// Groups a section's images into rows: first image full-width,
// then pairs of 2, with a trailing full-width if one is left over.
// Special case: exactly 2 images renders as a single pair.
function groupSectionImages(images) {
  if (images.length === 0) return [];

  if (images.length === 1) {
    return [{ type: "full", items: [{ image: images[0], index: 0 }] }];
  }

  if (images.length === 2) {
    return [
      {
        type: "pair",
        items: [
          { image: images[0], index: 0 },
          { image: images[1], index: 1 },
        ],
      },
    ];
  }

  const rows = [{ type: "full", items: [{ image: images[0], index: 0 }] }];

  for (let i = 1; i < images.length; i += 2) {
    if (i + 1 < images.length) {
      rows.push({
        type: "pair",
        items: [
          { image: images[i], index: i },
          { image: images[i + 1], index: i + 1 },
        ],
      });
    } else {
      rows.push({ type: "full", items: [{ image: images[i], index: i }] });
    }
  }

  return rows;
}

function PhotoTourOverviewGrid({ sections, onScrollToSection }) {
  return (
    <div className="photo-tour-overview-grid">
      {sections.map((section) => (
        <button
          key={section.id}
          type="button"
          className="photo-tour-overview-item"
          onClick={() => onScrollToSection(section.id)}
          aria-label={`Jump to ${section.title}`}
        >
          <div className="photo-tour-overview-thumb">
            {section.images.length > 0 && (
              <img
                src={section.images[0].src}
                alt={section.images[0].alt}
                loading="lazy"
              />
            )}
          </div>
          <span className="photo-tour-overview-label">{section.title}</span>
        </button>
      ))}
    </div>
  );
}

export default function PhotoTour({ onClose, saved: initialSaved, onToggleSave }) {
  const [saved, setSaved] = useState(initialSaved);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerIndex, setViewerIndex] = useState(0);
  const [shareOpen, setShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const sectionRefs = useRef({});
  const mainContentRef = useRef(null);

  // Prevent body scroll when PhotoTour is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Flatten all images for viewer navigation
  const allImages = photoTourSections.flatMap((section) =>
    section.images.map((img) => ({ 
      ...img, 
      sectionTitle: section.title,
      sectionId: section.id
    }))
  );

  function handleImageClick(sectionIndex, imageIndex) {
    let globalIndex = 0;
    for (let i = 0; i < sectionIndex; i++) {
      globalIndex += photoTourSections[i].images.length;
    }
    globalIndex += imageIndex;
    setViewerIndex(globalIndex);
    setViewerOpen(true);
  }

  function handleGridClick() {
    // Scroll to top of main content to show overview grid
    if (mainContentRef.current) {
      mainContentRef.current.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
    setViewerOpen(false);
  }

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

  function toggleSave() {
    setSaved((v) => !v);
    onToggleSave();
  }

  function scrollToSection(sectionId) {
    const sectionElement = sectionRefs.current[sectionId];
    const mainContent = mainContentRef.current;
    
    if (sectionElement && mainContent) {
      const headerHeight = 96; // Match the header height
      const elementPosition = sectionElement.offsetTop;
      const offsetPosition = elementPosition - headerHeight;

      mainContent.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }

  return (
    <div className="photo-tour">
      {/* Fixed Header */}
      <header className="photo-tour-header">
        <div className="photo-tour-header-inner">
          <button
            type="button"
            className="photo-tour-back"
            onClick={onClose}
            aria-label="Go back"
          >
            <ChevronLeft size={24} strokeWidth={1.5} />
          </button>

          <h1 className="photo-tour-title">Photo tour</h1>

          <div className="photo-tour-actions">
            <div className="photo-tour-action-wrapper">
              <button
                type="button"
                className="photo-tour-action"
                onClick={share}
                aria-label="Share"
              >
                <Share size={24} strokeWidth={1.5} />
              </button>
              {shareOpen && (
                <div className="photo-tour-share-menu" role="menu">
                  <button type="button" onClick={copyLink}>
                    {copied ? "Link copied" : "Copy link"}
                  </button>
                </div>
              )}
            </div>

            <button
              type="button"
              className="photo-tour-action"
              onClick={toggleSave}
              aria-pressed={saved}
              aria-label="Save"
            >
              <Heart
                size={24}
                strokeWidth={1.5}
                fill={saved ? "#ff385c" : "none"}
                color={saved ? "#ff385c" : "currentColor"}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="photo-tour-main" ref={mainContentRef}>
        <div className="photo-tour-content">
          {/* Overview Grid */}
          <PhotoTourOverviewGrid
            sections={photoTourSections}
            onScrollToSection={scrollToSection}
          />

          {/* Detailed Sections */}
          {photoTourSections.map((section, sectionIndex) => (
            <section
              key={section.id}
              ref={(el) => (sectionRefs.current[section.id] = el)}
              className="photo-tour-section"
              id={section.id}
            >
              {/* Section Info - becomes sticky in Layout B */}
              <div className="photo-tour-section-info">
                <h2 className="photo-tour-section-title">{section.title}</h2>
                <p className="photo-tour-section-amenities">
                  {(section.amenities || []).join(" · ")}
                </p>
              </div>

              {/* Gallery */}
              <div className="photo-tour-gallery">
                {groupSectionImages(section.images).map((row, rowIndex) => {
                  if (row.type === "full") {
                    const { image, index: imageIndex } = row.items[0];
                    return (
                      <button
                        type="button"
                        key={`full-${rowIndex}`}
                        className="photo-tour-featured"
                        onClick={() => handleImageClick(sectionIndex, imageIndex)}
                        aria-label={`View photo: ${image.alt}`}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          loading="lazy"
                        />
                        {image.title && (
                          <span className="photo-tour-image-title">{image.title}</span>
                        )}
                      </button>
                    );
                  }

                  return (
                    <div className="photo-tour-row" key={`row-${rowIndex}`}>
                      {row.items.map(({ image, index: imageIndex }) => (
                        <button
                          type="button"
                          key={imageIndex}
                          className="photo-tour-row-item"
                          onClick={() => handleImageClick(sectionIndex, imageIndex)}
                          aria-label={`View photo: ${image.alt}`}
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            loading="lazy"
                          />
                          {image.title && (
                            <span className="photo-tour-image-title">{image.title}</span>
                          )}
                        </button>
                      ))}
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Photo Viewer */}
      {viewerOpen && (
        <PhotoViewer
          images={allImages}
          currentIndex={viewerIndex}
          onClose={() => setViewerOpen(false)}
          onNext={() =>
            setViewerIndex((i) => (i + 1) % allImages.length)
          }
          onPrevious={() =>
            setViewerIndex((i) => (i - 1 + allImages.length) % allImages.length)
          }
          onGridClick={handleGridClick}
        />
      )}
    </div>
  );
}