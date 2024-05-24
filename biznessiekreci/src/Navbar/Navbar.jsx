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

const categories = [
  {
    id: 'clothes',
    name: 'Clothes',
    subCategories: [
      { id: 1, name: "buty" },
      { id: 2, name: "bluzy" },
      { id: 3, name: "koszulki" },
      { id: 4, name: "rekawiczki" },
      { id: 5, name: "majtki" },
      { id: 6, name: "klapki" },
      { id: 7, name: "skarpetki" },
      { id: 8, name: "czapki" }
    ]
  },
  {
    id: 'accessories',
    name: 'Accessories',
    subCategories: [
      { id: 1, name: "okularki" },
      { id: 2, name: "bransoletki" },
      { id: 3, name: "pierscionki" },
      { id: 4, name: "koguto pierscionki" },
      { id: 5, name: "chainy" },
      { id: 6, name: "kubki" },
      { id: 7, name: "figurki" },
      { id: 8, name: "przedmioty LEGENDARNE" }
    ]
  },
  {
    id: 'food',
    name: 'Food',
    subCategories: [
      { id: 1, name: "kawa" },
      { id: 2, name: "energetyki" },
      { id: 3, name: "alkohol" }
    ]
  }
];

export default function Navbar() {
  const [value, setValue] = React.useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menuId, setMenuId] = React.useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setMenuId(newValue);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuId(null);
  };

  const handleClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    setMenuId(id === value ? null : id);
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

  const menuOpen = Boolean(anchorEl) && menuId !== null;

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleCartClick = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuId('cart');
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
          className='tabs'
          value={value}
          onChange={handleChange} 
          aria-label="tabs example"
        >
          {categories.map(category => (
            <Tab
              key={category.id}
              className='tabs-tab'
              value={category.id}
              label={category.name}
              onClick={(e) => handleClick(e, category.id)}
            />
          ))}
        </Tabs>
        {categories.map(category => (
          <Menu
            key={category.id}
            className={`${category.id}-menu`}
            anchorEl={anchorEl}
            open={Boolean(anchorEl) && menuId === category.id}
            onClose={handleClose}
            MenuListProps={{
              onMouseLeave: handleMenuLeave,
              onMouseEnter: () => clearTimeout(),
            }}
            autoFocus={false}
          >
            {category.subCategories.map(subCategory => (
              <a key={subCategory.id} href={`/${category.id}#${subCategory.id}`}>
                <MenuItem className={`${category.id}-menu-item`} key={subCategory.id}>{subCategory.name}</MenuItem>
              </a>
            ))}
          </Menu>
        ))}
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
        <IconButton className='shopping-iconBtn' aria-label="shopping cart" sx={{ color: '#7091e6' }} onClick={handleCartClick}>
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

        <Menu
          className='cart-menu'
          anchorEl={anchorEl}
          open={Boolean(anchorEl) && menuId === 'cart'}
          onClose={handleClose}
          MenuListProps={{
            onMouseLeave: handleMenuLeave,
            onMouseEnter: () => clearTimeout(),
          }}
        >
          {cartItems.length > 0 ? (
            <>
              {cartItems.map((item, index) => (
                <MenuItem key={index} className='cart-menu-item'>
                  {item.name} - ${item.price}
                </MenuItem>
              ))}
              <MenuItem className='cart-menu-item'>
                <button onClick={() => alert('Proceeding to purchase')}>Proceed to Purchase</button>
              </MenuItem>
            </>
          ) : (
            <MenuItem className='cart-menu-item'>Cart is empty</MenuItem>
          )}
        </Menu>
      </Box>
    </Box>
  );
}