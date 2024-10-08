import { useTranslation } from 'react-i18next'
import { ChevronDownDouble } from '@/app/components/base/icons/src/vender/line/arrows'
import Tooltip from '@/app/components/base/tooltip'

const PriorityUseTip = () => {
  const { t } = useTranslation()

  return (
    <Tooltip
      selector='provider-quota-credential-priority-using'
      content={t('common.modelProvider.priorityUsing') || ''}
    >
      <div className='absolute -right-[5px] -top-[5px] bg-primary-50 rounded-[5px] border-[0.5px] border-primary-100 cursor-pointer'>
        <ChevronDownDouble className='rotate-180 w-3 h-3 text-primary-600' />
      </div>
    </Tooltip>
  )
}

export default PriorityUseTip
