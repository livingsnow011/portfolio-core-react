import "./Archive.css";

function Archive() {
  return (
    <section id="archive" className="section">
      <div className="section-title">
        <h2>archive</h2>
        <p>학습한 내용을 정리한 저장소들을 소개합니다.</p>
      </div>
      <div className="section__wrapper archive__wrapper">
        <a
          href="https://github.com/livingsnow011"
          target="_blank"
          rel="noopener noreferrer"
        >
          <article className="archive__content github">
            <div className="archive__content-logo"></div>
            <hr width="100%" color="black" size="2" />
            <a
              href="https://github.com/livingsnow011"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4> https://github.com/livingsnow011</h4>
            </a>
            <h4 style={{ marginBottom: "30px" }}> 소스코드 저장소</h4>
            <p>● 개인,팀별로 수행한 프로젝트를 저장했습니다.</p>
            <p>● 새로운 것을 배울 때 저장소를 만들어 기록합니다.</p>
            <p>● 하루 학습을 마무리할 때 알람 용도로 커밋합니다.</p>
          </article>
        </a>

        <a
          href="https://livingsnow011.tistory.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <article className="archive__content tistory">
            <div className="archive__content-logo"></div>
            <hr width="100%" color="black" size="2" />
            <a
              href="https://livingsnow011.tistory.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4> https://livingsnow011.tistory.com/</h4>
            </a>
            <h4 style={{ marginBottom: "30px" }}> 개인 블로그</h4>
            <p>● 초기에는 책 내용 정리 용도로 사용했습니다.</p>
            <p>● 최근엔 노션을 사용하며 트러블 등을 기록합니다.</p>
            <p>● 타 플랫폼으로 이주를 고민 중입니다.</p>
          </article>
        </a>
      </div>
    </section>
  );
}

export default Archive;
