import PropTypes from 'prop-types'

function StartButton({ onClick = () => {} }) {
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
      <p
        style={{
          fontSize: '36px',
          color: '#FFFFFF',
        }}
      >
        Chiến !!!
      </p>
      <img src='/src/assets/img/fire.svg' alt='' />
    </button>
  )
}

StartButton.propTypes = {
  onClick: PropTypes.func,
}

export default StartButton
