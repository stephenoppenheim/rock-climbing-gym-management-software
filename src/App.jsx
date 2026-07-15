
import './App.css';
import PublicHeader from './components/Headers/PublicHeader/PublicHeader';
import AppHeader from './components/Headers/AppHeader/AppHeader';
import SignInPage from './components/Pages/SignInPage';
import SignIn from './components/SignIn/SignIn.jsx';
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
import { useContext, useState } from 'react';
import ParticipantAgreement from './components/ParticipantAgreement/ParticipantAgreement.jsx';
import CustomerInput from './components/CustomerInput/CustomerInput.jsx';
import { DocumentProvider } from './components/Context/DocumentContext.jsx';
import { ToastContext, ToastProvider } from './components/Context/ToastContext.jsx';
import Toast from './components/Toast/Toast.jsx';




function App() {

  const isLoggedIn = false;
  const [criticalIssueState, updateCriticalIssueState] = useState(criticalIssueData);

  return (
    <>
      <ToastProvider >
        <DocumentProvider>
          <CheckInProvider>
            <Routes>
              <Route path="/" element={<SignInPage />}>
                <Route index element={<SignIn />} />
                <Route path="user-info" element={<CustomerInput />} />
                <Route path="agreement" element={<ParticipantAgreement />} />
              </Route>
              <Route path="/dashboard" element={<DashboardPage />}>
                <Route index element={<Dashboard criticalIssueState={criticalIssueState} />} />
                <Route path="checkin" element={<CheckIn />} />
                <Route path="climbers" element={<Climbers />} />
                <Route path="pointofsale" element={<PointOfSale />} />
                <Route path="documents" element={<PendingDocuments />} />
                <Route path="calendar" element={<Calendar />} />
              </Route>
            </Routes>
            <Toast />
          </CheckInProvider>
        </DocumentProvider>
      </ToastProvider>
    </>
  )
}

export default App
