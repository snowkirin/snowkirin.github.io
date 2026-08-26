// 읽기 시간(분) 추정. 한국어·중국어·일본어는 띄어쓰기 없는 CJK로 「글자 수」로 계산하고,
// 영문·숫자는 「단어 수」로 계산해 합산합니다. 최소 1분.
// 본문 정제(코드 블록 / 인라인 코드 / 이미지 / 링크 URL / HTML / 마크다운 기호 제거)는
// description.ts 와 공유하는 stripMarkdown 을 사용합니다.
//
// 두 속도의 기준 「단위」가 달라 직접 비교할 수는 없습니다:
//   CJK_RATE = 350 글자/분; WORD_RATE = 200 단어/분 (영단어 1개 ≈ 5–6 글자).
// 같은 단위로 환산하면 영문이 실제로 더 빠르지만, CJK는 글자당 정보 밀도가 높아
// 같은 내용을 읽는 데 걸리는 시간은 비슷합니다.
//
// 두 값은 어떤 데이터셋에서 산출한 평균/중앙값이 아니라, 업계 관용의 정수 약속값으로
// 읽기 연구 평균을 보수적으로 반올림한 것입니다:
//   - 영문 200 wpm 은 reading-time 류 도구의 사실상 표준 기본값이며, 연구상
//     조용한 비소설 읽기 평균은 약 238 wpm(Brysbaert 2019 메타분석)이므로
//     200 은 내림한 보수적 값입니다.
//   - 한국어·중국어는 ~300–400 글자/분을 흔히 인용하므로 중간에서 약간
//     보수적으로 잡은 350 을 사용합니다.
// 개인차가 크므로 읽기 시간은 어디까지나 추정치일 뿐이며, 정수 약속값이면 충분합니다.
import { stripMarkdown } from './description';

const CJK_RATE = 350; // 글자 / 분
const WORD_RATE = 200; // 단어 / 분

// CJK(한·중·일) 통합 한자 + 호환 한자 + 가나 + 한글 음절(가-힣). 본 사이트는 한국어 중심.
const CJK = /[㐀-鿿豈-﫿぀-ヿ\uAC00-\uD7AF]/g;

export function readingTimeMinutes(body: string): number {
  const text = stripMarkdown(body); // 與 description 共用剝法

  const cjkCount = (text.match(CJK) ?? []).length;
  // 去掉 CJK 字後，剩下以空白切詞計英數詞數
  const wordCount = (text.replace(CJK, ' ').match(/[A-Za-z0-9]+/g) ?? []).length;

  const minutes = cjkCount / CJK_RATE + wordCount / WORD_RATE;
  return Math.max(1, Math.round(minutes));
}
