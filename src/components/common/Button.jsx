const Button = ({ children, type = 'button', className = '', ...props }) => (
  <button
    type={type}
    className={`bg-teal-500 text-white font-bold py-3 px-4 rounded-xl hover:bg-teal-600 transition duration-300 shadow-sm ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;