import {Container} from 'react-bootstrap'
import Footer from "./components/Footer";
import Header from "./components/Header";



const App = () => { 
 return (
  <>
    <Header />
    <main>
      <Container>
       <HomeScreen />
      </Container>
    </main>
    <Footer />
  </>
 );
 }

export default App;
