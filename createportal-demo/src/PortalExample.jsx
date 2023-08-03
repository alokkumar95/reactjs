import React from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";

function PortalExample() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      PortalExample
      <button onClick={() => setShowModal(true)}>Show Modal with Portal</button>
      {showModal &&
        createPortal(
          <Modal onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}

export default PortalExample;
