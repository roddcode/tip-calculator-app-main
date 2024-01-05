const Button = ({button}) => {
  return (
    <>
      <button
        id={button.id}
        key={button.id}
        className={`w-full py-2 transition-all rounded-md ${
          button.id === activeButton
            ? 'bg-strong-cyan text-very-dark-cyan'
            : 'bg-very-dark-cyan text-white'
        }`}
        
      >
        {button.text}%
      </button>
    </>
  )
}

export default Button
