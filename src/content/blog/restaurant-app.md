---
title: "ESHOP_SEARCH：飲食店検索Webアプリケーション"
category: "Web Development"
technologies: ["Python", "Flask", "MySQL", "Bootstrap", "さくらレンタルサーバ(CGI)"]
date: "2025-06"
---

![ESHOP SEARCH トップページ](/my-portfolio/docs/Eshop_Search企画書_4.png)
*(注釈: Eshop_Search企画書.pdf 4枚目の画像（トップページ）)*

## ■ 開発背景
スマートフォンのブラウザに溜まり続ける大量の飲食店ブックマークを一括で整理し、「自分専用のデータベースとしてWeb上で手軽に検索・管理したい」という課題から本アプリケーションの開発をスタートしました。

## ■ 多彩な検索機能とCRUD実装
フロントエンド・バックエンド・データベースを連携し、実用的なCRUD機能と柔軟な検索インターフェースを構築しました。

![検索方法のモーダル説明](/my-portfolio/docs/Eshop_Search企画書_5.png)
*(注釈: Eshop_Search企画書.pdf 5枚目の画像（検索方法説明）)*

- **複数条件を組み合わせた検索 (Read)**
  都道府県・区・地名での「地域検索」、店舗名の部分一致検索、「カテゴリ」による絞り込み機能を実装。これらを掛け合わせた高度な **AND/OR検索** を可能とし、目的の店舗を即座に見つけ出せるようにしています。モバイル対応デザイン（Bootstrap）を採用しており、直感的なモーダル表示で検索の使い方を解説しています。

![管理者情報追加画面](/my-portfolio/docs/Eshop_Search企画書_14.png)
*(注釈: Eshop_Search企画書.pdf 14枚目の画像（管理画面紹介）)*

- **管理画面からの追加・管理 (Create/Update)**
  地域、店舗名、WebサイトURL、カテゴリ情報を一括で登録できる専用画面を設けています。

## ■ 技術的工夫・苦労した点

### さくらサーバのCGI環境におけるFlask実行
本アプリ最大の技術的な壁は、レンタルサーバ（さくらのレンタルサーバ）の制約でした。直接的にプロセスを立ち上げられない環境において、`flup.server.cgi.WSGIServer` を利用し **CGI環境でFlaskを動作させる** アプローチに着手。`.htaccess` の記述や独自のディレクトリ構成を細かく設計し、ルーティングを正常に機能させることに成功しました。

### セキュアな環境変数管理と認証設計
GitHub等の公開リポジトリへソースコードを管理する際のリスクを考慮し、DBの接続情報などはソースコードに直書きせず、`.env` ファイルを用いた環境変数管理を徹底しました。また、管理者用ページには認証ダイアログを設定し、セキュアな設計を行っています。

### データクレンジングの壁
初期開発時、CSVデータの文字コードエラーに直面しましたが、段階的な検証とAIへの相談を繰り返しながら解決し、確実なデータインポート運用を確立しています。

## ■ 関連リンク
- [Web Application（さくらレンタルサーバURL）](https://gins-net25.sakura.ne.jp/eshop_search) 
- [管理画面](https://gins-net25.sakura.ne.jp/eshop_manage)
- [GitHub Repository](https://github.com/kou-gin/Eshop_Search)