import Layout from "../../components/layout";
import { getAllWorksIds, getWorkData } from "../../lib/works";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import { GetStaticProps, GetStaticPaths } from "next";

import UserIcon from "../../components/user-icon";
import styles from "./posts.module.css";

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    fromDate: string;
    toDate: string;
    contentHtml: string;
    tags: string[];
  };
}) {
  console.log("tags");
  console.log(postData.tags);
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.fromDate} />
          {" - "}
          <Date dateString={postData.toDate} />
        </div>

        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllWorksIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getWorkData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};
