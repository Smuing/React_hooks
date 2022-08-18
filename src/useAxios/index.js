import { useAxios } from "./useAxios";

function UseAxiosIndex() {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  return (
    <div>
      <h1>useAxios</h1>
      <h2>{data && data.status}</h2>
      <h3>{loading && "Loading"}</h3>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
}

export default UseAxiosIndex;
