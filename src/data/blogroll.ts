export type BlogrollLink = {
  name: string;
  url: string;
  description?: string; // 選填，有才在卡片上顯示一行簡介
  avatar?: string; // 選填：public/ 下的路徑或外部圖網址。
  // 想自動抓對方 favicon 可填：
  //   https://www.google.com/s2/favicons?domain=範例.com&sz=128
  // 或 https://icons.duckduckgo.com/ip3/範例.com.ico
  // 留空則自動用名稱首字 + 主題漸層產生字母圓章。
};

// Blogroll 清單（顯示名「友站」）。純人類導覽，刻意不納入 llms.txt／sitemap。
export const blogroll: BlogrollLink[] = [
  {
    name: 'Indieblog',
    url: 'https://indieblog.net/',
    description: '한국 개발자 개인 블로그 · RSS 발견 플랫폼',
    avatar: 'https://icons.duckduckgo.com/ip3/indieblog.net.ico',
  },
  {
    name: 'GeekNews',
    url: 'https://news.hada.io/',
    description: '개발 · 기술 · 스타트업 뉴스를 한눈에 보는 커뮤니티',
    avatar: 'https://icons.duckduckgo.com/ip3/news.hada.io.ico',
  },
];
