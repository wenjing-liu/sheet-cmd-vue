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
  invalidCmd: i18n.t('invalidMsg.cmd'),
  invalidMsg: i18n.t('invalidMsg.invalidMsg'),
  overflowTable: i18n.t('invalidMsg.overflowTable'),
  createTableFirst: i18n.t('invalidMsg.createTableFirst')
}
