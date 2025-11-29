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
