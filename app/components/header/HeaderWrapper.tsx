'use client'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'
import s from './index.module.css'

type HeaderWrapperProps = {
  children: React.ReactNode
}

const HeaderWrapper = ({
  children,
}: HeaderWrapperProps) => {
  const pathname = usePathname()
  const isBordered = ['/apps', '/datasets', '/datasets/create', '/tools'].includes(pathname)

  return (
    <div className={classNames(
      'sticky top-0 left-0 right-0 z-30 flex flex-col bg-gray-25 grow-0 shrink-0 basis-auto',
      s.header,
      isBordered ? 'border-b-[0.5px] border-gray-300' : '',
    )}
    >
      {children}
    </div>
  )
}
export default HeaderWrapper
