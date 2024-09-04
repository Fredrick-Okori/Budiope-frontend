import React, { useState } from 'react';
import Sidebar from './sidebar';

const NavigationBar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" style={{ boxShadow: '0 2px 4px rgba(0,0,0,.1)' }}>
                <div className="container">
                    <div className="d-flex align-items-center">
                        <button className="btn btn-link rounded-circle me-2" onClick={toggleSidebar}>
                            <i className="fs-5 bi-list"></i>
                        </button>
                        <a className="navbar-brand me-2 d-none d-lg-block" href="#">Logo</a>
                        <div className="input-group d-none d-lg-flex">
                            <input 
                                type="search" 
                                className="form-control" 
                                placeholder="Search" 
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-secondary" type="button">
                                <i className="bi bi-search"></i>
                            </button>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <button className="btn btn-link rounded-circle me-2">
                            <i className="fs-5 bi-bell"></i>
                        </button>
                        <button className="btn btn-link rounded-circle me-2">
                            <i className="fs-5 bi-envelope"></i>
                        </button>
                        <button className="btn btn-link rounded-circle d-none d-lg-block">
                            <i className="fs-5 bi-person-circle"></i>
                        </button>
                    </div>
                </div>
            </nav>
            <Sidebar isOpen={isSidebarOpen} />
        </>
    );
};

export default NavigationBar;
