'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import HeaderBar from '@/app/components/Layout/components/HeaderBar';
import { DrawerHeader } from '@/app/components/Layout/styled-components/DrawerHeader';
import SideBar from '@/app/components/Layout/components/SideBar';
import { Main } from '@/app/components/Layout/styled-components/Main';
import { useState } from 'react';

export const drawerWidth = 240;

export default function Layout({ children }) {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box className={'flex'}>
      <CssBaseline />
      <HeaderBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <SideBar open={open} handleDrawerClose={handleDrawerClose} />
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
}
