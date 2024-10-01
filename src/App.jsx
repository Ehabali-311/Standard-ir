import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Sidebar from './layouts/Sidebar/Sidebar'
import OverviewPage from './pages/OverviewPage/OverviewPage'
import Profile from './pages/ProfilePage/Profile'
import MainTitle from './components/MainTitle/MainTitle'
import { useTranslation } from 'react-i18next'
import Footer from './layouts/Footer/Footer'
import BoardManagement from './pages/BoardManagementPage/BoardManagement'
import SharePerformance from './pages/SharePerformance/SharePerformance'
import FinancialInformation from './pages/FinancialInformation/FinancialInformation'
import InvestorsPresentation from './pages/InvestorsPresentation/InvestorsPresentation'
import Disclosures from './pages/Disclosures/Disclosures'
import CorprateActions from './pages/CorporateActions/CorprateActions'
import MajorShareholders from './pages/MajorShareholdersPage/MajorShareholders'
import BusinessSegment from './pages/BusinessSegementsPage/BusinessSegment'
import Projects from './pages/ProjectsPage/Projects'
import Mergers from './pages/MergersAsquistions/Mergers'
import Contact from './pages/ContactIR/Contact'

function App() {
    const {i18n} = useTranslation();
    const lang = i18n.language;
  return (
    <>
    <div className="container-fluid">
      <div className="row mt-3">
      <div className="col-lg-2">
          <Sidebar />
        </div>
        <div className="col-sm-12 col-lg-10">
          <MainTitle/>
          <Routes>
            <Route path={`/${lang}`}  element={<OverviewPage />} />
            <Route path={`/${lang}/profile`}  element={<Profile />} />
            <Route path={`/${lang}/boardmangagement`}  element={<BoardManagement />} />
            <Route path={`/${lang}/shareperformance`}  element={<SharePerformance />} />
            <Route path={`/${lang}/financialinformation`}  element={<FinancialInformation />} />
            <Route path={`/${lang}/investorspresentation`}  element={<InvestorsPresentation />} />
            <Route path={`/${lang}/disclosures`}  element={<Disclosures />} />
            <Route path={`/${lang}/corprateactions`}  element={<CorprateActions />} />
            <Route path={`/${lang}/majorshareholders`}  element={<MajorShareholders />} />
            <Route path={`/${lang}/businesssegment`}  element={<BusinessSegment />} />
            <Route path={`/${lang}/projects`}  element={<Projects />} />
            <Route path={`/${lang}/mergers`}  element={<Mergers />} />
            <Route path={`/${lang}/contacts`}  element={<Contact />} />
            <Route path='*' element={<Navigate to={`/${lang}`} />}/>
          </Routes>
        </div>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default App
