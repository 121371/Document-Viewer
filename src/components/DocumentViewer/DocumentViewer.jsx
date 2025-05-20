import React, { useState, useRef } from "react";
import Toolbar from "./Toolbar";
import ImageViewer from "./ImageViewer";
import PDFViewer from "./PDFViewer";
import "./DocumentViewer.css";

const DocumentViewer = ({ file, fileType }) => {
  const [zoomLevel, setZoomLevel] = useState(1); // For image zoom
  const [isFullscreen, setIsFullscreen] = useState(false); // Fullscreen mode
  const containerRef = useRef(null); // Reference to the container for fullscreen

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      } else if (containerRef.current.webkitRequestFullscreen) {
        containerRef.current.webkitRequestFullscreen(); // Safari
      } else if (containerRef.current.msRequestFullscreen) {
        containerRef.current.msRequestFullscreen(); // IE11
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen(); // Safari
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen(); // IE11
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = file;
    link.download = "document";
    link.click();
  };

  return (
    <div
      ref={containerRef}
      className={`container ${isFullscreen ? "fullscreen" : ""}`}
    >
      <Toolbar
        onZoomIn={() => setZoomLevel((prev) => prev + 0.1)}
        onZoomOut={() => setZoomLevel((prev) => Math.max(prev - 0.1, 0.5))}
        onToggleFullscreen={toggleFullscreen}
        onDownload={handleDownload}
        isFullscreen={isFullscreen}
      />
      {fileType.startsWith("image/") && <ImageViewer file={file} zoomLevel={zoomLevel} />}
      {fileType === "application/pdf" && <PDFViewer file={file} isFullscreen={isFullscreen} />}
      {!fileType.startsWith("image/") && fileType !== "application/pdf" && (
        <p>Unsupported file type: {fileType}</p>
      )}
    </div>
  );
};

export default DocumentViewer;