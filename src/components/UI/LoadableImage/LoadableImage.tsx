import React, {
  useEffect,
  useState,
} from 'react'

interface LoadableImageProps {
  placeholder?: JSX.Element,
  loadStart?(): void,
  loadEnd?(): void,
}

type Props = LoadableImageProps & React.ImgHTMLAttributes<HTMLImageElement>;

const LoadableImage: React.FC<Props> = props => {
  const [loading, setLoading] = useState()
  const [currentImageSrc, setCurrentImageSrc] = useState('')
  const {placeholder, loadStart, loadEnd, ...imgProps} = props;

  useEffect(() => {
    if (loadStart && currentImageSrc !== props.src && !loading) {
      loadStart()
      setLoading(true);
    }
  }, [props.src])

  let imagePreload = new Image()
  if (props.src && currentImageSrc !== props.src && loading) {
    imagePreload.src = props.src
    imagePreload.onload = () => {
      if (loadEnd) {
        setCurrentImageSrc(props.src as string)
        loadEnd()
      }
      setLoading(false)
    }
  }

  const safePlaceholder = placeholder || null;

  const content = loading
    ? safePlaceholder
    : (
      <img {...imgProps}/>
    )
  return content
}

export default LoadableImage
