import forward from "../../assets/forward.svg";
import back from "../../assets/back.svg";
import { useEffect, useRef, useState } from "react";
import { Children } from "react";

function Carousel({ displayCount = 1, horizontal = true, className = "", children }) {
  const childCount = Children.count(children);
  const [index, setIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const viewportRef = useRef(null);
  const itemWidth = horizontal ? Math.round((viewportWidth - 16 * (displayCount - 1)) / displayCount) : null;
  const itemHeight = horizontal ? null : Math.round((viewportHeight - 16 * (displayCount - 1)) / displayCount);
  const carouselItemStyle = horizontal ? { width: `${itemWidth}px`, height: "100%", flexShrink: 0 } : { height: `${itemHeight}px`, width: "100%", flexShrink: 0 }

  function decrementIndex() {
    setIndex((index - 1 + (childCount - displayCount + 1)) % (childCount - displayCount + 1));
  }

  function incrementIndex() {
    setIndex((index + 1 + (childCount - displayCount + 1)) % (childCount - displayCount + 1));
  }

  useEffect(() => {
    const observer = new ResizeObserver(entries => {
      setViewportWidth(entries[0].contentRect.width)
      setViewportHeight(entries[0].contentRect.height)
    })
    observer.observe(viewportRef.current)
    return () => viewportRef.current && observer.unobserve(viewportRef.current)
  }, [itemWidth, viewportWidth, viewportHeight, index, displayCount]);

  return (
    <div className={"flex gap-2 items-center" + className} style={horizontal ? {flexDirection : "row"} : {flexDirection : "column"}}>
      <button onClick={decrementIndex} className="shrink-0">
        <img src={back} className="size-5" />
      </button>
      <div
        className="overflow-hidden p-1 rounded-xl h-full"
        ref={viewportRef}
      >
        <ul style={horizontal ? {transform: `translate(${-(itemWidth + 16) * index}px,0)`, flexDirection:"row", height:"100%" } : {transform: `translate(0,${-(itemHeight + 16) * index}px)`, flexDirection:"column", width:"100%" } } className="flex transition-transform duration-500 ease-in-out items-stretch shrink-0 gap-4">
          {Children.toArray(children).map((child, index) => {
            return (
              <li key={index} style={carouselItemStyle}>
                {child}
              </li>)
          })}
        </ul>
      </div>
      <button onClick={incrementIndex} className="shrink-0">
        <img src={forward} className="size-5" />
      </button>
    </div>
  );
}

export default Carousel;
