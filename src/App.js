import "./App.css";
import { useState, useEffect } from "react";
import Accordion from "./Accordion";
import Modaal from "./Modaal";

function App() {
  const [celeb, setCeleb] = useState([]);
  const [popup, setPopup] = useState({
    show: false,
    id: null,
  });

  const handleClose = () => {
    setPopup({
      show:false,
      id: null,
    })
  }
  const handleShow = (id) => {
    setPopup({
      show:true,
      id,
    })
  };



  const handleDelete = async (id) => {
    handleShow(id)
    if(popup.show && popup.id){
      await fetch(`http://localhost:3006/celebrities/${popup.id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((res2) => {
        console.log(res2)
      })
    })
    getCelebrities()
    setPopup({
      show: false,
      id: null,
    })
    }
  };

  useEffect(() => {
    getCelebrities()
  }, []);

  function getCelebrities(){
    fetch("http://localhost:3006/celebrities")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setCeleb(resp);
      });
  }

  return (
    <div>
      <Modaal handleDelete={handleDelete} handleShow={handleShow} handleClose={handleClose} popup={popup} setPopup={setPopup} />
      {celeb && <Accordion celeb={celeb} handleDelete={handleDelete} handleShow={handleShow} handleClose={handleClose} />}
    </div>
  );
}

export default App;
