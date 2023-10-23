import { Fragment } from "react";
import Head from "next/head";

import About from "../../components/About";

export default function AboutDetailPage(props) {
  console.log("AboutMe detail Props: ", props);
  const aboutTab = props.selectedAboutTab

  if (!aboutTab) {
    return (
        <div><p>Loading...</p></div>
    )
  }

  return (
    <Fragment>
        <Head>
            <title>{abaoutTab.title}</title>
            <meta name="description" content={aboutTab.description} />
        </Head>
        <About />
    </Fragment>
  )
}
