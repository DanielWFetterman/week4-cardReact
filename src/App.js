import './App.css';

function App() {


    return (
      <div className="App">
        {
        
        <div class="wrapper">
          
          <div class="card">

            <title>This card has a button and a image</title>
          
            <p>The image is a meme and says "I know HTML How to meet ladies"</p>
            
            <img id="HTML img" src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/i-know-html-how-to-meet-ladies-funny-web-designer-print-noirty-designs.jpg" alt="HTML is fun"/>

              
              <a href="http://hax.psu.edu" target="http://hax.psu.edu">
                <button class="button"> Details </button> 
              </a>  

            

          </div>

          <button class="dup-btn"> Duplicate </button>
          <button class="change-name-btn"> Change Name </button>
          <button class="change-color-btn"> Change Color </button>
          <button class="del-btn"> Delete </button>
        
        </div>
        
        /* <h1>Hello World!</h1>
        <h1>Welcome to my card</h1>
        <img src="https://cdn.creatureandcoagency.com/uploads/2021/03/FrogLifecycle_Body_8.png" alt="Frog" />
        <div className="paragraph">
          <p>This is a picture of a frog that I found on the internet. It looks really cool, and I thought it would be nice to share.</p>
        </div>n
        <div class="btn-wrapper">
 <a href="https://hax.psu.edu">
   <button>Details</button> </a> </div> */}
      </div>
    );
  }

export default App;
