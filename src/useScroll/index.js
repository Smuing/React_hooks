import { useScroll } from "./useScroll";

function UseScrollIndex() {
  const { y } = useScroll();
  return (
    <div style={{ height: "100vh" }}>
      <h1 style={{ color: y > 100 ? "red" : "blue" }}>useScroll</h1>
    </div>
  );
}

export default UseScrollIndex;
