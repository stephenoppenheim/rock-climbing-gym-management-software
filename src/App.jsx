
import './App.css';
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
import { CheckInProvider } from './components/Context/CheckInContext.jsx';
import criticalIssueData from "./assets/critical-issue-data.json";
import pendingDocumentsData from "./assets/pending-documents-data.json";
import { useState } from 'react';


function App() {

  const isLoggedIn = false;
  const [criticalIssueState, updateCriticalIssueState] = useState(criticalIssueData);
  const [pendingDocumentsState, updatePendingDocumentsState] = useState(pendingDocumentsData);

  return (
    <>
      <CheckInProvider>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/dashboard" element={<DashboardPage />}>
            <Route index element={<Dashboard criticalIssueState={criticalIssueState} pendingDocumentsState={pendingDocumentsState}/>} />
            <Route path="checkin" element={<CheckIn />} />
            <Route path="climbers" element={<Climbers />} />
            <Route path="pointofsale" element={<PointOfSale />} />
            <Route path="documents" element={<PendingDocuments />} />
            <Route path="calendar" element={<Calendar />} />
          </Route>
        </Routes>
      </CheckInProvider>
    </>
  )
}

export default App
