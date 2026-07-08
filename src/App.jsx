import './App.css'
import PublicHeader from './components/Headers/PublicHeader/PublicHeader';
import AppHeader from './components/Headers/AppHeader/AppHeader';
import SignIn from './components/SignIn/SIgnIn';
import SignInPage from './components/Pages/SignInPage';
import DashboardPage from './components/Pages/DashboardPage.jsx';
import { Routes, Route, Navigate } from 'react-router';


function App() {

  const isLoggedIn = false;

  return (
    <>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/dashboard" element={<DashboardPage />}>
          // SUBROUTES WILL GO HERE - RESEARCH Outlet component
        </Route>
      </Routes>
    </>
  )
}

export default App
