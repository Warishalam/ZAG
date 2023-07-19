import React from 'react'
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import { Mobile } from '../components/Mobile'
import Form_components from '../components/Form_components'
import Dashboard from '../components/Dashboard'

const Allroutes = () => {
  return (
    <>
        <div>
            <Routes>
                <Route path='/' element={<Mobile/>}/>
                <Route path='/form_components' element={<Form_components/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
            </Routes>
        </div>
    </>
  )
}

export default Allroutes