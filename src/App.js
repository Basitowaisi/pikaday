import Pikaday from "./Pikaday"
import React from "react"

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          flexDirection: "column",
          background: "#fafafa",
        }}
      >
        <h3>A Simple Wrapper for the existing Pikaday Date Picker</h3>
        <Pikaday
          id="dob"
          name="dob"
          onChange={(val) => console.log(val)}
          value={new Date()}
          placeholder="Please choose a date"
          format="DD-MM-YYYY"
        />
      </div>
    </>
  )
}

export default App
