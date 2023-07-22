import { LabelOutlined, ArticleOutlined, Article, Label } from '@mui/icons-material';

export const sidebarMenuList = [
  {
    id: 1,
    title: 'Posts',
    icon: <ArticleOutlined />,
    activeIcon: <Article className={'text-primary'} />,
    path: '/posts',
  },
  {
    id: 2,
    title: 'Labels',
    icon: <LabelOutlined />,
    activeIcon: <Label className={'text-primary'} />,
    path: '/labels',
  },
];
