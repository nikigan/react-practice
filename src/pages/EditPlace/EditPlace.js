import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./EditPlace.scss";
import { useDispatch, useSelector } from "react-redux";
import { Popconfirm, Spin } from "antd";
import "antd/es/popconfirm/style/css";
import { useForm, FormProvider } from "react-hook-form";
import {
  onImageChange,
  onInputChange,
  onPlaceEdit,
  onPlaceFetch,
  onPlaceSave,
  onTimeChanged,
  onPlaceDelete,
  onDishesFetch,
} from "../../store/place/action";
import TextInput from "../../components/TextInput";
import ImageUpload from "../../components/ImageUpload";
import TimePicker from "../../components/TimePicker";
import "antd/es/time-picker/style/css";
import ItemSelect from "../../components/ItemSelect";

const EditPlace = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const { setValue } = methods;
  const { isValid } = methods.formState;

  const {
    name,
    image,
    from_hour: fromHour,
    to_hour: toHour,
    address,
    fetching,
    placeId,
    dishes,
  } = useSelector((state) => state.place);

  const timeHandler = (_, timeString) => {
    dispatch(onTimeChanged(timeString[0], timeString[1]));
  };

  const inputHandler = (event) => {
    dispatch(onInputChange(event));
  };

  useEffect(() => {
    if (id !== placeId) {
      dispatch(onPlaceFetch(id));
    }
  }, [dispatch, id, placeId]);

  useEffect(() => {
    if (id) {
      dispatch(onDishesFetch(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (name) {
      setValue("name", name, { shouldDirty: true, shouldValidate: true });
    }
    if (address) {
      setValue("address", address, { shouldDirty: true, shouldValidate: true });
    }
  }, [address, name, setValue]);

  const history = useHistory();

  const submitHandler = (data) => {
    const formData = {
      name: data.name,
      image: data.imageUpload[0],
      fromHour,
      toHour,
      address: data.address,
    };

    if (id) {
      dispatch(onPlaceEdit({ placeId: id, ...formData }));
    } else {
      dispatch(onPlaceSave(formData, history));
    }
  };

  const deleteHandler = () => {
    dispatch(onPlaceDelete(id, history));
  };

  const buttonText = id ? "????????????????" : "??????????????????";

  const onDishClick = (dishId) => {
    history.push(`/owner/dishes/${dishId}`);
  };

  const onDishAdd = () => {
    history.push("/owner/dishes/new");
  };

  return (
    <div className="edit-place">
      <h1 className="edit-place__place-name">{`?????????????????? ${id || ""}`}</h1>
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
          <TimePicker
            label="?????????? ????????????"
            onChange={timeHandler}
            fromHour={fromHour}
            toHour={toHour}
          />
          <TextInput
            label="??????????"
            name="address"
            value={address}
            onChange={inputHandler}
            validationText="???????????????? ???????????? ???????? ?????????????? 1 ??????????????"
          />
          <ItemSelect
            items={dishes}
            label="???????????? ????????"
            onItemClick={onDishClick}
            onNewClick={onDishAdd}
            buttonText="???????????????? ??????????"
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
              title="???? ??????????????, ?????? ???????????? ?????????????? ???????????????????"
              onConfirm={deleteHandler}
              cancelText="????????????"
              okText="????"
            >
              <button type="button" className="edit-place__delete">
                ?????????????? ??????????????????
              </button>
            </Popconfirm>
          )}
        </form>
      </FormProvider>
    </div>
  );
};

export default EditPlace;
