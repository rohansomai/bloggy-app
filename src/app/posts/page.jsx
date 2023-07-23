import React from 'react';
import Post from '@/app/posts/components/Post';
import SampleThumb from '@/assets/thumb-sample.jpeg';

const postsList = [
  {
    id: 1,
    title: 'Lorem Ipsum is simply dummy text...',
    createdTimestamp: 1656564632,
    status: 'Draft',
    label: 'Technology',
  },
  {
    id: 2,
    title: 'A Journey into Web Development',
    createdTimestamp: 1677723601,
    status: 'Published',
    label: 'Technology',
  },
  {
    id: 3,
    title: '10 Tips for Effective Time Management',
    createdTimestamp: 1678883665,
    status: 'Published',
    label: 'Self-Improvement',
  },
  {
    id: 4,
    title: 'The Power of Positive Thinking',
    createdTimestamp: 1678886239,
    status: 'Draft',
    label: 'Self-Improvement',
  },
  {
    id: 5,
    title: 'Exploring the Wonders of Nature',
    createdTimestamp: 1678889042,
    status: 'Published',
    label: 'Travel',
  },
  {
    id: 6,
    title: 'The Art of Photography',
    createdTimestamp: 1678890097,
    status: 'Draft',
    label: 'Photography',
  },
  {
    id: 7,
    title: 'Introduction to Artificial Intelligence',
    createdTimestamp: 1678891511,
    status: 'Published',
    label: 'Technology',
  },
  {
    id: 8,
    title: 'Delicious and Healthy Recipes',
    createdTimestamp: 1678892922,
    status: 'Published',
    label: 'Food',
  },
  {
    id: 9,
    title: 'Unveiling Ancient History',
    createdTimestamp: 1678894480,
    status: 'Draft',
    label: 'History',
  },
  {
    id: 10,
    title: 'Mastering the Basics of Programming',
    createdTimestamp: 1678895891,
    status: 'Published',
    label: 'Technology',
  },
  {
    id: 11,
    title: 'Innovations in Technology',
    createdTimestamp: 1678896777,
    status: 'Published',
    label: 'Technology',
  },
  {
    id: 12,
    title: 'Mindfulness and Meditation',
    createdTimestamp: 1678897844,
    status: 'Draft',
    label: 'Self-Improvement',
  },
  {
    id: 13,
    title: 'Discovering New Travel Destinations',
    createdTimestamp: 1678899030,
    status: 'Published',
    label: 'Travel',
  },
  {
    id: 14,
    title: 'Fascinating Tales from History',
    createdTimestamp: 1678900324,
    status: 'Draft',
    label: 'History',
  },
  {
    id: 15,
    title: 'The Science Behind Nutrition',
    createdTimestamp: 1678901637,
    status: 'Published',
    label: 'Health',
  },
];

const Posts = () => {
  return (
    <div className={'max-w-[1000px] mx-auto'}>
      {postsList.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          metadata={{ createdTimestamp: post.createdTimestamp, status: post.status, label: post.label }}
          thumbnail={SampleThumb}
        />
      ))}
    </div>
  );
};

export default Posts;
