type ProgressBarProps = {
  percent: number
  color: string
}
const ProgressBar = ({
  percent = 0,
  color = '#7C3AED',
}: ProgressBarProps) => {
  return (
    <div className='bg-[#F8F9F9] rounded-[4px] overflow-hidden'>
      <div
        className='h-2 rounded-[4px]'
        style={{
          width: `${Math.min(percent, 100)}%`,
          backgroundColor: color,
        }}
      />
    </div>
  )
}

export default ProgressBar
