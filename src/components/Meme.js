const Meme = () => {
  return (
    <>
      <div className="form">
        <div className="form-textbox">
          <input type="text" placeholder="Top Text" />
          <input type="text" placeholder="Bottom Text" />
        </div>
        <button >Get a new meme image 🖼</button>
      </div>
      <div className="meme-result">
        <img src="" />
      </div>
    </>
  );
};
export default Meme;
