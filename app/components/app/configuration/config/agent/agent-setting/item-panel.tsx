'use client'
import type { FC } from 'react'
import React from 'react'
import cn from 'classnames'
import { RiQuestionLine } from '@remixicon/react'
import Tooltip from '@/app/components/base/tooltip'
type Props = {
  className?: string
  icon: JSX.Element
  name: string
  description: string
  children: JSX.Element
}

const ItemPanel: FC<Props> = ({
  className,
  icon,
  name,
  description,
  children,
}) => {
  return (
    <div className={cn(className, 'flex justify-between items-center h-12 px-3 rounded-lg bg-gray-100')}>
      <div className='flex items-center'>
        {icon}
        <div className='ml-3 mr-2 leading-6 text-sm font-semibold text-gray-800'>{name}</div>
        <Tooltip
          htmlContent={
            <div className='w-[180px]'>
              {description}
            </div>
          }
          selector={`agent-setting-tooltip-${name}`}
        >
          <RiQuestionLine className='w-[14px] h-[14px] text-gray-400' />
        </Tooltip>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}
export default React.memo(ItemPanel)
