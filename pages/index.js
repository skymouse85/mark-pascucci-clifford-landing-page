import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <p>Hello! My name is Mark Pascucci-Clifford. I'm an aspiring web developer, vibraphonist, and composer.</p>
        
      </section>
        <div>
          <Link href='/projects' className={utilStyles.headingLg}>Projects</Link>
        </div>
        <div className={utilStyles.headingLg}>
        <a
      href="/Mark_Pascucci_Clifford_Resume.pdf"
      alt="alt text"
      target="_blank"
      rel="noopener noreferrer"
      >Resume</a>
        </div>
        <div>
          <Link href="/blog" className={utilStyles.headingLg} >Blog</Link>
        </div>
    </Layout>
  );
}