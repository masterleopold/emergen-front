import React from 'react'
import classNames from 'classnames'
import Header from '../signin/_header'
import style from '../signin/page.module.css'
import InstallForm from './installForm'

const Install = () => {
  return (
    <div className={classNames(
      style.background,
      'flex w-full min-h-screen',
      'p-4 lg:p-8',
      'gap-x-20',
      'justify-center lg:justify-start',
    )}>
      <div className={
        classNames(
          'flex w-full flex-col bg-white shadow rounded-2xl shrink-0',
          'space-between',
        )
      }>
        <Header />
        <InstallForm />
        <div className='px-6 py-6 text-xs font-normal text-gray-400'>
          © Vox
        </div>
      </div>
    </div>
  )
}

export default Install
