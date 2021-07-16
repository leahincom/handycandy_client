<p align="center">
  <img src="https://user-images.githubusercontent.com/49134038/125941464-4374e402-9bbb-45d4-82de-ebdf5bbe8844.png" alt="handycandy" >
  <h3 align="center">보상 아카이빙 서비스, 핸디캔디</h3>
  <h4 align="center">바쁜 일상 속 날 위한 시간을 잃어가는 당신에게 더 쉽고, 다채롭게 행복을 담는 여정을 제시하다</h4>
  <br />
</p>
<br />

## About Front Candy-ers
  <div align="center">
<img src="https://user-images.githubusercontent.com/49134038/125941187-3601a67c-d8fc-4a5c-9026-61b351bb4d86.png" width="150" /><img src="https://user-images.githubusercontent.com/49134038/125941163-4e9b6e13-4118-4c46-96e7-e2172664b3bc.png" width="150" /><img src="https://user-images.githubusercontent.com/49134038/125941151-785a352e-5eb2-498e-baa5-92127b965553.png" width="150" /><img src="https://user-images.githubusercontent.com/49134038/125941165-156e42cd-200c-4bbe-8eca-88ea8fee2219.png" width="150" /><img src="https://user-images.githubusercontent.com/49134038/125941156-f6d5c0eb-d543-41d6-afd6-df1741161677.png" width="150" />
</div>

