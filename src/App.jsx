import './App.css'
import PublicHeader from './components/Headers/PublicHeader/PublicHeader';
import AppHeader from './components/Headers/AppHeader/AppHeader';
import SignIn from './components/SignIn/SIgnIn';
import SignInPage from './components/Pages/SignInPage';
import { Routes, Route, Navigate } from 'react-router';

function App() {

  const isLoggedIn = false;

  return (
    <>
      <Routes>
        <Route path="/" element={<SignInPage />} />
      </Routes>
    </>
  )
}

export default App
