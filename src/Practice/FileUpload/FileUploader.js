// there is error while storing in localstorage it set in it but we last file after reloade

import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";

const FileUploader = () => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    const newFiles = acceptedFiles.map((file) => ({
      file,
      content: URL.createObjectURL(file),
      type: file.type.startsWith("image")
        ? "image"
        : file.type === "application/pdf"
        ? "pdf"
        : "text",
    }));
    // setFiles((prevFiles)=>(...prevFiles, ...newFiles));
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // save to localstorage

  // to get data from local storage
  useEffect(() => {
    const storedFiles = localStorage.getItem("files");
    if (storedFiles) {
      setFiles(JSON.parse(storedFiles));
    }
  }, []);
  //to set the data to local storage
  useEffect(() => {
    localStorage.setItem("files", JSON.stringify(files));
  }, [files]);
  // to delete file
  const handelDelete = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  return (
    <div>
      <div {...getRootProps()} style={dropzoneStyle}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p style={{ color: "white" }}>
            Drag 'n' drop some files here, or click to select files
          </p>
        )}
      </div>
      <div style={{ marginTop: "20px" }}>
        {files.length > 0 && (
          <div>
            <h2 className="para" style={{ marginBottom: "20px" }}>
              Files :
            </h2>

            <div className="d-flex  ">
              {files.map((file, index) => (
                <div
                  key={index}
                  style={{ marginBottom: "20px", marginRight: "10px" }}
                >
                  {file.type === "image" && (
                    <img
                      src={file.content}
                      alt={`file ${index}`}
                      style={{ maxWidth: "100%", maxHeight: "100px" }}
                    />
                  )}

                  {file.type === "pdf" && (
                    <embed
                      src={file.content}
                      width="500"
                      height="100"
                      type="application/pdf"
                    />
                  )}

                  {file.type === "text" && (
                    <iframe
                      src={file.content}
                      width="500"
                      height="100"
                      title={`file ${index}`}
                      style={{ color: "black", background: "white" }}
                    />
                  )}
                  <button
                    className="btn btn-danger"
                    style={{ marginTop: "10px" }}
                    onClick={() => handelDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const dropzoneStyle = {
  border: "2px dashed #0087f7",
  borderRadius: "4px",
  padding: "20px",
  textAlign: "center",
  cursor: "pointer",
  marginTop: "20px",
};

export default FileUploader;
