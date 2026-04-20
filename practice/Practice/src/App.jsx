import React, { useEffect, useState } from "react";
import { getAllStudents, getStudentById, addStudent } from "./api";

export default function App() {

  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ id: "", name: "", course: "" });
  const [searchId, setSearchId] = useState("");
  const [singleStudent, setSingleStudent] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await getAllStudents();
      setStudents(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchStudentByIdHandler = async () => {
    if (!searchId) return;

    try {
      const res = await getStudentById(searchId);
      setSingleStudent(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addStudent(form);
      setForm({ id: "", name: "", course: "" });
      fetchStudents();
    } catch (err) {
      console.error(err);
    }
  };

  const container = {
    background: "linear-gradient(135deg,#667eea,#764ba2)",
    minHeight: "100vh",
    padding: "40px",
  };

  const wrapper = {
    maxWidth: "900px",
    margin: "auto",
  };

  const cardStyle = {
    background: "#fff",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    marginBottom: "25px",
  };

  const inputStyle = {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    flex: "1",
    fontSize: "14px"
  };

  const buttonStyle = {
    padding: "12px 18px",
    border: "none",
    borderRadius: "8px",
    background: "#1976d2",
    color: "white",
    cursor: "pointer",
  };

  const studentCard = {
    background: "#f7f7f7",
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  };

  return (

  <div style={container}>

    <div style={wrapper}>

      <div style={cardStyle}>
        <h2>Add Student</h2>

        <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>

          <input
            style={inputStyle}
            placeholder="ID"
            value={form.id}
            onChange={(e) => setForm({ ...form, id: e.target.value })}
          />

          <input
            style={inputStyle}
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            style={inputStyle}
            placeholder="Course"
            value={form.course}
            onChange={(e) => setForm({ ...form, course: e.target.value })}
          />

          <button style={buttonStyle} type="submit">Add</button>

        </form>
      </div>


      <div style={cardStyle}>

        <h2>Search Student by ID</h2>

        <div style={{ display: "flex", gap: "10px" }}>

          <input
            style={inputStyle}
            placeholder="Enter ID"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
          />

          <button style={buttonStyle} onClick={fetchStudentByIdHandler}>
            Search
          </button>

        </div>

        {singleStudent && (

          <div style={{
            marginTop: "15px",
            padding: "12px",
            background: "#e3f2fd",
            borderRadius: "10px"
          }}>

            <p><b>ID:</b> {singleStudent.id}</p>
            <p><b>Name:</b> {singleStudent.name}</p>
            <p><b>Course:</b> {singleStudent.course}</p>

          </div>

        )}

      </div>


      <div style={cardStyle}>

        <h2>All Students</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))",
          gap: "15px"
        }}>

          {students.map((s) => (

            <div key={s.id} style={studentCard}>

              <h3>{s.name}</h3>
              <p><b>ID:</b> {s.id}</p>
              <p><b>Course:</b> {s.course}</p>

            </div>

          ))}

        </div>

      </div>

    </div>

  </div>
  );
}