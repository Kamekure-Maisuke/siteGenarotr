# Docusaurus試用リポ
## ファーストプロジェクト手順

- 下記のコマンドで、Docusaurusの導入とチュートリアルページ作成を行う。

```bash
# Dcousaurusの導入
$ npm install --global docusaurus-init
# プロジェクトフォルダの作成と移動
$ mkdir ~/work/docusaurus-sample
$ cd ~/work/docusaurus-sample
# Docusaurusプロジェクトの雛形作成
$ docusaurus-init
# 公開ページフォルダへの移動
$ cd website
# ローカルサーバーの起動
$ npm start
```

- `localhost:3000`へアクセスして、下記の画面が表示されたら、完了。

![image](https://user-images.githubusercontent.com/44114228/57009629-adb51080-6c32-11e9-8370-e46ce0047051.png)

## ファイル構造

- 初期化プロジェクトのファイル構造は下記。

```
root
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   ├── exampledoc4.md
│   └── exampledoc5.md
└── website
    ├── blog
    │   ├── 2016-03-11-blog-post.md
    │   ├── 2017-04-10-blog-post-two.md
    │   ├── 2017-09-25-testing-rss.md
    │   ├── 2017-09-26-adding-rss.md
    │   └── 2017-10-24-new-version-1.0.0.md
    ├── core
    │   └── Footer.js
    ├── package.json
    ├── pages
    ├── sidebars.json
    ├── siteConfig.js
    └── static
```

- 各フォルダ詳細は下記。
    - docs・・・ドキュメントのMarkdownファイルを配置。
        - ドキュメントファイルは、全て`.md`ファイルで配置。
    - website/blog・・・ブログ用記事を配置。
        - ブログの投稿は `YYYY-MM-DD-your-file-name.md`
    - website/pages・・・サイトのトップページを配置。
    - website/static・・・サイトの画像やスタイル等を配置する。

## 新規ファイル作成手順

### ドキュメントファイル作成手順

- docs/配下に、`.md`形式でファイルを新規作成して、配置する。
- サンプルとして、`intro.md`を作成する。
- 中身を記述後、`sidebars.json`に、作成ファイルを設定。
- `http://localhost:3000/docs/intro`にアクセス