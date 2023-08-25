# Next.js-Hands-on-microCMS
Next.js×microCMSハンズオン用のリポジトリです！

## 環境構築手順

Node.jsとnpmが入っていない方は以下のURLを参考にダウンロードをしてください。

https://kinsta.com/jp/blog/how-to-install-node-js/

バージョンは基本的に最新のLTS版(長期サポートバージョン、いわゆる安定版)をダウンロードしていただければ良いかと思います。
(私は今回ver17.9.0のものを使用してプロジェクトを作成しています。)

### 1.Nodeのバージョンを確認する
```
node -v
```

<img width="206" alt="スクリーンショット 2023-04-22 10 48 19" src="https://user-images.githubusercontent.com/65134351/233790013-78a34098-79a7-4be2-8565-2159615cc52b.png">

### 2.適宜ディレクトリを作成し、その中に今回私が作成したGitHubリポジトリの内容をcloneしてください。
```
// mkdirコマンドでディレクトリ作成(名前はなんでもok🙆)
mkdir CAMP
```

```
cd CAMP
```

```
// pwdコマンドでCAMPディレクトリに移動したことを確認する
pwd
```

```
git clone https://github.com/miyakei1225/Next.js-Hands-on-microCMS.git
```

↓こちらから確認可能です！
<img width="1289" alt="スクリーンショット 2023-06-26 3 40 50" src="https://github.com/miyakei1225/Next.js-Hands-on-microCMS/assets/65134351/0151a605-adec-4a4c-a3c0-8ac0cd3a6de7">

### 3.next-frontディレクトリに移動し、lsコマンドでファイル群があることを確認する。
```
cd next-front
```

```
ls
```
<img width="612" alt="スクリーンショット 2023-08-25 23 59 24" src="https://github.com/miyakei1225/Next.js-Hands-on-microCMS/assets/65134351/bfd5d951-cb0a-4d21-8125-1853ed6995fd">

### 4.VS Codeでプロジェクトフォルダを開く(未ダウンロードの方は各自ダウンロードしていただけると幸いです。)
【※もし実行するのであれば設定必須🙆】
code . コマンドで現在のディレクトリのフォルダを開く便利なコマンドがあるため、ぜひこちらを参考に設定してみてください！
```
code .
```
https://qiita.com/naru0504/items/c2ed8869ffbf7682cf5c

### 5.npm installを実行する
```
npm install
```
<img width="610" alt="スクリーンショット 2023-06-26 3 45 20" src="https://github.com/miyakei1225/Next.js-Hands-on-microCMS/assets/65134351/8f135dc6-a3b9-41b8-8aeb-a7174ca35850">

### 6.npm run devを実行し画面が表示されれば環境構築完了です！
```
npm run dev
```
