'use client'
import type { FC } from 'react'
import React from 'react'
import cn from 'classnames'

type Props = {
  isChecked: boolean
}

const RadioUI: FC<Props> = ({
  isChecked,
}) => {
  return (
    <div className={cn(isChecked ? 'border-[5px] border-[#681CEA]' : 'border-[2px] border-gray-300', 'w-4 h-4  rounded-full')}>
    </div>
  )
}
export default React.memo(RadioUI)
