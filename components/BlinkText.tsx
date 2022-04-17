import { FC, useEffect, useState } from 'react';

interface Props {
  text: string
}

const BLINK_INTERVAL = 1000;

const BlinkText: FC<Props> = ({ text }) => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible((prev) => !prev);
    }, BLINK_INTERVAL);

    return () => clearInterval(id);
  }, []);

  return <span className={visible ? 'visible' : 'invisible'}>{text}</span>;
};

export default BlinkText;
