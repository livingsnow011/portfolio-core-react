# portfolio-core-react

[parkhansol.info](http://www.parkhansol.info)

나의 포트폴리오 웹 페이지 프로젝트

# 목차
- [프로젝트 계획 이유](#프로젝트-계획-이유)
- [프로젝트 목적](#프로젝트-목적)
- [사용 기술](#사용-기술)
- [페이지 초안](#페이지-초안)
- [컴포넌트](#컴포넌트)
    - [header](#header)
    - [about](#about)
    - [skills](#skills)
    - [contact](#contact)
- [반응형 디자인](#반응형-디자인)
- [BEM 방식 클래스 이름](#BEM-방식-클래스-이름)
- [배포](#배포)
    - [도메인 구매 후 호스팅 연결](#도메인-구매-후-호스팅-연결)
- [후기](#후기)

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
*[https://github.com/IliyanID/Portfolio-Website](https://github.com/IliyanID/Portfolio-Website) 포트폴리오 페이지, 레트로 감성이라 멋있다…*

**그래서 저 또한 제가 할 수 있는 능력 선에서 자신만의 웹 페이지를 만들어보자 생각했습니다.** 교육 과정이 끝나고 이력서, 코테, CS공부를 돌리면서 실제 개발에서 멀어지는 느낌도 있었고 간단한 자기소개 페이지 작성이라면 현재 일과에서 부담이 되지 않을 것이라고 생각했기 때문입니다.

## 프로젝트 목적
### Notion보단 낫게 만들자
![img](https://i.ytimg.com/vi/m1U1C67mnZc/maxresdefault.jpg)
많은 개발자들이 Notion을 통해 프로젝트 문서를 작성하거나 협업을 합니다. 이력서에 적는 포트폴리오 또한 Notion을 사용하는 사람들이 많고 저 또한 그렇게 넣기도 했습니다. Notion을 사용하면 간편하고 잘 정리된 페이지를 빠르게 만들 수 있지만, 그러한 페이지를 제 자신이 봤을 때 굉장히 **휑하다, 초라하다** 라는 느낌을 받았습니다. 물론 **커리어를 잘 정리한 경력 개발자**나 **수상내역, 프로젝트가 화려한 분들**이 더 눈에 띄어서도 있겠지만, 개인적으로 신입개발자가 Notion으로 포트폴리오를 작성하는 건 위험하다고 생각합니다. 위에서 말했듯 이러한 이유가 이 프로젝트를 시작한 이유기도 하며, 결과적으로 만들어질 페이지가 **예전에 작성한 Notion 페이지보단 만족스러운 결과물을 내자**라는 각오로 임했습니다. 

### bootstrap 금지
부트스트랩은 빠르고 쉽게 반응형 웹페이지를 만들 수 있는 템플릿입니다. 저 또한 화면 단을 구성할 때 많이 애용하는 기술입니다. 그러나 부트스트랩을 통해 만들어진 웹페이지는 어딘가 전부 **비슷비슷**한 느낌이 있고, **부트스트랩 없이 미디어쿼리를 사용한 반응형 웹페이지**를 만들어 보고 싶어서 이번 프로젝트에서는 사용하지 않는 것을 목표로 하였습니다. 또한 필연적으로 **html className이 복잡해진다는 것**도, 제가 이번 프로젝트에서 부트스트랩을 사용하지 않겠다고 마음먹은 이유입니다.

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

![img](https://lh3.googleusercontent.com/drive-viewer/AJc5JmSDeUx3_XR6FTX18EhK21-vk0V-RzGPrESf9GNmBdsMCSuphJjqCXqg_I8QJ6GNbq0ih1BC2MA=w960-h940)
![img](https://lh3.googleusercontent.com/drive-viewer/AJc5JmQR3fJtPyN_-hvaV9jkpbkr46lg1n6lYhYY5qBeWdtqsLG2S6AcG1Bmthsi4EaVBnDduCZQn8o=w1920-h942)
*친구가 생각한 베너 느낌과 반응형 동작 과정, 심플하지만 큰 도움이 되었다.*

## 컴포넌트
리액트 라이브러리를 통해 페이지를 **컴포넌트 별로 개발할 수 있었습니다.** 정해놓은 페이지 디자인을 크게 7개의 컴포넌트로 나누고 순차적으로 개발하였습니다.
7개의 큰 컴포넌트는 아래와 같습니다.
- header
- <main>
    - about
    - archive
    - skills
    - project
- footer 

### header

![img](https://lh3.googleusercontent.com/drive-viewer/AJc5JmSDeUx3_XR6FTX18EhK21-vk0V-RzGPrESf9GNmBdsMCSuphJjqCXqg_I8QJ6GNbq0ih1BC2MA=w960-h940)

header 컴포넌트에는 페이지를 이동할 수 있는 **navbar**와 페이지의 인상을 결정하는 **hero 이미지**를 넣었습니다. hero 이미지 위에는 간단한 텍스트를 넣었습니다. developer 와 3 줄 문구를 적었는데, 마지막 문구에 무엇을 넣을지 고민을 많이 했습니다.

![img](https://lh3.googleusercontent.com/fife/AAbDypCpUULgcr4sVoYLUotuZ-gmgNAHl3nvIkM9NIFxRZRKfxorC8kgAuHT4NScObHnGxmwY5qAmiRxx7Xgqaca0vLLBEn4WUWDlPoQcoW248hxAB0P4o025P-HRqFJ2MlXAskFf_tbNebXdKXVmeYb-2-i-wKG6bOzrcKD9DnEMa7uDN36_e0VIbFqA8WESYiouUYsCvVgOtHDeS8YlbDoJhHejQjpOYADtnsK8Y3LxKyQ_OwYnqj73Rih98gm9nF7Y6mRBfmdGsfONm1wXKg8qldd0RsGX3A7_b0Tnnmw43zBtjFzuv-xhaxgHw-A3UFH-IZXMPVDI7CJPAbSu7UKuDUYwhi1l2CEVpleaSZb4NiCX97OTza4pvqXkaQhkj2hDDXKt4tfPkuullbBQcc1DGQGEXZRQm0C3nSaun13GEYcKwR2DTLmvVN0OmCE9lJ6VqHeBEB1C-kNUo9Tf4e6If6sI6q20LsiMv7Szg3wqFg7BE8fOfMFPYTsk8_MvOxz2NU9QMOqAujbhdpEJ6K5g6ThoR0fZUadwCs-33jY2xgEqGL6a2iR14HXf7UiReHQoRSFQLliYWn5hhnL8Pi8uXBB_aNgS4MrXBYaG3-zMqoemmenRu7bxlV1y4rxhYIqJj5zldq_AJrMleZUPADTMJuKNUFWKbZq3PrcBHqXBZd_w4U46mN7-HUQrDrH6d96-lXK75AQJunw4_1RnR32K4zGrOwE_JhK6uWqh5mvfMG9I3f_PxWcH8GaDJt4vD1muORr1fIW047lAxIiAqVZO8WRS4YviXHl4Cf9BHwbbU2ofJpBLY0waG2q-kk3KhIcyfzCvtnbPNLdbPipjg1pfeobpGE8qEd2AglqNK3cG0LBshb58vn6wlxTZLYIMTxPFRKGxbpBODwZHMBOqdfpuE2ZOOIr9gkzu6Rj1HGfRkjVAs88hlz9ydDrJam_T5pVcgqCVuAvrI-3Ko7F1R-ovhyvtaAbk0FIqdFzJ63xw56sf5vWIcxackd2gDFxH_n2ZZMSJZ7sQ4g7Qx0omYhpj8fi5Qv3wjqorUJyeXXZvB853GyWm4UB8FvQxjC2eJHC_Oj1hfTKbNbj_IH4yIt926chcEozdYGumzAWAnnASt0i8taR4P9zCxjOXfIRFen7nvl40JWQZGTZkWcI1aCpyX08wICnU8jC1JNZVVhq9_p3OaXy9m3nirFFlrHUzj0UBpSzny_yVlxcV70MXMQzFclvjzfzktor9YYW9s-LTunWvRVqq2X8U0x1qW3ofM5SsWN5QMRhMvsywwKV_hBOkeuksxveWMZfA1_1p6covjTUYreydD6Rmyn2b6UO13IRardofBnRb4Tp2u5LrHau-PoxH-GnPS7a3nRPEn0lonyZ9RjhmzBIH1qyUNNNoP3SB9bFCV5fZcfx3qbVokyGGbDyfvo-nSvVbuxR6pI9ACbsjP3psQigo3DqtYrWcSfNCyhCUViI8ZF7A2LNrvlAixW6xaYixnA6K8v5pdoQAMVy4kc5gQ=w1920-h942)

네비게이션 바는 화면 크기에 맞춰 동작하도록 만들었습니다. **큰 화면에서는 섹션 텍스트들을 flex 디자인**으로, **작은 화면에서는 햄버거 토글 버튼**으로 바뀌어 모바일 화면에서 동작하는 네비게이션 바처럼 만들었습니다.

### contact

![img](https://velog.velcdn.com/images/nemo/post/ce668f72-65a3-4ce3-b93e-94e0667ccec6/emailjs-logo.jpg)

웹 **페이지에서 바로 메일을 보내는 기능**을 추가하고 싶어서 관련 라이브러리를 찾던 도중 **emailjs**라는 서비스를 알게 되었습니다. 프로젝트가 뷰만을 구현한 정적 웹 페이지라 서버없이 메일을 보내는 걸 어떻게 구현하지 하다가 찾게 되었습니다. emailjs는 **월 200건**까지 무료로 페이지에서 내 gmail 계정으로의 웹 메일 발송이 가능한 서비스입니다. 만약 이 프로젝트를 원티드나 잡코리아 링크를 첨부하더라도 제게 200건 이상 메일을 보내주실 일을 없을 것 같습니다. npm 환경에서도 react 전용 서비스가 등록되어 있었고, 사이트와 검색을 진득히 읽어 본 후 프로젝트에 적용했습니다. 

![img](https://lh3.googleusercontent.com/fife/AAbDypC_56utz-CMfKli-SfBnTKRB7V3Pf8rgwXcyE-w772MRmtVQMgyfFLcJc6QgCU5d5pCrMOjPXjm6wg8dgD0Nh00yWezD2GP9Fc5KcElQ8V6zU8q81GliLELlfH0aPQe0x7YIahdiXQhAsTUYc0JaN9b_7R8SqmjGmJXavazsX0Ue-3jKcokFg8zC9Ec1oZYxPmuz7yEiggQIUXLN6_Ee0_Z1vkxzz4qRmoe1MvduC1EYFZernkbNTuSixh964aLa6kIWX9vRqzkqkFFIH4XynbA3HKyh1LuXGEVlrXnuj8mgFX2xKWMg58nna0u6KTE3UwBvekXJ75HGbjmKe1l5e1awahO9rVVrbtN4ftC9hFW39762crFgVIUMAE2Zt5qmZLlElCU6_jt2Wl2azDSYlspfX8A1-U56HgE-bxy4W224-0G_Qq8eqPxrYcGIoJGYvCiAw_izoPnM9u_tHxmw5CI4FLCcRgIdckgqNraHG6l8fVf_ZdJlDI6LyhkPJZKp_1MvfNRaeTjyPmseiQVtptaPam2LFb_7suKGvBVlJtDrr2h3w-wwY6NbjNT-JSKxZVypJzcXxcggg0g-44ceIrvsUVCFzkDgvij2qZdWOWHo5DDFz9reC7uK17GpzL1XAncZJguuHlpIwlhgyHDGfhPXc33Pyrnrt3o_quG4Kpq5oyUW-4igR-LJZEdRvXNhy03b52iPCIhUc3kHAq-nWF3gVpezvLyRAmr7kH5H5O6e35BGs5H8lEZjgjw_rEqtwWxQ80zKv8xjRW6H1--7efLV_6pcin9dX9urCBJ4w-jg2_0s_GHx-w7mmvQSK4Ax9DF_pA3yujI6xOlhF0MCRACTPL85USnXN4KGaQObotJfI02qYW_ZNJUbywK3irk_yhjcqjXruCqVwTWcxEgpv_rv5d3LCiyFEVmvVTgz_DuhO50nNVY_x88zEG6ujUIdd564IbOgb1skIQ6ZIMo2yjTDmc2pYBbWfPIpm_9IUmlW8bn9gqUuoKChGBggMGnH6AosHEOmexB6bGnpR8Ah5oHj-seAqAKF2sSIscJriSRzw6zabk4q7jlyMVhEObRHGesSddxamJ1NL08CezzrodZ8A-81QJCVhQDrAGoWdQJpV10NhLQrH1pHrPtfWtbZNOYU2LtXkNLOuQcZ8goI3kN1wk65_2HIAKvEYZsq5GpV4szmKdhUNXbcHaKY45EPZfedaYVWYFnUTNP3EXLFduXMQxh4JDfjYpk_YCZHuHkYuyb2D2K-FKpcScgJmh6dse7vhvAH1Fa7V7NjUUOCJAX2sBWxtzaSklqvYHgE9-RbAd2tETBZ-l87KFmG1MO_5HkNWz6TGVZr9ZQ7uVJdYS2AhE7RyOyYwv2F9ThgMd8bYogpXkxKm9Oz0M-JH3UFx0s_M9C3kgp8Eue3H1_YZIL1kNN0a7ZeYxHfUVBhVJZtVmppgw-5LMY_lfk04ZuQCo60eBd0wrO98rqlaSVCPnrPyrW8_e7iW_OSBFWa3VRb6WC6A=w1920-h870)

*많은 연락이 오길 기대합니다.*
