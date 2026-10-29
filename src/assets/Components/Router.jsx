import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from '../Pages/Home';
import Events from '../Pages/Events';
import Contact from '../Pages/Contact';
import Children from '../Pages/MInistries/Children';
import Youth from '../Pages/MInistries/Youth';
import Mothers from '../Pages/MInistries/Mothers';
import Kama from '../Pages/MInistries/Kama';  
import about from '../Pages/About';           

function Router () {
    return (
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<about />} />
            <Route path="/ministries/children" element={<Children />} />
            <Route path="/ministries/youth" element={<Youth />} />
            <Route path="/ministries/mothers" element={<Mothers />} />
            <Route path="/ministries/kama" element={<Kama />} />  
          </Route>
        </Routes>
      </BrowserRouter>
    );
}
export default Router;