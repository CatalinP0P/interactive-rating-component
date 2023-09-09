import React, { useState } from "react";
import { ReactComponent as StarIcon } from "./images/icon-star.svg";
import "./App.scss";
import Confirm from "./components/confirm";

export default function App() {
  const numbers = [1, 2, 3, 4, 5];

  const [selected, setSelected] = useState<number | null>(null);
  const [stage, setStage] = useState(0);

  const nextStep = () => {
    if (selected == null) return;
    setStage(1);
  };

  return (
    <>
      {stage === 0 && (
        <div className="container">
          <div className="card">
            <div className="card__icon__container">
              <StarIcon className="card__icon" />
            </div>
            <label className="card__title">How did we do?</label>
            <p className="card__text">
              Please let use know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
            <div className="rating__row">
              {numbers.map((number) => (
                <div
                  onClick={() => setSelected(number)}
                  className={
                    "rating__row__item " +
                    (selected === number ? "selected" : "")
                  }
                >
                  <label>{number}</label>
                </div>
              ))}
            </div>
            <button className="card__button" onClick={nextStep}>
              SUBMIT
            </button>
          </div>
        </div>
      )}
      {stage === 1 && selected != null && <Confirm rating={selected} />}
    </>
  );
}
