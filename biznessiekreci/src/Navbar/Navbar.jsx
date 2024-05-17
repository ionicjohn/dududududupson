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


export default function Navbar() {
  const [value, setValue] = React.useState('one');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menuId, setMenuId] = React.useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // const [hoveredTab, setHoveredTab] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuId(null);
    // setHoveredTab(null);
  };

  const handleMouseEnter = (event, id) => {
    setAnchorEl(event.currentTarget);
    setMenuId(id);
    // setHoveredTab(id);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
    setMenuId(null);
    // setHoveredTab(null);
  };

  const handleMenuLeave = () => {
    setTimeout(() => {
      setAnchorEl(null);
      setMenuId(null);
      // setHoveredTab(null);
    }, 200);
  };

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <Box className="main-container">
      <img src="././logo.png" alt="Logo" style={{ marginRight: '20px' }} />
      <Box sx={{
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Tabs
          value={value}
          onChange={handleChange} 
          textColor="white"
          aria-label="tabs example"
          sx={{
            '.MuiTabs-flexContainer': {
              borderBottom: 'none', 
            },
            '.MuiButtonBase-root': {
              '&:hover, &.Mui-selected': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                outline: 'none', 
              },
              '&:focus': {
                outline: 'none', 
              },
              // ...(hoveredTab && {
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                }
              // }),
            },
            '.MuiTabs-indicator': {
              backgroundColor: '#ec1c64', 
            }
          }}
        >
          <Tab 
            value="one" 
            label="Home"
          />
          <Tab 
            value="two" 
            label="Clothes"
            onMouseEnter={(e) => handleMouseEnter(e, 'clothes')}
            // onMouseLeave={handleMouseLeave}
          />
          <Tab 
            value="three" 
            label="Accessories"
            onMouseEnter={(e) => handleMouseEnter(e, 'accessories')}
            // onMouseLeave={handleMouseLeave}
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
            <MenuItem className="clothes-menu-item" key="buty">buty</MenuItem>,
            <MenuItem className="clothes-menu-item" key="bluzy">bluzy</MenuItem>,
            <MenuItem className="clothes-menu-item" key="koszulki">koszulki</MenuItem>,
            <MenuItem className="clothes-menu-item" key="rekawiczki">rekawiczki</MenuItem>,
            <MenuItem className="clothes-menu-item" key="majtki">majtki</MenuItem>,
            <MenuItem className="clothes-menu-item" key="klapki">klapki</MenuItem>,
            <MenuItem className="clothes-menu-item" key="skarpetki">skarpetki</MenuItem>,
            <MenuItem className="clothes-menu-item" key="czapki">czapki</MenuItem> 
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
            <MenuItem className="accessories-menu-item" key="kubki">kubki</MenuItem>,
            <MenuItem className="accessories-menu-item" key="figurki">figurki</MenuItem>,
            <MenuItem className="accessories-menu-item" key="kawa">kawa</MenuItem>,
            <MenuItem className="accessories-menu-item" key="energetyki">energetyki</MenuItem>,
            <MenuItem className="accessories-menu-item" key="alkohol">alkohol</MenuItem>,
            <MenuItem className="accessories-menu-item" key="bransoletki">bransoletki</MenuItem>,
            <MenuItem className="accessories-menu-item" key="okularki">okularki</MenuItem>,
            <MenuItem className="accessories-menu-item" key="pierscionki">pierscionki</MenuItem>,
            <MenuItem className="accessories-menu-item" key="koguto-pierscionki">koguto pierscionki</MenuItem>,
            <MenuItem className="accessories-menu-item" key="chainy">chainy</MenuItem>,
            <MenuItem className="accessories-menu-item" key="przedmioty-legendarne">przedmioty LEGENDARNE</MenuItem>,

          ]}
        </Menu>
      </Box>

      <Box sx={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <TextField
          type="search"
          variant="outlined"
          placeholder="Search..."
          sx={{
            width: '200px', 
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: 'rgb(236,28,100)', 
                boxShadow: '0 0 5px rgba(255, 0, 0, 0.5)', 
                outline: 'none' 
              }
            }
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'white'}}/>
              </InputAdornment>
            ),
            style: {color:'white'}
          }}
        />
        <IconButton aria-label="shopping cart" sx={{
          color: 'white',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)'
          },
          '&:focus': {
            outline: 'none' 
          }
        }}>
          <ShoppingCartIcon />
        </IconButton>
        <IconButton aria-label="account box" 
          sx={{
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)'
            },
            '&:focus': {
              outline: 'none'
            }
          }}
          onMouseEnter={(e) => handleMouseEnter(e, 'account')}>
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
