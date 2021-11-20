import "../css/MainPage.css"



function MainPage(props) {
    let {showData, castData}=props;
    console.log(showData)
    console.log(castData)
  return (
    <main id="mainDiv">
    <header id="titleHeader">
       <h1 className="headerText"> {showData.name}</h1>
    </header>
      
    </main>
  );
}
export default MainPage;
