import { Modal } from "react-bootstrap";
export default function ShakingModal(props) {
  return (
    <Modal show={show} onHide={() => setShow(false)} centered>
      <Modal.Header>
        <h4 className="modal-title color-gray font-24 main-medium">
          Buy $SLM token
        </h4>
      </Modal.Header>
      <Modal.Body>
          
      </Modal.Body>
    </Modal>
  );
}
