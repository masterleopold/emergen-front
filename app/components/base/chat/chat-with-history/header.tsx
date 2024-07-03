import type { FC } from 'react'
import { memo } from 'react'

type HeaderProps = {
  title: string
  isMobile: boolean
}
const Header: FC<HeaderProps> = ({
  title,
  isMobile,
}) => {
  return (
    <div
      className={`
      sticky top-0 flex items-center justify-center px-6 h-16 bg-gray-25/80 text-sm font-medium 
      text-gray-900 border-b-[0.5px] border-b-gray-300 backdrop-blur-md z-10
      ${isMobile && '!h-14'}
      `}
    >
      {title}
    </div>
  )
}

export default memo(Header)
