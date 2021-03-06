import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
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
  onIngredientDelete,
} from "../../store/dish/action";
import NumberInput from "../../components/NumberInput";
import Modal from "../../components/Modal";
import {
  onIngredientModalClose,
  onIngredientModalShow,
} from "../../store/ingredient/actions";
import IngredientsList from "../../components/IngredientsList";

const EditDish = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

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

    if (id) {
      dispatch(
        onDishEdit({
          dishId: id,
          ...formData,
          placeId,
          ingredients,
        })
      );
    } else {
      dispatch(onDishSave({ ...formData, placeId, ingredients }, history));
    }
  };

  const deleteHandler = () => {
    dispatch(onDishDelete(id, history));
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

  const buttonText = id ? "????????????????" : "????????????????";

  const { modalOpened } = useSelector((state) => state.ingredient);

  const onIngredientClick = (ingredientId) => {
    dispatch(onIngredientDelete(ingredientId, ingredients, placeId, id));
  };

  const onIngredientNewClick = () => {
    dispatch(onIngredientModalShow());
  };

  const onIngredientModalClosed = () => {
    dispatch(onIngredientModalClose());
  };

  return (
    <div className="edit-dish">
      <h1 className="edit-place__place-name">{`?????????? ${id || ""}`}</h1>
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
            label="????????????????"
            name="name"
            value={name}
            onChange={inputHandler}
            maxLength={20}
            validationText="???????????????? ???????????? ???????? ???? 1 ???? 20 ????????????????"
          />
          <ImageUpload
            label="?????????????????? ????????????????????"
            image={image}
            onChange={(newImage) => dispatch(onImageChange(newImage))}
          />
          <NumberInput
            label="????????"
            name="price"
            value={price}
            onChange={inputHandler}
            validationText="?????????????? ?????????????????????? ??????????"
          />
          <ItemSelect
            items={ingredients}
            label="???????????? ????????????????????????"
            onItemClick={onIngredientClick}
            onNewClick={onIngredientNewClick}
            buttonText="???????????????? ????????????????????"
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
              title="???? ??????????????, ?????? ???????????? ?????????????? ???????????"
              onConfirm={deleteHandler}
              cancelText="????????????"
              okText="????"
            >
              <button type="button" className="edit-place__delete">
                ?????????????? ??????????
              </button>
            </Popconfirm>
          )}
        </form>
      </FormProvider>
      <Modal opened={modalOpened} onClose={onIngredientModalClosed}>
        <IngredientsList />
      </Modal>
    </div>
  );
};

export default EditDish;
