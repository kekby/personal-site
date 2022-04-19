import { FC, PropsWithChildren } from 'react';
import Header from './Header';

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => (
  <div className="h-full bg-dark-600 text-slate-300 min-w-min">
    <Header />
    <div className="px-8 py-10 max-w-5xl mx-auto">
      {children}
    </div>
  </div>
);

export default Layout;
