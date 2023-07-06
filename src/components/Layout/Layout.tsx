import React, { ReactNode } from "react";
import Sidebar from "../header/Sidebar";
import "./layout.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="Layout">
      <div className="container-fluid">
        <div className="row">
          <div className="left_nav col-lg-3 col-md-4 d-none d-md-flex bg-dark" style={{minHeight: '100vh'}}>
            <Sidebar />
          </div>
          <div className="col-lg-9 col-md-8 ">
            <div className="px-4 children">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
