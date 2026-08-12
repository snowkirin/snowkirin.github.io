// UI 字串集中地（i18n-ready）。
// 這裡只放「介面字串」——導覽、按鈕、區塊標題、計數模板、meta 標題等；
// 長文內容（about 自介、首頁 hero 段落、文章本文）仍留在各自頁面/內容集合，不進這裡。
//
// 設計成「以語言為外層、扁平 key 為內層」，日後要加語言只需補一個鍵。
// 取值與插值統一走 src/i18n/utils.ts 的 useTranslations()。
// 模板插值用 {name} 佔位（注意 Pagefind 自己的 [COUNT] / [SEARCH_TERM] 不是我們的佔位，原樣保留）。

export const defaultLang = 'ko' as const;

export const ui = {
  ko: {
    // ── 導覽列（Header）──
    'nav.blog': '블로그',
    'nav.tags': '태그',
    'nav.series': '시리즈',
    'nav.blogroll': '블로그롤',
    'nav.about': '소개',
    'nav.menu': '메뉴',

    // ── 全站搜索（Header / Pagefind）──
    'search.label': '검색',
    'search.placeholder': '글 검색…',
    'search.zeroResults': '관련 결과를 찾을 수 없습니다',
    'search.manyResults': '「[SEARCH_TERM]」에 대한 결과 [COUNT]개',
    'search.oneResult': '「[SEARCH_TERM]」에 대한 결과 [COUNT]개',
    'search.loadMore': '더 보기',
    'search.searching': '검색 중…',
    'search.devNotice': '검색 기능은 <code>pnpm build</code> 이후에 사용할 수 있습니다',

    // ── 主題切換 ──
    'theme.toggle': '테마 전환',

    // ── 頁尾 ──
    'footer.copyright': '© {year} {author}. {license}.',
    'footer.rssLabel': 'RSS 구독',

    // ── 內容授權 ──
    'license.fullName': 'All rights reserved',
    'license.url': '',
    'license.contact': '',

    // ── 分頁 ──
    'pagination.nav': '글 페이지 매김',
    'pagination.prev': '이전',
    'pagination.next': '다음',

    // ── 文章頁（BlogPost）──
    'post.toc': '목차',
    'post.openToc': '목차 열기',
    'post.closeToc': '목차 닫기',
    'post.related': '비슷한 글',
    'post.lastUpdated': '마지막 업데이트',
    'post.readingTime': '약 {n}분 읽기',
    'post.belongsTo': '본 글의 시리즈:',
    'post.prev': '← 이전 글',
    'post.next': '다음 글 →',
    'post.copyCode': '코드 복사',
    'post.imageZoom': '이미지 확대',
    'post.seriesNav': '시리즈 글 내비게이션',
    'breadcrumb.home': '홈',
    'breadcrumb.blog': '글',

    // ── 留言板（Comments）──
    'comments.title': '댓글',
    'comments.load': '댓글 불러오기',

    // ── 文章列表（blog index / page）──
    'blog.allPosts': '전체 글',
    'blog.metaDescription': '전체 글 목록',
    'blog.totalCount': '총 {n}개',
    'blog.pageInfo': '총 {total}개 · {current} / {last} 페이지',
    'blog.pageTitle': '전체 글 {n}페이지',

    // ── 標籤 ──
    'tags.title': '태그',
    'tags.metaDescription': '전체 글 태그',
    'tags.viewAll': '전체 보기',
    'tags.sectionCount': '{n}개',
    'tags.postCount': '{n}개의 글',
    'tags.leafDescription': '「{name}」 태그가 달린 글',
    'tags.groupDescription': '「{name}」 분류의 글',
    'tags.empty': '이 태그에는 아직 글이 없습니다.',
    'tags.orphanTitle': '미분류',
    'tags.orphanHint': '분류 트리에 아직 포함되지 않은 태그',
    'tags.planned': '계획 중',

    // ── Blogroll ──
    'blogroll.title': '블로그롤',
    'blogroll.metaDescription': '이 블로그의 친구 링크',
    'blogroll.intro': '인터넷에서 구경할 만한 곳.',
    'blogroll.empty': '아직 블로그롤이 없습니다, 곧 채워질 예정 ✨',

    // ── 系列文 ──
    'series.title': '시리즈',
    'series.metaDescription': '주제별로 정리한 시리즈 글',
    'series.empty': '시리즈 글이 준비 중입니다.',
    'series.domainMetaDescription': '{title} 시리즈 글',
    'series.detailMetaDescription': '{title} 시리즈 목차',
    'series.seriesCount': '{n}개 시리즈',
    'series.chapterCount': '{n}개의 글',
    'series.partCount': '{n}개 Part',
    'series.partAndChapters': '{parts}개 Part · {chapters}개의 글',

    // ── 首頁區塊（index）──
    'home.pinned': '고정 글',
    'home.pinnedBadge': '고정',
    'home.featuredSeries': '추천 시리즈',
    'home.seeAllSeries': '전체 시리즈 보기 →',
    'home.latestPosts': '최신 글',

    // ── 關於（about）──
    'about.title': '소개',
    'about.metaDescription': '이 블로그와 작성자에 대해',

    // ── 404 ──
    'notFound.metaTitle': '404 — 페이지를 찾을 수 없음',
    'notFound.metaDescription': '이 페이지는 존재하지 않거나 이동되었습니다.',
    'notFound.heading': '페이지를 찾을 수 없습니다',
    'notFound.message': '찾으시는 페이지가 이동되거나 이름이 바뀌었을 수 있습니다. 주소를 확인하시거나 아래 링크로 이동해 주세요.',
    'notFound.home': '← 홈으로',
    'notFound.linksLabel': '또는 이동',

    // ── RSS ──
    'rss.badge': 'RSS 피드',
    'rss.subscribeHint': '이것은 RSS 구독 주소입니다. 이 페이지의 주소를 RSS 리더에 붙여넣으면 새 글이 올라올 때 자동으로 알려드립니다.',
    'rss.visitSite': '사이트 방문 →',
    'rss.latestPosts': '최신 글',
    'rss.readMore': '전문 읽기 →',

    // ── llms.txt ──
    'llms.operatedBy': '이 사이트는 {author}이(가) 운영합니다.',
    'llms.postsHeading': '글',
    'llms.seriesHeading': '시리즈',
  },
} as const;

export type Lang = keyof typeof ui;
export type UIKey = keyof (typeof ui)[typeof defaultLang];

// 全站 locale 的單一真相來源。
export const localeTags = {
  ko: { html: 'ko', og: 'ko_KR', intl: 'ko-KR', giscus: 'ko' },
} as const satisfies Record<Lang, { html: string; og: string; intl: string; giscus: string }>;

// 目前單語言。
export const siteLocale = localeTags[defaultLang];
