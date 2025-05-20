import React, { useState } from 'react';
import DocumentViewer from './DocumentViewer';
function InputFileUpload() {
  const [file, setFile] = useState(null);
  const [fileType, setFileType] = useState(null);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      const fileUrl = URL.createObjectURL(uploadedFile);
      setFile(fileUrl);
      setFileType(uploadedFile.type); // Extract the MIME type from the uploaded file
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Document Previewer</h1>
      <input
        type="file"
        accept=".pdf,.jpg,.jpeg,.png,.gif,.bmp,.svg"
        onChange={handleFileUpload}
        style={{ marginBottom: '20px' }}
      />
      {file ? (
        <DocumentViewer file={file} fileType={fileType} />
      ) : (
        <p>Please upload a file to preview.</p>
      )}
    </div>
  );
}

export default InputFileUpload;