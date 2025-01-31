# ⚛️ React 공부 프로젝트

이 레포지토리는 React의 기본 개념과 핵심 기능들을 다룹니다. **컴포넌트 기반** 웹 애플리케이션을 구축하기 위한 필수 내용을 학습하고 정리하였습니다.

## 📘 주요 학습 내용

### 1. 🏗️ 컴포넌트(Component)
- **UI를 구성하는 기본 단위**인 컴포넌트를 정의하고 관리하는 방법을 익힙니다.
- **함수형 컴포넌트**와 **클래스형 컴포넌트**의 차이와 각각의 사용법을 학습합니다.

### 2. 🔄 상태 관리(State)
- **컴포넌트의 상태(state)**를 관리하는 방법을 배웁니다.
- `useState` 훅을 사용해 상태를 정의하고, 상태 변화에 따른 **UI 업데이트**를 구현합니다.

### 3. 📡 속성(Props)
- 부모 컴포넌트에서 자식 컴포넌트로 **데이터 전달**을 위해 Props를 사용하는 법을 배웁니다.
- **Props의 불변성**을 이해하고 이를 준수하는 방식으로 데이터를 관리합니다.

### 4. 🖇️ 이벤트 처리(Event Handling)
- 사용자의 **클릭, 입력 등 이벤트**를 처리하고, 해당 이벤트에 반응하는 동작을 구현합니다.
- 함수형 컴포넌트에서 이벤트 핸들러를 정의하고 연결하는 법을 익힙니다.

### 5. 🗂️ 조건부 렌더링(Conditional Rendering)
- 특정 조건에 따라 **컴포넌트를 동적으로 렌더링**하는 방법을 학습합니다.
- `if`, `ternary operator` 등을 활용한 렌더링 기법을 다룹니다.

### 6. 🚦 라이프사이클(Lifecycle)
- 컴포넌트의 **생애주기**를 이해하고, 각 단계에서 필요한 작업을 수행하는 방법을 배웁니다.
- 함수형 컴포넌트에서 `useEffect` 훅을 사용해 **Mounting, Updating, Unmounting**을 다룹니다.

### 7. 🌐 HTTP 통신
- **외부 API와 통신**하여 데이터를 가져오는 법을 배웁니다.
- `fetch` 또는 **Axios** 라이브러리를 사용해 서버와의 비동기 통신을 구현합니다.

### 8. 🌀 훅(Hooks)
- **useEffect, useContext** 등 다양한 훅을 활용하여 함수형 컴포넌트의 기능을 확장합니다.
- `useEffect`로 **API 호출**, **상태 변경 감지** 등의 비동기 작업을 관리합니다.

### 9. 🎨 스타일링(Styling)
- **CSS 모듈, Styled-components** 등을 사용해 컴포넌트에 스타일을 적용하는 방법을 학습합니다.
- 조건부 스타일링과 반응형 웹 디자인을 구현하여 다양한 환경에 적응하는 UI를 만듭니다.

### 10. 🧱 컴포넌트 구조화 및 최적화
- **컴포넌트 구조화**를 통해 코드의 유지보수성을 높이고 재사용성을 강화합니다.
- **컴포넌트 분리**와 **재사용성**을 고려한 효율적인 구조를 설계합니다.
- React의 **렌더링 최적화** 기법을 활용해 성능을 개선합니다.

## 🔗 프로젝트 구조

```bash
📂 react-study
├── 📄 App.js
├── 📄 index.js
├── 📂 components
│   ├── 📄 Header.js
│   ├── 📄 Footer.js
│   └── 📄 TodoList.js
├── 📂 hooks
│   └── 📄 useCustomHook.js
└── 📂 api
    └── 📄 fetchData.js
