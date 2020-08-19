import React, { useEffect } from "react";
import "./FilterBlock.scss";
import { useHistory, useLocation } from "react-router-dom";
import { Input, Space, Switch } from "antd";
import "antd/es/input/style/css";
import "antd/es/switch/style/css";
import "antd/es/space/style/css";
import { useDispatch, useSelector } from "react-redux";
import FilterSlider from "../FilterSlider";
import {
  onOpenedChanged,
  onPriceChange,
  onSearchInput,
  onSearchParams,
} from "../../store/filters/actions";
import onFilterChanged from "../../utils/filterUtils";

const FilterBlock = () => {
  const dispatch = useDispatch();
  const { query, price, opened } = useSelector((state) => state.filters);
  const { placesList } = useSelector((state) => state.places);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (placesList.length > 0) {
      const params = new URLSearchParams(location.search);
      dispatch(
        onSearchParams(
          params.get("query"),
          params.get("price"),
          params.get("opened"),
          placesList
        )
      );
    }
  }, [dispatch, location, placesList]);

  return (
    <div className="filter-block shadow">
      <Space direction="vertical" style={{ width: "100%" }}>
        <Input
          placeholder="Введите название заведения"
          size="large"
          onChange={(event) => {
            onFilterChanged(event.target.value, price, opened, history);
            dispatch(onSearchInput(event.target.value));
          }}
          value={query}
        />
        <FilterSlider
          price={price}
          min={100}
          max={1000}
          onChange={(value) => {
            onFilterChanged(query, value, opened, history);
            dispatch(onPriceChange(value));
          }}
        />
        <Switch
          onClick={(checked) => {
            onFilterChanged(query, price, checked, history);
            dispatch(onOpenedChanged(checked));
          }}
          checked={opened}
          checkedChildren="Только открытые"
          unCheckedChildren="Открытые и закрытые"
        />
      </Space>
    </div>
  );
};

export default FilterBlock;
