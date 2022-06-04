# Appeal Code Project

애플 dev training 사이트를 보고 학습하는데 아주 좋은 User Flow라는 생각이 들어서 이를 응용하면 비개발자/개발자에게 코드 혹은 문서에 대해 step-by-step으로 설명을 쉽게 할 수 있다고 판단하여 해당 프로젝트를 기획하게 되었습니다.

> Reference [Apple Dev Training](https://developer.apple.com/tutorials/app-dev-training/displaying-data-in-a-list)

// TODO: GIF로 해당 웹사이트 움직임 남겨두기. (시간이 지나면서 UI가 변경될 수 있음을 방지)

# 구현 계획

해당 User Flow를 `Step-By-Step-Code` 라고 부르도록 하겠습니다. 이를 구현하려면 여러 방식이 있겠지만 가장 최신 방식인 [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) API를 활용해서 특정 섹션에 도달하면 코드 이동도 가능하도록 구현해보겠습니다.

https://caniuse.com/?search=intersectionObserver

## 데이터 형태

여기서 말하는 코드는 프로그래밍 코드 뿐만아니라 여러 문서도 될 수가 있습니다.

사실 UI 동작은 흔히 많은 웹사이트에서 구현하고 있어서 특별한 어려움은 없어보이나 코드를 line 단위로 하이라이팅, 스크롤 이동 처리하기 위해서는 문서를 정의하는 데이터를 고민해봐야합니다.

-   각 스탭(`step`)이 화면의 변화를 이끄는 주된 데이터가 됩니다.

    -   첫번째 `step`에서부터 컨텐츠 컨테이너가 sticky하게 고정
    -   특정한 코드 `step`에 도달했을때, **코드 영역의 변화**를 가져옵니다. 도달한 `step`이 보여줄 컨텐츠를 `ref`로 참조하고 있을 예정
    -   마지막 `step`에서는 컨텐츠 컨테이너는 sticky하게 더 이상 이동하지않게 됩니다.
    -   새로운 `section-group`이 등장하면 위 동작을 반복

-   컨텐츠 컨테이너는 외부에서 트리거를 발생시킬 때마다 반응을하게 됩니다. 현재는 **컨텐츠 변경** 만 생각해서 기획하겠습니다.
    -   코드 컨텐츠는 특정 코드라인들을 하이라이팅하게 됩니다. (추후 여러 기능 확장 예정)

```typescript
interface StepGroup {
    steps: Step[];
}

interface Step {
    title: string;
    description: string;
    content?: Content;
}

type RGBCode = string; // ex. #FFFFFF

interface CodeMark {
    [line: number]: {
        textColor?: RGBCode;
        bgColor?: RGBCode;
    };
}

interface CodeContent {
    type: 'code';
    codes: string[];
    mark: CodeMark;
}

type ImagePathUri = string; // ex) http://aws.s3....

interface ImageContent {
    type: 'image';
    uri: ImagePathUri;
}

// 추후 Content
type Content = CodeContent | ImageContent | undefined;
```

위와 같이 데이터를 구성하게되면 위에서 정의한 모두 요구사항을 만족하게 됩니다.

-   `StepGroup` 내에서 `step` property의 길이로 처음과 끝 section을 알 수 있다.
-   특정 `Step`에 도달했을 때 `Step`이 가지고 있는 `content`의 `type`을 통해 어떤 컨텐츠를 보여줄지 결정할 수 있다.
-   추후 확장성으로 여러 Content를 쉽게 추가할 수 있다.
-

# 테스트 코드 실행 방법

```
yarn dev
```

`http://localhost:3000/code/example`

## Intersaction Observer

특정 element에 사용자가 도달했을 때를 감지하는 좋은 방법은 `Intersaction Observer`를 사용하는 것입니다.

> https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

## Sticky를 이용해서 Content Container 교체를 자연스럽게 처리하기.
