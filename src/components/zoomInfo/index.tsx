import { paintBoard } from '@/utils/paintBoard'
import { CSSProperties, useEffect, useState } from 'react'

const ZoomInfo = () => {
  const [zoomValue, setZoomValue] = useState(
    paintBoard.evnet?.zoomEvent.handleZoomPercentage(false)
  )
  useEffect(() => {
    paintBoard.evnet?.zoomEvent.setZoomHook((num: number) => {
      setZoomValue(num)
    })
  }, [setZoomValue])

  return (
    <div
      className="radial-progress text-primary-content"
      style={
        {
          '--value': zoomValue,
          '--size': '1.3rem',
          '--thickness': '0.2rem'
        } as CSSProperties
      }
      onClick={() => paintBoard.evnet?.zoomEvent.initZoom()}
    ></div>
  )
}

export default ZoomInfo
