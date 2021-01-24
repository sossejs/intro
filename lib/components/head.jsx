// Favicon source: https://favicon.io/emoji-favicons/bowl-with-spoon
// Css Load Trick: https://www.filamentgroup.com/lab/load-css-simpler/

export const Head = ({ app }) => (
  <>
    <link {...app.ctx.useAsset("main").css.props} />
    <link {...app.ctx.useAsset("async").css.props} rel="preload" as="style" />
    <link
      {...app.ctx.useAsset("async").css.props}
      media="print"
      onload="this.media='all'"
    />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest"></link>
  </>
);
