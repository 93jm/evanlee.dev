import Image from "next/image";
import * as css from "@/app/about/about.css";
import IMAGE_STANDUP from "/public/standMe1.jpeg";
import IMAGE_SITEDOWN from "/public/sitdownMe.png";

export default function AboutMain() {
  return (
    <div className={css.aboutSectionWrapper}>
      <div className={css.contentSectionWrapper}>
        <div className={css.imageBox}>
          <Image src={IMAGE_STANDUP} alt="발표하는 사진" layout="responsive" />
        </div>

        <div>
          <h3>이야기를 듣고 말하는 것을 좋아합니다.</h3>
          <br />
          <p>지금 풀어야할 문제에 있어서 고민하고 토론을 좋아합니다.</p>
          <br />
          <p>
            내가 얻은 정보를 동료들과 서로 공유하고, 새로운 기술과 지식에 대해
            끊임 없이 질문하는 것이 즐겁습니다.
          </p>
          <br />
          <p>좋은 개발자가 되기 보단 좋은 동료가 먼저 되고 싶습니다.</p>
          <br />
          <br />
          <br />
          <h3>{`"그냥"은 없고 "왜"는 있습니다.`}</h3>
          <br />
          <p>
            코드 스타일의 정답은 없지만, 더 좋은 방향은 항상 있다고 생각해요.
          </p>
          <br />
          <p>그렇기에 명확하고 가독성이 좋은 코드 작성에 노력합니다.</p>
          <br />
          <p>
            내가 사용하는 프로덕트를 만든다고 생각하고, 프론트엔드 개발자로써 더
            높은 사용자 경험에 최선을 다합니다.
          </p>
        </div>
      </div>
      <div />
      <div className={css.contentSectionWrapper}>
        <div>
          <br />
          <h3>새로운 것을 좋아합니다.</h3>
          <br />
          <p>
            그렇기에 다양한 취미가 많아요, 매번 고민할 시간에 바로 시작해보는
            편입니다.
          </p>
          <br />
          <p>
            새로운 기술을 도입할때에 거부감이 없습니다, 다양한 시도를 하고 그
            후에 결과로 뿌듯함을 느낍니다.
          </p>
          <br />
        </div>
        <div className={css.imageBox}>
          <Image
            className={css.imageBox}
            src={IMAGE_SITEDOWN}
            alt="일하는 사진"
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
}
