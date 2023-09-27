import React, { useState } from "react";
import css from "./styles/App.module.scss";
import SideMenu from "./components/SideMenu";
import Dashboard from "./components/Dashboard";
import FilterComponent from "./components/FilterComponent";
import { Variants, motion, AnimatePresence } from "framer-motion";

function App() {
  const [displayMenu, setDisplayMenu] = useState(false);
  const menuVariants: Variants = {
    in: {
      x: 0,
    },
    out: {
      x: -500,
    },
  };

  return (
    <>
      <div className={css.app}>
        <div className={css.side_menu_container}>
          <SideMenu />
        </div>
        <div className={css.filter_container}>
          <FilterComponent />
        </div>
        <div className={css.dashboard_container}>
          <Dashboard />
        </div>
      </div>
      <AnimatePresence>
        {displayMenu && (
          <motion.div
            variants={menuVariants}
            initial="out"
            animate="in"
            exit="out"
            transition={{
              mass: 0,
            }}
            className={css.menu_container}
          >
            <SideMenu />
          </motion.div>
        )}
      </AnimatePresence>
      <div
        className={css.toogle_menu}
        onClick={() => setDisplayMenu((prev) => !prev)}
      >
        <i className="fa-solid fa-bars-staggered"></i>
      </div>
    </>
  );
}

export default App;
