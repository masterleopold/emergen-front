'use client'
import type { FC } from 'react'
import React from 'react'
import { useTranslation } from 'react-i18next'

export type IPreviewItemProps = {
  type: string
  index: number
  content?: string
  qa?: {
    answer: string
    question: string
  }
}

export enum PreviewType {
  TEXT = 'text',
  QA = 'QA',
}

const sharpIcon = (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.74999 1.5L3.24999 10.5M8.74998 1.5L7.24998 10.5M10.25 4H1.75M9.75 8H1.25" stroke="#858F97" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const textIcon = (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 3.5H8M6 3.5V8.5M3.9 10.5H8.1C8.94008 10.5 9.36012 10.5 9.68099 10.3365C9.96323 10.1927 10.1927 9.96323 10.3365 9.68099C10.5 9.36012 10.5 8.94008 10.5 8.1V3.9C10.5 3.05992 10.5 2.63988 10.3365 2.31901C10.1927 2.03677 9.96323 1.8073 9.68099 1.66349C9.36012 1.5 8.94008 1.5 8.1 1.5H3.9C3.05992 1.5 2.63988 1.5 2.31901 1.66349C2.03677 1.8073 1.8073 2.03677 1.66349 2.31901C1.5 2.63988 1.5 3.05992 1.5 3.9V8.1C1.5 8.94008 1.5 9.36012 1.66349 9.68099C1.8073 9.96323 2.03677 10.1927 2.31901 10.3365C2.63988 10.5 3.05992 10.5 3.9 10.5Z" stroke="#707B84" strokeLinecap="round" strokeLinejoin="round" />
  </svg>

)

const PreviewItem: FC<IPreviewItemProps> = ({
  type = PreviewType.TEXT,
  index,
  content,
  qa,
}) => {
  const { t } = useTranslation()
  const charNums = type === PreviewType.TEXT
    ? (content || '').length
    : (qa?.answer || '').length + (qa?.question || '').length
  const formatedIndex = (() => String(index).padStart(3, '0'))()

  return (
    <div className='p-4 rounded-xl bg-gray-50'>
      <div className='flex items-center justify-between h-5 text-xs text-gray-500'>
        <div className='flex items-center h-[18px] space-x-1 border-[0.5px] border-gray-300 box-border rounded-md italic pl-1 pr-1.5 font-medium'>
          {sharpIcon}
          <span>{formatedIndex}</span>
        </div>
        <div className='flex items-center space-x-1'>
          {textIcon}
          <span>{charNums} {t('datasetCreation.stepTwo.characters')}</span>
        </div>
      </div>
      <div className='mt-2 max-h-[120px] line-clamp-6 overflow-hidden text-sm text-gray-800'>
        {type === PreviewType.TEXT && (
          <div style={{ whiteSpace: 'pre-line' }}>{content}</div>
        )}
        {type === PreviewType.QA && (
          <div style={{ whiteSpace: 'pre-line' }}>
            <div className='flex'>
              <div className='shrink-0 mr-2 text-medium text-gray-400'>Q</div>
              <div style={{ whiteSpace: 'pre-line' }}>{qa?.question}</div>
            </div>
            <div className='flex'>
              <div className='shrink-0 mr-2 text-medium text-gray-400'>A</div>
              <div style={{ whiteSpace: 'pre-line' }}>{qa?.answer}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default React.memo(PreviewItem)
