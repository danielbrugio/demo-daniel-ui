import React, { useEffect, useState } from 'react'
import { Button, mountain, sea } from 'react-daniel-ui'
import { useDispatch } from 'react-redux'
import { changeThemeAction } from '../../redux/actions/changeThemeAction'

export const Header = ({ title, changeTag = () => {}, hideTags = false }) => {
  const [tag, setTag] = useState('useCases')
  const dispatch = useDispatch()

  useEffect(() => {
    changeTag(tag)
  }, [tag, changeTag])

  const handleTheme = (theme) => {
    if (theme === 'Sea') {
      dispatch(changeThemeAction(sea))
    } else if (theme === 'Mountain') {
      dispatch(changeThemeAction(mountain))
    }
  }

  return (
    <div className='header'>
      <h2>{title}</h2>
      {!hideTags && (
        <div className='header__tags'>
          <div className='header__tags--left'>
            <button
              onClick={() => setTag('general')}
              className={tag === 'general' ? 'tagselect' : 'tagunselect'}
            >
              General
            </button>
            <button
              onClick={() => setTag('useCases')}
              className={tag === 'useCases' ? 'tagselect' : 'tagunselect'}
            >
              Use Cases
            </button>
          </div>
          {tag === 'useCases' && (
            <div className='header__tags--right'>
              <h3>Change Theme</h3>
              <Button onClick={() => handleTheme('Sea')} theme={sea}>
                Sea
              </Button>
              <Button
                onClick={() => handleTheme('Mountain')}
                theme={mountain}
              >
                Mountain
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}