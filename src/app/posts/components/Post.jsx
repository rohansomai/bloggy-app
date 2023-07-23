'use client';

import React from 'react';
import styles from '@/app/styles/card.module.scss';
import Image from 'next/image';
import BloggyTooltip from '@/app/components/shared/BloggyTooltip';
import { Typography } from '@mui/material';
import { epochToDateTime } from '@/app/helpers';
import { Delete, Label, Visibility } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';

const Post = ({ metadata: { status, createdTimestamp, label }, title, thumbnail }) => {
  return (
    <div className={styles.card}>
      <Image src={thumbnail} alt={title} width={80} height={80} className={'rounded ml-1'} />
      <div className={'ml-5 w-full'}>
        <BloggyTooltip title={title}>
          <Typography className={'font-semibold truncate max-w-[calc(100%-15rem)]'} variant={'h6'}>
            {title}
          </Typography>
        </BloggyTooltip>
        <div className={'mt-4 flex items-center'}>
          <Label className={'text-[20px] mr-1 text-primary'} />
          <BloggyTooltip title={`Navigate to blogs related to ${label}`}>
            <Typography className={'text-sm'}>{label}</Typography>
          </BloggyTooltip>
          <Typography className={'mx-2 text-sm'}>•</Typography>
          <BloggyTooltip title={'Blog status'}>
            <Typography className={'text-sm'}>{status}</Typography>
          </BloggyTooltip>
          <Typography className={'mx-2 text-sm'}>•</Typography>
          <BloggyTooltip title={'Blog created on'}>
            <Typography className={'text-sm'}>{epochToDateTime(createdTimestamp)}</Typography>
          </BloggyTooltip>
        </div>
      </div>
      <div className={'flex items-center'}>
        <BloggyTooltip title={'Preview Blog'}>
          <IconButton>
            <Visibility className={'text-primary'} />
          </IconButton>
        </BloggyTooltip>
        <BloggyTooltip title={'Delete Blog'}>
          <IconButton>
            <Delete className={'text-red'} />
          </IconButton>
        </BloggyTooltip>
      </div>
    </div>
  );
};

export default Post;
