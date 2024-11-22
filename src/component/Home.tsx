import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputBase from '@mui/material/InputBase';
import AdbIcon from '@mui/icons-material/Adb';
import SearchIcon from '@mui/icons-material/Search';
import CocktailList from './CocktailList';
import IngredientList from './IngredientList';
import '../App.css'

export const Home = () => {

  return (
    <>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Box sx={{ flexGrow: 0 }}>
          <Typography variant="h6" noWrap sx={{ marginRight: 6 }}>
            {"Leisy"}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap>
            {"leisysado@gmail.com"}
          </Typography>
        </Box>
          <div className="search-container">
            <div className="search">
              <div className="search-icon-wrapper">
                <SearchIcon />
              </div>
              <InputBase
                className="styled-input-base"
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
    <CocktailList/>
    <IngredientList/>
  </>
  );
};
