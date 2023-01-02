import React, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "😊": "Smiling",
  "🙇": "apology",
  "😮": "surprise/shock",
  "👌": "I'm okay",
  "👍": "approval/done",
  "😭": "loudly crying",
  "😂": "funny",
  "😔": "sad",
  "❤️": "love",
  "😑": "annoyance",
  "🤗": "thanks"
};
var emojis = Object.keys(emojiDictionary);
export default function App() {
  var [emoji, setEmoji] = useState("");
  var [mean, setmean] = useState("meaning will appear here..");
  function changeHandler(e) {
    var inputEmoji = e.target.value;
    setEmoji(inputEmoji);
    if (inputEmoji in emojiDictionary) {
      setmean(emojiDictionary[inputEmoji]);
    } else {
      setmean("😞 no result found .");
    }
  }
  function emojiChangeHandler(inputEmoji) {
    setmean(emojiDictionary[inputEmoji]);
  }
  return (
    <div className="App">
      <h1>inside outt..</h1>
      <input
        placeholder="place an emoji to know meaning"
        style={{ padding: "1rem", width: "80%" }}
        onChange={changeHandler}
      ></input>
      <div style={{ paddingTop: "1rem" }}>{emoji}</div>
      <h2>{mean} </h2>
      {emojis.map((emoji) => (
        <span
          style={{ cursor: "pointer", margin: "0.5rem", fontSize: "2rem" }}
          onClick={() => emojiChangeHandler(emoji)}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}
