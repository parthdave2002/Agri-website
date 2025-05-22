import React, { PropsWithChildren } from 'react';
import Footer from '../component/Footer/footer';
import Header from '../component/Header/Header';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
        <Header />
            <main> {children} </main>
        <Footer />
    </>
  );
};

export default Layout;