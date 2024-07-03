import { memo } from 'react'
import type { ConnectionLineComponentProps } from 'reactflow'
import {
  Position,
  getBezierPath,
} from 'reactflow'

const CustomConnectionLine = ({ fromX, fromY, toX, toY }: ConnectionLineComponentProps) => {
  const [
    edgePath,
  ] = getBezierPath({
    sourceX: fromX,
    sourceY: fromY,
    sourcePosition: Position.Right,
    targetX: toX,
    targetY: toY,
    targetPosition: Position.Left,
    curvature: 0.16,
  })

  return (
    <g>
      <path
        fill="none"
        stroke='#E5E8E9'
        strokeWidth={2}
        d={edgePath}
      />
      <rect
        x={toX}
        y={toY - 4}
        width={2}
        height={8}
        fill='#7C3AED'
      />
    </g>
  )
}

export default memo(CustomConnectionLine)
