import React from 'react';
import ListItem from '@mui/material/ListItem';
import Link from 'next/link';
import ListItemButton from '@mui/material/ListItemButton';
import { ListItemIcon, ListItemText } from '@mui/material';
import { usePathname } from 'next/navigation';
import { isEqual } from 'lodash';

const SideBarItem = ({ sidebarItem }) => {
  const { title, id, icon, path, activeIcon } = sidebarItem;
  const pathname = usePathname();
  const isActive = isEqual(path, pathname);
  return (
    <ListItem key={id} disablePadding>
      <Link href={path} className={'w-full'}>
        <ListItemButton className={isActive ? 'bg-bg-gray' : ''}>
          <ListItemIcon>{isActive ? activeIcon : icon}</ListItemIcon>
          <ListItemText primary={title} />
        </ListItemButton>
      </Link>
    </ListItem>
  );
};

export default SideBarItem;
