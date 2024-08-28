import React, { useContext, useState } from "react";
import "./Form.css";
import { HealthFileContext } from "../../contexts/HealthFileContext";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const { submitRecord, currentUser } = useContext(HealthFileContext);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [allergies, setAllergies] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [treatment, setTreatment] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      await submitRecord(
        name,
        age,
        gender,
        bloodGroup,
        allergies,
        diagnosis,
        treatment
      );
      // setName("");
      // setAge(0);
      // setGender("");
      // setBloodGroup("");
      // setAllergies("");
      // setDiagnosis("");
      // setTreatment("");
      navigate("/");
    } catch (error) {
      console.log("Error creating record", error);
    }
  };

  return (
    <>
      {!currentUser ? (
        <h1>Connect the account first</h1>
      ) : (
        <form onSubmit={submitHandler}>
          <h1>Patient Details</h1>
          <label htmlFor="name">Patient name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="John Doe"
          />

          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="name"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            placeholder="21"
          />

          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            required
            onChange={(e) => setGender(e.target.value)}
            value={gender}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <label htmlFor="bloodGroup">Blood Group</label>
          <select
            id="bloodGroup"
            name="bloodGroup"
            required
            onChange={(e) => setBloodGroup(e.target.value)}
            value={bloodGroup}
          >
            <option value="">Select Blood Group</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>

          <label htmlFor="allergies">Allergies</label>
          <input
            type="text"
            id="allergies"
            name="allergies"
            value={allergies}
            onChange={(e) => setAllergies(e.target.value)}
            required
            placeholder="Pollen allergy"
          />

          <label htmlFor="diagnosis">Diagnosis</label>
          <input
            type="text"
            id="diagnosis"
            name="diagnosis"
            value={diagnosis}
            onChange={(e) => setDiagnosis(e.target.value)}
            required
            placeholder="Osteoporosis"
          />

          <label htmlFor="treatment">Treatment</label>
          <input
            type="text"
            id="treatment"
            name="treatment"
            value={treatment}
            onChange={(e) => setTreatment(e.target.value)}
            required
            placeholder="Surgery"
          />

          <input type="submit" value="Submit" />
        </form>
      )}
    </>
  );
};

export default Form;
