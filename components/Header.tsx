import { FC } from 'react';
import BlinkText from './BlinkText';
import Link from './Link';

const Header: FC = () => (
  <header className="bg-dark-800 px-8 py-8 flex justify-center text-slate-200 flex-wrap">
    <div className="text-center">
      <h1 className=" bg-dark-600 rounded-sm mb-4 p-2">
        <Link href="/">
          <p className="text-green-400 text-6xl font-mono">
            no_hardcode
            <BlinkText text="|" />
          </p>
        </Link>
      </h1>
      <p className=" text-slate-300 text-lg">Рандомные мысли о программировании, играх и остальном</p>
    </div>
  </header>
);

export default Header;
