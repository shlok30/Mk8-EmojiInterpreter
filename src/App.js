import "./styles.css";
import { useState } from "react";
const dataDictionary = {
  "😀": "Smiling",
  "😇": "Angel",
  "🥳": "Party Person",
  "👍": "Thumbs Up"
};

const emojis = Object.keys(dataDictionary);
//console.log(emojis)

export default function App() {
  const [counter, setCounter] = useState(0);
  const [meaning, setMeaning] = useState("");
  function handleClick() {
    setCounter((prevState) => prevState + 1);
  }
  function handleChange(event) {
    const emojiMeaning = dataDictionary[event.target.value];
    if (emojiMeaning === undefined) {
      setMeaning("not in our data base");
    } else {
      setMeaning(emojiMeaning);
    }
  }

  function emojiClickHandler(emoji) {
    const emojiMeaning = dataDictionary[emoji];
    setMeaning(emojiMeaning);
  }

  return (
    <div className="App">
      <h1>Inside Out</h1>
      <button onClick={handleClick}>Click Me</button>
      <p>{counter}</p>
      <input onChange={handleChange}></input>
      <p>Meaning of Emoji is {meaning}</p>
      {emojis.map((item, index) => {
        return (
          <span
            key={index}
            style={{ cursor: "pointer", fontSize: "2rem", padding: "1rem" }}
            onClick={() => emojiClickHandler(item)}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
