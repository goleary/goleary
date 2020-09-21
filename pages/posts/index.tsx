import Link from "next/link";
import Head from "next/head";
import { GetStaticProps } from "next";

import Layout from "../../components/layout";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import { getSortedPostsData } from "../../lib/posts";

export default function PostsPage({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout>
      <Head>
        <title>Gabe O'Leary - Posts</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Posts</h2>
        <p className={`${utilStyles.lightText} ${utilStyles.caption}`}>
          Various ramblings on technologies I've used, experiences I've had and
          things I've built.
        </p>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
