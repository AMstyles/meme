import './App.css';

let meme = ["meme 1", "meme 2", "meme 3"]

function NavBar() {
  return (
    <nav className='navBar'>
      <img src='https://www.designevo.com/res/temsplates/thumb_small/meme-sunglasses-laugh.png' className='nav--img' alt='oops'></img>
      <h1 className='nav--title'>Meme Generator</h1>
    </nav>);
}

function Body() {
  return (
    <div className='body'>
      <img src={memeImage} className='body--img' alt='oops'></img>
    </div>
  )
}


function NewMemeButton() {
  return (
    <div className='newMemeButton'>
      <button className='newMemeButton--button'>Generate New Meme</button>
    </div>
  )
}

function Footer() {
  return (
    <div className='footer'>
      <p className='footer--text'>Made with ❤️ by
        <a href='https://www.instagram.com/am_stylesrsa/' className='footer--link'> Arinaho </a>

      </p>
    </div>
  );
}



function App() {
  return (

    <div className="App">
      <NavBar />
      <Body />
      <NewMemeButton />
      <Footer />

    </div>
  );
}

const memeImage = "https://i.imgflip.com/1bij.jpg";

export default App;
