import {
  memo,
  useEffect,
} from 'react'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'
// import Loading from '@/app/components/base/loading'
import { Markdown } from '@/app/components/base/markdown'
import CodeEditor from '@/app/components/workflow/nodes/_base/components/editor/code-editor'
import { CodeLanguage } from '@/app/components/workflow/nodes/code/types'
import type { WorkflowProcess } from '@/app/components/base/chat/types'
// import { WorkflowRunningStatus } from '@/app/components/workflow/types'

const ResultTab = ({
  data,
  content,
  currentTab,
  onCurrentTabChange,
}: {
  data?: WorkflowProcess
  content: any
  currentTab: string
  onCurrentTabChange: (tab: string) => void
}) => {
  const { t } = useTranslation()

  const switchTab = async (tab: string) => {
    onCurrentTabChange(tab)
  }
  useEffect(() => {
    if (data?.resultText)
      switchTab('RESULT')
    else
      switchTab('DETAIL')
  }, [data?.resultText])

  return (
    <div className='grow relative flex flex-col'>
      {data?.resultText && (
        <div className='shrink-0 flex items-center mb-2 border-b-[0.5px] border-[rgba(0,0,0,0.05)]'>
          <div
            className={cn(
              'mr-6 py-3 border-b-2 border-transparent text-[13px] font-semibold leading-[18px] text-gray-400 cursor-pointer',
              currentTab === 'RESULT' && '!border-primary-600 text-gray-700',
            )}
            onClick={() => switchTab('RESULT')}
          >{t('runLog.result')}</div>
          <div
            className={cn(
              'mr-6 py-3 border-b-2 border-transparent text-[13px] font-semibold leading-[18px] text-gray-400 cursor-pointer',
              currentTab === 'DETAIL' && '!border-primary-600 text-gray-700',
            )}
            onClick={() => switchTab('DETAIL')}
          >{t('runLog.detail')}</div>
        </div>
      )}
      <div className={cn('grow bg-gray-25')}>
        {currentTab === 'RESULT' && (
          <Markdown content={data?.resultText || ''} />
        )}
        {currentTab === 'DETAIL' && content && (
          <CodeEditor
            readOnly
            title={<div>JSON OUTPUT</div>}
            language={CodeLanguage.json}
            value={content}
            isJSONStringifyBeauty
          />
        )}
      </div>
    </div>
  )
}

export default memo(ResultTab)
