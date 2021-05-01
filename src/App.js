import Pikaday from "./Pikaday"
import React from "react"

function App() {
  return (
    <div>
      <Pikaday
        id="dob"
        name="dob"
        onChange={(val) => console.log(val)}
        value={new Date()}
        placeholder="Please choose a date"
        format="DD-MM-YYYY"
      />
    </div>
  )
}

export default App
