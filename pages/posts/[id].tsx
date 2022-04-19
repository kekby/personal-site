import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
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
      <h2 className="text-5xl text-center mb-8">{post.title}</h2>
      <p className="text-sm text-slate-400 mb-4">
        Опубликовано
        {' '}
        {post.date}
      </p>
      {/* eslint-disable-next-line react/no-danger  */}
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </>
  );
};

export default Post;
