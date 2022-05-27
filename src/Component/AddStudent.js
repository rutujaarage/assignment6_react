import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Style.css";
import { Store } from "./Details";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";

function Addstudent() {
  const [student, setStudent] = useContext(Store);
  const { id } = useParams();
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [course, setCourse] = React.useState("");
  const [batch, setBatch] = React.useState("");

  const submit = () => {
    setStudent([
      ...student,
      {
        Id: id,
        Name: name,
        Age: age,
        Batch: batch,
        Course: course,
      },
    ]);
  };

  return (
    <>
      <Box
        className="container"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "60ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-name"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          id="outlined-name"
          label="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <TextField
          id="outlined-name"
          label="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />

        <TextField
          id="outlined-name"
          label="Batch"
          value={batch}
          onChange={(e) => setBatch(e.target.value)}
        />
      </Box>
      <button className="button1">
        <Link to="/student" className="new"> cancel </Link>
      </button>
      <button className="button2" onClick={submit}>
        <Link to="/student" className="new"> submit </Link>
      </button>
    </>
  );
}

export default Addstudent;