import * as React from 'react';
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './Navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [value, setValue] = React.useState('one');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menuId, setMenuId] = React.useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuId(null);
  };

  const handleClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    setMenuId(id);
  };

  const handleMenuLeave = () => {
    setTimeout(() => {
      setAnchorEl(null);
      setMenuId(null);
    }, 200);
  };

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const menuOpen = Boolean(anchorEl) && menuId === 'account';
  
  return (
    <Box className="main-container">
      <img src="././logo.png" alt="Logo" style={{ marginRight: '20px' }} />
      <Box sx={{
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Tabs
          className='tabs'
          value={value}
          onChange={handleChange} 
          aria-label="tabs example"
        >
          <Tab
            className='tabs-tab'
            value="one"
            label="Home"
            href='/home'
          />
          <Tab
            className='tabs-tab'
            value="two"
            label="Clothes"
            //href='/clothes'
            onMouseEnter={(e) => handleMouseEnter(e, 'clothes')}
            //onMouseLeave={handleMouseLeave}
          />
          <Tab
            className='tabs-tab'
            value="three"
            label="Accessories"
            //href='/accessories'
            onMouseEnter={(e) => handleMouseEnter(e, 'accessories')}
            //onMouseLeave={handleMouseLeave}
          />
          <Tab 
            value="four" 
            label="Food"
            //href='/food'
            onMouseEnter={(e) => handleMouseEnter(e, 'food')}
            //onMouseLeave={handleMouseLeave}
          />
        </Tabs>
        <Menu
          className='clothes-menu'
          anchorEl={anchorEl}
          open={Boolean(anchorEl) && menuId === 'clothes'}
          onClose={handleClose}
          MenuListProps={{
            onMouseLeave: handleMenuLeave,
            onMouseEnter: () => clearTimeout(),
          }}
          autoFocus={false}
        >
          {[
            <a href='/clothes#buty'><MenuItem className="clothes-menu-item" key="buty">buty</MenuItem></a>,
            <a href='/clothes#bluzy'><MenuItem className="clothes-menu-item" key="bluzy">bluzy</MenuItem></a>,
            <a href='/clothes#koszulki'><MenuItem className="clothes-menu-item" key="koszulki">koszulki</MenuItem></a>,
            <a href='/clothes#rekawiczki'><MenuItem className="clothes-menu-item" key="rekawiczki">rekawiczki</MenuItem></a>,
            <a href='/clothes#majtki'><MenuItem className="clothes-menu-item" key="majtki">majtki</MenuItem></a>,
            <a href='/clothes#klapki'><MenuItem className="clothes-menu-item" key="klapki">klapki</MenuItem></a>,
            <a href='/clothes#skarpetki'><MenuItem className="clothes-menu-item" key="skarpetki">skarpetki</MenuItem></a>,
            <a href='/clothes#czapki'><MenuItem className="clothes-menu-item" key="czapki">czapki</MenuItem> </a>
          ]}
        </Menu>
        <Menu
          className="accessories-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl) && menuId === 'accessories'}
          onClose={handleClose}
          MenuListProps={{
            onMouseLeave: handleMenuLeave,
            onMouseEnter: () => clearTimeout(),
          }}
          autoFocus={false}
        >
          {[
            <a href='/accessories#okularki'><MenuItem className="accessories-menu-item" key="okularki">okularki</MenuItem></a>,
            <a href='/accessories#bransoletki'><MenuItem className="accessories-menu-item" key="bransoletki">bransoletki</MenuItem></a>,
            <a href='/accessories#pierscionki'><MenuItem className="accessories-menu-item" key="pierscionki">pierscionki</MenuItem></a>,
            <a href='/accessories#kogutoPierscionki'><MenuItem className="accessories-menu-item" key="koguto-pierscionki">koguto pierscionki</MenuItem></a>,
            <a href='/accessories#chainy'><MenuItem className="accessories-menu-item" key="chainy">chainy</MenuItem></a>,
            <a href='/accessories#kubki'><MenuItem className="accessories-menu-item" key="kubki">kubki</MenuItem></a>,
            <a href='/accessories#figurki'><MenuItem className="accessories-menu-item" key="figurki">figurki</MenuItem></a>,
            <a href='/accessories#legendarne'><MenuItem className="accessories-menu-item" key="przedmioty-legendarne">przedmioty LEGENDARNE</MenuItem></a>,

          ]}
        </Menu>
        <Menu
          className="food-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl) && menuId === 'food'}
          onClose={handleClose}
          MenuListProps={{
            onMouseLeave: handleMenuLeave,
            onMouseEnter: () => clearTimeout(), 
          }}
          autoFocus={false}
        >
          {[
            <a href='/food#kawa'><MenuItem className="food-menu-item" key="kawa">kawa</MenuItem></a>,
            <a href='/food#kenergetyki'><MenuItem className="food-menu-item" key="energetyki">energetyki</MenuItem></a>,
            <a href='/food#kalkohol'><MenuItem className="food-menu-item" key="alkohol">alkohol</MenuItem></a>,

          ]}
        </Menu>
      </Box>

      <Box sx={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <TextField
          className='search-field'
          type="search"
          variant="outlined"
          placeholder="Search..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: '#bfbfbf' }} />
              </InputAdornment>
            ),
            style: { color: 'black' }
          }}
        />
        <IconButton className='shopping-iconBtn' aria-label="shopping cart" sx={{ color: '#7091e6' }}>
          <ShoppingCartIcon />
        </IconButton>

        <IconButton 
        aria-label="account box" 
        className='account-iconBtn' 
        onClick={(e) => handleClick(e, 'account')} 
        sx={{ color: menuOpen ? '#3d52a0' : '#7091e6' }}
        >
          <AccountBoxIcon />
        </IconButton>

        <Menu
          className='account-menu'
          anchorEl={anchorEl}
          open={Boolean(anchorEl) && menuId === 'account'}
          onClose={handleClose}
          MenuListProps={{
            onMouseLeave: handleMenuLeave,
            onMouseEnter: () => clearTimeout(),
          }}
        >
          {isLoggedIn ? (
            [
              <MenuItem className='account-menu-items' key="my-account" onClick={handleClose}>My account</MenuItem>,
              <MenuItem className='account-menu-items' key="my-orders" onClick={handleClose}>My orders</MenuItem>,
              <MenuItem className='account-menu-items' key="settings" onClick={handleClose}>Settings</MenuItem>,
              <MenuItem className='account-menu-items' key="logout" onClick={toggleLogin}>Logout</MenuItem>
            ]
          ) : (
            [
              <MenuItem className='account-menu-items' key="login" onClick={handleClose}>Login</MenuItem>,
              <MenuItem className='account-menu-items' key="register" onClick={handleClose}>Register</MenuItem>
            ]
          )}
        </Menu>
      </Box>
    </Box>
  );
}
