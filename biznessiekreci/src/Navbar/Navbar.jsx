import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search'; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export default function Navbar() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{
      width: '100%', 
      display: 'flex', 
      alignItems: 'center', 
      padding: '0px', 
      marginBottom: '2.5%',  
      justifyContent: 'space-between'
    }}>
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
              '&:focus': {
                outline: 'none', 
                backgroundColor: 'rgba(255, 255, 255, 0.1)', 
              }
            },
            '.MuiTabs-indicator': {
              backgroundColor: '#ec1c64', 
            }
          }}
        >
          <Tab value="one" label="Home" />
          <Tab value="two" label="Clothes" />
          <Tab value="three" label="Accessories" />
        </Tabs>
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
        <IconButton aria-label="account box" sx={{
          color: 'white',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)'
          },
          '&:focus': {
            outline: 'none'
          }
        }}>
          <AccountBoxIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
