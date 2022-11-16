import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icon/font/bootstrap-icon.css';

function SlideBar(){
    return(
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-auto min-vh-100 bg-dark'>
                    <ul>
                        <il>
                            <a className='nav-link px-2'>
                                <i className='bi-house'/>
                                <span className='ms-1 d-none d-sm-inline'>Home</span>
                            </a>
                        </il>
                    </ul>
                </div>
            </div>


        </div>
    );
};
default export SlideBar;