import React, { useState, FC } from "react";
import css from "../styles/Dashboard.module.scss";
import { Autocomplete, TextField, Checkbox } from "@mui/material";
import { DropdownOption, EachListClass } from "../utils/utils";
import FilterComponent from "./FilterComponent";
import { Variants, motion, AnimatePresence } from "framer-motion";

const dropdownOptions: DropdownOption[] = [
  new DropdownOption("Applied", "1745"),
  new DropdownOption("Shortlisted", "453"),
  new DropdownOption("Technical review", "123"),
  new DropdownOption("Opportunuty browsing", "243"),
  new DropdownOption("Video interview I", "25"),
  new DropdownOption("Video interview II", "25"),
  new DropdownOption("Video interview III", "25"),
  new DropdownOption("Offer", "25"),
  new DropdownOption("Withdrawn", "25"),
];

const PriceTagIcon: FC = () => {
  return (
    <>
      <svg
        width="18"
        height="17"
        viewBox="0 0 18 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.96008 1.28003L16.3426 7.66253C17.1001 8.42003 17.1001 9.64253 16.3426 10.4L10.7701 15.9725C10.0126 16.73 8.79008 16.73 8.03258 15.9725L1.65008 9.59003C1.29008 9.23003 1.08008 8.73503 1.08008 8.22503V2.65253C1.08008 1.58753 1.95008 0.717529 3.01508 0.717529H8.58758C9.10508 0.717529 9.60008 0.920029 9.96008 1.28003Z"
          stroke="#444444"
          stroke-width="0.7"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.5801 6.25254C6.15585 6.25254 6.6226 5.7858 6.6226 5.21004C6.6226 4.63428 6.15585 4.16754 5.5801 4.16754C5.00434 4.16754 4.5376 4.63428 4.5376 5.21004C4.5376 5.7858 5.00434 6.25254 5.5801 6.25254Z"
          stroke="#444444"
          stroke-width="0.7"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};

const UserDeleteIcon: FC = () => {
  return (
    <>
      <svg
        width="20"
        height="17"
        viewBox="0 0 20 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 16C13 13.7909 10.3137 12 7 12C3.68629 12 1 13.7909 1 16M15 11L19 7M15 7L19 11M7 9C4.79086 9 3 7.20914 3 5C3 2.79086 4.79086 1 7 1C9.20914 1 11 2.79086 11 5C11 7.20914 9.20914 9 7 9Z"
          stroke="#A80000"
          stroke-width="0.7"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};

const UserCheckmarkIcon: FC = () => {
  return (
    <>
      <svg
        width="20"
        height="17"
        viewBox="0 0 20 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 16C13 13.7909 10.3137 12 7 12C3.68629 12 1 13.7909 1 16M19 7L15 11L13 9M7 9C4.79086 9 3 7.20914 3 5C3 2.79086 4.79086 1 7 1C9.20914 1 11 2.79086 11 5C11 7.20914 9.20914 9 7 9Z"
          stroke="#0B0B0B"
          stroke-width="0.7"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};

const UserCallIcon: FC = () => {
  return (
    <>
      <svg
        width="20"
        height="18"
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 17C13 14.7909 10.3137 13 7 13C3.68629 13 1 14.7909 1 17M14.8281 3.17163C15.1996 3.54307 15.4942 3.98402 15.6952 4.46932C15.8962 4.95463 15.9998 5.47469 15.9998 5.99997C15.9998 6.52526 15.8963 7.04543 15.6953 7.53073C15.4943 8.01604 15.1996 8.45702 14.8281 8.82846M17 1C17.6566 1.65661 18.1775 2.43612 18.5328 3.29402C18.8882 4.15192 19.071 5.07134 19.071 5.99993C19.071 6.92851 18.8881 7.84808 18.5327 8.70598C18.1774 9.56388 17.6566 10.3435 17 11.0001M7 10C4.79086 10 3 8.20914 3 6C3 3.79086 4.79086 2 7 2C9.20914 2 11 3.79086 11 6C11 8.20914 9.20914 10 7 10Z"
          stroke="#0B0B0B"
          stroke-width="0.7"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};

const MailIcon: FC = () => {
  return (
    <>
      <svg
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2L10.2286 8L17.9999 2M19 4.19995V11.8C19 12.9201 19.0002 13.4802 18.7822 13.908C18.5905 14.2844 18.2841 14.5902 17.9078 14.782C17.48 15 16.9203 15 15.8002 15H4.2002C3.08009 15 2.51962 15 2.0918 14.782C1.71547 14.5902 1.40973 14.2844 1.21799 13.908C1 13.4802 1 12.9201 1 11.8V4.19995C1 3.07985 1 2.51986 1.21799 2.09204C1.40973 1.71572 1.71547 1.40973 2.0918 1.21799C2.51962 1 3.08009 1 4.2002 1H15.8002C16.9203 1 17.48 1 17.9078 1.21799C18.2841 1.40973 18.5905 1.71572 18.7822 2.09204C19.0002 2.51986 19 3.07985 19 4.19995Z"
          stroke="#0B0B0B"
          stroke-width="0.7"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};

const media_items: FC[] = [
  PriceTagIcon,
  UserDeleteIcon,
  UserCheckmarkIcon,
  UserCallIcon,
  MailIcon,
];
const list_items: EachListClass[] = [
  new EachListClass(
    "Aaliyah Sanderson",
    "Riyadh, Saudi Arabia",
    "Bachelor - Cambridge University (2023 - 2023)",
    ["top_candidate", "top_candidate"],
    ["New york", "Marketing", "London"]
  ),
  new EachListClass(
    "John Doe",
    "Bostom, USA",
    "Bachelor - MIT (2023 - 2023)",
    ["top_candidate", "top_candidate"],
    ["New york", "Marketing", "London"]
  ),
  new EachListClass(
    "Thomas Matt",
    "Edinburgh, UK",
    "Bachelor - Harvard University (2023 - 2023)",
    ["top_candidate", "top_candidate"],
    ["New york", "Marketing", "London"]
  ),
  new EachListClass(
    "Kamilia Smith",
    "London, UK",
    "Bachelor - Boston University (2023 - 2023)",
    ["top_candidate", "top_candidate"],
    ["New york", "Marketing", "London"]
  ),
  new EachListClass(
    "Roy Jade",
    "Cambridge,  UK",
    "Bachelor - Yale (2023 - 2023)",
    ["top_candidate", "top_candidate"],
    ["New york", "Marketing", "London"]
  ),
  new EachListClass(
    "Ahmed Salman",
    "New York, USA",
    "Bachelor - Cambridge University (2023 - 2023)",
    ["top_candidate", "top_candidate"],
    ["New york", "Marketing", "London"],
    true
  ),
  new EachListClass(
    "Daniel Doug",
    "Dubai, UAE",
    "Diploma - Yale University (2021 - 2024)",
    ["top_candidate", "top_candidate"],
    ["New york", "Marketing", "London"]
  ),
  new EachListClass(
    "Beatrice Solomon",
    "Totonto, Canada",
    "Bachelor - Oxford University (2023 - 2023)",
    ["top_candidate", "top_candidate"],
    ["New york", "Marketing", "London"]
  ),
  new EachListClass(
    "Yale Richard",
    "Bangladesh, India",
    "Bachelor - Havard University (2023 - 2023)",
    ["top_candidate", "top_candidate"],
    ["New york", "Marketing", "London"]
  ),
];

const Dashboard = () => {
  const [dropdownValue, setDropdownValue] = useState<string | undefined>(
    undefined
  );
  const [displayFilter, setDisplayFilter] = useState(false);
  const filterComponentVariants: Variants = {
    in: {
      x: 0,
    },
    out: {
      x: 500,
    },
  };

  return (
    <>
      <div className={css.dashboard}>
        <div className={css.header}>
          <div className={css.dropdown_container}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              value={dropdownValue as any}
              onChange={(e, value) => setDropdownValue(value?.name)}
              options={dropdownOptions}
              className={css.auto_complete}
              renderInput={(params) => (
                <TextField
                  {...params}
                  className={css.auto_complete_input}
                  placeholder="Filter here..."
                />
              )}
              renderOption={(props, option) => (
                <li {...props} className={css.each_dropdown_option}>
                  <span className={css.label}>{option.label}</span>
                  <span className={css.badge}>{option.badge}</span>
                </li>
              )}
            />
          </div>
          <div className={css.media_items}>
            {media_items.map((Icon) => (
              <li className={css.each_media_item_icon}>
                <Icon />
              </li>
            ))}
            <div className={css.btn_wrapper}>
              <span className={css.label}>
                {/* Move to video interview I */}
              </span>
              <span className={css.caret_container}>
                <i className="fa-solid fa-caret-down" />
              </span>
            </div>
          </div>
        </div>
        <div className={css.list_container}>
          <div className={css.list_component}>
            <div className={css.list_component_header}>
              <div className={css.list_component_row}>
                <div className={css.left}>
                  <Checkbox />
                  <span>247 Candidates</span>
                </div>
                <div className={css.right}>
                  <span className={`${css.each_col} ${css.active}`}>
                    <span>Qualified</span>
                  </span>
                  <span className={css.each_col}>
                    <span>Task</span>
                    <span className={css.badge}>25</span>
                  </span>
                  <span className={css.each_col}>
                    <span>Disqualified</span>
                    <span className={css.badge}>78</span>
                  </span>
                </div>
              </div>
            </div>
            <div className={css.list_component_body}>
              {list_items.map((item, i) => (
                <>
                  <li className={css.list_component_row} key={i}>
                    <div className={css.left}>
                      <Checkbox />
                      <div className={css.initials}>
                        <span>AS</span>
                      </div>
                      <div className={css.details}>
                        <span className={css.name}>{item.name}</span>
                        <span className={css.location}>{item.state}</span>
                        <span className={css.education}>{item.education}</span>
                        <div className={css.hash_tag_container}>
                          {item.hashTags.map((hashTag) => (
                            <span key={hashTag}>#{hashTag}</span>
                          ))}
                        </div>
                        <div className={css.tag_container}>
                          {item.tags.map((tag) => (
                            <span>{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className={css.right}>
                      {item.displayRightTags && (
                        <>
                          <span className={css.badge}>
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0.75 6C0.75 8.8995 3.1005 11.25 6 11.25C8.8995 11.25 11.25 8.8995 11.25 6C11.25 3.1005 8.8995 0.75 6 0.75C3.1005 0.75 0.75 3.1005 0.75 6Z"
                                stroke="#1d4ed8"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>

                            <span>4</span>
                          </span>
                          <span className={css.badge}>
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.21799 2.09204L1.66349 2.31904L1.21799 2.09204ZM2.0918 1.21799L2.31879 1.66349L2.0918 1.21799ZM2.0918 16.782L2.31879 16.3365L2.0918 16.782ZM1.21799 15.908L0.772484 16.135H0.772484L1.21799 15.908ZM16.7822 15.908L16.3367 15.681L16.7822 15.908ZM15.9078 16.782L15.6808 16.3365L15.9078 16.782ZM16.7822 2.09204L16.3367 2.31904L16.7822 2.09204ZM15.9078 1.21799L16.1348 0.772484L15.9078 1.21799ZM9 7.5C8.72386 7.5 8.5 7.72386 8.5 8C8.5 8.27614 8.72386 8.5 9 8.5V7.5ZM13 8.5C13.2761 8.5 13.5 8.27614 13.5 8C13.5 7.72386 13.2761 7.5 13 7.5V8.5ZM9 4.5C8.72386 4.5 8.5 4.72386 8.5 5C8.5 5.27614 8.72386 5.5 9 5.5V4.5ZM13 5.5C13.2761 5.5 13.5 5.27614 13.5 5C13.5 4.72386 13.2761 4.5 13 4.5V5.5ZM4.5 17C4.5 17.2761 4.72386 17.5 5 17.5C5.27614 17.5 5.5 17.2761 5.5 17H4.5ZM5.5 1C5.5 0.723858 5.27614 0.5 5 0.5C4.72386 0.5 4.5 0.723858 4.5 1L5.5 1ZM16.5 4.20001V13.8H17.5V4.20001H16.5ZM13.8002 16.5H4.2002V17.5H13.8002V16.5ZM1.5 13.8V4.20001H0.5V13.8H1.5ZM4.2002 1.5H13.8002V0.5H4.2002V1.5ZM1.5 4.20001C1.5 3.63171 1.50039 3.23556 1.52559 2.92714C1.55031 2.62456 1.5964 2.45071 1.66349 2.31904L0.772484 1.86505C0.62159 2.16119 0.558684 2.48128 0.528909 2.8457C0.499611 3.20429 0.5 3.64821 0.5 4.20001H1.5ZM4.2002 0.5C3.64839 0.5 3.20437 0.499611 2.84569 0.528908C2.4812 0.558678 2.16098 0.621575 1.8648 0.772484L2.31879 1.66349C2.45044 1.59641 2.62436 1.55032 2.92709 1.52559C3.23563 1.50039 3.6319 1.5 4.2002 1.5V0.5ZM1.66349 2.31904C1.80737 2.03666 2.03668 1.80723 2.31879 1.66349L1.8648 0.772484C1.39427 1.01223 1.0121 1.39477 0.772484 1.86505L1.66349 2.31904ZM4.2002 16.5C3.6319 16.5 3.23563 16.4996 2.92711 16.4744C2.62438 16.4497 2.45045 16.4036 2.31879 16.3365L1.8648 17.2275C2.16097 17.3784 2.48118 17.4413 2.84568 17.4711C3.20436 17.5004 3.64838 17.5 4.2002 17.5V16.5ZM0.5 13.8C0.5 14.3518 0.499611 14.7957 0.528909 15.1543C0.558684 15.5187 0.621591 15.8388 0.772484 16.135L1.66349 15.681C1.5964 15.5493 1.55031 15.3755 1.52559 15.0729C1.50039 14.7645 1.5 14.3683 1.5 13.8H0.5ZM2.31879 16.3365C2.03666 16.1927 1.80736 15.9633 1.66349 15.681L0.772484 16.135C1.01211 16.6053 1.39429 16.9877 1.8648 17.2275L2.31879 16.3365ZM16.5 13.8C16.5 14.3684 16.4997 14.7645 16.4745 15.073C16.4498 15.3756 16.4038 15.5493 16.3367 15.681L17.2277 16.135C17.3787 15.8388 17.4415 15.5186 17.4712 15.1542C17.5004 14.7957 17.5 14.3518 17.5 13.8H16.5ZM13.8002 17.5C14.352 17.5 14.7958 17.5004 15.1543 17.4711C15.5187 17.4413 15.8387 17.3784 16.1348 17.2275L15.6808 16.3365C15.5491 16.4036 15.3753 16.4497 15.0729 16.4744C14.7645 16.4996 14.3685 16.5 13.8002 16.5V17.5ZM16.3367 15.681C16.193 15.963 15.9633 16.1926 15.6808 16.3365L16.1348 17.2275C16.605 16.9879 16.9879 16.6056 17.2277 16.135L16.3367 15.681ZM17.5 4.20001C17.5 3.64826 17.5004 3.20434 17.4712 2.84578C17.4415 2.48139 17.3787 2.16125 17.2277 1.86505L16.3367 2.31904C16.4038 2.45066 16.4498 2.62445 16.4745 2.92706C16.4997 3.23551 16.5 3.63166 16.5 4.20001H17.5ZM13.8002 1.5C14.3685 1.5 14.7646 1.50039 15.0729 1.52559C15.3753 1.55031 15.5491 1.59638 15.6808 1.66349L16.1348 0.772484C15.8387 0.621604 15.5187 0.558688 15.1543 0.52891C14.7958 0.499611 14.352 0.5 13.8002 0.5V1.5ZM17.2277 1.86505C16.9879 1.39444 16.605 1.01206 16.1348 0.772484L15.6808 1.66349C15.9632 1.8074 16.193 2.037 16.3367 2.31904L17.2277 1.86505ZM9 8.5H13V7.5H9V8.5ZM9 5.5H13V4.5H9V5.5ZM5.5 17L5.5 1L4.5 1L4.5 17H5.5Z"
                                fill="#0B0B0B"
                                stroke="#1d4ed8"
                              />
                            </svg>

                            <span>5 Programs</span>
                          </span>
                        </>
                      )}
                    </div>
                  </li>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {displayFilter && (
          <motion.div
            variants={filterComponentVariants}
            initial="out"
            animate="in"
            exit="out"
            transition={{
              mass: 0,
            }}
            className={css.filter_container}
          >
            <FilterComponent />
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={css.toogle_filter}
        onClick={() => setDisplayFilter((prev) => !prev)}
      >
        <i className="fa-solid fa-filter"></i>
      </div>
    </>
  );
};

export default Dashboard;
