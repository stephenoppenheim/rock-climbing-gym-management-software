import './App.css'
import PublicHeader from './components/Headers/PublicHeader/PublicHeader';
import AppHeader from './components/Headers/AppHeader/AppHeader';
import SignIn from './components/SignIn/SIgnIn';
import SignInPage from './components/Pages/SignInPage';
import DashboardPage from './components/Pages/DashboardPage.jsx';
import { Routes, Route, Navigate } from 'react-router';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import CheckIn from './components/CheckIn/CheckIn.jsx';
import Climbers from './components/Climbers/Climbers.jsx';
import PointOfSale from './components/PointOfSale/PointOfSale.jsx';
import PendingDocuments from './components/PendingDocuments/PendingDocuments.jsx';
import Calendar from './components/Calendar/Calendar.jsx';


function App() {

  const isLoggedIn = false;

  return (
    <>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route index element={<Dashboard />} />
          <Route path="checkin" element={<CheckIn />} />
          <Route path="climbers" element={<Climbers />} />
          <Route path="pointofsale" element={<PointOfSale />} />
          <Route path="documents" element={<PendingDocuments />} />
          <Route path="calendar" element={<Calendar />} />
          // SUBROUTES WILL GO HERE - RESEARCH Outlet component
        </Route>
      </Routes>
    </>
  )
}

export default App
