
import './App.css';
import PublicHeader from './components/Headers/PublicHeader/PublicHeader';
import AppHeader from './components/Headers/AppHeader/AppHeader';
import SignInPage from './components/Pages/SigninPage/SignInPage.jsx';
import SignIn from './components/SignIn/SignIn.jsx';
import DashboardPage from './components/Pages/DashboardPage/DashboardPage.jsx';
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
import ParticipantAgreement from './components/CustomerAgreement/CustomerAgreement.jsx';
import CustomerInput from './components/CustomerInput/CustomerInput.jsx';
import { DocumentProvider } from './components/Context/DocumentContext.jsx';
import { AlertContext, AlertProvider } from './components/Context/AlertContext.jsx';
import Alert from './components/Alert/Alert.jsx';
import { CustomerProvider } from './components/Context/ClimberContext.jsx';
import LoadingPage from './components/Pages/LoadingPage/LoadingPage.jsx';
import QueryProvider from './components/Context/QueryContext.jsx';




function App() {

  const isLoggedIn = false;
  const [criticalIssueState, updateCriticalIssueState] = useState(criticalIssueData);

  window.addEventListener("resize", console.log(window.innerHeight, window.innerWidth))

  return (
    <>
      <QueryProvider>
        <CustomerProvider>
          <AlertProvider >
            <DocumentProvider>
              <CheckInProvider>
                <Routes>
                  <Route path="/" element={<SignInPage />}>
                    <Route index element={<SignIn />} />
                    <Route path="user-info" element={<CustomerInput />} />
                  </Route>
                  <Route path="agreement" element={<ParticipantAgreement />} />
                  <Route path="loading" element={<LoadingPage />} />
                  <Route path="/dashboard" element={<DashboardPage />}>
                    <Route index element={<Dashboard criticalIssueState={criticalIssueState} />} />
                    <Route path="checkin" element={<CheckIn />} />
                    <Route path="climbers" element={<Climbers />} />
                    <Route path="pointofsale" element={<PointOfSale />} />
                    <Route path="documents" element={<PendingDocuments />} />
                    <Route path="calendar" element={<Calendar />} />
                  </Route>
                </Routes>
                <Alert />
              </CheckInProvider>
            </DocumentProvider>
          </AlertProvider>
        </CustomerProvider>
      </QueryProvider>
    </>
  )
}

export default App
