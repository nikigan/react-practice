import PropTypes from "prop-types";
import React from "react";
import { message } from "antd";
import "antd/es/message/style/css";
import { PlusOutlined } from "@ant-design/icons";
import "./ImageUpload.scss";
import { useFormContext } from "react-hook-form";

const ImageUpload = ({ image, onChange, label }) => {
  const { register, setValue } = useFormContext();

  const handleImageUpload = (event) => {
    event.preventDefault();

    const reader = new FileReader();
    const { files } = event.target;

    if (files[0]) {
      const isLt1M = files[0].size / 1024 / 1024 < 1;
      if (!isLt1M) {
        message.error("Изображение должно быть меньше 1MB!");
        return false;
      }

      reader.onloadend = () => {
        onChange(reader.result);
        setValue("imageUpload", files);
      };

      reader.readAsDataURL(files[0]);
      return true;
    }
    return false;
  };

  return (
    <div className="edit-place__form-item image-upload">
      <span className="image-upload__label">{label}</span>
      <label htmlFor="imageUpload">
        <div className="image-upload__container">
          {image.length > 0 && (
            <img className="image-upload__image" src={image} alt="" />
          )}
          <div className="image-upload__upload-btn">
            <span className="image-upload__plus">
              <PlusOutlined />
            </span>
            <span className="image-upload__text">Добавить изображение</span>
          </div>
        </div>
      </label>
      <input
        ref={register}
        name="imageUpload"
        id="imageUpload"
        type="file"
        hidden
        onChange={handleImageUpload}
      />
    </div>
  );
};

export default ImageUpload;

ImageUpload.propTypes = {
  image: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
};

ImageUpload.defaultProps = {
  image: "",
  onChange: null,
  label: "",
};
