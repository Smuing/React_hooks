import { useNotification } from "./useNotification";

function UseNotificationIndex() {
  const triggerNotif = useNotification("Hello", { body: "Hello, World!" });
  return (
    <div>
      <h1>useNotification</h1>
      <button onClick={triggerNotif}>Notification</button>
    </div>
  );
}

export default UseNotificationIndex;
