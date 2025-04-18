module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [2, 'always', 200] // устанавливаем новый лимит 200 символов
  }
};
