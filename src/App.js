import "./App.css";

import UseInput from "./useInput/index";
import UseTabs from "./useTabs/index";
import UseTitle from "./useTitle/index";
import UseClick from "./useClick/index";
import UseHover from "./useHover/index";
import UseConfirm from "./useConfirm/index";
import UsePreventLeave from "./usePreventLeave/index";
import UseBeforeLeave from "./useBeforeLeave/index";
import UseFadeIn from "./useFadeIn/index";
import UseNetwork from "./useNetwork/index";
import UseScroll from "./useScroll/index";
import UseFullscreen from "./useFullscreen/index";
import UseNotification from "./useNotification/index";
import UseAxios from "./useAxios/index";

function App() {
  return (
    <div className="App">
      <UseInput />
      <UseTabs />
      <UseTitle />
      <UseClick />
      <UseHover />
      <UseConfirm />
      <UsePreventLeave />
      <UseBeforeLeave />
      <UseFadeIn />
      <UseNetwork />
      <UseScroll />
      <UseFullscreen />
      <UseNotification />
      <UseAxios />
    </div>
  );
}

export default App;
