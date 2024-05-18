import { SolutionOutlined } from '@ant-design/icons';
const icons = { SolutionOutlined };

const reports = {
  id: 'reports',
  title: 'Reports',
  type: 'group',
  children: [
    {
      id: 'royaltycardMemberReports',
      title: 'Royalty Card Member Report',
      type: 'item',
      url: '/royaltyMemberReports',
      disabled: false, //If show this menu.
      icon: icons.SolutionOutlined
    }
  ]
};

export default reports;
