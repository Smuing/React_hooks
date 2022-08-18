import { useNetwork } from "./useNetwork";

function UseNetworkIndex() {
  const handleNetworkChange = (online) => {
    console.log(online ? "online" : "offline");
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div>
      <h1>useNetwork</h1>
      <p>{onLine ? "online" : "offline"}</p>
    </div>
  );
}

export default UseNetworkIndex;
