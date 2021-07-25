import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  setTimeout(function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }, 7000);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <MdChevronLeft className="left-arrow" onClick={prevSlide} />
      <MdChevronRight className="right-arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="travel " className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
