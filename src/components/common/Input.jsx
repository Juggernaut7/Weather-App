const Input = ({ className = '', ...props }) => (
  <input
    className={`w-full bg-gray-100/20 text-white border border-gray-200/30 rounded-xl p-3 text-lg placeholder-gray-100/60 focus:outline-none focus:ring-2 focus:ring-teal-500 transition ${className}`}
    {...props}
  />
);

export default Input;