import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px", fontFamily: "Arial" }}>
      <h1>Student Greeting App</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />
        <input
          type="text"
          placeholder="Enter course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div style={{ marginTop: "20px" }}>
          <h2>Hello, {name}</h2>
          <p>Course: {course}</p>
        </div>
      )}
    </div>
  );
}

export default App;