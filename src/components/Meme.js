import memeData from "../assets/memeData";
import { useState } from "react";

const Meme = () => {
  const [memeImage, setMeme] = useState("https://i.imgflip.com/30b1gx.jpg");

  const getMemeImage = () => {
    const memeArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);

    setMeme(() => {
      return memeArray[randomNumber].url;
    });
  };

  return (
    <>
      <div className="form">
        <div className="form-textbox">
          <input type="text" placeholder="Top Text" />
          <input type="text" placeholder="Bottom Text" />
        </div>
        <button onClick={getMemeImage}>Get a new meme image 🖼</button>
      </div>
      <div className="meme-result">
        <img className="meme" src={memeImage} />
      </div>
    </>
  );
};
export default Meme;
