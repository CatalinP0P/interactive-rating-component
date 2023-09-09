import React from "react";
import "./confirm.Module.scss";
// import "../App.scss";

export default function Confirm({ rating }: { rating: number }) {
  return (
    <div className="container">
      <div className="card center ">
        <div className="card__illustration"></div>
        <label className="card__rating">You selected {rating} out of 5</label>
        <label className="card__title">Thank You!</label>
        <p className="card__text">
          We appreciate you taking the time to give a rating. If you ever need
          more support, dont't hesitate to get in touch
        </p>
      </div>
    </div>
  );
}
