import Box from '@mui/material/Box'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <>
      <Header />
      <Box sx={{
        display: 'flex',
      }}>
        <Sidebar />
        <Box>
          <h1>Contatos</h1>
          <p>E-mail: js.bugs@gmail.com</p>
          <p>Tel: 0000-0000</p>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default About