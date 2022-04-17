import { FC } from 'react';

const Header: FC = () => (
  <header className="bg-dark-600 px-8 py-8 flex justify-center text-slate-200 flex-wrap">
    <div className="text-center">
      <h1 className="text-4xl font-mono bg-dark-400 rounded-m mb-4">no hardcode</h1>
      <p className="text-base">Рандомные мысли о программировании, играх и остальном</p>
    </div>
  </header>
);

export default Header;
