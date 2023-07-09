import './globals.css';
import { Roboto } from 'next/font/google';
import Layout from '@/app/components/Layout';

const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'Bloggy App',
  description: 'An webapp to write awesome blogs',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
