import { Button, Modal } from "react-bootstrap";
function Example({ item, show, handleClose, indexValue }) {
  const [data] = item.filter((data, index) => index === indexValue);

  return (
    <>
      {show && (
        <div className="model" >
          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title className="title">
                Image Info
                <img src={data.urls.regular} alt="" />
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              This is the link of the pic that you have just clicked !
            </Modal.Body>
            <ul>
              <li>
                <b>likes : </b> {data.likes}
              </li>
              <li>
                <b>User name </b> : {data.user.username}
              </li>
              <ul>
                <b>user's social links : </b>
                <li>
                  {" "}
                  <b>followers : </b> {data.user.links.followers}
                </li>
                <li>
                  {" "}
                  <b>portfolio : </b>
                  {data.user.links.portfolio}
                </li>
              </ul>
            </ul>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )
      }
    </>
  );
}

export default Example;
