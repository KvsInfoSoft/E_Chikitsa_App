// material-ui
import { CardMedia, Stack, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// assets
import avatar from 'assets/images/icons/E_Chikitsa.jpeg';
// import AnimateButton from 'components/@extended/AnimateButton';

// ==============================|| DRAWER CONTENT - NAVIGATION CARD ||============================== //

const NavCard = () => (
  <MainCard sx={{ bgcolor: 'grey.50', m: 3 }}>
    <Stack alignItems="center" spacing={2.5}>
      <CardMedia component="img" image={avatar} sx={{ width: 200 }} />
      <Stack alignItems="center">
        <Typography variant="subtitle2" color="secondary" component="span">
          E_Chikitsa Healthcare Solution
        </Typography>
      </Stack>
      {/* <AnimateButton>
        <Button component={Link} target="_blank" href="https://E_Chikitsadashboard.io" variant="contained" color="success" size="small">
          Pro
        </Button>
      </AnimateButton> */}
    </Stack>
  </MainCard>
);

export default NavCard;
