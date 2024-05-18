// assets
import {
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined,
  UserOutlined
} from '@ant-design/icons';

// icons
const icons = {
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined,
  UserOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const patient = {
  id: 'patient',
  title: 'Patient',
  type: 'group',
  children: [
    // {
    //   id: 'util-typography',
    //   title: 'Typography',
    //   type: 'item',
    //   url: '/typography',
    //   icon: icons.FontSizeOutlined
    // },
    {
      id: 'patientList',
      title: 'All Patient List',
      type: 'item',
      url: '/patientlist',
      disabled: true, //If show this menu.
      icon: icons.UserOutlined
    },
    {
      id: 'royaltyCardRagistration',
      title: 'Royalty Card Ragistration',
      type: 'item',
      url: '/royaltyCardRagistration',
      icon: icons.UserOutlined
    }
    // {
    //   id: 'util-color',
    //   title: 'Color',
    //   type: 'item',
    //   url: '/color',
    //   icon: icons.BgColorsOutlined
    // },
    // {
    //   id: 'util-shadow',
    //   title: 'Shadow',
    //   type: 'item',
    //   url: '/shadow',
    //   icon: icons.BarcodeOutlined
    // },
    // {
    //   id: 'ant-icons',
    //   title: 'Ant Icons',
    //   type: 'item',
    //   url: '/icons/ant',
    //   icon: icons.AntDesignOutlined,
    //   breadcrumbs: false
    // }
  ]
};

export default patient;
