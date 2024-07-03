const translation = {
  knowledge: 'ナレッジ',
  documentCount: ' ドキュメント',
  wordCount: ' k 単語',
  appCount: ' リンクされたアプリ',
  createDataset: 'ナレッジを作成',
  createDatasetIntro: '独自のテキストデータをインポートするか、LLMコンテキストの強化のためにWebhookを介してリアルタイムでデータを書き込むことができます。',
  deleteDatasetConfirmTitle: 'このナレッジを削除しますか？',
  deleteDatasetConfirmContent:
    'ナレッジを削除すると元に戻すことはできません。ユーザーはもはやあなたのナレッジにアクセスできず、すべてのプロンプトの設定とログが永久に削除されます。',
  datasetDeleted: 'ナレッジが削除されました',
  datasetDeleteFailed: 'ナレッジの削除に失敗しました',
  didYouKnow: 'ご存知ですか？',
  intro1: 'ナレッジはEmergenアプリケーションに統合することができます',
  intro2: 'コンテキストとして',
  intro3: '、',
  intro4: 'または',
  intro5: '作成することができます',
  intro6: '単体のChatGPTインデックスプラグインとして公開するために',
  unavailable: '利用不可',
  unavailableTip: '埋め込みモデルが利用できません。デフォルトの埋め込みモデルを設定する必要があります',
  datasets: 'ナレッジ',
  datasetsApi: 'API',
  retrieval: {
    semantic_search: {
      title: 'ベクトル検索',
      description: 'クエリの埋め込みを生成し、そのベクトル表現に最も類似したテキストチャンクを検索します。',
    },
    full_text_search: {
      title: '全文検索',
      description: 'ドキュメント内のすべての用語をインデックス化し、ユーザーが任意の用語を検索してそれに関連するテキストチャンクを取得できるようにします。',
    },
    hybrid_search: {
      title: 'ハイブリッド検索',
      description: '全文検索とベクトル検索を同時に実行し、ユーザーのクエリに最適なマッチを選択するために再ランク付けを行います。再ランクモデルAPIの設定が必要です。',
      recommend: 'おすすめ',
    },
    invertedIndex: {
      title: '逆インデックス',
      description: '効率的な検索に使用される構造です。各用語が含まれるドキュメントまたはWebページを指すように、用語ごとに整理されています。',
    },
    change: '変更',
    changeRetrievalMethod: '検索方法の変更',
  },
  docsFailedNotice: 'ドキュメントのインデックスに失敗しました',
  retry: '再試行',
}

export default translation
