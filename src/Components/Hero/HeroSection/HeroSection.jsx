import "./heroSection.css";

function HeroSection({content, button}) {

  return (
    <div className="hero-section">
      <h1 className="hero-title">{content.title}</h1>
      <p className="hero-description">{content.description}</p>
      {button && <div className="hero-button">{button}</div>}
    </div>
  );
}
export default HeroSection;