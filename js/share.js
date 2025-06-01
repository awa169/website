// 假设的分享数据
const shareData = [
  {
    date: '2025-05-30',
    title: '我的旅行照片',
    type: 'image',
    src: 'images/travel.jpg'
  },
  {
    date: '2025-05-29',
    title: '有趣的视频',
    type: 'video',
    src: 'videos/fun.mp4'
  },
  {
    date: '2025-05-28',
    title: '学习笔记',
    type: 'text',
    content: '今天学习了HTML和JavaScript！'
  }
];

// 渲染分享列表
const list = document.getElementById('shareList');
shareData.forEach(item => {
  const li = document.createElement('li');
  li.innerHTML = `<strong>[${item.date}]</strong> ${item.title}`;

  if (item.type === 'image') {
    li.innerHTML += `<br><img src="${item.src}" width="300">`;
  } else if (item.type === 'video') {
    li.innerHTML += `<br><video src="${item.src}" controls width="300"></video>`;
  } else if (item.type === 'text') {
    li.innerHTML += `<p>${item.content}</p>`;
  }

  list.appendChild(li);
});
