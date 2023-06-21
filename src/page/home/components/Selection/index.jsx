import PropTypes from 'prop-types'

function Selection({ src = '', isActive = false }) {
  return (
    <img
      style={{
        opacity: isActive ? 1 : 0.3,
      }}
      src={src}
      alt=''
    />
  )
}

Selection.propTypes = {
  src: PropTypes.string,
  isActive: PropTypes.bool,
}

export default Selection
