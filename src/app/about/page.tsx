import Image from "next/image";
import { PageLayoutProvider } from "../_components";
import * as css from "@/styles/_pages/about.css";
import IMAGE_STANDUP from "/public/standMe1.jpeg";
import IMAGE_SITEDOWN from "/public/sitdownMe.png";

export default function AboutMain() {
  return (
    <div className={css.aboutSectionWrapper}>
      <div className={css.topSectionWrapper}>
        <Image
          className={css.imageBox}
          src={IMAGE_STANDUP}
          alt="발표하는 사진"
          width={300}
        />
        <div>
          <p>안녕하세요 반갑습니다.</p>
          <br />
          <p>안녕하세요 반갑습니다.</p>
          <br />
          <p>안녕하세요 반갑습니다.</p>
          <br />
          <p>안녕하세요 반갑습니다.</p>
          <br />
          <p>안녕하세요 반갑습니다.</p>
          <br />
          <br />
          <p>안녕하세요 반갑습니다.</p>
          <br />
          <p>안녕하세요 반갑습니다.</p>
          <br />
          <p>안녕하세요 반갑습니다.</p>
          <br />
          <p>안녕하세요 반갑습니다.</p>
          <br />
          <p>안녕하세요 반갑습니다.</p>
        </div>
      </div>
      <div className={css.bottomSectionWrapper}>
        <Image
          className={css.imageBox}
          src={IMAGE_SITEDOWN}
          alt="일하는 사진"
          width={500}
        />
      </div>
    </div>
  );
}
