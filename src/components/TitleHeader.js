import "../css/TitleHeader.css";
import arrowLogo from "../Icons/arrowLogo.png";

function TitleHeader(props) {
  return (
    <header id="titleHeader">
      <img id="arrowLogo" src={arrowLogo} alt="logo for Arrow TV show"></img>
    </header>
  );
}
export default TitleHeader;
