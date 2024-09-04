import React, { useState, useEffect } from 'react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [submenuHeights, setSubmenuHeights] = useState({});

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const heights = {};
        document.querySelectorAll('[id^="submenu"]').forEach(el => {
            heights[el.id] = el.scrollHeight + 'px';
        });
        setSubmenuHeights(heights);
    }, []);

    const toggleSubmenu = (submenu) => {
        if (openSubmenu === submenu) {
            setOpenSubmenu(null);
        } else {
            setOpenSubmenu(submenu);
        }
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`} style={{
            transition: 'all 0.3s ease-in-out',
            transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
            opacity: isOpen ? 1 : 0,
            visibility: isOpen ? 'visible' : 'hidden'
        }}>
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light" style={{ marginTop: '56px', width: '100%' }}>
                        <div className="d-flex flex-column align-items-start px-3 pt-2 min-vh-100">
                         
                            <ul className="nav flex-column mb-sm-auto mb-0 align-items-start" id="menu" style={{ fontSize: '1.1rem' }}>
                               
                                <li className="w-100">
                                    <a href="#" onClick={() => toggleSubmenu('submenu1')} className="nav-link px-0 align-middle text-black">
                                        <i className="fs-4 bi-grid"></i> <span className="ms-1">Dashboard</span>
                                        <i className={`bi ${openSubmenu === 'submenu1' ? 'bi-chevron-up' : 'bi-chevron-down'} float-end`}></i>
                                    </a>
                                    {openSubmenu === 'submenu1' && (
                                        <ul className="nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                            <li className="w-100">
                                                <a href="#item1" className="nav-link px-0 text-black"> <span>Item 1</span> </a>
                                            </li>
                                            <li>
                                                <a href="#" className="nav-link px-0 text-black"> <span>Item 2</span> </a>
                                            </li>
                                            <li>
                                                <a href="#" className="nav-link px-0 text-black"> <span>Item 3</span> </a>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li className="w-100">
                                    <a href="#" className="nav-link px-0 align-middle text-black">
                                        <i className="fs-4 bi-house-lock"></i> <span className="ms-1">Branches</span>
                                    </a>
                                </li>
                                <li className="w-100">
                                    <a href="#" onClick={() => toggleSubmenu('submenu2')} className="nav-link px-0 align-middle text-black">
                                        <i className="fs-4 bi-wallet"></i> <span className="ms-1">Cash</span>
                                        <i className={`bi ${openSubmenu === 'submenu2' ? 'bi-chevron-up' : 'bi-chevron-down'} float-end`}></i>
                                    </a>
                                    {openSubmenu === 'submenu2' && (
                                        <ul className="nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                                            <li className="w-100">
                                                <a href="#" className="nav-link px-0 text-black"> <span>Cash Sales</span></a>
                                            </li>
                                            <li>
                                                <a href="#" className="nav-link px-0 text-black"> <span>Item 2</span></a>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li className="w-100">
                                    <a href="#" onClick={() => toggleSubmenu('submenu3')} className="nav-link px-0 align-middle text-black">
                                        <i className="fs-4 bi-truck-front"></i> <span className="ms-1">Delivery Trucks</span>
                                        <i className={`bi ${openSubmenu === 'submenu3' ? 'bi-chevron-up' : 'bi-chevron-down'} float-end`}></i>
                                    </a>
                                    {openSubmenu === 'submenu3' && (
                                        <ul className="nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                                            <li className="w-100">
                                                <a href="#" className="nav-link px-0 text-black"> <span>Product 1</span></a>
                                            </li>
                                            <li>
                                                <a href="#" className="nav-link px-0 text-black"> <span>Product 2</span></a>
                                            </li>
                                            <li>
                                                <a href="#" className="nav-link px-0 text-black"> <span>Product 3</span></a>
                                            </li>
                                            <li>
                                                <a href="#" className="nav-link px-0 text-black"> <span>Product 4</span></a>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li className="w-100">
                                    <a href="#" onClick={() => toggleSubmenu('submenu4')} className="nav-link px-0 align-middle text-black">
                                        <i className="fs-4 bi-truck"></i> <span className="ms-1">Suppliers</span>
                                        <i className={`bi ${openSubmenu === 'submenu4' ? 'bi-chevron-up' : 'bi-chevron-down'} float-end`}></i>
                                    </a>
                                    {openSubmenu === 'submenu4' && (
                                        <ul className="nav flex-column ms-1" id="submenu4" data-bs-parent="#menu">
                                            <li className="w-100">
                                                <a href="#" className="nav-link px-0 text-black"> <span>Product 1</span></a>
                                            </li>
                                            <li>
                                                <a href="#" className="nav-link px-0 text-black"> <span>Product 2</span></a>
                                            </li>
                                            <li>
                                                <a href="#" className="nav-link px-0 text-black"> <span>Product 3</span></a>
                                            </li>
                                            <li>
                                                <a href="#" className="nav-link px-0 text-black"> <span>Product 4</span></a>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li className="w-100">
                                    <a href="#" onClick={() => toggleSubmenu('submenu5')} className="nav-link px-0 align-middle text-black">
                                        <i className="fs-4 bi-box2"></i> <span className="ms-1">Inventory Manager</span>
                                        <i className={`bi ${openSubmenu === 'submenu5' ? 'bi-chevron-up' : 'bi-chevron-down'} float-end`}></i>
                                    </a>
                                    {openSubmenu === 'submenu5' && (
                                        <ul className="nav flex-column ms-1" id="submenu5" data-bs-parent="#menu">
                                            <li className="w-100">
                                                <a href="#" className="nav-link px-0 text-black"> <span>Product 1</span></a>
                                            </li>
                                            <li>
                                                <a href="#" className="nav-link px-0 text-black"> <span>Product 2</span></a>
                                            </li>
                                            <li>
                                                <a href="#" className="nav-link px-0 text-black"> <span>Product 3</span></a>
                                            </li>
                                            <li>
                                                <a href="#" className="nav-link px-0 text-black"> <span>Product 4</span></a>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li className="w-100">
                                    <a href="#" onClick={() => toggleSubmenu('submenu6')} className="nav-link px-0 align-middle text-black">
                                        <i className="fs-4 bi-bar-chart"></i> <span className="ms-1">Customers</span>
                                        <i className={`bi ${openSubmenu === 'submenu6' ? 'bi-chevron-up' : 'bi-chevron-down'} float-end`}></i>
                                    </a>
                                    {openSubmenu === 'submenu6' && (
                                        <ul className="nav flex-column ms-1" id="submenu6" data-bs-parent="#menu">
                                            <li className="w-100">
                                                <a href="#" className="nav-link px-0 text-black"> <span>Product 1</span></a>
                                            </li>
                                            <li>
                                                <a href="#" className="nav-link px-0 text-black"> <span>Product 2</span></a>
                                            </li>
                                            <li>
                                                <a href="#" className="nav-link px-0 text-black"> <span>Product 3</span></a>
                                            </li>
                                            <li>
                                                <a href="#" className="nav-link px-0 text-black"> <span>Product 4</span></a>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li className="w-100">
                                    <a href="#" onClick={() => toggleSubmenu('submenu7')} className="nav-link px-0 align-middle text-black">
                                        <i className="fs-4 bi-graph-up"></i> <span className="ms-1">Reports</span>
                                        <i className={`bi ${openSubmenu === 'submenu7' ? 'bi-chevron-up' : 'bi-chevron-down'} float-end`}></i>
                                    </a>
                                    {openSubmenu === 'submenu7' && (
                                        <ul className="nav flex-column ms-1" id="submenu7" data-bs-parent="#menu">
                                            <li className="w-100">
                                                <a href="#" className="nav-link px-0 text-black"> <span>Product 1</span></a>
                                            </li>
                                            <li>
                                                <a href="#" className="nav-link px-0 text-black"> <span>Product 2</span></a>
                                            </li>
                                            <li>
                                                <a href="#" className="nav-link px-0 text-black"> <span>Product 3</span></a>
                                            </li>
                                            <li>
                                                <a href="#" className="nav-link px-0 text-black"> <span>Product 4</span></a>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li className="w-100">
                                    <a href="#" className="nav-link px-0 align-middle text-black">
                                        <i className="fs-4 bi-houses"></i> <span className="ms-1">Add Branch</span>
                                    </a>
                                </li>
                                <li className="w-100">
                                    <a href="#" className="nav-link px-0 align-middle text-black">
                                        <i className="fs-4 bi-person-plus"></i> <span className="ms-1">Create Account</span>
                                    </a>
                                </li>
                                <li className="w-100">
                                    <a href="#" className="nav-link px-0 align-middle text-black">
                                        <i className="fs-4 bi-truck"></i> <span className="ms-1">Add Truck</span>
                                    </a>
                                </li>
                                <li className="w-100">
                                    <a href="#" className="nav-link px-0 align-middle text-black">
                                        <i className="fs-4 bi-table"></i> <span className="ms-1">Branches</span>
                                    </a>
                                </li>
                              
                            </ul>
                            <hr/>
                            <div className="dropdown pb-4">
                                <a href="#" className="d-flex align-items-center text-black text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle"/>
                                    <span className="mx-1">loser</span>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                                    <li><a className="dropdown-item" href="#">New project...</a></li>
                                    <li><a className="dropdown-item" href="#">Settings</a></li>
                                    <li><a className="dropdown-item" href="#">Profile</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col py-3" style={{ marginTop: '56px' }}>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
