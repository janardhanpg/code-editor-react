/* eslint-disable react/prop-types */
const Button = ({ title, onClick }) => {
  return (
    <Button
      style={{
        maxWidth: "140px",
        minWidth: "80px",
        height: "30px",
        marginRight: "5px",
      }}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default Button;
