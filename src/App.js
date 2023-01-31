import {FaBeer} from 'react-icons/fa'
import './App.css';

function App() {
  let person = prompt("Please Enter Your Name");
let text;
if (person === null || person === "") {
  text = "Naam likh Apna Shabash";
} else {
  text = "Haan " + person + "! Kesa Hai Bharwe?";
};
  return (
    <>
    <div className="popup">
      <h1>Project Popup</h1>
      <div className="img"><p id='demo'>{text}</p></div>
    </div>
    <div className="footer">
      <p>All Rights Reserved FOji-Developments</p>
      <FaBeer/>
    </div>
    </>
  );
}

export default App;
