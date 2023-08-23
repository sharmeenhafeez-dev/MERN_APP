import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { storage } from '../utils/FirebaseConfige';
// import {  ref ,uploadBytes , getDownloadURL  } from "firebase/storage";
import {  ref, getDownloadURL ,uploadBytes} from "firebase/storage";



function AddBrands() {
  const [show, setShow] = useState(false);

  const [ BrandName, setBrandName] = useState("")
  const [ BrandImage, setBrandImage,] = useState(null)

  const SubmitBrand = (e)=>{
    e.preventDefault()

const ImageRef = ref(storage, `images/${BrandImage}`)

uploadBytes(ImageRef, BrandImage).then((snapshot) => {

  getDownloadURL(snapshot.ref)
  .then((url) => {
    const payload = {
      BrandName,
      BrandImage: url
  }
  console.log("READY TO UPLOAD",payload)
  })
  .catch((error) => {
    console.log(error)
  });

});

  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow}  backdrop="static"  >
      Add Brands
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Brands</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <form onSubmit={SubmitBrand}>
  <div className="mb-3">
    <label htmlFor="exampleInputBrand Name1" className="form-label">
      Brand Name
    </label>
    <input
      type="text "value={BrandName}onChange={(e)=>setBrandName(e.target.value)}
      className="form-control"
      id="exampleInputBrand Name1"
      aria-describedby="Brand NameHelp"
    />
    
  </div>
  <div className="mb-3">
  <label htmlFor="formFile" className="form-label">
  Brand Image
  </label>
  <input onChange={(e) => setBrandImage(e.target.files[0])} className="form-control" type="file" id="formFile" />
</div>

 
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>


        </Modal.Body>
      
      </Modal>
    </>
  );
}

export default AddBrands;