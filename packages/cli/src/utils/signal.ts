import { useI18nAgg } from '@/domain/i18n-agg'

const $t = useI18nAgg().commands.t

export function onCancel() {
  throw Error($t('error.userCancel'))
}
