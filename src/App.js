import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Home from 'pages/Home';
import ErrorPage from 'pages/ErrorPage';
import ExchangerDetails from 'pages/ExchangerDetails';

const App = () => (
  <>
    <Header />
    <Container fluid as="main" className="main p-0">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<ExchangerDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Container>
    <Footer />
  </>
);

export default App;
