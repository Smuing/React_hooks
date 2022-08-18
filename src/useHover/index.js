import { useHover } from "./useHover";

function UseHoverIndex() {
  const sayHello = () => console.log("Hello");
  const hover = useHover(sayHello);

  return <h1 ref={hover}>useHover</h1>;
}

export default UseHoverIndex;
