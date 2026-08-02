import { useTheme } from './hooks/useTheme';
import { useLang } from './hooks/useLang';
import ThemeToggle from './components/ThemeToggle';
import LangToggle from './components/LangToggle';
import ScrollProgress from './components/ScrollProgress';
import DotNav from './components/DotNav';
import Hero from './sections/Hero';
import StatsStrip from './sections/StatsStrip';
import About from './sections/About';
import Timeline from './sections/Timeline';
import Projects from './sections/Projects';
import Team from './sections/Team';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const { dark, toggle } = useTheme();
  const { lang, setLang, t } = useLang();

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="overflow-x-hidden bg-cream dark:bg-noir text-ink dark:text-cream transition-colors duration-500">
        <ScrollProgress />
        <DotNav />
        <LangToggle lang={lang} setLang={setLang} />
        <ThemeToggle dark={dark} toggle={toggle} />
        <main>
          <Hero t={t} />
          <StatsStrip />
          <About t={t} />
          <Timeline t={t} />
          <Projects t={t} />
          <Team t={t} />
          <Contact t={t} />
        </main>
        <Footer t={t} />
      </div>
    </div>
  );
}

export default App;