import React, { useState } from 'react';
import { TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Clear } from '@mui/icons-material';

const BloggyTextField = ({ placeholder, startAdornment, value, setValue, onEnter, handleClearClick }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    event.key === 'Enter' && onEnter();
  };

  return (
    <TextField
      size={'small'}
      placeholder={placeholder}
      className={`mx-auto w-1/2 border-none rounded-xl ${isFocused ? 'bg-white shadow ' : 'bg-bg-gray'}`}
      InputProps={{
        startAdornment: startAdornment,
        className: 'rounded-xl',
        endAdornment: (
          <IconButton sx={{ visibility: value ? 'visible' : 'hidden' }} onClick={handleClearClick}>
            <Clear />
          </IconButton>
        ),
      }}
      inputProps={{ className: 'pl-2' }}
      onFocus={handleFocus}
      onBlur={handleBlur}
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default BloggyTextField;
