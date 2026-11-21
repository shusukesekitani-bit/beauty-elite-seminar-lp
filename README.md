# Beauty Elite Academy セミナー LP

サロンオーナー向けセミナーの LP を管理するリポジトリです。La Viora の新規集客用 LP とは別に管理します。

## 表示パターン

- `index.html`：ひとりで回して、利益が残らない
- `index.html?ad=workstyle`：現場に立ち続ける

`ad=workstyle` を指定した場合に、ファーストビューの見出し・画像と、4か所のLINEボタンの遷移先を切り替えます。UTM など他のパラメータを併用できます。

本番 URL：

- `https://meta.laviora-clinical.jp/seminar/`
- `https://meta.laviora-clinical.jp/seminar/?ad=workstyle`

## 構成・公開時の確認

このフォルダ内の `index.html`、`seminar.js`、画像ファイルを同じ公開フォルダに設置します。

通常版のLINE経路は `rhsNMV`、働き方版は `mXvfJn` です。開催日時、会場、所要時間はLP上では準備中です。

計測は `meta.laviora-clinical.jp/seminar/` で有効になります。セミナー専用GTM `GTM-NP4CRQFF` に、LINEボタンクリック時の `seminar_line_click` を送ります。これにはページの `lp_variant` と、どのCTAかを示す `cta_position` が含まれます。GitHub Pagesやローカルの表示確認ではGTMを読み込みません。

アップロード後は、両URLの表示、実機のLINE遷移、Tag Assistantでの発火、Metaの受信、Clarityの記録を確認します。LINEクリックは友だち追加や申込完了とは別の指標です。

画像と文章は共有された確認用 LP をもとにしています。
