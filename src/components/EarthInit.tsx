import { Viewer } from 'cesium'
import { useEffect, useRef } from 'react'

export default function Earth() {
  const viewer = useRef<Viewer>()

  useEffect(() => {
    viewer.current = new Viewer('container')

    return () => {
      viewer.current?.destroy()
      // console.log(viewer.current?.isDestroyed())
    }
  }, [])
  
  return (
    <div id='container'></div>
  )
}