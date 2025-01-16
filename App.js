import React, { useState, useEffect } from "react";
import "./styles.css";

// NavBar Component
const NavBar = () => {
  return (
    <div className="navbar">
      <h2>Interview Experience Platform</h2>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#submit">Submit</a>
          </li>
          <li>
            <a href="#dashboard">Dashboard</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const Dashboard = ({ submissions }) => {
  return (
    <div className="dashboard">
      <h3>Your Submissions</h3>
      {submissions.map((submission, index) => (
        <div className="submission-card" key={index}>
          <h4>{submission.company}</h4>
          <p>
            <strong>Country:</strong> {submission.country}
          </p>
          <p>
            <strong>Interview Questions:</strong>
          </p>
          <ul>
            {submission.questions.map((question, idx) => (
              <li key={idx}>{question}</li>
            ))}
          </ul>
          <button>View</button>
        </div>
      ))}
    </div>
  );
};

const SubmitExperience = ({ addSubmission }) => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [company, setCompany] = useState("");
  const [questions, setQuestions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const questionArray = questions.split("\n").map((q) => q.trim());
    const newSubmission = {
      name,
      country,
      company,
      questions: questionArray,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    addSubmission(newSubmission);
  };

  return (
    <div className="submit-form">
      <h3>Submit Your Interview Experience</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Your Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Country:
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </label>
        <label>
          Company:
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        </label>
        <label>
          Interview Questions (one per line):
          <textarea
            value={questions}
            onChange={(e) => setQuestions(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const App = () => {
  const [submissions, setSubmissions] = useState([]);

  const addSubmission = (submission) => {
    setSubmissions([...submissions, submission]);
  };

  return (
    <div className="app">
      <NavBar />
      <div className="content">
        <SubmitExperience addSubmission={addSubmission} />
        <Dashboard submissions={submissions} />
      </div>
    </div>
  );
};

export default App;
