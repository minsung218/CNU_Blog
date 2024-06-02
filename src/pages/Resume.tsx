const Resume = () => {
  return (
    <div>
      <div className="head-wrap">
        <h2 data-heading="History" className="heading" id="heading">
          실전코딩 수강
        </h2>
        <div className="heading-children">
          <div>
            <ul>
              <li>2023.03 ~ 2023.06</li>
              <li>React, SpringBoot 등 다양한 실무 지식 수강</li>
            </ul>
          </div>
        </div>
        <h2 data-heading="Language" className="heading" id="heading">
          활용 가능 언어
        </h2>
        <div className="heading-children">
          <div>
            <ul>
              <li>C/C++</li>
              <li>JAVA</li>
              <li>Dart</li>
              <li>Python</li>
            </ul>
          </div>
        </div>
        <h2 data-heading="Project" className="heading" id="heading">
          피부암 판별 모델
        </h2>
        <div className="heading-children">
          <div>
            <ul>
              <li>2023.03 ~ 2023.</li>
              <li>VGG19 모델을 활용하여 병변을 9가지로 분류하고 피부암을 판단하는 모델을 구축</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
