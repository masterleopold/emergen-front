import classNames from 'classnames'
import style from '../list.module.css'
import Apps from './Apps'
import { getLocaleOnServer, useTranslation as translate } from '@/i18n/server'

const AppList = async () => {
  const locale = getLocaleOnServer()
  const { t } = await translate(locale, 'app')

  return (
    <div className='relative flex flex-col overflow-y-auto bg-gray-25 shrink-0 h-0 grow'>
      <Apps />
      <footer className='px-6 py-6 grow-0 shrink-0'>
        <h3 className='text-xl font-semibold leading-tight text-gradient'></h3>
        <p className='mt-1 text-sm font-normal leading-tight text-gray-700'></p>
        <div className='flex items-center mt-3 justify-between'>
          <div className='flex items-center gap-4'>
            <a className={style.socialMediaLink} target='_blank' rel='noopener noreferrer' href='https://mini.vox.delivery'><span className={classNames(style.socialMediaIcon, style.miniIcon)} /></a>
            <a className={style.socialMediaLink} target='_blank' rel='noopener noreferrer' href='https://discord.gg/b9GqFq57p8'><span className={classNames(style.socialMediaIcon, style.discordIcon)} /></a>
          </div>
          <div className='flex items-center gap-4'>
            <a className={style.socialMediaLink} target='_blank' rel='noopener noreferrer' href='https://vox.delivery'><span className={classNames(style.socialMediaIcon, style.voxIcon)} /></a>
          </div>
        </div>
      </footer>
    </div >
  )
}

export default AppList