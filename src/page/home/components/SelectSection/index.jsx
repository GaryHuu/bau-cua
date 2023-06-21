import PropTypes from 'prop-types'
import { FACE } from '../../../../assets/constants'
import Selection from '../Selection'

const SELECTIONS = [
  {
    img: '../../../../assets/img/selection-bau-active.png',
    value: FACE.NAI,
  },
  {
    img: '../../../../assets/img/selection-bau-active.png',
    value: FACE.BAU,
  },
  {
    img: '../../../../assets/img/selection-ga-active.png',
    value: FACE.GA,
  },
  {
    img: '../../../../assets/img/selection-ca-active.png',
    value: FACE.CA,
  },
  {
    img: '../../../../assets/img/selection-cua-active.png',
    value: FACE.CUA,
  },
  {
    img: '../../../../assets/img/selection-tom-active.png',
    value: FACE.TOM,
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
