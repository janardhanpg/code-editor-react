/* eslint-disable react/prop-types */
const Button = ({ title, backgroundColor,  onClick }) => {
  return (
    <div className="inline-block">
      <button
        className={`mr-2 mb-2 px-4 py-2 text-white font-semibold rounded-md shadow-md transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
        style={{
          backgroundColor: backgroundColor || "#3b82f6", // Default to Tailwind's blue if no background color is provided
        }}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
