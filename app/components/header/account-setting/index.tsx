'use client'
import { useTranslation } from 'react-i18next'
import { useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import {
  RiAccountCircleFill,
  RiAccountCircleLine,
  RiApps2AddFill,
  RiApps2AddLine,
  RiBox3Fill,
  RiBox3Line,
  RiCloseLine,
  RiColorFilterFill,
  RiColorFilterLine,
  RiDatabase2Fill,
  RiDatabase2Line,
  RiGroup2Fill,
  RiGroup2Line,
  RiMoneyDollarCircleFill,
  RiMoneyDollarCircleLine,
  RiPuzzle2Fill,
  RiPuzzle2Line,
  RiTranslate2,
} from '@remixicon/react'
import AccountPage from './account-page'
import MembersPage from './members-page'
import IntegrationsPage from './Integrations-page'
import LanguagePage from './language-page'
import ApiBasedExtensionPage from './api-based-extension-page'
import DataSourcePage from './data-source-page'
import ModelProviderPage from './model-provider-page'
import s from './index.module.css'
import BillingPage from '@/app/components/billing/billing-page'
import CustomPage from '@/app/components/custom/custom-page'
import Modal from '@/app/components/base/modal'
import useBreakpoints, { MediaType } from '@/hooks/use-breakpoints'
import { useProviderContext } from '@/context/provider-context'

const iconClassName = `
  w-4 h-4 ml-3 mr-2
`

const scrolledClassName = `
  border-b-[0.5px] bg-white/[.98]
`

type IAccountSettingProps = {
  onCancel: () => void
  activeTab?: string
}

type GroupItem = {
  key: string
  name: string
  description?: string
  icon: JSX.Element
  activeIcon: JSX.Element
}

export default function AccountSetting({
  onCancel,
  activeTab = 'account',
}: IAccountSettingProps) {
  const [activeMenu, setActiveMenu] = useState(activeTab)
  const { t } = useTranslation()
  const { enableBilling, enableReplaceWebAppLogo } = useProviderContext()

  const workplaceGroupItems = (() => {
    return [
      {
        key: 'provider',
        name: t('common.settings.provider'),
        icon: <RiBox3Line className={iconClassName} />,
        activeIcon: <RiBox3Fill className={iconClassName} />,
      },
      {
        key: 'members',
        name: t('common.settings.members'),
        icon: <RiGroup2Line className={iconClassName} />,
        activeIcon: <RiGroup2Fill className={iconClassName} />,
      },
      {
        // Use key false to hide this item
        key: enableBilling ? 'billing' : false,
        name: t('common.settings.billing'),
        description: t('billing.plansCommon.receiptInfo'),
        icon: <RiMoneyDollarCircleLine className={iconClassName} />,
        activeIcon: <RiMoneyDollarCircleFill className={iconClassName} />,
      },
      {
        key: 'data-source',
        name: t('common.settings.dataSource'),
        icon: <RiDatabase2Line className={iconClassName} />,
        activeIcon: <RiDatabase2Fill className={iconClassName} />,
      },
      {
        key: 'api-based-extension',
        name: t('common.settings.apiBasedExtension'),
        icon: <RiPuzzle2Line className={iconClassName} />,
        activeIcon: <RiPuzzle2Fill className={iconClassName} />,
      },
      {
        key: (enableReplaceWebAppLogo || enableBilling) ? 'custom' : false,
        name: t('custom.custom'),
        icon: <RiColorFilterLine className={iconClassName} />,
        activeIcon: <RiColorFilterFill className={iconClassName} />,
      },
    ].filter(item => !!item.key) as GroupItem[]
  })()

  const media = useBreakpoints()
  const isMobile = media === MediaType.mobile

  const menuItems = [
    {
      key: 'workspace-group',
      name: t('common.settings.workplaceGroup'),
      items: workplaceGroupItems,
    },
    {
      key: 'account-group',
      name: t('common.settings.accountGroup'),
      items: [
        {
          key: 'account',
          name: t('common.settings.account'),
          icon: <RiAccountCircleLine className={iconClassName} />,
          activeIcon: <RiAccountCircleFill className={iconClassName} />,
        },
        {
          key: 'integrations',
          name: t('common.settings.integrations'),
          icon: <RiApps2AddLine className={iconClassName} />,
          activeIcon: <RiApps2AddFill className={iconClassName} />,
        },
        {
          key: 'language',
          name: t('common.settings.language'),
          icon: <RiTranslate2 className={iconClassName} />,
          activeIcon: <RiTranslate2 className={iconClassName} />,
        },
      ],
    },
  ]
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const targetElement = scrollRef.current
    const scrollHandle = (e: Event) => {
      const userScrolled = (e.target as HTMLDivElement).scrollTop > 0
      setScrolled(userScrolled)
    }
    targetElement?.addEventListener('scroll', scrollHandle)
    return () => {
      targetElement?.removeEventListener('scroll', scrollHandle)
    }
  }, [])

  const activeItem = [...menuItems[0].items, ...menuItems[1].items].find(item => item.key === activeMenu)

  return (
    <Modal
      isShow
      onClose={() => { }}
      className={s.modal}
      wrapperClassName='pt-[60px]'
    >
      <div className='flex'>
        <div className='w-[44px] sm:w-[240px] p-6 border-r-[0.5px] border-gray-300 shrink-0 sm:shrink-1 flex flex-col items-center sm:items-start'>
          <div className='mb-8 ml-0 sm:ml-2 text-sm sm:text-base font-medium leading-6 text-gray-900'>{t('common.userProfile.settings')}</div>
          <div className='w-full'>
            {
              menuItems.map(menuItem => (
                <div key={menuItem.key} className='mb-4'>
                  <div className='px-2 mb-[6px] text-[10px] sm:text-xs font-medium text-gray-500'>{menuItem.name}</div>
                  <div>
                    {
                      menuItem.items.map(item => (
                        <div
                          key={item.key}
                          className={`
                            flex items-center h-[37px] mb-[2px] text-sm cursor-pointer rounded-lg
                            ${activeMenu === item.key ? 'font-semibold text-primary-600 bg-primary-50' : 'font-light text-gray-700'}
                          `}
                          title={item.name}
                          onClick={() => setActiveMenu(item.key)}
                        >
                          {activeMenu === item.key ? item.activeIcon : item.icon}
                          {!isMobile && <div className='truncate'>{item.name}</div>}
                        </div>
                      ))
                    }
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div ref={scrollRef} className='relative w-[824px] h-[720px] pb-8 overflow-y-auto'>
          <div className={cn('sticky top-0 px-8 py-6 flex items-center mb-4 bg-white text-base font-medium text-gray-900 z-20', scrolled && scrolledClassName)}>
            <div className='shrink-0'>{activeItem?.name}</div>
            {
              activeItem?.description && (
                <div className='shrink-0 ml-2 text-xs text-gray-600'>{activeItem?.description}</div>
              )
            }
            <div className='grow flex justify-end'>
              <div className='flex items-center justify-center -mr-4 -mt-2 w-6 h-6 cursor-pointer' onClick={onCancel}>
                <RiCloseLine className='w-4 h-4 text-gray-500' />
              </div>
            </div>
          </div>
          <div className='px-4 sm:px-8 pt-2'>
            {activeMenu === 'account' && <AccountPage />}
            {activeMenu === 'members' && <MembersPage />}
            {activeMenu === 'billing' && <BillingPage />}
            {activeMenu === 'integrations' && <IntegrationsPage />}
            {activeMenu === 'language' && <LanguagePage />}
            {activeMenu === 'provider' && <ModelProviderPage />}
            {activeMenu === 'data-source' && <DataSourcePage />}
            {activeMenu === 'api-based-extension' && <ApiBasedExtensionPage />}
            {activeMenu === 'custom' && <CustomPage />}
          </div>
        </div>
      </div>
    </Modal>
  )
}
