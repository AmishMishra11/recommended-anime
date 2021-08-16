import { useState } from "react";
import "./styles.css";
var popular = ["Jujutsu Kaisen", "Vinland Saga", "Demon Slayer"];
var shounnin = [
  "Dragonball Z",
  "Attack on Titan",
  "Fullmetal Alcamist Brotherhood"
];
var romance = ["Your Lie in April", "Your Name", "A Silent Voice"];
var thriller = ["Monstar", "Psychopass", "Another"];

var genre = {
  Popular: popular,
  Shounnis: shounnin,
  Romace: romance,
  Thriller: thriller
};

var genres = Object.keys(genre);

export default function App() {
  var [animeName, setAnimeName] = useState(genre["Popular"]);

  function clickAnime(anime) {
    animeName = genre[anime];
    setAnimeName(animeName);
  }

  return (
    <div className="App container">
      <h1>Some of my favorite anime</h1>
      <div style={{ padding: "1rem" }}>Choose genre</div>
      {genres.map(function (anime) {
        return (
          <span key={anime} onClick={() => clickAnime(anime)}>
            {anime}
          </span>
        );
      })}

      <ul>
        {animeName.map(function (a) {
          return <li key={a}>{a}</li>;
        })}
      </ul>
    </div>
  );
}
