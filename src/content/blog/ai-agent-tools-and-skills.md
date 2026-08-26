---
title: "AI 에이전트 운영을 위한 오픈소스 도구 & 스킬 가이드"
description: "시니어 엔지니어부터 마케터, 모션 디자이너까지 아우르는 AI 에이전트·스킬 도구 35선"
pubDate: 2026-08-26
tags: ["AI", "에이전트", "도구", "개발"]
pinned: false
---

AI 코딩 에이전트(Claude Code, Codex, Cursor 등)를 일상적으로 쓰기 시작하면서, "특정 역할을 잘 수행하는 에이전트"를 만들어주는 **스킬(Agent Skill)** 생태계가 급속도로 커지고 있습니다.

이 글은 커뮤니티에서 회자되는 에이전트·스킬 도구들을 **역할별로 묶어** 정리한 참고 자료입니다. 어떤 업무를 자동화하고 싶은지에 따라 필요한 도구가 달라지므로, 먼저 자신의 목적이 어디에 속하는지 가볍게 훑어보세요.

> 목록을 검토하며 일부 항목은 **해당 저장소를 직접 조사해 정확한 주소로 교정**했습니다. 표기된 유료/무료 여부는 글 작성 시점 기준이며 변동될 수 있습니다.

## 1. 시니어 엔지니어

개발 워크플로우를 "체계적인 프로세스"로 바꿔주는 스킬들입니다. AI가 빠른 코드 생성기가 아니라 규율을 지키는 시니어 개발자처럼 동작하도록 하는 데 초점을 둡니다.

### obra/superpowers
TDD·디버깅·협업 등 **20+개 조립식 스킬**을 제공하는 에이전트 스킬 프레임워크이자 소프트웨어 개발 방법론입니다. 깃허브에서 가장 빠르게 성장한 오픈소스 중 하나로, "AI가 계획 단계를 건너뛰지 못하게" 만드는 것이 핵심입니다.

무료 (MIT) · https://github.com/obra/superpowers

### addyosmani/agent-skills
구글 엔지니어 Addy Osmani가 만든 **생산급 엔지니어링 스킬 모음**입니다. spec → plan → build → test → review → simplify → ship 전 과정을 다루는 22개 스킬과 코드 리뷰어·테스트 엔지니어·보안 감사자 등의 전문가 페르소나를 제공합니다.

무료 (MIT) · https://github.com/addyosmani/agent-skills

### multica-ai/andrej-karpathy-skills
Andrej Karpathy가 지적한 **LLM 코딩 실패 패턴**을 단일 가이드(CLAUDE.md)로 정리한 프로젝트입니다. 잘못된 가정, 과설계, 불필요한 범위 이탈 등 4가지 원칙을 중심으로 에이전트의 코딩 행동을 개선합니다.

무료 (MIT) · https://github.com/multica-ai/andrej-karpathy-skills

### garrytan/gstack
Y Combinator CEO Garry Tan이 직접 쓰는 Claude Code 설정을 오픈소스로 공개한 **23개 도구 모음**입니다. CEO·디자이너·엔지니어링 매니저·릴리스 매니저·QA 역할을 슬래시 커맨드로 제공합니다.

무료 (MIT) · https://github.com/garrytan/gstack

## 2. 제품 디자이너

"AI 특유의 뻔한 디자인"을 피하고 프로덕션급 UI/UX를 만들고 싶을 때 쓰는 스킬들입니다.

### nextlevelbuilder/ui-ux-pro-max-skill
멀티 플랫폼·프레임워크에서 전문 UI/UX를 만들기 위한 **디자인 인텔리전스**를 제공합니다. 수백 개의 추론 규칙과 색상 팔레트를 바탕으로 명확한 디자인 지침을 내려줍니다.

무료 (MIT) · https://github.com/nextlevelbuilder/ui-ux-pro-max-skill

### Leonxlnx/taste-skill
**"AI에게 취향을 부여"**한다는 콘셉트로, 레이아웃·타이포그래피·간격·계층·모션 등 세부 디자인 결정을 개선해 뻔한 AI 결과물(slop)을 막아줍니다. 설계 분산·모션 강도·시각 밀도 등 튜닝 파라미터를 제공합니다.

무료 (MIT) · https://github.com/Leonxlnx/taste-skill

### pbakaus/impeccable
Anthropic의 프론트엔드 디자인 스킬에서 출발한 **디자인 품질 스킬**입니다. 23개 커맨드와 59개의 결정적 디텍터 규칙으로 AI 생성 UI의 안티패턴(과도한 라운딩, AI 특유의 슬롭 등)을 잡아냅니다.

무료 (MIT) · https://github.com/pbakaus/impeccable

## 3. QA 테스터

자동화된 테스트·검증 워크플로우를 에이전트에게 부여하는 도구들입니다.

### OpenAI Codex
OpenAI의 코딩 에이전트입니다. 터미널 기반으로 코드 작성·테스트·디버깅을 자동화하며, 에이전트 스킬을 지원합니다.

유료 · https://openai.com/codex

