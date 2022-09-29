import React from "react";
import "./Accordion.css";
import { useState } from "react";
import { MdOutlineEdit, MdDeleteForever } from "react-icons/md";

function Accordion({ celeb, handleDelete, handleShow, handleClose }) {
  const [selected, setSelected] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [edit, setEdit] = useState({
    isEditMode: false,
    value: "some text",
    id: null
  });

  const changeEditMode = (id) => {
    setEdit((prev) => ({ isEditMode: !prev.isEditMode, id }));
  };

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const getAge = (str) => {
    var today = new Date();
    var birthDate = new Date(str);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const editView = (item) => {
    return (
      <h2>
        <input type="text" defaultValue={item.first}></input>
      </h2>
    );
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="wrapper">
        <div className="accordion">
          {celeb
            .filter((item) => {
              if (searchTerm === "") {
                return item;
              } else if (
                item.first.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return item;
              }
            })
            .map((item, i) => {
              return (
                <div className="item">
                  <div className="title" onClick={() => toggle(i)}>
                    <img className="img" src={item.picture} alt="No img" />
                    {edit.isEditMode ? 
                      editView(item)
                     : (
                      <h2>{item.first + " " + item.last}</h2>
                     )
                    }
                    <span>{selected === i ? "-" : "+"}</span>
                  </div>
                  <div className={selected === i ? "content show" : "content"}>
                    <div className="details">
                      <div>
                        <h6>Age</h6>
                        {getAge(item.dob)}
                      </div>
                      <div>
                        <h6>Gender</h6>
                        {item.gender}
                      </div>
                      <div>
                        <h6>Country</h6>
                        {item.country}
                      </div>
                    </div>
                    <div>
                      <h6>Description</h6>
                      {item.description}
                    </div>
                    <div className="iconP">
                      <div className="">
                        <MdOutlineEdit
                          size="2em"
                          color="cornflowerblue"
                          style={{ cursor: "pointer" }}
                          onClick={() => changeEditMode(item.id)}
                        />
                        <MdDeleteForever
                          size="2em"
                          color="red"
                          style={{ cursor: "pointer" }}
                          onClick={() => handleShow(item.id)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Accordion;
