function Hello(props){
    //cdit returns the reusable code that
    //we want to render on actual html page
    return(
      <h1>Hello world</h1>
    );
 }
 ReactDOM.render(<Hello/>,document.getElementById("app"));
