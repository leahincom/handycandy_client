# 핸디 캔디 웹 클라이언트
## 기술스택
* next
* react
* styled-components
* react-query
* framer-motion
* dayjs

## 필수 익스텐션(cli로 대체해도 됨, 익스텐션을 추천)
* Prettier - https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
* ESLint - https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
* stylelint - https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint
  * ordering rule 
    * [concentric-css](https://rhodesmill.org/brandon/2011/concentric-css/)

## 브랜치 작성법
1. github project에서 `To Do` 에 태스크 등록
2. `In Progress`에서 태스크를 `issue`로 전환
3. 태스크에 설명 부족 시 `issue`에 해당 태스크 자세한 설명 추가
4. 브랜치는 issue 넘버로 정한다.
   1. ex) issue-1, issue-100

## 컴포넌트 작성법
### 컴포넌트 이름은 디렉토리명 기본 함수는 index로 한다.

```
- components
  - Card
      - index.tsx
```

### 디렉토리명과 컴포넌트 이름은 통일한다.
```
- components
  - Card
      - index.tsx
```
```tsx

export default function Card(){
  return <div></div>
}
```

### 지역 컴포넌트 분리는 해당 디렉토리해서 작업한다.

* 예를 들어 CardThumbnail 생성 시
* 밑에 같은 이름은 제거

```
- components
  - Card
      - index.tsx
      - Thumbnail.tsx
```

```tsx
// src/components/Card/index.tsx
export default function Card(){
  return <div></div>
}

// src/components/Card/Thumbnail.tsx
export default function CardThumbnail(){
  return <div></div>
}
```
### component 이름은 PascalCase

<div style="background:#01937C;padding: 8px;color:white;font-weight: bold">GOOD</div>

```tsx
export default function TestCard({ title, decs, image }: TestCardProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Decs>{decs}</Decs>
      <Thumbnail src={image} />
    </Container>
  );
}
```

<div style="background:#FF616D;padding: 8px;color:white;font-weight: bold">BAD</div>

```tsx
export default function Testcard({ title, decs, image }: TestCardProps) {
  ...
}

export default function test_card({ title, decs, image }: TestCardProps) {
  ...
}
```

### interface 이름은 Component + Props

<div style="background:#01937C;padding: 8px;color:white;font-weight: bold">GOOD</div>

```tsx
export interface TestCardProps {
  title: string;
  decs?: string;
  image?: string;
}

export default function TestCard({ title, decs, image }: TestCardProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Decs>{decs}</Decs>
      <Thumbnail src={image} />
    </Container>
  );
}

```

### props는 첫 번째 인자 뒤에 명시

<div style="background:#01937C;padding: 8px;color:white;font-weight: bold">GOOD</div>

```tsx
export default function TestCard({ title, decs, image }: TestCardProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Decs>{decs}</Decs>
      <Thumbnail src={image} />
    </Container>
  );
}
```

<div style="background:#FF616D;padding: 8px;color:white;font-weight: bold">BAD</div>

```tsx
const TestCard : FC<TestCardProps> = (props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Decs>{decs}</Decs>
      <Thumbnail src={image} />
    </Container>
  );
}
```

<div style="background:#FFCC29;padding: 8px;color:white;font-weight: bold">EXCEPTION</div>

```tsx
const StrapBanner = forwardRef<HTMLAnchorElement, StrapBannerProps>(({ href, image_url, ...props }, ref) => {
  return (
    <Container ref={ref} href={href} {...props}>
      <Thumbnail width={359} height={76} src={image_url} alt='strap_banner' />
    </Container>
  );
});
```

`forwardRef`를 사용하는 경우는 예외로 한다.


## 스토리북 작성법

```tsx
import { Meta, Story } from '@storybook/react';
import TestCard, { TestCardProps } from '.';

export default { title: 'components/common/TestCard', component: TestCard } as Meta;

const Template: Story<TestCardProps> = (props) => <TestCard {...props} />;

export const Basic = Template.bind({});
Basic.args = {
  decs: '설명',
  image: 'https://dummyimage.com/600x400/000/fff',
  title: '제목',
};
```

자세한 작성법은 [링크](https://storybook.js.org/docs/react/writing-stories/introduction) 참조

### 이름과 위치
* 해당 컴포넌트에 같은 폴더에 작성합니다.
  * 이유: 스토리북과 컴포넌트를 쉽게 찾기 위함
* 이름.stories.tsx 으로 만듭니다.
  * index.tsx -> index.stories.tsx
  * Card.tsx -> Card.stories.tsx

