import i18n from '@/i18n'

export const COMMAND_KEYS = {
  CREATE_KEY: 'C',
  INSERT_KEY: 'N',
  SUM_KEY: 'S',
  EXIT_KEY: 'Q'
}

export const invalidMsg = {
  createInvalidMsg: i18n.t('invalidMsg.createInvalidMsg'),
  insertInvalidMsg: i18n.t('invalidMsg.insertInvalidMsg'),
  sumInValidMsg: i18n.t('invalidMsg.sumInValidMsg'),
  invalidCmd: i18n.t('invalidMsg.invalidCmd'),
  invalidMsg: i18n.t('invalidMsg.invalidMsg'),
  overflowTable: i18n.t('invalidMsg.overflowTable'),
  createTableFirst: i18n.t('invalidMsg.createTableFirst'),
  noneValue: i18n.t('invalidMsg.noneValue')
}

export const cmdRegex = {
  CREATE_KEY: /^(C)\s([1-9]\d?)\s([1-9]\d?)$/,
  INSERT_KEY: /^(N)\s(\d+)\s(\d+)\s(\d{1,3})$/,
  SUM_KEY: /^(S)\s(\d+)\s(\d+)\s(\d+)\s(\d+)\s(\d+)\s(\d+)$/,
  EXIT_KEY: /^(Q)$/
}