### microsoft/playwright-mcp
마이크로소프트의 **Playwright 브라우저 자동화를 MCP 서버로** 제공합니다. 에이전트가 실제 브라우저를 열어 UI를 조작하고 검증하며 스크린샷을 찍도록 하여 E2E 테스트를 자동화합니다.

무료 (Apache-2.0) · https://github.com/microsoft/playwright-mcp

### anthropics/skills
Anthropic이 공개한 **공식 에이전트 스킬 저장소**입니다. 크리에이티브·개발·엔터프라이즈·문서 등 다양한 스킬과 스킬 명세(spec)를 제공하며, 이 생태계의 사실상 표준입니다.

무료 (MIT) · https://github.com/anthropics/skills

## 4. 문서 팀 (Docs)

문서 변환·제작 관련 도구입니다.

### microsoft/markitdown
마이크로소프트의 **문서→Markdown 변환 도구**입니다. PDF, Office, 이미지, HTML 등 다양한 포맷을 Markdown으로 변환해 LLM 파이프라인에서 바로 소화할 수 있게 해줍니다.

무료 (MIT) · https://github.com/microsoft/markitdown

### microsoft/skills
마이크로소프트의 **에이전트 스킬 문서·가이드** 모음입니다. 문서 팀 관점에서 에이전트 스킬을 설계·작성하는 참고 자료를 제공합니다.

무료 · https://github.com/microsoft/skills

### zarazhangrui/frontend-slides
코딩 에이전트의 프론트엔드 능력을 활용해 **아름다운 웹 슬라이드를 제작**하는 스킬입니다. PowerPoint 대신 인터랙티브한 HTML 슬라이드를 생성하며, URL로 바로 게시할 수 있습니다.

무료 (MIT) · https://github.com/zarazhangrui/frontend-slides

## 5. 마케터

SEO·콘텐츠 개선용 도구들입니다.

### AgriciDaniel/claude-seo
Claude Code용 **범용 SEO 스킬**입니다. 기술 SEO, E-E-A-T, 스키마 마크업, AI 검색 최적화(GEO), 로컬·이커머스·국제 SEO를 아우르는 25개 서브스킬과 18개 전문 에이전트를 병렬로 구동합니다.

무료 (MIT) · https://github.com/AgriciDaniel/claude-seo

### blader/humanizer
AI 생성 텍스트에서 **AI 특유의 패턴을 제거**해 자연스러운 글쓰기로 바꿔주는 스킬입니다. 35개 안티패턴을 감지해 재작성하며, 본인 글 샘플로 목소리를 캘리브레이션할 수 있습니다.

무료 (MIT) · https://github.com/blader/humanizer

### Apify
웹 스크래핑·자동화 플랫폼입니다. 사전 구축된 액터(에이전트)로 웹 데이터를 수집·모니터링하며, LLM 에이전트와 연동해 마케팅 데이터 파이프라인을 구성할 수 있습니다.

무료 체험 있음 / 유료 · https://apify.com

## 6. 소셜 매니저

소셜 콘텐츠 전략·제작·분석을 위한 도구들입니다.

### charlie947/social-media-skills
415k+ 팔로워를 운영 중인 시스템에 담긴 **Claude 스킬 모음**입니다. 보이스 빌더, 프로필 최적화, 뉴스레터 보이스, 릴스 스크립팅, YouTube 썸네일 등 채널 전반의 콘텐츠 시스템을 제공합니다.

무료 (MIT) · https://github.com/charlie947/social-media-skills

### ManyChat
메신저 기반의 **챗봇 자동화 플랫폼**입니다. Instagram·Facebook·WhatsApp 등에서 오토메이션을 구축해 다이렉트 마케팅을 자동화합니다.

무료 체험 있음 / 유료 · https://manychat.com

### GPT Image (OpenAI)
OpenAI의 **이미지 생성 API**입니다. 소셜 포스트·썸네일·브랜드 비주얼 등 콘텐츠용 이미지를 생성하는 데 사용됩니다.

유료 · https://developers.openai.com/api/docs/guides/image-generation

## 7. 모션 디자이너

비디오·모션그래픽 제작을 에이전트로 자동화하는 도구들입니다.

### HiggsField
AI 기반 영상 생성·편집 서비스입니다.

유료 · https://higgsfield.ai

### heygen-com/hyperframes
HeyGen의 오픈소스 **HTML→MP4 렌더링 프레임워크**입니다. HTML·CSS·미디어로 결정론적(재현 가능한) 영상을 렌더링하며, 에이전트가 스킬로 직접 영상을 제작할 수 있습니다.

무료 (MIT) · https://github.com/heygen-com/hyperframes

### calesthio/OpenMontage
"세계 최초의 오픈소스 **에이전트형 영상 제작 시스템**"을 표방합니다. 12개 제작 파이프라인, 100+ 도구, 700+ 에이전트 스킬/제작 지식 파일로 코딩 에이전트를 영상 스튜디오로 바꿔줍니다.

무료 (AGPL-3.0) · https://github.com/calesthio/OpenMontage

### OpenCut-app/OpenCut
오픈소스 **CapCut 대안** 동영상 편집기입니다. 브라우저 기반 데스크톱급 편집 성능을 제공하며 Rust/WebAssembly 엔진과 MCP 통합을 지원합니다.

