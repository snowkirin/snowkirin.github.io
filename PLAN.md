# Snowkirin 기술 블로그 구축 계획

이 문서는 `/Users/jinsoo/workspace/snowkirin.github.io` 에 Astro 기반 기술 블로그를 구축하는 전체 계획을 기록한다.

## 확정 사항

- 완전 새로 시작 (7년 전 Jekyll 글 폐기)
- Tailwind CSS (v4, `@tailwindcss/vite`)
- pnpm 패키지 매니저
- 전체 기능: 검색(Pagefind) + 태그/카테고리 + RSS + 댓글(giscus) + 시리즈

## 기술 스택

| 항목 | 선택 |
|------|------|
| 프레임워크 | Astro (최신 v5.x) |
| 언어 | TypeScript (strict) |
| 패키지 매니저 | pnpm |
| 스타일링 | Tailwind CSS v4 |
| 코드 하이라이트 | Shiki (Astro 내장) |
| 검색 | Pagefind |
| 댓글 | giscus (GitHub Discussions) |
| 배포 | GitHub Pages via GitHub Actions |
| 사이트 URL | https://snowkirin.github.io (루트, base 불필요) |

## 단계

### 1단계: 레포 초기화
- [x] 기존 Jekyll 소스 삭제 (`_config.yml`, `_layouts/`, `_sass/`, `_includes/`, `Gemfile*`, `index.markdown`, `200106.7z`, `404.html`, `.gitignore`, `docs/`)
- [x] git 히스토리 유지
- [x] PLAN.md 작성 (본 문서)

### 2단계: Astro 프로젝트 스캐폴드
- [x] `pnpm create astro@latest . --template blog --no-install --no-git`
- [x] `astro.config.mjs`: `site: 'https://snowkirin.github.io'`
- [x] `tsconfig.json` (strict)

### 3단계: 콘텐츠 콜렉션 구성
- [x] `src/content.config.ts` → `blog` + `categories` 콜렉션 (glob loader + Zod 스키마)
- [x] 스키마: title, description, pubDate, updatedDate, tags, category, series

### 4단계: 핵심 기능 구현
- [x] 목록/상세: `src/pages/index.astro`, `src/pages/blog/[...slug].astro` (getStaticPaths)
- [x] 태그: `src/pages/tags/[tag].astro` + 태그 인덱스
- [x] 카테고리: `src/pages/categories/[category].astro`
- [x] RSS: `src/pages/rss.xml.js` — `@astrojs/rss` + `getCollection`
- [x] 검색: Pagefind + 검색 UI 컴포넌트
- [x] 댓글: giscus 컴포넌트
- [x] 시리즈: frontmatter `series` 필드로 그룹화

### 5단계: 스타일링
- [x] Tailwind v4: `pnpm astro add tailwind`, `src/styles/global.css` 에 `@import "tailwindcss"`
- [x] BaseLayout, 헤더/푸터/카드 컴포넌트

### 6단계: GitHub Pages 배포 파이프라인
- [x] `.github/workflows/deploy.yml`: `withastro/action@v6` + `actions/deploy-pages@v5`
- [x] master push + workflow_dispatch 트리거 (repo 기본 브랜치가 master라서 main이 아닌 master로 실행)
- [ ] 수동 진행: Settings → Pages → 소스 'GitHub Actions' 로 변경

### 7단계: 검증
- [x] `pnpm build` 성공
- [x] `pnpm preview` 로컬 검증
- [ ] 배포 후 `https://snowkirin.github.io` 접속 확인

## 수동 설정 요구사항 (blocker)

1. **GitHub Pages 소스 변경**: repo Settings → Pages → Source 를 'GitHub Actions' 로 변경 (레포 관리자 수동 적용)
2. **giscus 활성화**: GitHub Discussions 활성화 + giscus app 설치 (댓글 기능 시)
3. **기존 origin 확인**: `origin` = `https://github.com/snowkirin/snowkirin.github.io` (유지)

## 검증 명령

```bash
pnpm build
pnpm preview
```

---
작성일: 2026-08-10
