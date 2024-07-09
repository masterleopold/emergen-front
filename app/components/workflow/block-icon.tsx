import type { FC } from 'react'
import { memo } from 'react'
import { BlockEnum } from './types'
import {
  Answer,
  Code,
  End,
  Home,
  Http,
  IfElse,
  Iteration,
  KnowledgeRetrieval,
  Llm,
  ParameterExtractor,
  QuestionClassifier,
  TemplatingTransform,
  VariableX,
} from '@/app/components/base/icons/src/vender/workflow'
import AppIcon from '@/app/components/base/app-icon'

type BlockIconProps = {
  type: BlockEnum
  size?: string
  className?: string
  toolIcon?: string | { content: string; background: string }
}
const ICON_CONTAINER_CLASSNAME_SIZE_MAP: Record<string, string> = {
  xs: 'w-4 h-4 rounded-[5px]',
  sm: 'w-5 h-5 rounded-md',
  md: 'w-6 h-6 rounded-md',
}
const getIcon = (type: BlockEnum, className: string) => {
  return {
    [BlockEnum.Start]: <Home className={className} />,
    [BlockEnum.LLM]: <Llm className={className} />,
    [BlockEnum.Code]: <Code className={className} />,
    [BlockEnum.End]: <End className={className} />,
    [BlockEnum.IfElse]: <IfElse className={className} />,
    [BlockEnum.HttpRequest]: <Http className={className} />,
    [BlockEnum.Answer]: <Answer className={className} />,
    [BlockEnum.KnowledgeRetrieval]: <KnowledgeRetrieval className={className} />,
    [BlockEnum.QuestionClassifier]: <QuestionClassifier className={className} />,
    [BlockEnum.TemplateTransform]: <TemplatingTransform className={className} />,
    [BlockEnum.VariableAssigner]: <VariableX className={className} />,
    [BlockEnum.VariableAggregator]: <VariableX className={className} />,
    [BlockEnum.Tool]: <VariableX className={className} />,
    [BlockEnum.Iteration]: <Iteration className={className} />,
    [BlockEnum.ParameterExtractor]: <ParameterExtractor className={className} />,
  }[type]
}
const ICON_CONTAINER_BG_COLOR_MAP: Record<string, string> = {
  [BlockEnum.Start]: 'bg-gray-500',
  [BlockEnum.LLM]: 'bg-primary-500',
  [BlockEnum.Code]: 'bg-[#12B2E6]',
  [BlockEnum.End]: 'bg-[#F79009]',
  [BlockEnum.IfElse]: 'bg-[#FF6923]',
  [BlockEnum.Iteration]: 'bg-[#FF6923]',
  [BlockEnum.HttpRequest]: 'bg-[#C63DC6]',
  [BlockEnum.Answer]: 'bg-[#F79009]',
  [BlockEnum.KnowledgeRetrieval]: 'bg-[#FF507C]',
  [BlockEnum.QuestionClassifier]: 'bg-[#10C268]',
  [BlockEnum.TemplateTransform]: 'bg-[#12B2E6]',
  [BlockEnum.VariableAssigner]: 'bg-[#12B2E6]',
  [BlockEnum.VariableAggregator]: 'bg-[#12B2E6]',
  [BlockEnum.ParameterExtractor]: 'bg-[#12B2E6]',
}
const BlockIcon: FC<BlockIconProps> = ({
  type,
  size = 'sm',
  className,
  toolIcon,
}) => {
  return (
    <div className={`
      flex items-center justify-center border-[0.5px] border-white/2 text-white
      ${ICON_CONTAINER_CLASSNAME_SIZE_MAP[size]}
      ${ICON_CONTAINER_BG_COLOR_MAP[type]}
      ${toolIcon && '!shadow-none'}
      ${className}
    `}
    >
      {
        type !== BlockEnum.Tool && (
          getIcon(type, size === 'xs' ? 'w-3 h-3' : 'w-3.5 h-3.5')
        )
      }
      {
        type === BlockEnum.Tool && toolIcon && (
          <>
            {
              typeof toolIcon === 'string'
                ? (
                  <div
                    className='shrink-0 w-full h-full bg-cover bg-center rounded-md'
                    style={{
                      backgroundImage: `url(${toolIcon})`,
                    }}
                  ></div>
                )
                : (
                  <AppIcon
                    className='shrink-0 !w-full !h-full !text-primary-600 !bg-transparent'
                    size='tiny'
                    icon={toolIcon?.content}
                    background={toolIcon?.background}
                  />
                )
            }
          </>
        )
      }
    </div>
  )
}

export const VarBlockIcon: FC<BlockIconProps> = ({
  type,
  className,
}) => {
  return (
    <>
      {getIcon(type, `w-3 h-3 ${className}`)}
    </>
  )
}

export default memo(BlockIcon)