무료 (MIT) · https://github.com/OpenCut-app/OpenCut

## 8. 리서처

정보 수집·요약을 자동화하는 도구들입니다.

### Panniantong/Agent-Reach
에이전트에게 **인터넷 전체를 볼 수 있는 "눈"**을 부여하는 스킬입니다. Twitter/X, Reddit, YouTube, GitHub, Bilibili, 샤오홍슈 등 수십 개 플랫폼을 API 키 없이 읽고 검색할 수 있게 해줍니다.

무료 (MIT) · https://github.com/Panniantong/Agent-Reach

### mvanhorn/last30days-skill
어떤 주제든 Reddit·X·YouTube·HN·Polymarket·웹에서 **최근 30일간의 내용만 조사**해 근거 있는 요약으로 합성하는 리서치 스킬입니다. GitHub 트렌딩 1위에 오르며 인기를 얻었습니다.

무료 (MIT) · https://github.com/mvanhorn/last30days-skill

### NotebookLM
Google의 **AI 문서 분석 노트 도구**입니다. 업로드한 문서를 바탕으로 요약, 질의응답, 팟캐스트 오디오 등 다양한 형식으로 재구성합니다.

무료 · https://notebooklm.google.com

## 9. 운영 매니저 (Ops)

에이전트 운영·메모리·연동에 관한 도구들입니다.

### Notion MCP
Notion의 **공식 MCP 서버**입니다. 에이전트가 Notion 페이지·DB를 직접 읽고 쓰도록 연결해 문서·업무 운영을 자동화합니다.

무료 · https://developers.notion.com/guides/mcp/overview

### github/github-mcp-server
GitHub의 **공식 MCP 서버**입니다. 에이전트가 저장소·이슈·PR·릴리즈 등 GitHub 작업을 API로 수행하도록 연결합니다.

무료 (MIT) · https://github.com/github/github-mcp-server

### thedotmack/claude-mem
Claude Code의 **세션 간 메모리 지속**을 위한 스킬/도구입니다. 프로젝트별 컨텍스트를 저장·검색해 에이전트가 이전 대화를 기억하도록 돕습니다.

무료 (MIT) · https://github.com/thedotmack/claude-mem

### mem0ai/mem0
에이전트용 **메모리 계층(LLM Mem Layer)** 프레임워크입니다. 대화·사용자 선호도 등 장기 메모리를 구조화해 저장·검색하며, 다양한 LLM 앱과 통합됩니다.

오픈코어 (Apache-2.0) · https://github.com/mem0ai/mem0

## 10. 전체 에이전시

여러 역할을 아우르는 "올인원" 에이전트 모음입니다.

### msitarzewski/agency-agents
**51개 AI 전문가 페르소나**를 제공하는 시스템으로, "온라인 에이전시"를 구축한다는 콘셉트입니다. 각 에이전트마다 정체성·프로세스·산출물이 정의되어 있으며, 네이티브 앱으로 쉽게 설치·관리할 수 있습니다.

무료 (MIT) · https://github.com/msitarzewski/agency-agents

### ComposioHQ/awesome-claude-skills
커뮤니티가 선별한 **Claude 스킬 카탈로그**입니다. 70+ SaaS 앱 연동, 콘텐츠 리서치·작성, 이미지 처리 등 다양한 스킬을 찾아볼 수 있는 인덱스 역할을 합니다.

무료 (MIT) · https://github.com/ComposioHQ/awesome-claude-skills

### wshobson/agents
Claude Code용 **83+ 전문 에이전트, 15개 멀티에이전트 오케스트레이터, 42개 개발 도구**를 제공합니다. 아키텍처·보안·테스트·ML/AI·인프라·비즈니스 운영 등 도메인 전반을 다룹니다.

무료 (MIT) · https://github.com/wshobson/agents

### alirezarezvani/claude-skills
**345개 스킬·70개 커스텀 커맨드·30개 에이전트**를 아우르는 대형 스킬 컬렉션입니다. 엔지니어링, 마케팅, 제품, 컴플라이언스, 리서치, 비즈니스 운영 등 폭넓은 영역을 다룹니다.

무료 (MIT) · https://github.com/alirezarezvani/claude-skills

## 맺음말

에이전트 스킬 생태계의 핵심 인사이트는 **"작은 프롬프트가 아니라 재사용 가능한 프로세스"**라는 점입니다. 위 도구들은 대부분 `SKILL.md` 하나에 워크플로우·검증 단계·안티패턴을 담아, 같은 작업을 반복할 때마다 에이전트가 일관된 품질을 내도록 만듭니다.

흥미로운 것은 Anthropic이 `skills/` 저장소를 오픈하면서 이 포맷이 사실상 업계 표준이 되었고, Cursor·Codex·Gemini CLI 등 다양한 하니스가 이를 채택하고 있다는 점입니다. 위 목록을 시작점으로, 필요에 맞는 스킬 하나씩 골라 자신만의 에이전트 워크플로우를 조립해 보시길 권합니다.
