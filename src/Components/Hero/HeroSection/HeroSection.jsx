import "./heroSection.css";

function HeroSection({ content, button, className ="" }) {
  return (
    /* Always use hero-section, and if className is present, add its value too. */
    <div className={`hero-section ${className}`}>
      <h1 className="hero-title">{content.title}</h1>
      <p className="hero-description">{content.description}</p>
      {button && <div className="hero-button">{button}</div>}

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
        <div>{content.icon1}</div>
        <div style={{ fontSize: "40px", color: "white" }}>{content.icon2}</div>
        <div style={{ fontSize: "40px", color: "white" }}>{content.icon3}</div>
      </div>
    </div>
  );
}
export default HeroSection;
