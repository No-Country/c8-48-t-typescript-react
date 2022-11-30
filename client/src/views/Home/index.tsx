import { Box } from '@mui/material/';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ScholarshipsSection from './ScholarshipsSection';
import Footer from './Footer';

const Home = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>
    <HeroSection />
    <AboutSection />
    <ScholarshipsSection />
    <Footer />
  </Box>
);

export default Home;
