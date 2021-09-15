# 開発（バックエンド）
# 初期設定
1: .仮想環境の構築

virtualenvのインストール
```
$ pip install vitualenv
```

仮想環境の作成
```
virtualenv <仮想環境名>
```
```
# Windows
$ virtualenv <仮想環境名>\Scripts\activate

# Linux or WSL
$ source <仮想環境名>/bin/activate
```
2: .必要なライブラリのインストール
```
$ python -V
Python 3.8.0

$ pip -V
pip 21.2.4
```
```
$ pip install -r requirements.txt
```

3: .実行
```
# DATABASE URLの取得
heroku config
# 環境変数への登録
export DATABASE_URL =
# 鯖立て
python app.py
````
4: .herokuへのデプロイ




# フォルダ構成（後で編集）
$ tree
.
├── README.md
├── requirements.txt
└── src
    └── main.py


# デプロイ

### セットアップ
一度やればOK

1. Heroku CLI をダウンロード
    - https://devcenter.heroku.com/ja/articles/heroku-cli

2. Heroku CLI にログイン

```sh
heroku auth:login
```

3. Gitにデプロイ先を登録

```sh
git remote add heroku https://miro.com/app/board/o9J_lzl019Q=/
```

### デプロイ
以下のいずれかのコマンドでデプロイ

```sh
# mainブランチをそのままデプロイ
git push heroku main

# mainブランチ以外をデプロイ
git push heroku <branch-name>:main
```

Herokuにあるコードがデプロイするコードより古い場合Git的にpushできないので、`git push -f xxxxxxxx`としてフォースプッシュする必要がある