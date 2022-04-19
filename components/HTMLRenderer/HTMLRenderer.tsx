import React, { FC, HTMLAttributes } from 'react';

interface Props {
  html: string,
  as?: string
}

const HTMLRenderer: FC<Props> = ({ html, as = 'div' }) => {
  return React.createElement<HTMLAttributes<HTMLElement>>(as, {
    className: 'html-renderer',
    dangerouslySetInnerHTML: {
      __html: html,
    },
  });
};

export default HTMLRenderer;
