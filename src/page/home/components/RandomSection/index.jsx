import PropTypes from 'prop-types'
import Dice from '../Dice'
import StartButton from '../StartButton'
import ContinueButton from './../ContinueButton/index'

function RandomSection({ result, onRandom, isWaiting }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
      }}
    >
      {result && (
        <div style={{ display: 'flex', gap: '50px' }}>
          <Dice value={result} index={0} />
          <Dice value={result} index={1} />
          <Dice value={result} index={2} />
        </div>
      )}

      <div
        style={{
          marginTop: '40px',
          minHeight: '60px',
        }}
      >
        {!result && <StartButton onClick={onRandom} />}
        {result && !isWaiting && <ContinueButton onClick={onRandom} />}
      </div>
    </div>
  )
}

RandomSection.propTypes = {
  result: PropTypes.array,
  onRandom: PropTypes.func,
  isWaiting: PropTypes.bool,
}

export default RandomSection
