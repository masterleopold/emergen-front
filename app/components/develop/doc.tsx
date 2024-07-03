'use client'
import { useContext } from 'use-context-selector'
import TemplateEn from './template/template.en.mdx'
import TemplateAdvancedChatEn from './template/template_advanced_chat.en.mdx'
import TemplateWorkflowEn from './template/template_workflow.en.mdx'
import TemplateChatEn from './template/template_chat.en.mdx'
import I18n from '@/context/i18n'
import { LanguagesSupported } from '@/i18n/language'

type IDocProps = {
  appDetail: any
}

const Doc = ({ appDetail }: IDocProps) => {
  const { locale } = useContext(I18n)

  const variables = appDetail?.model_config?.configs?.prompt_variables || []
  const inputs = variables.reduce((res: any, variable: any) => {
    res[variable.key] = variable.name || ''
    return res
  }, {})

  return (
    <article className="prose prose-xl" >
      {(appDetail?.mode === 'chat' || appDetail?.mode === 'agent-chat') && (
        locale !== LanguagesSupported[1] ? <TemplateChatEn appDetail={appDetail} variables={variables} inputs={inputs} /> : null
      )}
      {appDetail?.mode === 'advanced-chat' && (
        locale !== LanguagesSupported[1] ? <TemplateAdvancedChatEn appDetail={appDetail} variables={variables} inputs={inputs} /> : null
      )}
      {appDetail?.mode === 'workflow' && (
        locale !== LanguagesSupported[1] ? <TemplateWorkflowEn appDetail={appDetail} variables={variables} inputs={inputs} /> : null
      )}
      {appDetail?.mode === 'completion' && (
        locale !== LanguagesSupported[1] ? <TemplateEn appDetail={appDetail} variables={variables} inputs={inputs} /> : null
      )}
    </article>
  )
}

export default Doc
