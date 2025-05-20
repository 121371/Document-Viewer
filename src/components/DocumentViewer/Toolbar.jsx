import React from "react";

const Toolbar = ({ onZoomIn, onZoomOut, onToggleFullscreen, onDownload, isFullscreen }) => {
  return (
    <div className="toolbar">
      <div>
        <button onClick={onZoomOut} title="Zoom Out">
          🔍 -
        </button>
        <button onClick={onZoomIn} title="Zoom In">
          🔍 +
        </button>
      </div>
      <div>
        <button onClick={onToggleFullscreen} title="Toggle Fullscreen">
          {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
        </button>
        <button onClick={onDownload} title="Download">
          ⬇️ Download
        </button>
      </div>
    </div>
  );
};

export default Toolbar;