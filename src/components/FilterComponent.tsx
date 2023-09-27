import React from "react";
import css from "../styles/FilterComponent.module.scss";
import { OutlinedInput, FormControl, InputAdornment } from "@mui/material";
import { FilterClass } from "../utils/utils";

const filters: FilterClass[] = [
  new FilterClass("Filter", undefined, undefined, true, true),
  new FilterClass(
    "Personal Information",
    "fa-regular fa-file-lines",
    true,
    false,
    undefined
  ),
  new FilterClass(
    "Education",
    "fa-regular fa-file-lines",
    true,
    false,
    undefined
  ),
  new FilterClass(
    "Work Experience",
    "fa-regular fa-file-lines",
    true,
    false,
    undefined
  ),
  new FilterClass(
    "Activity Filter",
    "fa-regular fa-file-lines",
    true,
    false,
    undefined
  ),
  new FilterClass(
    "Advanced Filter",
    "fa-regular fa-file-lines",
    true,
    false,
    undefined
  ),
];

const FilterComponent = () => {
  return (
    <div className={css.filter_component}>
      <div className={css.title}>
        <span>London Internship Program</span>
        <span>London</span>
      </div>
      <div className={css.inner_filter_component}>
        <div className={css.search_container}>
          <FormControl
            sx={{ m: 1, width: "100%", padding: 0, margin: 0 }}
            variant="outlined"
            className={css.search_parent}
          >
            <OutlinedInput
              endAdornment={
                <InputAdornment position="end">
                  <i className="fa-solid fa-circle-exclamation"></i>
                </InputAdornment>
              }
              startAdornment={
                <InputAdornment position="start">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </InputAdornment>
              }
              placeholder="Serach by name, edu, exp or #tag"
              className={css.search}
            />
          </FormControl>
        </div>
        <ul className={css.filter_container}>
          {filters.map((filter) => (
            <>
              <li className={css.each_filter}>
                <div className={css.left}>
                  {filter.icon && <i className={filter.icon} />}
                  <span
                    style={filter.heading ? { fontWeight: "bold" } : undefined}
                  >
                    {filter.name}
                  </span>
                </div>
                <div className={css.right}>
                  {filter.showCaret && (
                    <i className="fa-solid fa-caret-down"></i>
                  )}
                  {filter.showTag && <span>0 selected</span>}
                </div>
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterComponent;
