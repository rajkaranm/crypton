import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import './App.css'
// import Tools from './Pages/Tools';
import Homepage from './Pages/Homepage';
import Tools from "./tools/Tools";

import { Provider } from 'react-redux';
import store from "./tools/app/store";
import CryptocurrencyPage from "./tools/pages/CryptocurrencyPage";
import CryptoDetailsPage from "./tools/pages/CryptoDetailsPage";
import Newspage from "./tools/pages/Newspage";

const App = () => {
  return (
    <div className='App'>
      <Provider store={store}>

      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homepage />}>  </Route>
          <Route exact path='/tools' element={<Tools />}>  </Route>
          {/* <Route exact path='/exchanges' element={<Exchanges />}>  </Route> */}
          <Route exact path='/cryptocurrencies' element={<CryptocurrencyPage />}> </Route>
          <Route exact path='/crypto/:coinId' element={<CryptoDetailsPage />}> </Route>
          <Route exact path='/news' element={<Newspage />}>  </Route>
        </Routes>
      </BrowserRouter>
      </Provider>


    </div>
  )
}

export default App
