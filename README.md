# portfolio-core-react

나의 포트폴리오 웹 페이지 프로젝트

# 목차
- [프로젝트 계획 이유](#프로젝트-계획-이유)
- [프로젝트 목적](#프로젝트-목적)
- [사용 기술](#사용-기술)
- [페이지 초안](#페이지-초안)

## 프로젝트 계획 이유
### 개발자의 명함, 포트폴리오 웹페이지

2022년 6월 SESAC MSA 부트캠프를 수료한 후에 본격적인 취업 준비에 들어가면서, 이력서를 쓸 때마다 포트폴리오 기입란에서 위화감을 많이 느꼈습니다. 대표적으로 해보았던 프로젝트의 깃허브 리포지토리 주소를 기입하거나 간단히 작성한 Notion 페이지를 넣어봤지만 뭔가 저에 대한 어필이 부족하지 않나 항상 고민했습니다. 
남들은 어떻게 했을까 검색해 본 결과, 정말 여러가지로 자신을 표현했단 사실을 알게 되었습니다. 

정리해보면

1. **PDF 파일** 형태의 이력서
2. **Notion 페이지**
3. **자신이 작성한 웹페이지**
4. **파워포인트**

등등이 있었습니다. 이 중에서 웹페이지 형태의 포트폴리오에 눈이 갈 수 밖에 없었습니다. 다양한 방법으로 소개 페이지를 작성했는데 개중에는 게임 방식 포트폴리오와 리눅스 터미널 방식 포트폴리오 같이 정말 신기한 페이지도 있었습니다.

![img](https://raw.githubusercontent.com/IliyanID/PortfolioWebsite/master/Resources/front-page.PNG)
[https://github.com/IliyanID/Portfolio-Website](https://github.com/IliyanID/Portfolio-Website) 포트폴리오 페이지, 레트로 감성이라 멋있다…

**그래서 저 또한 제가 할 수 있는 능력 선에서 자신만의 웹 페이지를 만들어보자 생각했습니다.** 교육 과정이 끝나고 이력서, 코테, CS공부를 돌리면서 실제 개발에서 멀어지는 느낌도 있었고 간단한 자기소개 페이지 작성이라면 현재 일과에서 부담이 되지 않을 것이라고 생각했기 때문입니다.

## 프로젝트 목적
### Notion보단 낫게 만들자
![img](https://i.ytimg.com/vi/m1U1C67mnZc/maxresdefault.jpg)
많은 개발자들이 Notion을 통해 프로젝트 문서를 작성하거나 협업을 합니다. 이력서에 적는 포트폴리오 또한 Notion을 사용하는 사람들이 많고 저 또한 그렇게 넣기도 했습니다. Notion을 사용하면 간편하고 잘 정리된 페이지를 빠르게 만들 수 있지만, 그러한 페이지를 제 자신이 봤을 때 굉장히 휑하다, 초라하다 라는 느낌을 받았습니다. 물론 커리어를 잘 정리한 경력 개발자나 수상내역, 프로젝트가 화려한 분들이 더 눈에 띄어서도 있겠지만, 개인적으로 신입개발자가 Notion으로 포트폴리오를 작성하는 건 위험하다고 생각합니다. 위에서 말했듯 이러한 이유가 이 프로젝트를 시작한 이유기도 하며, 결과적으로 만들어질 페이지가 예전에 작성한 Notion 페이지보단 만족스러운 결과물을 내자라는 각오로 임했습니다. 

### bootstrap 금지
부트스트랩은 빠르고 쉽게 반응형 웹페이지를 만들 수 있는 템플릿입니다. 저 또한 화면 단을 구성할 때 많이 애용하는 기술입니다. 그러나 부트스트랩을 통해 만들어진 웹페이지는 어딘가 전부 비슷비슷한 느낌이 있고, 부트스트랩 없이 미디어쿼리를 사용한 반응형 웹페이지를 만들어 보고 싶어서 이번 프로젝트에서는 사용하지 않는 것을 목표로 하였습니다. 또한 필연적으로 html className이 복잡해진다는 것도, 제가 이번 프로젝트에서 부트스트랩을 사용하지 않겠다고 마음먹은 이유입니다.

## 사용 기술
- javascript
- html / css
- React
    - react-slick : 이미지 슬라이더 라이브러리
    - emailjs : 이메일 전송 라이브러리
- vercel : 정적 사이트 배포 서비스
- gabia : 가비아 도메인 서비스, 1년 20,000원 구매

## 페이지 초안
1인 프로젝트라고 했지만, 사실 이 페이지에는 **협업자**가 한 명 더 있습니다. 디자인학과를 졸업한 고등학교 친구 **박○○ 군**이 제 페이지 디자인을 도와줬습니다. 웹페이지 디자인에 자신이 없었던 저는 고등학교 친구들 모임 전에 커피 한 잔을 대가로 자기소개 페이지 디자인에 도움을 구했습니다.

박군은 산업디자인 학과였지만, 저보다는 미적 감각이 있는 친구라 생각보다 많은 도움이 되어줬습니다. 예를 들어 처음 사이트에 들어왔을 때 베너 디자인에 대해 생각해주었고, 섹션들의 디자인에 대해 생각해주었습니다. **신기한 것은 웹에 대한 지식이 전혀 없었음에도 반응형 페이지의 존재는 알고 있어서, 브라우저 크기에 반응하는 디자인을 추천해주었습니다.**

![img](https://drive.google.com/file/d/10K5L1s7E13nd8smY0Mt2C8l5lvfj8RKB/view?usp=sharing))
