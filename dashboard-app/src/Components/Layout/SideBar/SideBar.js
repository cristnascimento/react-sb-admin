import React from 'react';
import {Link} from 'react-router-dom';

const SideBar = (props) => {
    return (
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      {/* Sidebar */}

        {/* Sidebar - Brand */}
        <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
        </Link>

        {/* Divider */}
        <hr className="sidebar-divider my-0"/>

        {/* Nav Item - Dashboard */}
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span></Link>
        </li>

        {/* Divider */}
        <hr className="sidebar-divider"/>

        {/* Heading */}
        <div className="sidebar-heading">
          Interface
        </div>

        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
            <i className="fas fa-fw fa-cog"></i>
            <span>Finance</span>
          </a>
          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Finance App</h6>
              <Link className="collapse-item" to="/expenses">Expenses</Link>
              <Link className="collapse-item" to="/incomes">Incomes</Link>
            </div>
          </div>
        </li>

                {/* Nav Item - Pages Collapse Menu */}
                <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
            <i className="fas fa-fw fa-cog"></i>
            <span>Components</span>
          </a>
          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Components:</h6>
              <Link className="collapse-item" to="/buttons">Buttons</Link>
              <Link className="collapse-item" to="/cards">Cards</Link>
            </div>
          </div>
        </li>


        {/* Nav Item - Utilities Collapse Menu */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
            <i className="fas fa-fw fa-wrench"></i>
            <span>Utilities</span>
          </a>
          <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Utilities:</h6>
              <Link className="collapse-item" to="/colors">Colors</Link>
              <Link className="collapse-item" to="/borders">Borders</Link>
              <Link className="collapse-item" to="/animations">Animations</Link>
              <Link className="collapse-item" to="/other">Other</Link>
            </div>
          </div>
        </li>

        {/* Divider */}
        <hr className="sidebar-divider"/>

        {/* Heading */}
        <div className="sidebar-heading">
          Addons
        </div>

        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
            <i className="fas fa-fw fa-folder"></i>
            <span>Pages</span>
          </a>
          <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Login Screens:</h6>
              <Link className="collapse-item" to="/login">Login</Link>
              <Link className="collapse-item" to="/register">Register</Link>
              <Link className="collapse-item" to="/forgot">Forgot Password</Link>
              <div className="collapse-divider"></div>
              <h6 className="collapse-header">Other Pages:</h6>
              <Link className="collapse-item" to="/notfound">404 Page</Link>
              <Link className="collapse-item" to="/blank">Blank Page</Link>
            </div>
          </div>
        </li>

        {/* Nav Item - Charts */}
        <li className="nav-item">
          <Link className="nav-link" to="/charts">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Charts</span></Link>
        </li>

        {/* Nav Item - Tables */}
        <li className="nav-item">
          <Link className="nav-link" to="/tables">
            <i className="fas fa-fw fa-table"></i>
            <span>Tables</span></Link>
        </li>

        {/* Divider */}
        <hr className="sidebar-divider d-none d-md-block"/>

        {/* Sidebar Toggler (Sidebar) */}
        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle"></button>
        </div>

      {/* End of Sidebar */}
      </ul>
    );
}

export default SideBar;