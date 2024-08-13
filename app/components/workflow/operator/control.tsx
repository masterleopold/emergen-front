import type { MouseEvent } from 'react'
import {
  memo,
  useCallback,
} from 'react'
import { useTranslation } from 'react-i18next'
import cn from 'classnames'
import {
  RiCursorLine,
  RiFunctionAddLine,
  RiHand,
  RiStickyNoteAddLine,
} from '@remixicon/react'
import { useKeyPress } from 'ahooks'
import {
  useNodesReadOnly,
  useSelectionInteractions,
  useWorkflow,
} from '../hooks'
import { getKeyboardKeyCodeBySystem, isEventTargetInputArea } from '../utils'
import { useStore } from '../store'
import AddBlock from './add-block'
import TipPopup from './tip-popup'
import { useOperator } from './hooks'

const Control = () => {
  const { t } = useTranslation()
  const controlMode = useStore(s => s.controlMode)
  const setControlMode = useStore(s => s.setControlMode)
  const { handleLayout } = useWorkflow()
  const { handleAddNote } = useOperator()
  const {
    nodesReadOnly,
    getNodesReadOnly,
  } = useNodesReadOnly()
  const { handleSelectionCancel } = useSelectionInteractions()

  const handleModePointer = useCallback(() => {
    if (getNodesReadOnly())
      return
    setControlMode('pointer')
  }, [getNodesReadOnly, setControlMode])
  const handleModeHand = useCallback(() => {
    if (getNodesReadOnly())
      return
    setControlMode('hand')
    handleSelectionCancel()
  }, [getNodesReadOnly, setControlMode, handleSelectionCancel])

  useKeyPress('h', (e) => {
    if (getNodesReadOnly())
      return

    if (isEventTargetInputArea(e.target as HTMLElement))
      return

    e.preventDefault()
    handleModeHand()
  }, {
    exactMatch: true,
    useCapture: true,
  })

  useKeyPress('v', (e) => {
    if (isEventTargetInputArea(e.target as HTMLElement))
      return

    e.preventDefault()
    handleModePointer()
  }, {
    exactMatch: true,
    useCapture: true,
  })

  const goLayout = () => {
    if (getNodesReadOnly())
      return
    handleLayout()
  }
  
  useKeyPress(`${getKeyboardKeyCodeBySystem('ctrl')}.o`, (e) => {
     e.preventDefault()
     goLayout()
   }, { exactMatch: true, useCapture: true })

  const addNote = (e: MouseEvent<HTMLDivElement>) => {
    if (getNodesReadOnly())
      return

    e.stopPropagation()
    handleAddNote()
  }

  return (
    <div className='flex items-center p-0.5 rounded-lg border-[0.5px] border-gray-100 bg-white text-gray-500'>
      <AddBlock />
      <TipPopup title={t('workflow.nodes.note.addNote')}>
        <div
          className={cn(
            'flex items-center justify-center ml-[1px] w-8 h-8 rounded-md hover:bg-gray-200 hover:text-gray-700 cursor-pointer',
            `${nodesReadOnly && '!cursor-not-allowed opacity-50'}`,
          )}
          onClick={addNote}
        >
          <RiStickyNoteAddLine className='w-4 h-4' />
        </div>
      </TipPopup>
      <div className='mx-[3px] w-[1px] h-3.5 bg-gray-200'></div>
      <TipPopup title={t('workflow.common.pointerMode')} shortcuts={['v']}>
        <div
          className={cn(
            'flex items-center justify-center mr-[1px] w-8 h-8 rounded-md cursor-pointer',
            controlMode === 'pointer' ? 'bg-primary-50 text-primary-600' : 'hover:bg-gray-300 hover:text-gray-700',
            `${nodesReadOnly && '!cursor-not-allowed opacity-50'}`,
          )}
          onClick={handleModePointer}
        >
          <RiCursorLine className='w-4 h-4' />
        </div>
      </TipPopup>
      <TipPopup title={t('workflow.common.handMode')} shortcuts={['h']}>
        <div
          className={cn(
            'flex items-center justify-center w-8 h-8 rounded-md cursor-pointer',
            controlMode === 'hand' ? 'bg-primary-50 text-primary-600' : 'hover:bg-gray-300 hover:text-gray-700',
            `${nodesReadOnly && '!cursor-not-allowed opacity-50'}`,
          )}
          onClick={handleModeHand}
        >
          <RiHand className='w-4 h-4' />
        </div>
      </TipPopup>
      <div className='mx-[3px] w-[1px] h-3.5 bg-gray-200'></div>
      <TipPopup title={t('workflow.panel.organizeBlocks')} shortcuts={['ctrl', 'o']}>
        <div
          className={cn(
            'flex items-center justify-center w-8 h-8 rounded-md hover:bg-gray-300 hover:text-gray-700 cursor-pointer',
            `${nodesReadOnly && '!cursor-not-allowed opacity-50'}`,
          )}
          onClick={goLayout}
        >
          <RiFunctionAddLine className='w-4 h-4' />
        </div>
      </TipPopup>
    </div>
  )
}

export default memo(Control)
