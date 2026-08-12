// 標籤分類的內容資料。schema 與邏輯在 src/lib/taxonomy.ts。
import type { Taxonomy } from "../lib/taxonomy";

// 頂層群組 → tags（葉標籤）＋ 選填的巢狀 groups（子群組）。
// 스노우키린의 태그 분류를 여기에 정의하세요. 비어 있으면 모든 태그는 "미분류"로 표시됩니다.
export const taxonomy: Taxonomy = {};
