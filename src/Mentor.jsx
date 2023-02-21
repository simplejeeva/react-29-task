import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { buttonBaseClasses } from "@mui/material";

export function Mentor() {
  const [StudentForm, setStudentForm] = useState([
    {
      id: 1,
      name: "jeeva",
      age: 23,
      Gender: "male",
      Qualification: "BE Mechanical",
      place: "namakkal",
    },
  ]);

  const [show, setShow] = useState(true);
  const [id, setid] = useState("");
  const [editid, seteditid] = useState("");
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [Gender, setGender] = useState("");
  const [Qualification, setQualification] = useState("");
  const [place, setplace] = useState("");
  const deleteMovie = (id) => {
    const removeStud = StudentForm.filter((student) => student.id !== id);
    setStudentForm(removeStud);
    console.log("deleting movie....", id);
  };

  const editData = (id) => {
    const selected = StudentForm.find((Student) => Student.id === id);
    console.log(id);
    setShow(!show);
    seteditid(id);
    setid(selected.id);
    setname(selected.name);
    setage(selected.age);
    setGender(selected.Gender);
    setQualification(selected.Qualification);
    setplace(selected.place);
  };

  const updateData = () => {
    setShow(!show);
    const editStud = StudentForm.findIndex(
      (Students) => Students.id === editid
    );
    const updated = {
      id,
      name,
      age,
      Gender,
      Qualification,
      place,
    };

    StudentForm[editStud] = updated;
    setStudentForm([...Students]);
  };
  return (
    <div>
      <div className="add-student-form">
        <TextField
          id="outlined-basic"
          label="id"
          variant="outlined"
          onChange={(event) => setid(event.target.value)}
          type="text"
        />
        <TextField
          id="outlined-basic"
          label=" Mentor name"
          variant="outlined"
          onChange={(event) => setname(event.target.value)}
          type="text"
        />
        <TextField
          id="outlined-basic"
          label="age"
          variant="outlined"
          onChange={(event) => setage(event.target.value)}
          type="text"
        />
        <TextField
          id="outlined-basic"
          label="Gender"
          variant="outlined"
          onChange={(event) => setGender(event.target.value)}
          type="text"
        />
        <TextField
          id="outlined-basic"
          label="Qualification"
          variant="outlined"
          onChange={(event) => setQualification(event.target.value)}
          type="text"
        />
        <TextField
          id="outlined-basic"
          label="place"
          variant="outlined"
          onChange={(event) => setplace(event.target.value)}
          type="text"
        />
        {show ? (
          <Button
            variant="contained"
            onClick={() => {
              const Newlist = {
                id: id,
                name: name,
                age: age,
                Gender: Gender,
                Qualification: Qualification,
                place: place,
              };
              setStudentForm([...StudentForm, Newlist]);
            }}
          >
            add{" "}
          </Button>
        ) : (
          <Button
            className="add-btn"
            onClick={() => updateData()}
            variant="contained"
            color="secondary"
          >
            UPDATE
          </Button>
        )}
      </div>
      <div className="main">
        {StudentForm.map((mv) => (
          <Students
            key={mv.id}
            Students={mv}
            deletebutton={
              <Button
                size="small"
                variant="contained"
                onClick={() => deleteMovie(mv.id)}
              >
                delete
              </Button>
            }
            editData={
              <Button
                size="small"
                color="secondary"
                variant="contained"
                onClick={() => editData(mv.id)}
              >
                Edit
              </Button>
            }
          />
        ))}
      </div>
    </div>
  );
}
function Students({ Students, deletebutton, editData }) {
  return (
    <div className="cart-container">
      <div className="sub-div">
        <h2 className="name">
          <span>Mentor:</span>
          {Students.name}
        </h2>
        <p className="age">
          {" "}
          <span>age:</span>
          {Students.age}
        </p>
        <p className="summary">
          <span> Gender:</span>
          {Students.Gender}
        </p>
        <p className="Qualification">
          <span>Qualification:</span>
          {Students.Qualification}
        </p>
        <p className="place">
          {" "}
          <span>place:</span>
          {Students.place}
        </p>
      </div>
      <div className="ed-button">
        <div>{deletebutton} </div>
        <div>{editData}</div>
      </div>
    </div>
  );
}
