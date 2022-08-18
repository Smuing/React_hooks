import { useTitle } from "./useTitle";

function UseTitleIndex() {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 3000);

  return <h1>useTitle</h1>;
}

export default UseTitleIndex;
