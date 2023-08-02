import React from "react";

function ErrorComponent() {
  const [users, setUsers] = React.useState(null); // calling map() method on null throws error
  return (
    <div>
      <h1>Users</h1>
      {users.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
}

export default ErrorComponent;
