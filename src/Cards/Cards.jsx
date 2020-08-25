import React, { useState } from "react";
import { dealCards } from "../Utils/Cards";

const Cards = () => {
  const [peopleNumber, setPeopleNumber] = useState(5);
  const [cards, setCards] = useState();
  const [invalid, setInvalid] = useState(false);

  const deal = () => {
    if (peopleNumber > 0 && peopleNumber < 53) setCards(dealCards(peopleNumber));
    else setInvalid(true);
  };
  const changePeopleNumber = (e) => {
    setInvalid(false);
    setCards();
    setPeopleNumber(e.target.value);
  };
  return (
    <div>
      <span>Number of people: </span>
      <input value={peopleNumber} onChange={changePeopleNumber} />
      <button onClick={deal}>Deal</button>
      {cards && (
        <>
          <div>
            {cards
              ?.filter((person) => person.length === Math.floor(52 / peopleNumber))
              .map((person, index) => (
                <div key={`person${index}`}>{`person${index + 1}`} : {person?.map((c) => `${c},`)}</div>
              ))}
          </div>
          <h2>Rest</h2>
          <div>
            {cards
              ?.filter((person) => person.length !== Math.floor(52 / peopleNumber))
              .map((person, index) => <div key={`person${index}`}>{`person${index + 1}`} : {person?.map((c) => `${c},`)}</div>) || "None"}
          </div>
        </>
      )}
      {invalid && <div>Input value does not exist or value is invalid</div>}
    </div>
  );
};

export default Cards;
