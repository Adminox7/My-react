import './style.css';

function comp1() {
  return (
    <div>
    {/* About section start */}
    <section className="about">
      <div className="main">
        <img src="./img/MON PHOTO.jpeg" alt="mon image" />
        <div className="about-text">
          <h2>About Me</h2>
          <h5>Developer <span>& Designer</span></h5>
          <p>
            Hello, I am Adam, I live in Morocco. I hold a programming certificate from vocational training, and I have
            received three months of training at rais_eau company in Arduino programming. I can also create websites with
            various designs.
          </p>
          <button type="button">Let's Talk</button>
        </div>
      </div>
    </section>
  </div>
  );
}

export default comp1;
