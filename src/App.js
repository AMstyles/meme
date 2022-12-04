import './App.css';
import React from 'react';




let currMeme = 1;


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

function MemeThingy() {

  const [meme, setMemes] = React.useState(["meme 0"]);


  function addMeme() {

    setMemes([...meme, `meme ${currMeme}`]);
    //console.log(meme);
    currMeme++;
  }

  function NewMemeButton() {
    return (
      <div className='newMemeButton'>
        <button className='newMemeButton--button' onClick={addMeme}>Generate New Meme</button>
      </div>
    )
  }

  return (<><ul>

    {meme.map(m => <li key={m}>{m}</li>)}

  </ul>
    <NewMemeButton />
  </>)
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
      <MemeThingy />
      {/* <NewMemeButton /> */}
      <Footer />

    </div>
  );
}

const memeImage = "https://i.imgflip.com/1bij.jpg";

export default App;
