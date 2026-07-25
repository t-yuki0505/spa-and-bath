# Codex引き継ぎ指示

## プロジェクト

UFB TECH株式会社の「温浴施設向け UFB DUAL®」公式Webページ。
Next.js App Router + TypeScriptで構築し、Vercelで公開する。

## 作業前

1. `README.md`を読む
2. `app/page.tsx`、`app/globals.css`、`app/layout.tsx`を確認する
3. 変更前にPC 1440px・スマホ390pxの表示を確認する
4. 既存デザイン、写真、文章の順番を勝手に変更しない

## ブランドと表記

- 表示名: `UFB DUAL®`
- 検索用表記: `UFB DUAL`、`UFBDUAL`
- 会社名: UFB TECH株式会社
- 正規公開予定URL: `https://bath.ufbtech-co.jp`

## 禁止事項

- UFB DUAL®がレジオネラ属菌を殺菌すると書かない
- 「メンテナンスフリー」と書かない
- 未確認の医療、美容、殺菌効果を追加しない
- 未確認の認証番号、製品仕様、価格を推測しない
- 実際の製品・設備写真を生成AI画像へ置き換えない
- ページを一般的なLPテンプレートへ作り直さない

## 問い合わせ

ページ内にHubSpotフォームを埋め込んでいる。

- Hub ID: `246501930`
- Region: `na2`
- URL: `https://42re3u.share-na2.hsforms.com/2_c7gVmFfRs-qhyxN4tR2KQ`

フォーム項目、通知、ワークフローはHubSpot側を正とする。

## SEO・AIO・LLMO

- `h1`は1つ
- canonical、OGP、Xメタ、robots、sitemapを維持
- Organization、Product、Service、WebPage構造化データを維持
- `public/llms.txt`を事実と同期する
- 存在しないレビュー、評価、受賞歴、FAQを追加しない

## 完了条件

変更後は必ず以下を実行する。

```bash
npm run lint
npx tsc --noEmit
npm run build
```

320px、390px、768px、1024px、1440px、1920pxで横スクロール、
文字切れ、画像切れ、フォーム表示を確認する。
