/**
 * config.js — デイサービス 友遊 サイト共通設定
 *
 * GAS（Google Apps Script）のデプロイURLを一元管理します。
 */
var CONFIG = {
  /**
   * お知らせ一覧取得用 GAS デプロイURL
   *   スプレッドシート列: A=日付 / B=カテゴリ / C=タイトル / D=本文
   *   使用ファイル: index.html（トップ3件）/ news.html（全件）
   */
  GAS_API_URL: 'https://script.google.com/macros/s/AKfycbyvbyUrMES2DAqa1rqVedSBL5VPDSab-0XS0ZeMRFPedFfg8sd7W1cD7p1ZKxPTQCM43g/exec',

  /**
   * お問い合わせフォーム送信用 GAS デプロイURL
   *   x-www-form-urlencoded で POST 送信
   *   フィールド: name / kana / phone / email / message
   */
  GAS_FORM_URL: 'https://script.google.com/macros/s/AKfycbxhxhAoziqf5DF8u2eynGKFbGIb9_Y7GBhcF83SzaBOO3EB1Ys8ujDNcCiay4HDW8YNFQ/exec'
};
