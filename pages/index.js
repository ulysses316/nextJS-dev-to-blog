import ResponsiveAppBar from '../components/Navbar';
import { Container } from '@mui/material';

export default function Home() {
  return (
    <>
      <ResponsiveAppBar />
      <Container>
        <h1>Bienvenidos al taller de UTOPICODE</h1>
      </Container>
    </>
  )
}
