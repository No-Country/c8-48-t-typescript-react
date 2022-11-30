import { Box } from '@mui/material/';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ScholarshipsSection from './ScholarshipsSection';
import Footer from './Footer';
import PackagesSection from './PackagesSection';
import HelpSection from './HelpSection';
const Home = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>
      <HeroSection />
      <AboutSection />
      <ScholarshipsSection />
      <PackagesSection />
      <HelpSection />
      <Footer />
    </Box>
  );
};

export default Home;
