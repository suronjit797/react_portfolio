import React, { ReactNode } from "react";
import Sidebar from "../header/Sidebar";
import { AnimatePresence, motion } from "framer-motion";
import "./layout.css";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  return (
    <div className="Layout position-relative">
      <div className="container-fluid">
        <div className="row">
          <div
            className="left_nav col-lg-3 col-md-4 d-none d-md-flex bg-dark"
            style={{ minHeight: "100vh" }}
          >
            <Sidebar />
          </div>
          <div className="col-lg-9 col-md-8 pe-0">
            {/* <AnimatePresence exitBeforeEnter> */}
            <AnimatePresence mode="wait">
              <motion.div
                key={location.key}
                initial={{
                  opacity: 0,
                  position: "relative",
                  right: "100%",
                  overflowY: "hidden",
                  height: "100vh",
                }}
                animate={{
                  opacity: 1,
                  right: 0,
                  overflowY: "auto",
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="container h-100">{children}</div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
