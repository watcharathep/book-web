import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faEye } from "@fortawesome/free-solid-svg-icons";
import {
  faStar as faStarO,
  faEye as faEyeO,
} from "@fortawesome/free-regular-svg-icons";
import Rating from "react-rating";
import { Link } from "react-router-dom";

import CancelButton from "../../components/buttons/cancel";
import EditButton from "../../components/buttons/edit";
import { path } from "../../routes/constant";

const CardBook = ({ handleDeleteBook, book }) => {
  const handleDelete = () => {
    const isConfirm = window.confirm("คุณต้องการลบหนังสือใช่หรือไม่ ?");
    if (isConfirm) {
      handleDeleteBook(book.id);
    }
  };
  return (
    <div className="card">
      <div className="card-cover">
        <span className="read">
          <FontAwesomeIcon icon={faEyeO} />{" "}
          <span title={`อ่านแล้ว ${book.totalRead}`}>{book.totalRead}</span>
        </span>
        <img src={book.imageUrl} alt={book.title} />
      </div>
      <div className="card-body">
        <h3 className="line-clamp-1 mt-10p mb-10p">{book.title}</h3>
        <span className="line-clamp-3">{book.description}</span>
        <div className="d-flex justify-space-between">
          <h5 className="mt-10p mb-10p">
            ราคา <span className="highlight">{book.price} </span>บาท
          </h5>
          <h5 className="mt-10p mb-10p">
            จำนวนสินค้าที่เหลือ <span className="highlight">{book.stock} </span>{" "}
            เล่ม
          </h5>
        </div>
        <div className="text-center">
          <Rating
          
            initialRating={book.rating}
            emptySymbol={
              <FontAwesomeIcon icon={faStarO} size="lg" color="#e6e600" />
            }
            fullSymbol={
              <FontAwesomeIcon icon={faStar} size="lg" color="#e6e600" />
            }
          />
        </div>
      </div>
      <ul className="card-actions">
        <li>
          <EditButton onClick={handleDelete}>แก้ไข</EditButton>
        </li>
        <li>
          <Link to={`${path.bookDetail}/${book.id}`}>รายละเอียด</Link>
        </li>
        <li>
          <CancelButton onClick={handleDelete}>ลบ</CancelButton>
        </li>
      </ul>
    </div>
  );
};

export default CardBook;
