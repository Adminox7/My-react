import './style.css';

function Menu() {
  return (
    <div className="hero">
    <nav>
      <h2 className="logo">Portfo<span>lio</span></h2>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
      <a href="#" className="btn">Subscribe</a>
    </nav>
    <div className="content">
      <h4>Hello, my name is</h4>
      <h1>Adam <span>Mait</span></h1>
      <h3>I'm a Web Developer</h3>
      <div className="newsletter">
        <form className='formG'>
          <input type="email" name="email" id="mail" placeholder="Enter Your Email" className='form1'/>
          <input type="submit" name="submit" value="Let's Start" className='form2'/>
        </form>
      </div>
    </div>
  </div>
);
      
}

export default Menu;
