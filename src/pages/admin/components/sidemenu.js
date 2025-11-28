import React from 'react';
import Logo from '../../../Assest/Images/logo.png';

function Sidemenu() {
    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4 " >
                {/* Brand Logo */}
                <a href="/admin" className="brand-link text-decoration-none">
                    <img src={Logo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                    <span className="brand-text font-weight-light " >Panel de control</span>
                </a>
                {/* Sidebar */}
                <div className="sidebar overflow-auto ">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="dist/img/user1-128x128.jpg" className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <a href="/admin" className="d-block text-decoration-none">Admin</a>
                        </div>
                    </div>
                    {/* SidebarSearch Form */}
                    <div className="form-inline">
                        <div className="input-group" data-widget="sidebar-search">
                            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                            <div className="input-group-append">
                                <button className="btn btn-sidebar">
                                    <i className="fas fa-search fa-fw" />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                            <li className="nav-item ">
                                <a href="#" className="nav-link ">
                                    <i className="nav-icon fas fa-tachometer-alt" />
                                    <p>
                                        Dashboard
                                        <i className="right fas fa-angle-left" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="/admin" className="nav-link ">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Dashboard</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/" className="nav-link ">
                                            <i className="far fa-circle nav-icon" />
                                            <p>pagina Principal</p>
                                        </a>
                                    </li>

                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="/adminServicios" className="nav-link">
                                    <i className="nav-icon fas fa-th" />
                                    <p>
                                        Servicios
                                        <span className="right badge badge-danger">New</span>
                                    </p>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-building" />
                                    <p>
                                        Soluciones
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-table" />
                                    <p>
                                        Planes
                                    </p>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-edit" />
                                    <p>
                                        Testimonios
                                    </p>
                                </a>

                            </li>


                            <li className="nav-item">
                                <a href="pages/calendar.html" className="nav-link">
                                    <i className="nav-icon far fa-calendar-alt" />
                                    <p>
                                        Calendar
                                        <span className="badge badge-info right">2</span>
                                    </p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/gallery.html" className="nav-link">
                                    <i className="nav-icon far fa-image" />
                                    <p>
                                        Gallery
                                    </p>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-book" />
                                    <p>
                                        Pages
                                        <i className="fas fa-angle-left right" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href='/' className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Home</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href='/servicios'  className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Servicios</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href='/soluciones'className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Soluciones</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href='/demos'  className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Demos</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href='/planes'  className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Planes</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href='/testimonios' className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Testimonios</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href='/faq' className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>FAQ</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href='/contacto'  className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Contacto</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href='/PoliticaPagina'className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Politicas</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon far fa-plus-square" />
                                    <p>
                                        modificaciones
                                        <i className="fas fa-angle-left right" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">

                                    <li className="nav-item">
                                        <a href="pages/examples/lockscreen.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Lockscreen</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/legacy-user-menu.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Legacy User Menu</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/examples/language-menu.html" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Language Menu</p>
                                        </a>
                                    </li>

                                </ul>
                            </li>


                            <li className="nav-header">LABELS</li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon far fa-circle text-danger" />
                                    <p className="text">Important</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon far fa-circle text-warning" />
                                    <p>Warning</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon far fa-circle text-info" />
                                    <p>Informational</p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>
        </div>
    );
}

export default Sidemenu;