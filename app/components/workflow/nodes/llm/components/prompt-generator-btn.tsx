'use client'
import type { FC } from 'react'
import React, { useCallback } from 'react'
import { useBoolean } from 'ahooks'
import cn from 'classnames'
import { Generator } from '@/app/components/base/icons/src/vender/other'
import { ActionButton } from '@/app/components/base/action-button'
import GetAutomaticResModal from '@/app/components/app/configuration/config/automatic/get-automatic-res'
import { AppType } from '@/types/app'
import type { AutomaticRes } from '@/service/debug'
type Props = {
  className?: string
  onGenerated?: (prompt: string) => void
}

const PromptGeneratorBtn: FC<Props> = ({
  className,
  onGenerated,
}) => {
  const [showAutomatic, { setTrue: showAutomaticTrue, setFalse: showAutomaticFalse }] = useBoolean(false)
  const handleAutomaticRes = useCallback((res: AutomaticRes) => {
    onGenerated?.(res.prompt)
    showAutomaticFalse()
  }, [onGenerated, showAutomaticFalse])
  return (
    <div className={cn(className)}>
      <ActionButton
         className='hover:bg-[#155EFF]/8'
         onClick={showAutomaticTrue}>
         <Generator className='w-4 h-4 text-primary-600' />
       </ActionButton>
      {showAutomatic && (
        <GetAutomaticResModal
          mode={AppType.chat}
          isShow={showAutomatic}
          onClose={showAutomaticFalse}
          onFinished={handleAutomaticRes}
          isInLLMNode
        />
      )}
    </div>
  )
}

export default React.memo(PromptGeneratorBtn)
