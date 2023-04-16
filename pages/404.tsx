import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Custom404() {
    return (
      <>
    <h1 className={utilStyles.pageNotFound}>404 - Page Not Found</h1>
    <div className={utilStyles.pageNotFound}>📜 🕳 👎</div>
    <div className={utilStyles.backToHome}>
            <Link href="/">← Back to home</Link>
          </div>
    </>
    );
  }