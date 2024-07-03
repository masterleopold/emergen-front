'use client'
import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import Script from 'next/script'
import Loading from '../components/base/loading'
import Forms from './forms'
import Header from './_header'
import style from './page.module.css'
import UserSSOForm from './userSSOForm'
import { IS_CE_EDITION } from '@/config'

import type { SystemFeatures } from '@/types/feature'
import { defaultSystemFeatures } from '@/types/feature'
import { getSystemFeatures } from '@/service/common'

const SignIn = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [systemFeatures, setSystemFeatures] = useState<SystemFeatures>(defaultSystemFeatures)

  useEffect(() => {
    getSystemFeatures().then((res) => {
      setSystemFeatures(res)
    }).finally(() => {
      setLoading(false)
    })
  }, [])

  return (
    <>
      {!IS_CE_EDITION && (
        <>
          <Script></Script>
        </>
      )}
      <div className={cn(
        style.background,
        'flex w-full min-h-screen',
        'sm:p-4 lg:p-8',
        'gap-x-20',
        'justify-center lg:justify-start',
      )}>
        <div className={
          cn(
            'flex w-full flex-col bg-white sm:rounded-2xl shrink-0',
            'space-between',
          )
        }>
          <Header />

          {loading && (
            <div className={
              cn(
                'flex flex-col items-center w-full grow justify-center',
                'px-6',
                'md:px-[108px]',
              )
            }>
              <Loading type='area' />
            </div>
          )}

          {!loading && !systemFeatures.sso_enforced_for_signin && (
            <>
              <Forms />
              <div className='px-6 py-6 text-xs font-normal text-gray-400'>
                © Vox
              </div>
            </>
          )}

          {!loading && systemFeatures.sso_enforced_for_signin && (
            <UserSSOForm protocol={systemFeatures.sso_enforced_for_signin_protocol} />
          )}
        </div>

      </div>

    </>
  )
}

export default SignIn
