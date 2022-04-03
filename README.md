# javaScript는 많이 다뤄봤지만

FrontEnd로 결정했지만 업무상 javaScript, jQuery 및 openLayers 라이브러리 정도를 다루는 상황으로 

현재 SPA 프레임워크 중 점유율이 가장 높은 React를 학습하고 빠르게 무언가를 만들어보는 것을 목표로 하자

정보처리기사 실기는 필기 합격 후 1년까지 가능하므로 잠시 미루고 React 학습을 선행으로 우선 순위를 변경한다.

    단기 학습 목표
0. 금방 훅훅 바뀌기 때문에 책으로 공부하지 말 것.<br>
    -> 기초 설정이나 이런 것도 자주 바뀌는지? <br>
    그렇지 않다면 책 구매해서 기본 구동 방식이라던가 하는건 학습해도 좋은 방법일 것 같다.

1. CRA(create react app)을 이용해서 정말 간단한 앱을 만들어보기.

2. 간단히 만든 앱에 redux를 적용하기.

3. 그 앱에 react-redux를 적용하기.

4. 이해할 때 까지 몇 번이고 다시 기본 앱 -> redux -> react-redux 사이클을 반복.

5. CRA를 버리고 npm run eject 명령어 입력시 CRA 구조가 나오는데 react boilerplate라고 검색해서 입맛에 맞는 걸 찾아보기도 하고 직접 따라 치고 오류를 경험. 웹팩에 좌절해가며 나만의 보일러 플레이트를 만들기 -> 마지막으로 만든 앱을 올리기.

6. 비동기를 적용(간단한 api 호출 또는 로컬 데이터)<br>
json-server와 axios가 적용하기 쉬움.

7. 비동기 적용시 thunk 적용. <br>실력이 좋다면 saga

8. 리팩토링으로 타입을 적용하기. <br>prop-types(초보) -> flow -> typescript(고수)

9. 서버에 올려보기. <br>express 아니면 서버리스도 괜찮.

10. jest 적용해서 컴포넌트 유닛 테스트

11. 이 외에도 컴포넌트 방식의 CSS, JWT 토큰 적용, SEO, SSR 등 해볼건 많음.

지금까지 느꼈듯이<br>
기초는 공부 하면 할 수록 근간이 되고 자신감이 될 것.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
