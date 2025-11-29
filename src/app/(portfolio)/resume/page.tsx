import * as css from "@/app/(portfolio)/resume/resume.css";
import { ExperienceData, OtehrExperienceData } from "@/mocks/resume";
import { Fragment } from "react";
import sanitize from "sanitize-html";
import Link from "next/link";
import ResumeCard from "./_component/ResumeCard";
import { ImageBox } from "@/components";

export default function ResumeMain() {
  return (
    <div className={css.resumeSectionWrapper} style={{ paddingTop: 20 }}>
      <section>
        <h3>Introduce 🧑🏻‍💻</h3>
        <div className={css.divider} />
        <p className={css.resumeSubTextBox} style={{ fontSize: 14 }}>
          안녕하세요 좋은 개발자가 되기 전에 좋은 사람이 먼저 되고 싶은 4년차
          프론트엔드 개발자 이정민(Evan) 입니다.
          <br />
          <br /> 저는 2년간의 QA 경력을 바탕으로 많은 TC 작업을 경험했고
          그리하여 조금 더 제품 개발에 있어 요구사항 충족은 물론, 품질 확보를
          위해 개발시에 더 많은 고민을 하고 있으며 프론트엔드 개발자로써 내가
          쓰는 서비스라 생각하며 UI/UX를 항상 고민하고 있습니다.
          <br />
          <br />
          또한 서비스 지표 개선에 관심을 가지고 있어요. 업무 외에 사이드
          프로젝트를 진행하면서 서비스 지표 개선에 노력하고 개발 뿐만 아니라
          다른 직무의 업무 또한 이해하며 그러한 경험을 개발에 녹이고 있습니다.
        </p>
      </section>
      <section>
        <h3>Experience 🧑🏻‍💻</h3>
        <div className={css.divider} />
        <div className={css.resumeCardFlexBox} style={{ gap: 16 }}>
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
