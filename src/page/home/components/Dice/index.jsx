import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { FACE } from '../../../../assets/constants'

function Dice({ value, index }) {
  const ref = useRef(null)

  function rotateToFace(face) {
    if (!ref.current) return

    let rotationX = 0
    let rotationY = 0
    let rotationZ = 0

    switch (face) {
      case FACE.BAU:
        rotationX = Math.floor(Math.random() * 20) - 10
        rotationY = Math.floor(Math.random() * 20) - 10
        rotationZ = Math.floor(Math.random() * 360)
        break
      case FACE.CUA:
        rotationX = Math.floor(Math.random() * 20) - 10
        rotationY = 180 + Math.floor(Math.random() * 20) - 10
        rotationZ = Math.floor(Math.random() * 360)
        break
      case FACE.CA:
        rotationX = 90 + Math.floor(Math.random() * 20) - 10
        rotationY = Math.floor(Math.random() * 360)
        rotationZ = Math.floor(Math.random() * 20) - 10
        break
      case FACE.TOM:
        rotationX = -90 + Math.floor(Math.random() * 20) - 10
        rotationY = Math.floor(Math.random() * 360)
        rotationZ = Math.floor(Math.random() * 20) - 10
        break
      case FACE.NAI:
        rotationX = Math.floor(Math.random() * 20) - 10
        rotationY = -90 + Math.floor(Math.random() * 20) - 10
        rotationZ = Math.floor(Math.random() * 20) - 10
        break
      case FACE.GA:
        rotationX = Math.floor(Math.random() * 20) - 10
        rotationY = 90 + Math.floor(Math.random() * 20) - 10
        rotationZ = Math.floor(Math.random() * 20) - 10
        break
      default:
        return
    }

    ref.current.style.transform = `rotateX(${
      360 * Math.floor(Math.random() * 20 + 10) + rotationX
    }deg) rotateY(${
      360 * Math.floor(Math.random() * 20 + 10) + rotationY
    }deg) rotateZ(${360 * Math.floor(Math.random() * 20 + 10) + rotationZ}deg)`
    ref.current.style.transition = 'transform 4s cubic-bezier(0, 1.14, 1, 1)'
  }

  useEffect(() => {
    if (value?.[index]) {
      setTimeout(() => {
        rotateToFace(value[index])
      }, 0)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return (
    <div ref={ref} className='dice'>
      <div className='bau'></div>
      <div className='cua'></div>
      <div className='tom'></div>
      <div className='ca'></div>
      <div className='ga'></div>
      <div className='nai'></div>
    </div>
  )
}

Dice.propTypes = {
  value: PropTypes.array,
  index: PropTypes.number,
}

export default Dice
