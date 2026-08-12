// 系列文的內容資料。schema 與邏輯（型別、getChapterContext）在 src/lib/series.ts。
import type { SeriesData } from "../lib/series";

// key 直接成為 URL 段（/series/<domain>/<series>/），必須是小寫英數連字號的
// slug；顯示名稱放 title。heroImage 是選填。

// 스노우키린의 시리즈 글을 여기에 정의하세요. 비어 있으면 시리즈 페이지는 빈 상태로 유지됩니다.
export const seriesData: SeriesData = {};
