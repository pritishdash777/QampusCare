export default function FacultyRequest() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>New Faculty Request</h1>
      <p>Create and submit a new faculty recruitment request.</p>

      <div style={{ marginTop: "25px" }}>
        <label>
          Faculty Name
          <input
            type="text"
            placeholder="Enter faculty name"
            style={{
              display: "block",
              marginTop: "8px",
              padding: "10px",
              width: "300px",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
          />
        </label>

        <label style={{ display: "block", marginTop: "20px" }}>
          Department
          <select
            style={{
              display: "block",
              marginTop: "8px",
              padding: "10px",
              width: "300px",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
          >
            <option>Computer Science</option>
            <option>Electronics</option>
            <option>Mechanical</option>
            <option>Civil</option>
            <option>Management</option>
          </select>
        </label>

        <button
          style={{
            marginTop: "25px",
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Submit Request
        </button>
      </div>
    </div>
  );
}