# spa-and-bath

UFB TECH株式会社の「温浴施設向け UFB DUAL®」公式ページです。

## 技術構成

- Next.js App Router
- TypeScript
- React
- Noto Sans JP / Noto Serif JP
- HubSpot問い合わせフォーム埋め込み
- 静的HTML出力（一般的なWebサーバー・Vercelに対応）

## ローカル起動

```bash
npm ci
npm run dev
```

## 検証

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## 公開URL

最終公開先は `https://bath.ufbtech-co.jp` を予定しています。

異なるURLを使う場合は、ビルド前に環境変数
`NEXT_PUBLIC_SITE_URL` に正規URLを設定してください。canonical、
OGP、robots、sitemap、構造化データへ反映されます。

## サーバーへの公開

```bash
npm ci
npm run build
```

ビルド後に生成される `out/` の中身を、公開するサブドメインの
ドキュメントルートへアップロードしてください。

- `out/index.html` が公開先直下の `index.html` になるよう配置
- サブドメインへSSL証明書を設定し、HTTPSで公開
- 公開後に `/robots.txt`、`/sitemap.xml`、`/llms.txt` を確認
- HubSpotフォームを表示し、テスト送信は本番運用の通知先を確認してから実施

## 問い合わせフォーム

HubSpotのテスト送信済みフォームをページ内に埋め込んでいます。

- Hub ID: `246501930`
- Region: `na2`
- フォーム共有URL:
  `https://42re3u.share-na2.hsforms.com/2_c7gVmFfRs-qhyxN4tR2KQ`

フォーム項目や通知先はHubSpot側で管理してください。

## 重要事項

- 表示上の製品名は必ず `UFB DUAL®`
- SEO上は `UFB DUAL` と `UFBDUAL` も対象
- UFB DUAL®がレジオネラ属菌を殺菌するとは表現しない
- 「メンテナンスフリー」と表現しない
- 炭酸ガス削減率の注記を削除しない
- 製品写真・設備写真を生成AIで置き換えない
