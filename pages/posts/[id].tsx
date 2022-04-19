import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import HTMLRenderer from '../../components/HTMLRenderer/HTMLRenderer';
import { Post as PostEntity } from '../../entities/post';
import { getAllPostIds, getPostData, getPostDate } from '../../lib/posts';

interface StaticProps {
  post: PostEntity | null
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<StaticProps, { id: string }> = async ({ params }) => {
  if (!params?.id) {
    return {
      props: {
        post: null,
      },
    };
  }

  const post = await getPostData(params.id);
  return {
    props: {
      post: {
        ...post,
        date: getPostDate(post.date),
      },
    },
  };
};

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!post) return null;
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div className="border-b border-slate-700 pb-8 mb-6">
        <h2 className="text-5xl text-center mb-8">{post.title}</h2>
        <p className="text-sm text-slate-400 mb-2">
          Опубликовано
          {' '}
          {post.date}
        </p>
        <p className="text-slate-100 text-xl">
          {post.metaDesc}
        </p>
      </div>

      <HTMLRenderer as="section" html={post.content} />
    </>
  );
};

export default Post;
