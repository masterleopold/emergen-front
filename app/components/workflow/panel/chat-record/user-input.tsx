import {
  memo,
  useState,
} from 'react'
import { useTranslation } from 'react-i18next'
import { RiArrowDownSLine } from '@remixicon/react'

const UserInput = () => {
  const { t } = useTranslation()
  const [expanded, setExpanded] = useState(true)
  const variables: any = []

  if (!variables.length)
    return null

  return (
    <div
      className={`
        rounded-xl border
        ${!expanded ? 'bg-primary-25 border-primary-100 shadow-none' : 'bg-white shadow-xs border-transparent'}
      `}
    >
      <div
        className={`
          flex items-center px-2 pt-4 h-[18px] text-[13px] font-semibold cursor-pointer
          ${!expanded ? 'text-primary-800' : 'text-gray-800'}
        `}
        onClick={() => setExpanded(!expanded)}
      >
        <RiArrowDownSLine
          className={`mr-1 w-3 h-3 ${!expanded ? '-rotate-90 text-primary-600' : 'text-gray-300'}`}
        />
        {t('workflow.panel.userInputField').toLocaleUpperCase()}
      </div>
      <div className='px-2 pt-1 pb-3'>
        {
          expanded && (
            <div className='py-2 text-[13px] text-gray-900'>
              {
                variables.map((variable: any) => (
                  <div
                    key={variable.variable}
                    className='mb-2 last-of-type:mb-0'
                  >
                  </div>
                ))
              }
            </div>
          )
        }
      </div>
    </div>
  )
}

export default memo(UserInput)
