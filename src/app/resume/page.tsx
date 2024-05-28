import * as css from "@/app/resume/resume.css";
import { ExperienceData, OtehrExperienceData } from "@/mocks/resume";
import { Fragment } from "react";
import sanitize from "sanitize-html";
import Link from "next/link";
import ResumeCard from "./_component/ResumeCard";
import { ImageBox } from "@/app/_component";

export default function ResumeMain() {
  return (
    <div className={css.resumeSectionWrapper} style={{ paddingTop: 20 }}>
      <section>
        <h3>Introduce 🧑🏻‍💻</h3>
        <div className={css.divider} />
        <p className={css.resumeSubTextBox} style={{ fontSize: 14 }}>
          안녕하세요 좋은 개발자가 되기 전에 좋은 사람이 먼저 되고 싶은 3년차
          프론트엔드 개발자 이정민(Evan) 입니다. <br /> 저는 지식을 공유하고
          말하고 대화하는 것을 좋아해요. 또한 주도적인 환경 속에서 스스로의
          역량을 늘리는 시간을 굉장히 값지게 생각하고 있어요. 왜냐하면 결국
          서비스는 혼자 만드는 것이 아니라 같이 고민하고 만드는 것이라고
          생각합니다.
          <br />내 역량이 다른 동료들에게 도움이 되어 같이 성장하는 것이 곧 내
          성장이되고 그러한 긍정적인 영향을 가진 팀이 모여 만든 서비스는 나의
          결과로 증명된다고 믿고 있습니다.
        </p>
      </section>
      <section>
        <h3>Experience 🧑🏻‍💻</h3>
        <div className={css.divider} />
        <div className={css.resumeCardFlexBox}>
          {ExperienceData.map((company, cIdx) => {
            return (
              <div key={cIdx} className={css.resumeCardFlexBox}>
                <h4>
                  {company.companyName} {company.companyPeriod}
                </h4>
                {company.projects.map((project, pIdx) => {
                  return (
                    <Fragment key={pIdx}>
                      <ResumeCard project={project} />
                    </Fragment>
                  );
                })}
              </div>
            );
          })}
        </div>
      </section>
      <section>
        <h3>Other Experience 🧑🏻‍💻</h3>
        <div className={css.divider} />
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {OtehrExperienceData.map((v, idx) => {
            return (
              <div key={idx}>
                <h4>{v.title}</h4>
                <ul className={css.resumeListWrapper}>
                  {v.items.map((i, index) => {
                    return (
                      <Fragment key={`text-${index}`}>
                        <li
                          className={css.resumeTextBox}
                          style={{
                            listStylePosition: "inside",
                          }}
                        >
                          {i.link ? (
                            <Link href={i.link} target="_blank">
                              {i.text}
                              <ImageBox
                                type="link"
                                width={12}
                                style={{ marginLeft: 5 }}
                              />
                            </Link>
                          ) : (
                            i.text
                          )}
                        </li>
                        <div
                          style={{ fontSize: 12 }}
                          dangerouslySetInnerHTML={{
                            __html: sanitize(i.subText),
                          }}
                        />
                      </Fragment>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
