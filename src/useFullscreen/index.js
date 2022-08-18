import { useFullscreen } from "./useFullscreen";

function UseFullscreenIndex() {
  const onFullS = (isFull) => {
    console.log(isFull ? "full" : "small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div>
      <div ref={element}>
        <h1 style={{ color: "red" }}>useFullscreen</h1>
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
}

export default UseFullscreenIndex;
