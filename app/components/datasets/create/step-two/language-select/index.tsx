'use client'
import type { FC } from 'react'
import React from 'react'
import cn from 'classnames'
import { RiArrowDownSLine } from '@remixicon/react'
import Popover from '@/app/components/base/popover'
import { languages } from '@/i18n/language'

export type ILanguageSelectProps = {
  currentLanguage: string
  onSelect: (language: string) => void
}

const LanguageSelect: FC<ILanguageSelectProps> = ({
  currentLanguage,
  onSelect,
}) => {
  return (
    <Popover
      manualClose
      trigger='click'
      htmlContent={
        <div className='w-full py-1'>
          {languages.filter(language => language.supported).map(({ prompt_name, name }) => (
            <div
              key={prompt_name}
              className='py-2 px-3 mx-1 flex items-center gap-2 hover:bg-gray-100 rounded-lg cursor-pointer text-gray-700 text-sm'
              onClick={() => onSelect(prompt_name)}>{prompt_name}
            </div>
          ))}
        </div>
      }
      btnElement={
        <div className='inline-flex items-center'>
          <span className='pr-[2px] text-xs leading-[18px] font-medium'>{currentLanguage}</span>
          <RiArrowDownSLine className='w-3 h-3 opacity-60' />
        </div>
      }
      btnClassName={open => cn('!border-0 !px-0 !py-0 !bg-inherit !hover:bg-inherit', open ? 'text-primary-600' : 'text-gray-500')}
      className='!w-[120px] h-fit !z-20 !translate-x-0 !left-[-16px]'
    />
  )
}
export default React.memo(LanguageSelect)
