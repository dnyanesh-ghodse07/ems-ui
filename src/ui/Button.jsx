// eslint-disable-next-line react/prop-types
const Button = ({children, onClickHandle, disable}) => {
  return (
    <button
    className="bg-slate-500 text-slate-100 h-9 p-1 rounded-md hover:bg-slate-600 shadow-md disabled:cursor-not-allowed"
    onClick={onClickHandle}
    disabled={disable}
  >
   {children}
  </button>
  )
}

export default Button