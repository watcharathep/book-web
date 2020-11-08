import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import BookService from "../../services/book-service";

const createBookSchema = Yup.object().shape({
  title: Yup.string().required("กรุณากรอกชื่อหนังสือ"),
  description: Yup.string().required("กรุณากรอกรายละเอียด"),
  price: Yup.number().nullable().required("กรุณากรอกราคา"),
  stock: Yup.number().nullable().required("กรุณากรอกจำนวนสินค้า"),
  imageUrl: Yup.string().required("กรุณากรอกลิ้งค์รูป"),
});

const CreateBookPage = () => {
  const [isLoading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
      stock: "",
      imageUrl: ""
    },
    onSubmit: (values) => {
      handleSubmit(values);
    },
    validationSchema: createBookSchema,
  });

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await BookService.create(values);
      console.log(response)
      formik.resetForm()
      alert("สร้างหนังสือสำเร็จ");
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
    setLoading(false);
  };
  return (
    <div className="d-flex content-center">
      <form onSubmit={formik.handleSubmit} className="form-sign-up">
        <h2>สร้างหนังสือใหม่</h2>
        <hr />
        <div className="form-control">
          <label htmlFor="firstName">
            <b>ชื่อหนังสือ</b>
          </label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
            onBlur={formik.handleBlur}
            className={
              formik.errors.title && formik.touched.title ? "border-error" : ""
            }
          />
          {formik.touched.title && (
            <div className="error">{formik.errors.title}</div>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="description">
            <b>รายละเอียดหนังสือ</b>
          </label>
          <input
            id="description"
            name="description"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.description}
            onBlur={formik.handleBlur}
            className={
              formik.errors.description && formik.touched.description
                ? "border-error"
                : ""
            }
          />
          {formik.touched.description && (
            <div className="error">{formik.errors.description}</div>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="price">
            <b>ราคา</b>
          </label>
          <input
            id="price"
            name="price"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.price}
            onBlur={formik.handleBlur}
            className={
              formik.errors.price && formik.touched.price ? "border-error" : ""
            }
          />
          {formik.touched.price && (
            <div className="error">{formik.errors.price}</div>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="stock">
            <b>จำนวนสินค้า</b>
          </label>
          <input
            id="stock"
            name="stock"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.stock}
            onBlur={formik.handleBlur}
            className={
              formik.errors.stock && formik.touched.stock ? "border-error" : ""
            }
          />
          {formik.touched.stock && (
            <div className="error">{formik.errors.stock}</div>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="imageUrl">
            <b>ลิ้งค์รูปหนังสือ</b>
          </label>
          <input
            id="imageUrl"
            name="imageUrl"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.imageUrl}
            onBlur={formik.handleBlur}
            className={
              formik.errors.imageUrl && formik.touched.imageUrl ? "border-error" : ""
            }
          />
          {formik.touched.imageUrl && (
            <div className="error">{formik.errors.imageUrl}</div>
          )}
        </div>
        <button type="submit" className="mt-10p" disabled={isLoading}>
          <div className="d-flex align-center justify-center">
            {isLoading && <div className="loader"></div>}

            <b>
              <span className="size-18">ยืนยัน</span>
            </b>
          </div>

        </button>
    
      </form>
    </div>
  );
};

export default CreateBookPage
