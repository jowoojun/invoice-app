import { useState, useEffect } from 'react'

interface imageSizeProps {
  desktop: { width: number, height: number },
  tablet: { width: number, height: number },
  mobile: { width: number, height: number }
}

const useDeviceSize = (imageSize:imageSizeProps) => {

  const [width, setWidth] = useState(0)

  const [imageWidth, setImageWidth] = useState(0)
  const [imageHeight, setImageHeight] = useState(0)

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    if(width >= 1024) {
      setImageWidth(imageSize.desktop.width);
      setImageHeight(imageSize.desktop.height);
    }else if(width >= 768) {
      setImageWidth(imageSize.tablet.width);
      setImageHeight(imageSize.tablet.height);
    }else {
      setImageWidth(imageSize.mobile.width);
      setImageHeight(imageSize.mobile.height);
    }
  }, [width]);

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return [imageWidth, imageHeight]

}

export default useDeviceSize;