const ajax = new XMLHttpRequest();
const NEWS_URl = 'https://api.hnpwa.com/v0/news/1.json'; 
ajax.open('GET', NEWS_URL, false); // 비동기가 아니라 동기적으로 처리하겠다는 옵션
ajax.send();

const newsFeed = JSON.parse(ajax.response); // 문자열을 객체로 변환
const ul = document.createElement('ul');

// overwrite 되는 이슈
for (let i = 0; i < 10; i++) {
  const li = document.createElement('li');
  li.innerHTML = newsFeed[i].title;
  ul.appendChild(li);
};

// 하드코딩
// document.getElementById('root').innerHTML = `<ul>
// <li>${newsFeed[0].title}</li>
// <li>${newsFeed[1].title}</li>
// <li>${newsFeed[2].title}</li>
// </ul>`;

document.getElementById('root').appendChild(ul);
