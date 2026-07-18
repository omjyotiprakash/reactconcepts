import React from "react";
import useFetch from "./useFetch";

const CustomHooks = () => {
  const { data: users, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users")
  if (loading) return <h2>Loading.....</h2>
  if (error) return <h2>{error}</h2>
  return (
    <div className="bg-black flex items-center flex-col justify-center h-screen w-screen text-white">
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  )
}

export default CustomHooks