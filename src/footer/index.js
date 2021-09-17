import FooterWrapper from "./index.styles";

function FooterContent() {
  return (
    <div>
      <span> e.osokin@innopolis.university </span>
      <a target="_blank" href="https://icons8.com/icon/RZSnN3dwr7cT/bird">
        Bird
      </a>{" "}
      icon by{" "}
      <a target="_blank" href="https://icons8.com">
        Icons8
      </a>
    </div>
  );
}

function Footer() {
  return (
    <FooterWrapper>
      <FooterContent />
    </FooterWrapper>
  );
}

export default Footer;
