import React, {
  useState,
  useEffect,
  CSSProperties,
} from 'react'
import classes from './Background.module.css';

interface BackgroundProps {
  backgrounds: string[],
  placeholder?: JSX.Element,
  loadStart?(): void,
  loadEnd?(): void,
}

const Background: React.FC<BackgroundProps> = props => {
  const [loading, setLoading] = useState(true)
  const [currentBackground, setCurrentBackground] = useState('')
  const [styles, setStyles] = useState({
    zIndex: -1000,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 'calc(100vh - 83px)',
    backgroundAttachment: 'fixed',
    position: 'absolute' as 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundImage: props.backgrounds.join(', '),
  } as CSSProperties)

  const {backgrounds, loadEnd, loadStart} = props;
  useEffect(() => {
    let backgroundUrl: string | undefined = undefined;
    const backgroundUrlWrapper = backgrounds.find((background: string) => {
      return background.startsWith('url')
    });
    if (backgroundUrlWrapper) {
      let re = /url\((.*)\)/i
      let matches = backgroundUrlWrapper.match(re) || [];
      if (matches.length === 2) {
        backgroundUrl = matches[1]
      }
    }

    if (currentBackground !== backgroundUrl) {
      if (backgroundUrl) {
        setLoading(true)
        let backgroundImagePreload = new Image()
        backgroundImagePreload.src = backgroundUrl
        backgroundImagePreload.onload = () => {
          setCurrentBackground(backgroundUrl as string)
          setLoading(false)
          setStyles({
            zIndex: -1000,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: 'calc(100vh - 83px)',
            backgroundAttachment: 'fixed',
            position: 'absolute' as 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundImage: backgrounds.join(', '),
          } as CSSProperties)
          if (loadEnd) {
            loadEnd();
          }
        }
      } else {
        setLoading(false)
      }

      if (loadStart) {
        loadStart();
      }
    }
  }, [backgrounds, loadStart, loadEnd, currentBackground]);


  const placeholder = props.placeholder || (<div className={classes.Background}></div>)

  const content = loading
    ? placeholder
    : (
      <div
        className={classes.Background}
        style={styles}
      />
    );
  return content;
}

export default Background;