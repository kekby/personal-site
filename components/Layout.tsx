import { FC, PropsWithChildren } from 'react';
import Header from './Header';

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => (
  <div className="h-screen bg-dark-800 text-slate-300">
    <Header />
    <div className="px-8 flex justify-center max-w-6xl">
      {children}
    </div>
  </div>
);

export default Layout;
