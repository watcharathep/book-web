import './edit.css'

const EditButton = ({ children, ...props }) => {
  return (
    <button {...props} className="edit-button">
      {children}
    </button>
  );
};

export default EditButton;
