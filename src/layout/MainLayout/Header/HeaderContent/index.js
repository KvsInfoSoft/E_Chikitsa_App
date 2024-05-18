// material-ui
import { Box, /*IconButton, Link,*/ useMediaQuery } from '@mui/material';
// import { UnlockOutlined} from '@ant-design/icons';
// import LockResetIcon from '@mui/icons-material/LockReset';

// project import
import Search from './Search';
import Profile from './Profile';
// import Notification from './Notification';
import MobileSection from './MobileSection';
import ChangePassword from '../../../../pages/changepassword/chnagePassword';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <>
      {!matchesXs && <Search />}
      {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}

      {/* <IconButton
        component={Link}
        href="https://github.com/codedthemes/E_Chikitsa_app"
        target="_blank"
        disableRipple
        color="secondary"
        title="Download   Version"
        sx={{ color: 'text.primary', bgcolor: 'grey.100' }}
      >
        <GithubOutlined />
      </IconButton> */}

      <ChangePassword />
      {/* <Notification /> */}
      {!matchesXs && <Profile />}
      {matchesXs && <MobileSection />}
    </>
  );
};

export default HeaderContent;
