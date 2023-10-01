import { Student } from "@prisma/client";
import React, { cache, use } from "react";

const getStudents = cache(() => 
  fetch("http://localhost:3000/api/student").then((res) => res.json())
)

export default function Home() {
  let students = use<Student[]>(getStudents());

  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: 20,
        }}
      >
        {students.map((user) => (
          <div
            key={user.id}
            style={{ border: "1px solid #ccc", textAlign: "center" }}
          >
            <h3>{user.fullname}</h3>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
      
    </main>
  )
        }