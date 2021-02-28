import React, { useState } from "react";
import Example from "./Example";
import Spinner from "./Spinner";

function ImageGallary({ items, loading }) {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(1);
  const handleIndex = (i) => setIndex(i);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return loading ? (
    <Spinner />
  ) : (
    <div className="cards">
      {items.map((item, index) => (
        <div key={item.id} className="card">
          <div className="card-inner">
            User : {item.user.first_name} {"  "}
            Likes : {item.user.total_likes}
            <div className="card-front">
              <img
                src={item.urls.regular}
                alt=""
                onClick={() => {
                  handleShow();
                  handleIndex(index);
                }}
              />
            </div>
          </div>
        </div>
      ))}
      <Example
        item={items}
        show={show}
        handleClose={handleClose}
        indexValue={index}
      />
    </div>
  );
}

export default ImageGallary;
