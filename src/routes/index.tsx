import React from 'react';
import { Route, Routes  } from 'react-router-dom';

import SignIn from '../pages/login';
import Register from '../pages/register';

const Rotas = () => {
    return (
        <Routes> 
            <Route  path='/' element={<SignIn />} />
            <Route  path='/register' element={<Register />} />
        </Routes>
    )
}

export default Rotas;
