import "../css/LoadingScreen.css"
import loadIcon from "../Icons/loading_s.gif";


function LoadingScreen() {
  return (
    <main id="loadingDiv">
      <h2 id="waitMessage">Please Wait</h2>
      <img src={loadIcon} alt="Loading Icon" />
    </main>
  );
}
export default LoadingScreen;
