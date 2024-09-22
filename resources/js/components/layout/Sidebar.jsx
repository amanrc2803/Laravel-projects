import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">

          <li className="nav-item">
            <Link className="nav-link collapsed" to="/">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </Link>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-menu-button-wide"></i><span>Components</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <Link to="/components-alerts">
                  <i className="bi bi-circle"></i><span>Alerts</span>
                </Link>
              </li>
              <li>
                <Link to="/components-accordion">
                  <i className="bi bi-circle"></i><span>Accordion</span>
                </Link>
              </li>
              <li>
                <Link to="/components-badges">
                  <i className="bi bi-circle"></i><span>Badges</span>
                </Link>
              </li>
              <li>
                <Link to="/components-breadcrumbs">
                  <i className="bi bi-circle"></i><span>Breadcrumbs</span>
                </Link>
              </li>
              <li>
                <Link to="/components-buttons">
                  <i className="bi bi-circle"></i><span>Buttons</span>
                </Link>
              </li>
              <li>
                <Link to="/components-cards">
                  <i className="bi bi-circle"></i><span>Cards</span>
                </Link>
              </li>
              <li>
                <Link to="/components-carousel">
                  <i className="bi bi-circle"></i><span>Carousel</span>
                </Link>
              </li>
              <li>
                <Link to="/components-list-group">
                  <i className="bi bi-circle"></i><span>List group</span>
                </Link>
              </li>
              <li>
                <Link to="/components-modal">
                  <i className="bi bi-circle"></i><span>Modal</span>
                </Link>
              </li>
              <li>
                <Link to="/components-tabs">
                  <i className="bi bi-circle"></i><span>Tabs</span>
                </Link>
              </li>
              <li>
                <Link to="/components-pagination">
                  <i className="bi bi-circle"></i><span>Pagination</span>
                </Link>
              </li>
              <li>
                <Link to="/components-progress">
                  <i className="bi bi-circle"></i><span>Progress</span>
                </Link>
              </li>
              <li>
                <Link to="/components-spinners">
                  <i className="bi bi-circle"></i><span>Spinners</span>
                </Link>
              </li>
              <li>
                <Link to="/components-tooltips">
                  <i className="bi bi-circle"></i><span>Tooltips</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-journal-text"></i><span>Forms</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <Link to="/forms-elements">
                  <i className="bi bi-circle"></i><span>Form Elements</span>
                </Link>
              </li>
              <li>
                <Link to="/forms-layouts">
                  <i className="bi bi-circle"></i><span>Form Layouts</span>
                </Link>
              </li>
              <li>
                <Link to="/forms-editors">
                  <i className="bi bi-circle"></i><span>Form Editors</span>
                </Link>
              </li>
              <li>
                <Link to="/forms-validation">
                  <i className="bi bi-circle"></i><span>Form Validation</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-layout-text-window-reverse"></i><span>Tables</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <Link to="/tables-general">
                  <i className="bi bi-circle"></i><span>General Tables</span>
                </Link>
              </li>
              <li>
                <Link to="/tables-data">
                  <i className="bi bi-circle"></i><span>Data Tables</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-bar-chart"></i><span>Charts</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <Link to="/charts-chartjs">
                  <i className="bi bi-circle"></i><span>Chart.js</span>
                </Link>
              </li>
              <li>
                <Link to="/charts-apexcharts">
                  <i className="bi bi-circle"></i><span>ApexCharts</span>
                </Link>
              </li>
              <li>
                <Link to="/charts-echarts">
                  <i className="bi bi-circle"></i><span>ECharts</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
              <i className="bi bi-gem"></i><span>Icons</span><i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
              <li>
                <Link to="/icons-bootstrap">
                  <i className="bi bi-circle"></i><span>Bootstrap Icons</span>
                </Link>
              </li>
              <li>
                <Link to="/icons-remix">
                  <i className="bi bi-circle"></i><span>Remix Icons</span>
                </Link>
              </li>
              <li>
                <Link to="/icons-boxicons">
                  <i className="bi bi-circle"></i><span>Boxicons</span>
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-heading">Pages</li>

          <li className="nav-item">
            <Link className="nav-link collapsed" to="/users-profile">
              <i className="bi bi-person"></i>
              <span>Profile</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link collapsed" to="/pages-faq">
              <i className="bi bi-question-circle"></i>
              <span>F.A.Q</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link collapsed" to="/pages-contact">
              <i className="bi bi-envelope"></i>
              <span>Contact</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link collapsed" to="/pages-register">
              <i className="bi bi-card-list"></i>
              <span>Register</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link collapsed" to="/pages-login">
              <i className="bi bi-box-arrow-in-right"></i>
              <span>Login</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link collapsed" to="/pages-error-404">
              <i className="bi bi-dash-circle"></i>
              <span>Error 404</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/pages-blank">
              <i className="bi bi-file-earmark"></i>
              <span>Blank</span>
            </Link>
          </li>

        </ul>
      </aside>
    </div>
  );
}

export default Sidebar;
