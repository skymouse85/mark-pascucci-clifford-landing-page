import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';


export default function Projects() {
    return (
        <Layout>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                 <h2 className={utilStyles.headingLg}>Projects</h2>
                 <div>
                    <a href='https://m-p-c-music.vercel.app/'>
                        Mark Pascucci-Clifford Music
                    </a>
                    <p>A personal music website built using Next.JS</p>
                 </div>
                 <div>
                    <a href='https://quantitymag.com/'>
                        Quantity Magazine
                    </a>
                    <p>An online zine dedicated to the practice of making art</p>
                 </div>
                 <div>
                    <a href='https://skymouse85.github.io/scalr/src/index.html'>
                        Scalr
                    </a>
                    <p>A website that takes a chord symbol and returns a list of viable scales that can be used to improvise over the given chord.</p>
                 </div>
            </section>
        </Layout>
    )
}