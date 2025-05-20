import React from "react";

const ImageViewer = ({ file, zoomLevel }) => {
  return (
    <div className="image-viewer">
      <img
        src={file}
        alt="Document Preview"
        style={{
          maxWidth: `${zoomLevel * 100}%`,
          maxHeight: `${zoomLevel * 100}%`,
        }}
      />
    </div>
  );
};

export default ImageViewer;