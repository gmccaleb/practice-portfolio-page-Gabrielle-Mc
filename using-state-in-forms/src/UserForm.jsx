import { useState } from "react";

function UserForm() {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");

 return (
 <div style={{ textAlign: "center", marginTop: "20px" }}>
  <h1>User Form</h1>
  <form>
    <label>
      Name:
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </label>
    <br />
    <label>
      Email:
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </label>
  </form>
  <h2>Preview</h2>
  <p>Name: {name}</p>
  <p>Email: {email}</p>
 </div>
 );
}

export default UserForm;