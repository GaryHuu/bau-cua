import PropTypes from 'prop-types'
import { FACE } from '../../../../assets/constants'
import Selection from '../Selection'
import bauImg from './../../../../assets/img/selection-bau-active.png'
import cuaImg from './../../../../assets/img/selection-cua-active.png'
import tomImg from './../../../../assets/img/selection-tom-active.png'
import caImg from './../../../../assets/img/selection-ca-active.png'
import gaImg from './../../../../assets/img/selection-ga-active.png'
import naiImg from './../../../../assets/img/selection-nai-active.png'

const SELECTIONS = [
  {
    value: FACE.NAI,
    img: naiImg,
  },
  {
    value: FACE.BAU,
    img: bauImg,
  },
  {
    value: FACE.GA,
    img: gaImg,
  },
  {
    value: FACE.CA,
    img: caImg,
  },
  {
    value: FACE.CUA,
    img: cuaImg,
  },
  {
    value: FACE.TOM,
    img: tomImg,
  },

]

function SelectSection({ result = [], isWaiting = false }) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '800px',
        margin: '0 auto',
        justifyContent: 'center',
        gap: '15px 20px',
      }}
    >
      {SELECTIONS.map((option) => (
        <Selection
          key={option.img}
          src={option.img}
          isActive={isWaiting ? true : result.includes(option.value)}
        />
      ))}
    </div>
  )
}

SelectSection.propTypes = {
  result: PropTypes.array,
  isWaiting: PropTypes.bool,
}

export default SelectSection
