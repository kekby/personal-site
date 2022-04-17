import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Post } from '../entity/post';
import { getSortedPostsData } from '../lib/posts';

interface StaticProps {
  posts: Post[]
}

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const posts = getSortedPostsData();

  return {
    props: {
      posts,
    },
  };
};

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Head>
      <title>
        Булат Гомбоцыренов  |  💻 🗿
      </title>
      <meta name="description" content="Разработчик из Новосибирска. Пишу код, иногда не пишу." />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      {posts.map((p) => (
        <article className="py-10" key={p.id}>
          <h2 className="text-slate-300 hover:text-green-400 ease-in-out duration-300 text-3xl">
            <Link href={`/posts/${p.id}`}>{p.title}</Link>
          </h2>

        </article>
      ))}
    </main>
  </>
);

export default Home;
