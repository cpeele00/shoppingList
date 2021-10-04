import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const Header = ({ title }) => (
  <AppBar
    sx={{
      bgcolor: '#4D81B7',
    }}>
    <Toolbar>
      <Typography component='div' sx={{ flexGrow: 1 }}>
        <h1>{title}</h1>
      </Typography>
    </Toolbar>
  </AppBar>
);
