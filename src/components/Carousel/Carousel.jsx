import forward from "../../assets/forward.svg";
import back from "../../assets/back.svg";
import { useEffect, useRef, useState } from "react";
import { Children } from "react";

function Carousel({ displayCount = 3, children }) {
  const childCount = Children.count(children);
  const [index, setIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const viewportRef = useRef(null);
  const itemWidth = Math.round((viewportWidth - 16*(displayCount-1)) / displayCount);
  console.log(viewportWidth)
  console.log(Children.toArray(children).map((child, index) => (
    <li key={index} width={itemWidth}>
      {child}
    </li>
  )))

  function decrementIndex() {
    setIndex((index - 1 + (childCount - displayCount + 1)) % (childCount - displayCount + 1));
  }

  function incrementIndex() {
    setIndex((index + 1 + (childCount - displayCount + 1)) % (childCount - displayCount + 1));
  }

  useEffect(() => {
    const observer = new ResizeObserver(entries => {
      setViewportWidth(entries[0].contentRect.width)
    })
    observer.observe(viewportRef.current)
    return () => viewportRef.current && observer.unobserve(viewportRef.current)
  }, [itemWidth, viewportWidth, index, displayCount]);

  function renderChildren() {
    return (
      <>
        {Children.toArray(children).map((child, index) => {
          <li key={index} style={{ width: `${itemWidth}px` }}>
            {child}
          </li>
        })}
      </>
    )
  }

  return (
    <div className="flex flex-row gap-2 w-full border rounded-xl p-4">
      <button onClick={decrementIndex}>
        <img src={back} className="size-10" />
      </button>
      <div
        className="overflow-hidden grow"
        ref={viewportRef}
      >
        <ul style={{translate:`${-(itemWidth+16)*index}px`, transition: "translate 400ms ease-in-out"}} className="flex flex-row items-stretch shrink-0 gap-4">
          {Children.toArray(children).map((child, index) => (
            <li key={index} style={{width: `${itemWidth}px`, flexShrink:0}}>
              {child}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={incrementIndex}>
        <img src={forward} className="size-10" />
      </button>
    </div>
  );
}

export default Carousel;
