const translation = {
  createApp: 'アプリを作成する',
  types: {
    all: '全て',
    chatbot: 'チャットボット',
    agent: 'エージェント',
    workflow: 'ワークフロー',
    completion: 'テキスト生成',
  },
  duplicate: '複製',
  duplicateTitle: 'アプリを複製する',
  export: 'DSL をエクスポート',
  exportFailed: 'DSL のエクスポートに失敗しました。',
  importDSL: 'DSL ファイルをインポート',
  createFromConfigFile: 'DSL ファイルから作成する',
  deleteAppConfirmTitle: 'このアプリを削除しますか？',
  deleteAppConfirmContent:
    'アプリを削除すると、元に戻すことはできません。ユーザーはもはやあなたのアプリにアクセスできず、すべてのプロンプトの設定とログが永久に削除されます。',
  appDeleted: 'アプリが削除されました',
  appDeleteFailed: 'アプリの削除に失敗しました',
  join: 'コミュニティに参加する',
  communityIntro:
    'さまざまなチャンネルでチームメンバーや貢献者、開発者と議論します。',
  roadmap: 'ロードマップを見る',
  newApp: {
    // this comment is to recreate PR
    startFromBlank: '最初から作成',
    startFromTemplate: 'テンプレートから作成',
    captionAppType: 'どのタイプのアプリを作成しますか？',
    chatbotDescription: 'チャット形式のアプリケーションを構築します。このアプリは質問と回答の形式を使用し、複数のラウンドの継続的な会話を可能にします。',
    completionDescription: 'プロンプトに基づいて高品質のテキストを生成するアプリケーションを構築します。記事、要約、翻訳などを生成します。',
    completionWarning: 'この種類のアプリはもうサポートされなくなります。',
    agentDescription: 'タスクを自動的に完了するためのツールを選択できるインテリジェント エージェントを構築します',
    workflowDescription: '高度なカスタマイズが可能なワークフローに基づいて高品質のテキストを生成するアプリケーションを構築します。経験豊富なユーザー向けです。',
    workflowWarning: '現在ベータ版です',
    chatbotType: 'チャットボットのオーケストレーション方法',
    basic: '基本',
    basicTip: '初心者向け。後で Chatflow に切り替えることができます',
    basicFor: '初心者向け',
    basicDescription: '基本オーケストレートは、組み込みのプロンプトを変更する機能がなく、簡単な設定を使用してチャットボット アプリをオーケストレートします。初心者向けです。',
    advanced: 'Chatflow',
    advancedFor: '上級ユーザー向け',
    advancedDescription: 'ワークフロー オーケストレートは、ワークフロー形式でチャットボットをオーケストレートし、組み込みのプロンプトを編集する機能を含む高度なカスタマイズを提供します。経験豊富なユーザー向けです。',
    captionName: 'アプリのアイコンと名前',
    appNamePlaceholder: 'アプリに名前を付ける',
    captionDescription: '説明',
    appDescriptionPlaceholder: 'アプリの説明を入力してください',
    useTemplate: 'このテンプレートを使用する',
    previewDemo: 'デモをプレビュー',
    chatApp: 'アシスタント',
    chatAppIntro:
      'チャット形式のアプリケーションを構築したい。このアプリは質問と回答の形式を使用し、複数のラウンドの継続的な会話を可能にします。',
    agentAssistant: '新しいエージェント アシスタント',
    completeApp: 'テキスト ジェネレーター',
    completeAppIntro:
      'プロンプトに基づいて高品質のテキストを生成するアプリケーションを作成したい。記事、要約、翻訳などを生成します。',
    showTemplates: 'テンプレートから選択したい',
    hideTemplates: 'モード選択に戻る',
    Create: '作成する',
    Cancel: 'キャンセル',
    nameNotEmpty: '名前を入力してください',
    appTemplateNotSelected: 'テンプレートを選択してください',
    appTypeRequired: 'アプリの種類を選択してください',
    appCreated: 'アプリが作成されました',
    appCreateFailed: 'アプリの作成に失敗しました',
  },
  editApp: '情報を編集する',
  editAppTitle: 'アプリ情報を編集する',
  editDone: 'アプリ情報が更新されました',
  editFailed: 'アプリ情報の更新に失敗しました',
  emoji: {
    ok: 'OK',
    cancel: 'キャンセル',
  },
  switch: 'ワークフロー オーケストレートに切り替える',
  switchTipStart: '新しいアプリのコピーが作成され、新しいコピーがワークフロー オーケストレートに切り替わります。新しいコピーは ',
  switchTip: '切り替えを許可しません',
  switchTipEnd: ' 基本的なオーケストレートに戻ることはできません。',
  switchLabel: '作成されるアプリのコピー',
  removeOriginal: '元のアプリを削除する',
  switchStart: '切り替えを開始する',
  typeSelector: {
    all: 'すべてのタイプ',
    chatbot: 'チャットボット',
    agent: 'エージェント',
    workflow: 'ワークフロー',
    completion: 'テキスト生成',
  },
}

export default translation
