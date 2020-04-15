import * as React from 'react';
import { connect } from 'react-redux';

const Home = () => (
  <div>
        <h1>マイページ</h1>
        <p>すぎもとさん(｀･ω･´)ゞについて紹介するよ。紹介って言っても、略歴だよ。</p>
        <ul>
            <li><a href='https://twitter.com/sgmtsnj'> Twitter </a> </li>
        </ul>
        <p> ざっくりとしたプロフィール</p>
        <ul>
            <li> 滋賀に生まれた </li>
            <li> 滋賀で育った </li>
            <li> 京都でプログラミングに出会った </li>
            <li> 京都でソフトやさんになった </li>
        </ul>
    </div>
);

export default connect()(Home);
