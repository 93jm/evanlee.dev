"use client";

import { useEffect } from "react";

const DATA_GO = [
  {
    name: "에반1",
    company: "마이프랜차이즈",
    job: "서버 개발자",
    text: "에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠 ,에반은 최고죠, 에반은 최고죠 ,에반은 최고죠, 에반은 최고죠 , 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠",
    companyImage: "./notion.png",
  },
  {
    name: "에반2",
    company: "마이프랜차이즈",
    job: "서버 개발자",
    text: "에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠 ,에반은 최고죠, 에반은 최고죠 ,에반은 최고죠, 에반은 최고죠 , 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠",
    companyImage: "./notion.png",
  },
  {
    name: "에반3",
    company: "마이프랜차이즈",
    job: "서버 개발자",
    text: "에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠 ,에반은 최고죠, 에반은 최고죠 ,에반은 최고죠, 에반은 최고죠 , 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠",
    companyImage: "./notion.png",
  },
  {
    name: "에반4",
    company: "마이프랜차이즈",
    job: "서버 개발자",
    text: "에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠 ,에반은 최고죠, 에반은 최고죠 ,에반은 최고죠, 에반은 최고죠 , 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠",
    companyImage: "./notion.png",
  },
  {
    name: "에반5",
    company: "마이프랜차이즈",
    job: "서버 개발자",
    text: "에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠 ,에반은 최고죠, 에반은 최고죠 ,에반은 최고죠, 에반은 최고죠 , 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠",
    companyImage: "./notion.png",
  },
  {
    name: "에반6",
    company: "마이프랜차이즈",
    job: "서버 개발자",
    text: "에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠 ,에반은 최고죠, 에반은 최고죠 ,에반은 최고죠, 에반은 최고죠 , 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠",
    companyImage: "./notion.png",
  },
  {
    name: "에반7",
    company: "마이프랜차이즈",
    job: "서버 개발자",
    text: "에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠 ,에반은 최고죠, 에반은 최고죠 ,에반은 최고죠, 에반은 최고죠 , 에반은 최고죠, 에반은 최고죠, 에반은 최고죠, 에반은 최고죠",
    companyImage: "./notion.png",
  },
];

export default function StarField() {
  const divWidth = 200;
  const divHeight = 250;
  const speedFactor = 0.2;
  const divColor = "#FDF7E4";

  useEffect(() => {
    //canvas를 담는 container
    const container = document.getElementById("movingMemos");
    //Nav와 Footer를 제외한 기준이 될만한 wrapper
    const cp = document.getElementById("mainLayoutProvider");
    if (container && cp) {
      // let w = window.innerWidth;
      // let h = window.innerHeight;
      let w = cp.clientWidth;
      let h = cp.clientHeight;
      const setContainerExtents = () => {
        container.style.width = w + "px";
        container.style.height = h + "px";
      };

      setContainerExtents();

      window.onresize = () => {
        // w = window.innerWidth;
        // h = window.innerHeight;
        w = cp.clientWidth;
        h = cp.clientHeight;
        setContainerExtents();
      };

      const makeMemo = (counts: number) => {
        const out = [];

        for (let i = 0; i < counts; i++) {
          const memo = document.createElement("div");
          memo.style.position = "absolute";
          memo.style.backgroundColor = divColor;
          memo.style.width = divWidth + "px";
          memo.style.height = divHeight + "px";
          memo.style.left = Math.random() * w + "px";
          memo.style.top = Math.random() * h + "px";
          memo.style.border = "3px solid #f5f5f5";
          memo.style.borderRadius = "10px";
          memo.style.padding = "10px";

          const memoWrpper = document.createElement("div");
          memoWrpper.style.display = "flex";
          memoWrpper.style.flexDirection = "column";
          memoWrpper.style.alignItems = "flex-start";
          memoWrpper.style.height = "100%";
          memo.appendChild(memoWrpper);

          //memo 상단 영역 wrapper
          const memoTitleWrapper = document.createElement("div");
          memoTitleWrapper.style.width = "100%";
          memoTitleWrapper.style.display = "flex";
          memoTitleWrapper.style.justifyContent = "space-between";
          memoTitleWrapper.style.alignItems = "center";
          memoWrpper.appendChild(memoTitleWrapper);

          const divider = document.createElement("div");
          divider.style.width = "100%";
          divider.style.height = "3px";
          divider.style.backgroundColor = "#f5f5f5";
          divider.style.margin = "5px 0px";
          memoWrpper.appendChild(divider);

          // const peedBackBox = document.createElement("div");
          // peedBackBox.style.display = "flex";
          // peedBackBox.style.height = "120px";

          // memoWrpper.appendChild(peedBackBox);
          const peedBack = document.createElement("div");
          peedBack.innerText = DATA_GO[i].text;
          peedBack.style.fontSize = "14px";
          peedBack.style.overflow = "hidden";
          peedBack.style.textOverflow = "ellipsis";

          memoWrpper.appendChild(peedBack);

          //memo 상단 영역 안에 있는 Content Wrapper
          const titleContentWrapper = document.createElement("div");
          titleContentWrapper.style.display = "flex";
          titleContentWrapper.style.flexDirection = "column";
          titleContentWrapper.style.alignItems = "flex-start";
          memoTitleWrapper.appendChild(titleContentWrapper);

          // 이미지 추가
          const img = document.createElement("img");
          img.src = "./notion.png";
          img.style.width = "30px";
          img.style.height = "30px";
          memoTitleWrapper.appendChild(img);

          // 이름 + 포지션 추가
          const titleSection = document.createElement("p");
          titleSection.innerText = `${DATA_GO[i].name} (${DATA_GO[i].job})`;
          titleSection.style.color = "black";
          titleSection.style.fontSize = "12px";
          titleSection.style.fontWeight = "bold";
          titleContentWrapper.appendChild(titleSection);

          // 회사 이름
          const companySection = document.createElement("p");
          companySection.innerText = `${DATA_GO[i].company}`;
          companySection.style.color = "gray";
          companySection.style.fontSize = "12px";
          titleContentWrapper.appendChild(companySection);

          container.appendChild(memo);
          out.push(memo);
        }
        return out;
      };

      let memos = makeMemo(DATA_GO.length);

      let prevTime: number;

      const init = (time: number) => {
        prevTime = time;
        requestAnimationFrame(tick);
      };

      const tick = (time: number) => {
        let elapsed = time - prevTime;
        prevTime = time;

        for (let i = 0; i < DATA_GO.length; i++) {
          const memo = memos[i];
          const x = parseFloat(memo.style.left);
          const y = parseFloat(memo.style.top);
          memo.style.left = x + elapsed * speedFactor + "px";

          if (x > w) {
            memo.style.left = -divWidth + "px";
          }
        }

        requestAnimationFrame(tick);
      };

      requestAnimationFrame(init);

      // add window resize listener:
      window.addEventListener("resize", function () {
        // w = window.innerWidth;
        // h = window.innerHeight;
        w = cp.clientWidth;
        h = cp.clientHeight;
        setContainerExtents();
      });
    } else {
      console.error("movingMemos mainLayoutProvider를 못 찾음");
    }

    return () => {
      window.onresize = null;
    };
  }, []);

  return <div id="movingMemos"></div>;
}
