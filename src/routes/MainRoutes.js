import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DoctorDashboard = Loadable(lazy(() => import('pages/dashboard/DoctorDashboard')));
const PatientDashboard = Loadable(lazy(() => import('pages/dashboard/PatientDashbaord')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));
const DoctorMaster = Loadable(lazy(() => import('pages/doctormastercreation/DoctorMaster')));
const PatientList = Loadable(lazy(() => import('pages/patient/PatientList')));
const RoyaltyCardRagistration = Loadable(lazy(() => import('pages/patient/RoyaltyCardRegistration')));
const RoyaltyMemberReports = Loadable(lazy(() => import('pages/reports/RoyaltyMemberReports')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DoctorDashboard />
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'Doctor',
      children: [
        {
          path: 'dashboard',
          element: <DoctorDashboard />
        }
      ]
    },
    {
      path: 'Patient',
      children: [
        {
          path: 'dashboard',
          element: <PatientDashboard />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'typography',
      element: <Typography />
    },
    {
      path: 'icons/ant',
      element: <AntIcons />
    },
    {
      path: 'DoctorMaster',
      element: <DoctorMaster />
    },
    {
      path: 'PatientList',
      element: <PatientList />
    },
    {
      path: 'RoyaltyCardRagistration',
      element: <RoyaltyCardRagistration />
    },
    {
      path: 'RoyaltyMemberReports',
      element: <RoyaltyMemberReports />
    }
  ]
};

export default MainRoutes;
