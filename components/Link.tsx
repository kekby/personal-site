import { FC, PropsWithChildren } from 'react';
import NextLink from 'next/link';
import cx from 'classnames';

interface Props {
  href: string;
  className?: string
}

const Link: FC<PropsWithChildren<Props>> = ({ href, className, children }) => (
  <NextLink href={href} passHref>
    <a className={cx('text-blue-400 hover:text-green-400 ease-in-out duration-300', className)}>{children}</a>
  </NextLink>
);

export default Link;
