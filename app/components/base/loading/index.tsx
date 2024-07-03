import React from 'react'

import './style.css'
type ILoadingProps = {
  type?: 'area' | 'app'
}
const Loading = (
  { type = 'area' }: ILoadingProps = { type: 'area' },
) => {
  return (
    <div className={`flex w-full justify-center items-center ${type === 'app' ? 'h-full' : ''}`}>
      
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="animate-spin">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 3a9 9 0 1 0 9 9"></path>
      </svg>

    </div>
  )
}
export default Loading
