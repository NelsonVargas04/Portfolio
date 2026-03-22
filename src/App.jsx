import './App.css';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import { I18nProvider } from './contexts/i18n.jsx';
import Home from './pages/Home/Home.jsx';

export default function App() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <Home />
      </I18nProvider>
    </ThemeProvider>
  );
}
