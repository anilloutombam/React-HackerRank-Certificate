import React, { useState } from "react";

function Slides({ slides }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [disabled, setDisabled] = useState({
    prev: true,
    next: false,
    restart: true,
  });

  const nextSlide = () => {
    let currentSlide = activeSlide;

    if (currentSlide < slides.length - 1) {
      currentSlide++;
      setActiveSlide(currentSlide);
      setDisabled({
        ...disabled,
        prev: false,
        restart: false,
      });
    }
    if (currentSlide === slides.length - 1) {
      setDisabled({
        ...disabled,
        next: true,
      });
    }
  };

  const prevSlide = () => {
    let currentSlide = activeSlide;

    if (currentSlide > 0) {
      currentSlide--;
      setActiveSlide(currentSlide);
      setDisabled({
        ...disabled,
        next: false,
      });
    }
    if (currentSlide === 0) {
      setDisabled({
        ...disabled,
        prev: true,
        restart: true,
      });
    }
  };

  const onClickRestart = () => {
    setActiveSlide(0);
    setDisabled({
      ...disabled,
      prev: true,
      next: false,
      restart: true,
    });
  };

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          onClick={() => onClickRestart()}
          disabled={disabled.restart}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          onClick={() => prevSlide()}
          disabled={disabled.prev}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          onClick={() => nextSlide()}
          disabled={disabled.next}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title"> {slides[activeSlide].title} </h1>
        <p data-testid="text"> {slides[activeSlide].text} </p>
      </div>
    </div>
  );
}

export default Slides;
