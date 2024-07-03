import type { FC } from 'react'
import { memo } from 'react'
import type { ChatItem } from '../../types'
import { useChatContext } from '../context'

type SuggestedQuestionsProps = {
  item: ChatItem
}
const SuggestedQuestions: FC<SuggestedQuestionsProps> = ({
  item,
}) => {
  const { onSend } = useChatContext()
  const {
    isOpeningStatement,
    suggestedQuestions,
  } = item

  if (!isOpeningStatement || !suggestedQuestions?.length)
    return null

  return (
    <div className='flex flex-wrap'>
      {suggestedQuestions.filter(q => !!q && q.trim()).map((question, index) => (
        <div
          key={index}
          className='mt-2 mr-1 max-w-full last:mr-0 shrink-0 py-3 leading-[18px] items-center px-4 rounded-lg border-[0.5px] border-gray-300 bg-white text-xs font-medium text-primary-600 cursor-pointer'
          onClick={() => onSend?.(question)}
        >
          {question}
        </div>),
      )}
    </div>
  )
}

export default memo(SuggestedQuestions)
