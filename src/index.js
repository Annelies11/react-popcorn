import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";
// import { useState } from "react";

// function Test() {
//   const [rating, setRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="orange" onSetRating={setRating} />
//       <p>This movie was rated {rating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating
      size={30}
      maxRating={10}
      color="blue"
      className="test"
      defaultRating={3}
    />
    <Test /> */}
  </React.StrictMode>
);
