'use client'
import type { FC } from 'react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import cn from 'classnames'
import { RiDeleteBinLine } from '@remixicon/react'
import { Edit02 } from '../../base/icons/src/vender/line/general'
import s from './style.module.css'
import type { AnnotationItem } from './type'
import RemoveAnnotationConfirmModal from './remove-annotation-confirm-modal'
import useTimestamp from '@/hooks/use-timestamp'

type Props = {
  list: AnnotationItem[]
  onRemove: (id: string) => void
  onView: (item: AnnotationItem) => void
}

const List: FC<Props> = ({
  list,
  onView,
  onRemove,
}) => {
  const { t } = useTranslation()
  const { formatTime } = useTimestamp()
  const [currId, setCurrId] = React.useState<string | null>(null)
  const [showConfirmDelete, setShowConfirmDelete] = React.useState(false)
  return (
    <div className='overflow-x-auto'>
      <table className={cn(s.logTable, 'w-full min-w-[440px] border-collapse border-0 text-sm')} >
        <thead className="h-8 leading-8 border-b-[0.5px] border-gray-300 text-gray-500 font-semibold text-xs uppercase">
          <tr>
            <td className='whitespace-nowrap'>{t('appAnnotation.table.header.question')}</td>
            <td className='whitespace-nowrap'>{t('appAnnotation.table.header.answer')}</td>
            <td className='whitespace-nowrap'>{t('appAnnotation.table.header.createdAt')}</td>
            <td className='whitespace-nowrap'>{t('appAnnotation.table.header.hits')}</td>
            <td className='whitespace-nowrap w-[96px]'>{t('appAnnotation.table.header.actions')}</td>
          </tr>
        </thead>
        <tbody className="text-gray-500">
          {list.map(item => (
            <tr
              key={item.id}
              className={'border-b-[0.5px] border-gray-300 h-12 hover:bg-gray-100 cursor-pointer'}
              onClick={
                () => {
                  onView(item)
                }
              }
            >
              <td
                className='whitespace-nowrap overflow-hidden text-ellipsis max-w-[250px]'
                title={item.question}
              >{item.question}</td>
              <td
                className='whitespace-nowrap overflow-hidden text-ellipsis max-w-[250px]'
                title={item.answer}
              >{item.answer}</td>
              <td>{formatTime(item.created_at, t('appLog.dateTimeFormat') as string)}</td>
              <td>{item.hit_count}</td>
              <td className='w-[96px]' onClick={e => e.stopPropagation()}>
                {/* Actions */}
                <div className='flex space-x-2 text-gray-500'>
                  <div
                    className='p-1 cursor-pointer rounded-md hover:bg-gray-300'
                    onClick={
                      () => {
                        onView(item)
                      }
                    }
                  >
                    <Edit02 className='w-4 h-4' />
                  </div>
                  <div
                    className='p-1 cursor-pointer rounded-md hover:bg-gray-300'
                    onClick={() => {
                      setCurrId(item.id)
                      setShowConfirmDelete(true)
                    }}
                  >
                    <RiDeleteBinLine className='w-4 h-4' />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <RemoveAnnotationConfirmModal
        isShow={showConfirmDelete}
        onHide={() => setShowConfirmDelete(false)}
        onRemove={() => {
          onRemove(currId as string)
          setShowConfirmDelete(false)
        }}
      />
    </div>
  )
}
export default React.memo(List)