- <b>lead</b>: [나정현](https://github.com/leahincom)
- [권영권](https://github.com/lebmouse)
- [박찬순](https://github.com/soonniee)
- [이준호](https://github.com/juno7803)
- [조윤서](https://github.com/healing99)

## About Our Main Service

### 캔디 추가
![image](https://user-images.githubusercontent.com/49134038/125964986-dcac0c9e-ee32-486a-9d75-9d82d25ce678.png)
- 모달 레이아웃 구현
- 캔디 추가하기 `GET`
- 캔디 날짜, 메시지 추가하기 `PUT`
- 카테고리 가져오기 `POST`
- 카테고리 추가하기 이동
- 분류별 카테고리 페이지 (`/wish/category`) 라우팅

### 카테고리 추가
![image](https://user-images.githubusercontent.com/49134038/125965047-321ff57b-66cf-4189-a1f4-616c8301e6de.png)
- 모달 레이아웃 구현
- 카테고리 추가하기 `GET`

### 다가오는 캔디
![image](https://user-images.githubusercontent.com/49134038/125965141-3f601972-1055-4006-ae13-3c4ef7567ac1.png)
- `default` : 담은 캔디
- 디데이에 맞게 `OptionBar` 렌더링
- 디데이 존재 → month, date 렌더링
- 없을 시 → 담은 후 경과 일자 렌더링
- 홈 뷰에 맞게 사이즈 조정
- 호버 시 스타일링

### 기다리는 캔디
![image](https://user-images.githubusercontent.com/49134038/125965176-a2cfecb1-0bd5-40b2-b50a-b650a2a722e3.png)
- 카테고리 별로 다른 캔디 렌더링
- 카테고리 별로 다른 색 렌더링
- 경과 일자 렌더링

### 추천 캔디
![image](https://user-images.githubusercontent.com/49134038/125965198-9b5e009c-c322-48bf-a92a-a73ac5ec8e63.png)
- 호버 시 스타일링
- `+` 버튼 누르면 모달 띄우기

### 담은 캔디
![image](https://user-images.githubusercontent.com/49134038/125965272-957a6208-6dd7-4993-86f7-6d3771af7822.png)
![image](https://user-images.githubusercontent.com/49134038/125965292-1749fe5c-3695-46c2-acea-b29a2278d518.png)
- 페이지 레이아웃 구현
- 분류별 캔디 서버 연동
- 분류별 캔디 이미지 클릭 시 분류별 캔디 상세 페이지 이동 구현

### 담은 캔디 애니메이션
![candy채우다3](https://user-images.githubusercontent.com/49134038/125966818-f9551375-ca51-4c46-a451-1659399d42ec.gif)
- `framer-motion` 을 이용한 애니메이션 구현

### 캔디 일지
![image](https://user-images.githubusercontent.com/49134038/125965351-867fa857-e5a6-4b47-bbf5-4bd0b5d05100.png)
- `fullpage.js` 를 통해 슬라이드 되도록 구현
- 선택한 감정 이모티콘 별로 완료 모달의 이미지 다르도록 구현

### 완료한 캔디 (아카이빙)
![image](https://user-images.githubusercontent.com/49134038/125965419-a63379a0-6fed-4ef2-adcb-f505eae263f6.png)
- `React-Slick` 을 이용한 이미지 슬라이더 구현, 해당 월별 카테고리 갯수에 따라 이미지 다르게 보이도록 구현
- 카테고리별로 `completeCard` 다르게 보이도록 구현

### 캔디 검색
![image](https://user-images.githubusercontent.com/49134038/125965454-44ec0601-875b-451c-8813-0cb68f29b24d.png)
- 빈 쿼리 전달 시 모든 캔디 검색
- 기타 담은 캔디, 완료한 캔디 별로 쿼리 결과 렌더링

### 회원가입 및 로그인
![image](https://user-images.githubusercontent.com/49134038/125965492-42f5e19b-4489-44cc-ba29-5d2b7aafaf28.png)
- 아이디(이메일)와 이름, 생년월일, 비밀번호를 입력받는 폼 구성
- 레이아웃은 완성했지만, 회원가입 기능 자체는 아직 구현하지 않았음
- 현재는 하나의 계정으로 로그인 가능하다

![image](https://user-images.githubusercontent.com/49134038/125965482-244ded27-63d2-4f25-8b42-22b3b9478e54.png)
- 아이디(이메일)와 비밀번호를 입력받아 로그인할 수 있다.
- 회원가입 버튼을 입력하면 회원가입 페이지로 이동

***

## Tech Stack and Library
```
"@babel/core": "^7.14.6",
"@croquiscom/eslint-config-www": "^1.3.0",
"@storybook/addon-actions": "^6.3.1",
"@storybook/addon-essentials": "^6.3.1",
"@storybook/addon-links": "^6.3.1",
"@storybook/react": "^6.3.1",
"@svgr/webpack": "^5.5.0",
"@types/lodash-es": "^4.17.4",
"@types/matter-js": "^0.17.2",
"@types/react": "17.0.11",
"@types/react-slick": "^0.23.4",
"@types/styled-components": "^5.1.10",
"babel-loader": "^8.2.2",
"eslint": "7.29.0",
"eslint-config-next": "11.0.1",
"prettier": "2.3.2",
"slick-carousel": "^1.8.1",
"stylelint": "^13.13.1",
"stylelint-config-concentric-order": "^4.0.1",
"typescript": "4.3.4"
"@ant-design/icons": "^4.6.2",
"@fullpage/react-fullpage": "^0.1.19",
"@material-ui/core": "^4.11.4",
"axios": "^0.21.1",
"dayjs": "^1.10.6",
"framer-motion": "^4.1.17",
"jotai": "^1.1.3",
"lodash": "^4.17.21",
"lodash-es": "^4.17.21",
"matter-js": "^0.17.1",
"next": "11.0.1",
"pathseg": "^1.2.0",
"react": "17.0.2",
"react-dom": "17.0.2",
"react-hook-form": "^7.10.1",
"react-query": "^3.18.1",
"react-slick": "^0.28.1",
"styled-components": "^5.3.0"
```

## Directory
```
- public
    - assets
       - banners
       - bottles
       - candy
       - candy3d
       - candyAdded
       - completeCandy
       - emoticon
       - home
       - icons
       - images
    - index.html
- src
    - assets
    - components
       - common
           - Button
           - CandyCard
           - CandyEdit
           - CandyIcon
           - CategoryCard
           - DialogManager
           - Footer
           - Navbar
           - Navigation
           - NoticeModal
           - SearchBar
           - TestCard
           - TopHeader
           - WishedCandySlider
       - complete
       - home
       - layout
       - wish
       - reward
       - search
       - signup
       - extension
           - Header
           - CandyCategory
           - SaveDetail
    - pages
       - api
       - complete
       - reward
       - search
       - wish
    - utils
    - states
    - styles
```

