import './globals.css';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import Footer from './components/Footer';
import CartContextProvider from './contexts/CartContext';
import { Toaster } from 'react-hot-toast';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <div>
          <Toaster position="bottom-right" reverseOrder={false} gutter={8} />
        </div>
        <CartContextProvider>{children}</CartContextProvider>
        <Footer />
      </body>
    </html>
  );
}
