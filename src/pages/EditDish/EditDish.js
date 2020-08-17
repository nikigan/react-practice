import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FormProvider, useForm } from "react-hook-form";
import { Popconfirm, Spin } from "antd";
import TextInput from "../../components/TextInput";
import ImageUpload from "../../components/ImageUpload";
import ItemSelect from "../../components/ItemSelect";
import "./EditDish.scss";
import {
  onDishClosed,
  onDishEdit,
  onDishFetch,
  onDishSave,
  onInputChange,
  onImageChange,
  onDishDelete,
} from "../../store/dish/action";
import NumberInput from "../../components/NumberInput";

const EditDish = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const { setValue } = methods;
  const { isValid } = methods.formState;

  const { name, photo: image, price, ingredients, fetching } = useSelector(
    (state) => state.dish
  );

  const { placeId } = useSelector((state) => state.place);

  const submitHandler = (data) => {
    const formData = {
      name: data.name,
      image: data.imageUpload[0],
      price: data.price,
    };

    const mockIngredients = [30, 27, 6];

    if (id) {
      dispatch(
        onDishEdit({
          dishId: id,
          ...formData,
          placeId,
          ingredients: mockIngredients,
        })
      );
    } else {
      dispatch(
        onDishSave({ ...formData, placeId, ingredients: mockIngredients })
      );
    }
  };

  const deleteHandler = () => {
    dispatch(onDishDelete(id));
  };

  useEffect(() => {
    if (id) {
      dispatch(onDishFetch(id));
    }
    return () => {
      if (id) {
        dispatch(onDishClosed());
      }
    };
  }, [dispatch, id]);

  useEffect(() => {
    if (name) {
      setValue("name", name, { shouldDirty: true, shouldValidate: true });
    }
    if (price) {
      setValue("price", price, { shouldDirty: true, shouldValidate: true });
    }
  }, [price, name, setValue]);

  const inputHandler = (event) => {
    dispatch(onInputChange(event));
  };

  const buttonText = id ? "Изменить" : "Добавить";

  return (
    <div className="edit-dish">
      <h1 className="edit-place__place-name">{`Блюдо ${id || ""}`}</h1>
      <FormProvider
        register={methods.register}
        setValue={methods.setValue}
        errors={methods.errors}
      >
        <form
          className="edit-place__form"
          onSubmit={methods.handleSubmit(submitHandler)}
        >
          <TextInput
            label="Название"
            name="name"
            value={name}
            onChange={inputHandler}
            maxLength={20}
            validationText="Название должно быть от 1 до 20 символов"
          />
          <ImageUpload
            label="Загрузите фотографию"
            image={image}
            onChange={(newImage) => dispatch(onImageChange(newImage))}
          />
          <NumberInput
            label="Цена"
            name="price"
            value={price}
            onChange={inputHandler}
            validationText="Введите натуральное число"
          />
          <ItemSelect
            items={ingredients}
            label="Список ингредиентов"
            path="ingredients"
            buttonText="Добавить ингредиент"
          />
          <button
            className="edit-place__button"
            type="submit"
            disabled={!isValid || !image}
          >
            {fetching ? (
              <Spin size="small" className="loading-spinner" />
            ) : (
              buttonText
            )}
          </button>
          {id && (
            <Popconfirm
              title="Вы уверены, что хотите удалить блюдо?"
              onConfirm={deleteHandler}
              cancelText="Отмена"
              okText="Ок"
            >
              <button type="button" className="edit-place__delete">
                Удалить блюдо
              </button>
            </Popconfirm>
          )}
        </form>
      </FormProvider>
    </div>
  );
};

export default EditDish;