// url 경로 설정
import React from 'react';
import { Redirect } from 'react-router';

import Home from './../pages/home.jsx';
import About from './../pages/about.jsx';
import Contact from './../pages/contact.jsx';

// 해당 경로를 입력할 때 위에 적은 파일 경로로 이동
const routes = [
  {
    path: '/', // localhost: 3000할 때 첫 화면을 Home(./../pages/home.jsx) 보여준다.
    exact: true, // redirect 시 필수 옵션
    component: () => <Redirect to="/home" />,
  },
  {
    path: '/home',
    component: () => <Home />,
  },
  {
    path: '/about',
    component: () => <About />,
  },
  {
    path: '/contact',
    component: () => <Contact />,
  },
];

export default routes;
