import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

const ImageSlider = ({ url, limit, page }) => {
  const [images, setImages] = useState([]);
  const [currentSlider, setCurrentSlider] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImages = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url]);

  console.log(images);
  if (loading) {
    return <div className="text">Loading data ! Please wait</div>;
  }

  if (errorMsg !== null) {
    return <div className="text">Error occurred ! {errorMsg}</div>;
  }

  const handlePrevious = (data) => {
    setCurrentSlider(
      currentSlider === 0 ? images.length - 1 : currentSlider - 1
    );
  };
  const handleNext = (data) => {
    setCurrentSlider(
      currentSlider === images.length - 1 ? 0 : currentSlider + 1
    );
  };

  return (
    <div>
      <div className="text flex relative justify-center items-center w-[600px]">
        <BsArrowLeft
          className="w-8 h-8 text-white shadow-sm-lg absolute left-0"
          onClick={handlePrevious}
        />
        {images &&
          images.length > 0 &&
          images.map((image, index) => (
            <img
              src={image?.download_url}
              alt={image?.download_url}
              key={image.id}
              className={
                currentSlider === index
                  ? "text rounded-lg shadow-[0px, 0px, 7px, #666] w-full h-screen"
                  : "hidden"
              }
            />
          ))}
        <BsArrowRight
          className="w-8 h-8 text-white shadow-sm-lg absolute right-0"
          onClick={handleNext}
        />
        <span className="text flex absolute bottom-4">
          {images &&
            images.length > 0 &&
            images.map((_, index) => (
              <button
                onClick={() => setCurrentSlider(index)}
                className={
                  currentSlider === index
                    ? "text bg-blue-500 h-[15px] w-[15px] border-0 rounded-full outline-none mx-1 my-0 cursor-pointer"
                    : "h-[15px] w-[15px] border-0 rounded-full outline-none mx-1 my-0 cursor-pointer bg-white"
                }
                key={index}></button>
            ))}
        </span>
      </div>
    </div>
  );
};

export default ImageSlider;
