import Counter from 'features/counter/Counter';

const App = () => (
  <>
    <header className="header">
      <Counter />
    </header>
    <main className="main">
      <h1>React Redux Template</h1>
    </main>
    <footer className="footer">
      <p>
        Made with
        {' '}
        <span role="img" aria-label="heart">
          ❤️
        </span>
        {' '}
        by
        {' '}
        <a href="https://github.com/fmanimashaun" target="_blank" rel="noopener noreferrer">
          Engr. Animashaun Fisayo Michael
        </a>
      </p>
    </footer>
  </>
);

export default App;
