import * as css from "@/styles/layout.css";
import Link from "next/link";
import IMAGE_NOTFOUND from "/public/notFound.png";
import Image from "next/image";

function NotFound() {
  return (
    <section className={css.notFoundWrapper}>
      <div className={css.notFoundBox}>
        <Image src={IMAGE_NOTFOUND} alt="notFound" width={64} />
        <p>해당 페이지는 존재하지 않아요</p>
        <div className={css.descriptionSection} style={{ paddingTop: 0 }}>
          <Link href="/about">누가 만들었을까요 ?</Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
