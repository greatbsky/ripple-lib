/* @flow */
'use strict';
const utils = require('./utils');
const validate = utils.common.validate;

function createOrderCancellationTransaction(account, sequence) {
  validate.address(account);
  validate.sequence(sequence);

  const transaction = new utils.common.core.Transaction();
  transaction.offerCancel(account, sequence);
  return transaction;
}

function prepareOrderCancellation(account, sequence, instructions, callback) {
  const transaction = createOrderCancellationTransaction(account, sequence);
  utils.createTxJSON(transaction, this.remote, instructions, callback);
}

module.exports = utils.wrapCatch(prepareOrderCancellation);
