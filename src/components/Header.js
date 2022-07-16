import logo from '../assets/Troll Face.png';

const Header = () => {
  return (<header>
    <div className="logo-container">
      <img src={logo}/>
      <p>Meme Generator</p>
    </div>
    <div>
      <p className="header-text">React Course - Project 3</p>
    </div>
  </header>);
};
export default Header;
