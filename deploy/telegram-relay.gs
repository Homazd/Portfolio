/**
 * Relays contact-form notifications from the portfolio server to Telegram.
 * The server cannot reach api.telegram.org directly, but it can reach Google.
 *
 * Setup: Project Settings → Script properties:
 *   BOT_TOKEN  token from @BotFather
 *   CHAT_ID    your chat id (send the bot a message, then open
 *              https://api.telegram.org/bot<BOT_TOKEN>/getUpdates)
 *   SECRET     same value as NOTIFY_SECRET in backend/.env
 * Deploy → New deployment → Web app, execute as "Me", access "Anyone",
 * and put the /exec URL in NOTIFY_WEBHOOK_URL.
 */
function doPost(e) {
  const props = PropertiesService.getScriptProperties();
  let data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    return reply('bad request');
  }
  if (!data.secret || data.secret !== props.getProperty('SECRET')) {
    return reply('forbidden');
  }

  const res = UrlFetchApp.fetch(
    'https://api.telegram.org/bot' + props.getProperty('BOT_TOKEN') + '/sendMessage',
    {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify({ chat_id: props.getProperty('CHAT_ID'), text: String(data.text).slice(0, 4000) }),
      muteHttpExceptions: true,
    },
  );
  return reply(res.getResponseCode() === 200 ? 'ok' : 'telegram error: ' + res.getContentText());
}

function reply(text) {
  return ContentService.createTextOutput(text);
}

/** Run from the editor to check the script properties without revealing their values. */
function checkSetup() {
  const props = PropertiesService.getScriptProperties().getProperties();
  ['BOT_TOKEN', 'CHAT_ID', 'SECRET'].forEach(function (key) {
    const value = props[key];
    Logger.log(key + ': ' + (value ? 'set, ' + value.length + ' characters' : 'MISSING'));
  });
  Logger.log('All property names: ' + JSON.stringify(Object.keys(props)));
}
