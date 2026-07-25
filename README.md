# spa-and-bath

UFB TECH株式会社の「温浴施設向け UFB DUAL®」公式ページです。

## 技術構成

- Next.js App Router
- TypeScript
- React
- Noto Sans JP / Noto Serif JP
- HubSpot問い合わせフォーム埋め込み
- Vercel対応

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

Vercel側で異なるURLを使う場合は、環境変数
`NEXT_PUBLIC_SITE_URL` に正規URLを設定してください。

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
