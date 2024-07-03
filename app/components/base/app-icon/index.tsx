import type { FC } from 'react'
import classNames from 'classnames'

import data from '@emoji-mart/data'
import { init } from 'emoji-mart'
import style from './style.module.css'
import { RiRobot2Fill } from '@remixicon/react'

init({ data })

export type AppIconProps = {
  size?: 'xs' | 'tiny' | 'small' | 'medium' | 'large'
  rounded?: boolean
  icon?: string
  className?: string
  innerIcon?: React.ReactNode
  onClick?: () => void
  iconClassName?: string;
}

const AppIcon: FC<AppIconProps> = ({
  size = 'tiny',
  rounded = false,
  onClick,
  className,
  iconClassName,
}) => {
  return (
    <span
      className={classNames(
        style.appIcon,
        style[size],
        rounded && style.rounded,
        className
      )}
      onClick={onClick}
    >
      <RiRobot2Fill 
        className={classNames(iconClassName)}
      />
    </span>
  )
}

export default AppIcon
