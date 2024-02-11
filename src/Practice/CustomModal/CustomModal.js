import React, { useState } from "react";
import "./CustomModal.css";
const CustomModal = () => {
  // states

  const [openModal, setOpenModal] = useState(false);

  //functions
  //open modal
  const openModalFunc = () => {
    setOpenModal(true);
    // console.log("from");
  };
  // to close the modal
  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <section className="landing_section">
      <div className="main-container">
        <h1>Custom Modal</h1>
        <div className="open-modal">
          <button className="btn btn-primary" onClick={openModalFunc}>
            Click To Open Modal
          </button>
        </div>
      </div>
      <div className="modal-main">
        {openModal && (
          <div className="modal-container">
            <h1>This is modal</h1>
            <div>
              <button className="btn btn-danger" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CustomModal;
