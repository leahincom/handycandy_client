# 핸디 캔디
![OPR](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ec346bf2-b4f9-411d-9cd8-e1f465d5dfad/__OPR_1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210706T220543Z&X-Amz-Expires=86400&X-Amz-Signature=3710a1892ad39bf2d2145a207e24059432e8c462aeec5af6beb678ee73c1b9d5&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22__OPR_1.png%22)

## 웹 캔둥이들
- lead: 나정현
- 권영권
- 박찬순
- 이준호
- 조윤서

## 기술스택
* next
* react
* styled-components
* react-query

### 라이브러리
* framer-motion
* dayjs

## 필수 익스텐션(cli로 대체해도 됨, 익스텐션을 추천)
* Prettier - https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
* ESLint - https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
* stylelint - https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint
  * ordering rule 
    * [concentric-css](https://rhodesmill.org/brandon/2011/concentric-css/)

## 디렉토리 구조
```
- .vscode
- .config
- public
    - index.html
- src
    - `components/`
       - common
           - TopNav
           - CandyCard
       - Home
           - AddCandyModal
           - RecommendCandyCard
           - WaitingCard
       - WishList
           - Header
           - Tab
           - HeroSection
           - Total
               - CandyCardList
           - Category
               - CategoryCard
               - AddCategoryModal
           - CategoryDetail
               - CandyCard
       - CandyDetail
           - NavBar
           - DetailHeader
           - CandyDetail
               - CandyMessage
               - ButtonBar
       - CandyDiary
           - EmojiList
               - Emoji
           - ConsumptionDiary
           - CompleteModal
       - Complete
           - CalendarSlider
           - Swiper
           - CandyRecord
               - CandyMessage
               - ConsumptionDiary
               - ButtonBar
       - extension
           - Header
           - CandyCategory
           - SaveDetail
    - pages
    - utils
    - hooks
    - contexts
    - api
```

* * *

> 웹둥이들아
> 전반적인 컨벤션은 다음 링크를 참조하세요
> https://www.notion.so/Conventions-d5ac3bc1b9934b5cb4444d83762fd0c0
