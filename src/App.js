
import { Box, dividerClasses } from '@mui/material';
import './App.css';
 import  Header from "./components/Header"
 import ProductList from './components/ProductList';
function App() {
  return (
<Box >
  <Header/>
  <Box sx ={{margin:"20px"}}>

 <ProductList/>
  </Box>





</Box>
  );
}
  
export default App;
