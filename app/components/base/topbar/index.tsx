'use client'

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

const Topbar = () => {
  return (
    <>
      <ProgressBar
        height='2px'
        color="#7C3AED"
        options={{ showSpinner: false }}
        shallowRouting />
    </>)
}

export default Topbar
