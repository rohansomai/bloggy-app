import React from 'react';
import ListItem from '@mui/material/ListItem';
import Link from 'next/link';
import ListItemButton from '@mui/material/ListItemButton';
import { ListItemIcon, ListItemText } from '@mui/material';

const SideBarItem = ({ sidebarItem }) => {
  const { title, id, icon, path } = sidebarItem;
  return (
    <ListItem key={id} disablePadding>
      <Link href={path} className={'w-full'}>
        <ListItemButton>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={title} />
        </ListItemButton>
      </Link>
    </ListItem>
  );
};

export default SideBarItem;
