import { PropsWithChildren } from "react";

import Head from "next/head";

import ChildCareIcon from "@material-ui/icons/ChildCare";
import SchoolIcon from "@material-ui/icons/School";
import HomeIcon from "@material-ui/icons/Home";
import WorkIcon from "@material-ui/icons/Work";

import grey from "@material-ui/core/colors/grey";
import green from "@material-ui/core/colors/green";
import indigo from "@material-ui/core/colors/indigo";

import Layout from "components/layout";
import utilStyles from "styles/utils.module.css";

import styles from "./history.module.css";

type HistoryItemProps = PropsWithChildren<{
  title: string;
  date: string;
  color?: string;
}>;
const HistoryItem: React.FC<HistoryItemProps> = ({
  title,
  date,
  children,
  color,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        fontSize: 16,
      }}
    >
      <div
        style={{
          backgroundColor: color ?? indigo[800],
          width: 28,
          height: 28,
          borderRadius: 14,
          marginRight: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </div>
      <div style={{ flexGrow: 1, color: grey[700] }}>{title}</div>
      <time style={{ color: grey[700] }}>{date}</time>
    </div>
  );
};

const Line: React.FC = () => {
  return (
    <div
      style={{
        height: 18,
        width: 0,
        marginTop: 6,
        marginBottom: 6,
        marginLeft: 14,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: grey[400],
      }}
    ></div>
  );
};

export default function HistoryPage() {
  return (
    <Layout>
      <Head>
        <title>Gabe O'Leary - History</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>History</h2>
        <h6 className={styles.grey}>Present</h6>

        <HistoryItem
          title="Founding Engineer, Upnext"
          date="August 2020 - Present"
        >
          <ChildCareIcon style={{ color: "white", fontSize: 18 }} />
        </HistoryItem>
        {/* TODO: align this better */}
        <Line />
        <HistoryItem title="Founder, Reconcile" date="March 2020 - Present">
          <ChildCareIcon style={{ color: "white", fontSize: 18 }} />
        </HistoryItem>
        <h6 className={styles.grey}>2020</h6>
        <HistoryItem
          title="Bought a House, Seattle"
          date="March 2015"
          color={green[700]}
        >
          <HomeIcon style={{ color: "white", fontSize: 18 }} />
        </HistoryItem>
        <h6 className={styles.grey}>2015</h6>
        <HistoryItem
          title="Became Program Manager, Microsoft"
          date="March 2015"
        >
          <WorkIcon style={{ color: "white", fontSize: 18 }} />
        </HistoryItem>

        <h6 className={styles.grey}>2013</h6>
        <HistoryItem
          title="Graduated, University of Michigan"
          date="December 2013"
          color="#00274C"
        >
          <SchoolIcon style={{ color: "white", fontSize: 18 }} />
        </HistoryItem>

        <h6 className={styles.grey}>2009</h6>
        <HistoryItem
          title="Began degree, University of Michigan"
          date="August 2009"
          color="#00274C"
        >
          <SchoolIcon style={{ color: "white", fontSize: 18 }} />
        </HistoryItem>
        <h6 className={styles.grey}>The 90s</h6>
        {/* This is probably not a good thing to publicly post... */}
        <HistoryItem title="Born" date="Summer">
          <ChildCareIcon style={{ color: "white", fontSize: 18 }} />
        </HistoryItem>
        <br />
        <p className={`${utilStyles.lightText} ${utilStyles.caption}`}>
          Inspired by{" "}
          <a href="https://www.shunkakinoki.com/history">
            Shun Kakinoki's website.
          </a>
        </p>
      </section>
    </Layout>
  );
}
