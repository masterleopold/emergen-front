'use client'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import ToolProviderList from '@/app/components/tools/provider-list'
import { useAppContext } from '@/context/app-context'

const Layout: FC = () => {
  const { t } = useTranslation()
  const router = useRouter()
   const { isCurrentWorkspaceDatasetOperator } = useAppContext()

  useEffect(() => {
    document.title = `${t('tools.title')} - Emergen`
    if (isCurrentWorkspaceDatasetOperator)
     return router.replace('/datasets')
  }, [])
  
  useEffect(() => {
     if (isCurrentWorkspaceDatasetOperator)
       return router.replace('/datasets')
   }, [isCurrentWorkspaceDatasetOperator])

  return <ToolProviderList />
}
export default React.memo(Layout)
