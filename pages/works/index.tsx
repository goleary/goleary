import Link from "next/link";
import Head from "next/head";
import { GetStaticProps } from "next";

import Layout from "../../components/layout";
import Date from "../../components/date";
import WorkCard from "../../components/work-card";
import utilStyles from "../../styles/utils.module.css";
import { getSortedWorksData } from "../../lib/works";
import { WorkProps } from "../../types";
export default function PostsPage({
  allWorksData,
}: {
  allWorksData: WorkProps[];
}) {
  return (
    <Layout>
      <Head>
        <title>Gabe O'Leary - Works</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Works</h2>
        {allWorksData.map((postData) => (
          <WorkCard {...postData} />
        ))}
        <ul className={utilStyles.list}>
          {allWorksData.map(({ id, title, imageUrl }) => (
            <li className={utilStyles.listItem} key={id}>
              {imageUrl && <img src={imageUrl} />}
              <Link href={`/works/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allWorksData = getSortedWorksData();
  return {
    props: {
      allWorksData,
    },
  };
};
