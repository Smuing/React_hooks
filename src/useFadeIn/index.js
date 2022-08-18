import { useFadeIn } from "./useFadeIn";

function UseFadeInIndex() {
  const fadeInH1 = useFadeIn(1, 1);
  const fadeInP = useFadeIn(3, 3);

  return (
    <div>
      <h1 {...fadeInH1}>useFadeIn H1</h1>
      <p {...fadeInP}>useFadeIn P</p>
    </div>
  );
}

export default UseFadeInIndex;
