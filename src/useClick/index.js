import { useClick } from "./useClick";

function UseClickIndex() {
  const sayHello = () => console.log("Hello");
  const click = useClick(sayHello);

  return <h1 ref={click}>useClick</h1>;
}

export default UseClickIndex;
