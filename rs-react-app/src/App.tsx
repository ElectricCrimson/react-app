import { Header } from './components/header/header';
import { Main } from './components/main/main';
import './App.css';
import { ErrorBoundary } from './components/error/errorBoundary';

function App() {
  return (
    <>
      <ErrorBoundary>
        <div className="wrapper-app">
          <Header />
          <Main />
        </div>
      </ErrorBoundary>
    </>
  );
}

export default App;
