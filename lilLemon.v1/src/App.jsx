import { useState } from 'react'
import Navbar from "./components/Navbar"
import Home from "./pages/home/Home"
import OutOfScope from './pages/OutOfScope'
import Error404 from './pages/Error404'
import HomeLayout from './pages/home/HomeLayout'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from "@mui/material";
import {RATLayout, Summary, Confirmation, GuestInfo, DateTimeGuests} from './pages/reserveATable/index'
//BrowserRouter Routes Route Link Outlet useParams 
import { Routes, Route } from 'react-router-dom'


import './App.css'

function App() {
const newTheme = (theme) => createTheme({
    ...theme,
    components: 
        {
            MuiPickersToolbar: {
                styleOverrides: {
                    root: {
                        color: '#343344',
                        borderRadius: 2,
              }
        }
      }
    },
  }
  )
  

  return (
    <>
<ThemeProvider theme={newTheme}>
    
     <Routes>
          <Route path="/" element={<HomeLayout />}/>
          <Route path="/reserveATable" element={<RATLayout />}>
              <Route index element={<DateTimeGuests />}/>
              <Route path="guestInfo" element={<GuestInfo />}/>
              <Route path="summary" element={<Summary />}/>
              <Route path="confirmation" element={<Confirmation />}/>
          </Route>
          <Route path='/OOS' element={<OutOfScope />}/>
          <Route path='*' element={<Error404 />}/>
     </Routes> 

 </ThemeProvider>
    </>
  )
}


export default App
