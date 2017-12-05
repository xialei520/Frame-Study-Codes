import React from "react";
import { Button, Modal,Table } from 'react-bootstrap';
class Acp extends React.Component{
  render(){
    return (<div>Acp
       <Button bsStyle="info">Info</Button>
       <Button bsStyle="warning">Warning</Button>
       <Modal.Dialog>
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
    <Table striped bordered condensed hover>
   <thead>
     <tr>
       <th>#</th>
       <th>First Name</th>
       <th>Last Name</th>
       <th>Username</th>
     </tr>
   </thead>
   <tbody>
     <tr>
       <td>1</td>
       <td>Mark</td>
       <td>Otto</td>
       <td>@mdo</td>
     </tr>
     <tr>
       <td>2</td>
       <td>Jacob</td>
       <td>Thornton</td>
       <td>@fat</td>
     </tr>
     <tr>
       <td>3</td>
       <td colSpan="2">Larry the Bird</td>
       <td>@twitter</td>
     </tr>
   </tbody>
 </Table>
    </div>)
  }
}
export default Acp
