// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //
var auth = JSON.parse(sessionStorage.getItem('token-info'));
if (auth != null) {
  var navigation = auth.IsDoc === 0 ? '/doctor/dashboard' : '/patient/dashboard';
}

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: navigation,
      disabled: false,
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
