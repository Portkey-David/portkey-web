export const SetLimitExplain =
  'Transfers within the limits do not need approval from guardians. However, if a transfer exceeds these limits, you must either request a one-time approval for that specific transaction or modify the settings beforehand. Please note that settings of the limits will be applied universally to all your token transfers.';

export const NoLimit = 'No limit for transfer';

export const SingleExceedDaily = 'Cannot exceed the daily limit';

export const ExceedSingleLimit =
  'Maximum limit per transaction exceeded. To proceed, you need to modify the limit first.';

export const ExceedDailyLimit = 'Maximum daily limit exceeded. To proceed, you need to modify the limit first.';

export const LimitFormatTip = 'Please enter a positive whole number';

export const ApproveExceedSingleLimit =
  'Maximum limit per transaction exceeded. To proceed with this specific transaction, you may request a one-time approval from guardians. Alternatively, you have the option to modify the limit, lifting restrictions on all future transactions.';

export const ApproveExceedDailyLimit =
  'Maximum daily limit exceeded. To proceed with this specific transaction, you may request a one-time approval from guardians. Alternatively, you have the option to modify the limit, lifting restrictions on all future transactions.';

export const SecurityVulnerabilityTip =
  'You have too few guardians to protect your wallet. Please add at least one more guardian before proceeding.';

export const SecurityAccelerateErrorTip = `Guardian failed to be added. Please wait a while for the addition to complete.`;
export const SetSecondaryMailboxTip1 = `When you carry out the operation of authorization, signature, etc., the auxiliary mailbox you set will receive the corresponding notification email.`;
export const SetSecondaryMailboxTip2 = `If your login account can get emails, you will also receive emails.`;

export const MAX_TRANSACTION_FEE = 0.1;

export enum LimitType {
  Single = 'Single',
  Daily = 'Daily',
}
