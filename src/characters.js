import { useEffect, useState } from "react";
import Character from "./character";

function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("characters") === null) {
        setCharacters([]);
      } else {
        setCharacters(JSON.parse(localStorage.getItem("characters")));
      }
    } else {
      const URL =
        "https://gateway.marvel.com/v1/public/characters?apikey=76ee8f6e5291d079ec2ccd858d494d43&ts=1&hash=2a99efe469dfdaa8d524dd170e01e106&limit=20";
      fetch(URL)
        .then((res) => res.json())
        .then((res) => {
          setCharacters(res.data.results);
          localStorage.setItem("characters", JSON.stringify(res.data.results));
        });
    }
  }, []);

  return (
    <div className="row">
      {characters.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </div>
  );
}

export default Characters;
