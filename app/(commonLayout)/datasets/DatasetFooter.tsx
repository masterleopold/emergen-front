'use client'

import { useTranslation } from 'react-i18next'

const DatasetFooter = () => {
  const { t } = useTranslation()

  return (
    <footer className='px-12 py-6 grow-0 shrink-0'>
      <h3 className='text-xl font-semibold leading-tight text-gradient'></h3>
      <p className='mt-1 text-sm font-normal leading-tight text-gray-700'>
      </p>
    </footer>
  )
}

export default DatasetFooter
