// assets
import { LoginOutlined, ProfileOutlined, UsergroupAddOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined,
  UsergroupAddOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'authentication',
  title: 'Doctor Master',
  type: 'group',
  children: [
    {
      id: 'doctormaster',
      title: 'Doctor Master Creation',
      type: 'item',
      url: '/DoctorMaster',
      disabled: true,
      icon: icons.UsergroupAddOutlined
    }
    // target: false
    // },
    // {
    //   id: 'login1',
    //   title: 'Login',
    //   type: 'item',
    //   url: '/login',
    //   icon: icons.LoginOutlined,
    //   target: true
    // },
    // {
    //   id: 'register1',
    //   title: 'Register',
    //   type: 'item',
    //   url: '/register',
    //   icon: icons.ProfileOutlined,
    //   target: true
    // }
  ]
};

export default pages;
