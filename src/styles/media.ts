/**
 * 기본 반응형 기준
 */
export const responsiveStyle = ({
  mobile,
  desktop,
}: {
  [key: string]: any;
}) => ({
  "@media": {
    "screen and (max-width: 800px)": mobile, // ~800px
  },
});

/**
 * 블로그용 반응형 기준
 */
export const responsiveBlogStyle = ({
  mobile,
  desktop,
}: {
  [key: string]: any;
}) => ({
  "@media": {
    "screen and (max-width: 1199px)": mobile, // 1199px 이하
    "screen and (min-width: 1200px)": desktop, // 1200px 이상
  },
});
