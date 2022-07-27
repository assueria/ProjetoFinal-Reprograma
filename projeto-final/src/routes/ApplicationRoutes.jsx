import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from '../components/Menu/Menu'
import Contribua from '../pages/Contribua/Contribua'
import Home from '../pages/Home/Home'
import OndeEstivemos from '../pages/OndeEstivemos/OndeEstivemos'
import Sobre from '../pages/Sobre/Sobre'

function ApplicationRoutes(){
    return(
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='sobre' element={<Sobre />} />
                <Route path='contribua' element={<Contribua />} />
                <Route path='ondeestivemos' element={<OndeEstivemos />} />
            </Routes>
        </BrowserRouter>     
    )
}

export default ApplicationRoutes