import * as css from "../styles/blog.css";

export function BlogInteractionSlot() {
  return (
    <aside className={css.interactionSlot} aria-label="글 반응">
      <div>
        <span>조회수</span>
        <strong aria-label="조회수 데이터 연결 전">-</strong>
      </div>
      <button type="button" disabled>
        좋아요
      </button>
      <div>
        <span>댓글</span>
        <strong aria-label="댓글 데이터 연결 전">-</strong>
      </div>
    </aside>
  );
}
