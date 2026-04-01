---
title: "ESHOP_SEARCH：飲食店検索Webアプリケーション"
category: "Web Development"
technologies: ["Python", "Flask", "SQL", "さくらレンタルサーバ(CGI)"]
date: "2025-06"
---

## ■ 概要
スマートフォンのブックマークに溜まった飲食店情報を、Web上で効率的に検索・管理するための自分専用データベースアプリを開発しました。

## ■ 解決した課題
- **散在する情報の統合**: ブックマークに埋もれていた情報を一括管理し、外出先から即座に検索可能にしました。
- **検索性の向上**: 都道府県、区、地名、店名、カテゴリなど、複数の条件を組み合わせたAND/OR検索を実装しました。

## ■ 技術的工夫・苦労した点
- **CGI環境への対応**: さくらレンタルサーバのCGI環境下でFlask（WSGI Server）を動作させるための独自のディレクトリ構成と設定を行いました。
- **セキュリティ設計**: `.env` を用いた管理者認証を設計し、安全な店舗情報追加機能を実装しました。
- **データクレンジング**: CSVデータの文字コードエラー等を、AIへの相談と段階的な検証を経て解決しました。

## ■ 関連リンク
- [Web Application（さくらレンタルサーバURL）](https://gins-net25.sakura.ne.jp/eshop_search) 
- [GitHub Repository](https://github.com/kou-gin/Eshop_Search)