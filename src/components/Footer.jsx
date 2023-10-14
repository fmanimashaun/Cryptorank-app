import { Container } from 'react-bootstrap';
import Style from 'assets/scss/footer.module.scss';

const Footer = () => (
  <Container fluid as="footer" className={`text-light py-1 ${Style.footer}`}>
    <p className="mb-0 text-center fw-bold">
      Made with ❤️ by
      {' '}
      <a
        href="https://github.com/fmanimashaun"
        target="_blank"
        rel="noopener noreferrer"
        className={Style.footer__link}
      >
        Engr. Animashaun Fisayo Michael
      </a>
    </p>
  </Container>
);

export default Footer;
