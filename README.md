# kanban-app
## About project
[Vue.js入門 基礎から実践アプリケーション開発まで](https://www.amazon.co.jp/Vue-js%E5%85%A5%E9%96%80-%E5%9F%BA%E7%A4%8E%E3%81%8B%E3%82%89%E5%AE%9F%E8%B7%B5%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E9%96%8B%E7%99%BA%E3%81%BE%E3%81%A7-%E5%B7%9D%E5%8F%A3-%E5%92%8C%E4%B9%9F-ebook/dp/B07J6FP6NQ)
8,9,10章 中規模・大規模向けアプリケーションの開発
①開発環境のセットアップ
②設計
③実装

- ログインページ
    - ログインでタスク管理アプリケーションの利用を開始できる
    - ログインできるユーザーはあらかじめ事前に登録されたユーザーのみ
- ボードページ
    - タスク管理アプリケーションで利用できるボードはシステムデフォルトの１枚のみ
    - ボード上に存在するタスクは他のユーザーにも共有される
    - ボード内には以下状態を持ったタスクを格納できるタスクリストのみを使用可能
    - タスクリストは追加、削除はできない
    - タスクリスト上でタスクを作成できる
    - タスクリスト上に存在するタスクはドラッグ&ドロップで別のタスクリストに移動できる
    - タスクは削除できる
    - ボードのナビゲーションメニューのログアウトでタスク管理アプリケーションの利用を終了できる
- タスク詳細ページ
    - タスクはタスク名とタスクの説明を記述および更新できる

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
