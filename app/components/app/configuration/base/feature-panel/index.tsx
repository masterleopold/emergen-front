'use client'
import type { FC, ReactNode } from 'react'
import React from 'react'
import cn from 'classnames'
import ParamsConfig from '@/app/components/app/configuration/config-voice/param-config'

export type IFeaturePanelProps = {
  className?: string
  headerIcon?: ReactNode
  title: ReactNode
  headerRight?: ReactNode
  hasHeaderBottomBorder?: boolean
  isFocus?: boolean
  noBodySpacing?: boolean
  children?: ReactNode
  isShowTextToSpeech?: boolean
}

const FeaturePanel: FC<IFeaturePanelProps> = ({
  className,
  headerIcon,
  title,
  headerRight,
  hasHeaderBottomBorder,
  isFocus,
  noBodySpacing,
  children,
  isShowTextToSpeech,
}) => {
  return (
    <div
      className={cn(className, isFocus && 'border border-[#5112BE]', 'rounded-xl bg-gray-100 pt-2 pb-3 border-gray-300 border-[0.5px]', noBodySpacing && '!pb-0')}
    >
      {/* Header */}
      <div className={cn('pb-2 px-3', hasHeaderBottomBorder && 'border-b-[0.5px] border-gray-300')}>
        <div className='flex justify-between items-center h-8'>
          <div className='flex items-center space-x-1 shrink-0'>
            {headerIcon && <div className='flex items-center justify-center w-6 h-6'>{headerIcon}</div>}
            <div className='text-sm font-semibold text-gray-800'>{title}</div>
          </div>
          <div className='flex gap-2 items-center'>
            {headerRight && <div>{headerRight}</div>}
            {isShowTextToSpeech && <div className='flex items-center'>
              <ParamsConfig/>
            </div>}
          </div>
        </div>
      </div>
      {/* Body */}
      {children && (
        <div className={cn(!noBodySpacing && 'mt-1 px-3')}>
          {children}
        </div>
      )}
    </div>
  )
}
export default React.memo(FeaturePanel)
