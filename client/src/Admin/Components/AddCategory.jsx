import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { storage } from '../utils/FirebaseConfige';
import { ref, uploadBytes,getDownloadURL} from 'firebase/storage'; 
import axios from 'axios';
import { AppRoute } from '../../App'

function AddCategory({recallData}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [ CategoryName, setCategoryName] = useState("")
  const [ CategoryImage, setCategoryImage,] = useState(null)

  const SubmitCategory = (e)=>{
    e.preventDefault()
    const ImageRef = ref(storage, `images/category/${CategoryImage.name}`)

    uploadBytes(ImageRef, CategoryImage).then((snapshot) => {
    
      getDownloadURL(snapshot.ref)
      .then((url) => {
        console.log(url)
        const payload = { CategoryName, CategoryImage: url}

      
        axios.post(`${AppRoute}api/add-category`,payload)
        .then((json)=>{
          setShow(false);
          recallData(json.data.categorise);

          console.log(json.data)})
        .catch((error)=>alert(error.message))
      console.log("READY TO UPLOAD",payload)
      })
      .catch((error) => {
        console.log(error)
      });
    
    });
    
  }
  return (
    <>

<Button className='mx-2 bg-dark'  onClick={handleShow}   >
Add Category
      </Button>
    

      <Modal show={show} onHide={handleClose} centered backdrop ="static" >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>   
            
              <form onSubmit={SubmitCategory}>
  <div className="mb-3">
    <label htmlFor="Category Name" className="form-label">
      Category Name
    </label>
    <input
      type="text "value={CategoryName}onChange={(e)=>setCategoryName(e.target.value)}
      className="form-control"
      id=" Category Name"
      aria-describedby="Category NameHelp"
    />
    
  </div>
  <div className="mb-3">
  <label htmlFor="formFile" className="form-label">
  Category Image
  </label>
  <input onChange={(e) => setCategoryImage(e.target.files[0])} className="form-control" type="file" id="formFile" />
</div>

 
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form></Modal.Body>
       
      </Modal>
    </>
  );
}

export default AddCategory;