import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <h2 className="nav-word">6 Suggestions</h2>
        <p className="nav-word2">Sort by :</p>
        <h3 className="nav-word3">Most upVotes</h3>
        <button className="nav-button">+ Add feedback</button>
      </div>

       <div className="hero">
        <button className="hero-button1">
         <p className="hero-button1-num1">^</p>
         <p className="hero-button1-num2">112</p>
         <h1 className="hero-button1-word1">Add tags for solutions</h1>
         <p className="hero-button1-word2">Easier to search for solutions based on a specific stack.</p>
         </button>  
         <button className="hero-button2">Enhancement</button>
      </div>        

      <div className="hero2">
        <button className="hero-button1">
         <p className="hero-button1-num1">^</p>
         <p className="hero-button1-num2">112</p>
         <h1 className="hero-button1-word1">Add tags for solutions</h1>
         <p className="hero-button1-word2">Easier to search for solutions based on a specific stack.</p>
         </button>  
         <button className="hero-button2">Feature</button>
      </div>  

      <div className="hero3">
        <button className="hero-button1">
         <p className="hero-button1-num1">^</p>
         <p className="hero-button1-num2">112</p>
         <h1 className="hero-button1-word1">Add tags for solutions</h1>
         <p className="hero-button1-word2">Easier to search for solutions based on a specific stack.</p>
         </button>  
         <button className="hero-button2">Feature</button>
      </div>  

      <div className="hero4">
        <button className="hero-button1">
         <p className="hero-button1-num1">^</p>
         <p className="hero-button1-num2">112</p>
         <h1 className="hero-button1-word1">Add tags for solutions</h1>
         <p className="hero-button1-word2">Easier to search for solutions based on a specific stack.</p>
         </button>  
         <button className="hero-button2">Enhancement</button>
      </div> 

      <div className="hero5">
        <button className="hero-button1">
         <p className="hero-button1-num1">^</p>
         <p className="hero-button1-num2">112</p>
         <h1 className="hero-button1-word1">Add tags for solutions</h1>
         <p className="hero-button1-word2">Easier to search for solutions based on a specific stack.</p>
         </button>  
         <button className="hero-button2">Feature</button>
      </div>  

      <div className="hero6">
        <button className="hero-button1">
         <p className="hero-button1-num1">^</p>
         <p className="hero-button1-num2">112</p>
         <h1 className="hero-button1-word1">Add tags for solutions</h1>
         <p className="hero-button1-word2">Easier to search for solutions based on a specific stack.</p>
         </button>  
         <button className="hero-button2">Feature</button>
      </div>  



      <div className="sidebar">
        <div className="side-div1">
          <h3 className="div1-word1">Frontend Mentor</h3>
          <p className="div1-word2">feedback board</p>
        </div>
        <div className="side-div2">
          <button className="div2-button1">ALL</button>
          <button className="div2-button2">UI</button>
          <button className="div2-button3">UX</button>
          <button className="div2-button4">Enhancement</button>
          <button className="div2-button5">Bug</button>
          <button className="div2-button6">Features</button>
        </div>

        <div className="side-div3">
          <h2 className="div3-word1">Roadmap</h2>
          <a className="div3-word2" href="">
            view
          </a>
          <p className="div3-word3">Planned</p>
          <p className="div3-word4">in-Progress</p>
          <p className="div3-word5">live</p>
          <div className="div3-inside-div">
            {" "}
            <p className="div3-word6">2</p>
            <p className="div3-word7">3</p>
            <p className="div3-word8">1</p>
          </div>
       </div>


      </div>
    </div>
  );
}

export default App;
