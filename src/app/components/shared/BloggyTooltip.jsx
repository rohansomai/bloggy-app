import React from 'react';
import { styled } from '@mui/material/styles';
import { Tooltip, tooltipClasses } from '@mui/material';
import { theme } from '@/app/components/shared/theme';

const BloggyTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} arrow={true} placement="bottom-start" />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 700,
    backgroundColor: theme.palette.primary.main,
    '& .MuiTooltip-arrow': {
      color: theme.palette.primary.main,
    },
  },
});

export default BloggyTooltip;
