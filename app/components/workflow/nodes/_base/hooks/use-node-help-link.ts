import { useMemo } from 'react'
import { useGetLanguage } from '@/context/i18n'
import { BlockEnum } from '@/app/components/workflow/types'

export const useNodeHelpLink = (nodeType: BlockEnum) => {
  const language = useGetLanguage()
  const prefixLink = useMemo(() => {
    return 'https://docs.vox.delivery/guide/workflow/node/'
  }, [language])
  const linkMap = useMemo(() => {
    return {
      [BlockEnum.Start]: 'start',
      [BlockEnum.End]: 'end',
      [BlockEnum.Answer]: 'answer',
      [BlockEnum.LLM]: 'llm',
      [BlockEnum.KnowledgeRetrieval]: 'knowledge-retrieval',
      [BlockEnum.QuestionClassifier]: 'question-classifier',
      [BlockEnum.IfElse]: 'if-else',
      [BlockEnum.Code]: 'code',
      [BlockEnum.TemplateTransform]: 'template',
      [BlockEnum.VariableAssigner]: 'variable-assigner',
      [BlockEnum.VariableAggregator]: 'variable-assigner',
      [BlockEnum.Iteration]: 'iteration',
      [BlockEnum.ParameterExtractor]: 'parameter-extractor',
      [BlockEnum.HttpRequest]: 'http-request',
      [BlockEnum.Tool]: 'tools',
    }
  }, [language])

  return `${prefixLink}${linkMap[nodeType]}`
}
