import './App.css';
import LandingMenu from './components/LandingMenu';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <LandingMenu />
    </ErrorBoundary>
  );
}

export default App;
