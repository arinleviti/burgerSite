import "./heroSection.css";

function HeroSection({content}) {

  return (
    <div className="hero-section">
      <h1 className="hero-title">{content.title}</h1>
      <p className="hero-description">{content.description}</p>
    </div>
  );
}
export default HeroSection;