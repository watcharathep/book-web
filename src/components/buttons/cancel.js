import './cancel.css'

const CancelButton = ({ children, ...props }) => {
  return (
    <button {...props} className="cancel-button">
      {children}
    </button>
  );
};

export default CancelButton;
