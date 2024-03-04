import React from "react";
import FileUploader from "./FileUploader";

const FileUpload = () => {
  return (
    <section className="landing-section">
      <div className="row container">
        <h1 className="landing-heading">File Uploade And Display</h1>
        <FileUploader />
      </div>
    </section>
  );
};

export default FileUpload;
