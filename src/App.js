import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import CountUp from "react-countup";
import "./App.css";

function App() {
  const collectionRef = collection(db, "visited");
  var val, newvalue, id;
  const [visitors, setVisitor] = useState();
  const set = window.sessionStorage.getItem("visitedbool");

  useEffect(() => {
    new Promise((resolve, reject) => {
      getDocs(collectionRef)
        .then((res) =>
          res.docs.map((values) => {
            val = values.data();
            id = values.id;
          })
        )
        .then(() => resolve());
    }).then(() => {
      newvalue = val.visits;
      if (!set) {
        newvalue = val.visits + 1;
        window.sessionStorage.setItem("visitedbool", true);

        const tobeupdated = doc(db, "visited", id);

        updateDoc(tobeupdated, {
          visits: newvalue,
        });
        setVisitor(newvalue);
        console.log(newvalue, val, "updating");
      } else {
        console.log("not updating", newvalue);
        setVisitor(newvalue);
      }
    });
  }, []);

  return (
    <div className="App">
      <CountUp end={visitors} className="count" />
    </div>
  );
}

export default App;
