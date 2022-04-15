import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => (
  <>
    <Head>
      <title>
        Булат Гомбоцыренов  |  💻 🗿
      </title>
      <meta name="description" content="Разработчик из Новосибирска. Пишу код, иногда не пишу." />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="text-3xl font-bold underline">
        Welcome to
        {' '}
        <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </main>
  </>
);

export default Home;
