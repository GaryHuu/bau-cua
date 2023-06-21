import PropTypes from 'prop-types'

function ContinueButton({ onClick = () => {} }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: '#273B4A',
        display: 'flex',
        gap: '36px',
        outline: 'none',
        border: 'none',
        padding: '12px 20px',
        borderRadius: '12px',
        cursor: 'pointer',
        height: 'max-content',
        alignContent: 'center',
      }}
      onMouseEnter={(e) => {
        e.target.style.opacity = 0.8
      }}
      onMouseLeave={(e) => {
        e.target.style.opacity = 1
      }}
    >
      <img
        style={{
          height: '100%',
        }}
        src='/src/assets/img/reload.svg'
        alt=''
      />
    </button>
  )
}

ContinueButton.propTypes = {
  onClick: PropTypes.func,
}

export default ContinueButton
