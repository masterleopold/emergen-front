'use client'
import type { FC } from 'react'
import React from 'react'
import cn from 'classnames'
import s from './style.module.css'
import Switch from '@/app/components/base/switch'

export type IFeatureItemProps = {
  icon: React.ReactNode
  previewImgClassName?: string
  title: string
  description: string
  value: boolean
  onChange: (value: boolean) => void
}

const FeatureItem: FC<IFeatureItemProps> = ({
  icon,
  previewImgClassName,
  title,
  description,
  value,
  onChange,
}) => {
  return (
    <div className={cn(s.wrap, 'relative flex justify-between p-3 rounded-xl border-[0.5px] border-transparent bg-gray-100 hover:border-gray-300  cursor-pointer')}>
      <div className='flex space-x-3 mr-2'>
        {/* icon */}
        <div
          className='shrink-0 flex items-center justify-center w-8 h-8 rounded-lg border-[0.5px] border-gray-300 bg-white'
          style={{
            boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
          }}
        >
          {icon}
        </div>
        <div>
          <div className='text-sm font-semibold text-gray-800'>{title}</div>
          <div className='text-xs font-normal text-gray-500'>{description}</div>
        </div>
      </div>

      <Switch onChange={onChange} defaultValue={value} />
      {
        previewImgClassName && (
          <div className={cn(s.preview, s[previewImgClassName])}>
          </div>)
      }
    </div>
  )
}
export default React.memo(FeatureItem)
