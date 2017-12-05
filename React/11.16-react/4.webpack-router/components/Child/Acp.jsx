import React from "react";
import {Button, Modal} from 'react-bootstrap';
class Acp extends React.Component {
  render() {
    return (
      <div>acp
        <Button bsStyle="warning">Warning</Button>
        <Modal.Dialog style={{
          display: "none"
        }}>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            One fine body...
          </Modal.Body>

          <Modal.Footer>
            <Button>Close</Button>
            <Button bsStyle="primary">Save changes</Button>
          </Modal.Footer>

        </Modal.Dialog>
      </div>
    )
  }
}
export default Acp
