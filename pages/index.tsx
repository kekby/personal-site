import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Link from '../components/Link';
import { Post } from '../entities/post';
import { getSortedPostsData } from '../lib/posts';
import { formatDate, parseDate } from '../lib/dates';

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
        <article className="py-10 border-b border-slate-700" key={p.id}>
          <h2 className="text-3xl mb-2">
            <Link href={`/posts/${p.id}`}>
              {p.title}
            </Link>
          </h2>
          <p className="text-sm text-slate-400 mb-4">
            Опубликовано
            {' '}
            {formatDate(parseDate(p.date))}
          </p>
          <div className="text-lg flex justify-between items-center">
            <p className="grow">{p.metaDesc}</p>
            <p className=" bg-dark-800 rounded-sm ml-6">
              <Link href={`/posts/${p.id}`} className="whitespace-nowrap p-2 inline-block">
                Читать далее »
              </Link>
            </p>
          </div>
        </article>
      ))}
    </main>
  </>
);

export default Home;
