
import { NavLink } from "react-router";
const Sidebar = () => {
  return (
    <>
	{/* Sidebar */}
<div className="sidebar" id="sidebar">
  {/* Logo */}
  <div className="sidebar-logo active">
    <NavLink to="/" className="logo logo-normal">
      <img src="/src/assets/img/logo.png" alt="Img" />
    </NavLink>
    <NavLink to="/" className="logo logo-white">
      <img src="/src/assets/img/logo.png" alt="Img" />
    </NavLink>
    <NavLink to="/" className="logo-small">
      <img src="/src/assets/img/logo-small.png" alt="Img" />
    </NavLink>
    <NavLink to="toggle_btn" href="javascript:void(0);">
      <i data-feather="chevrons-left" className="feather-16" />
    </NavLink>
  </div>
  {/* /Logo */}
  <div className="modern-profile p-3 pb-0">
    <div className="text-center rounded bg-light p-3 mb-4 user-profile">
      <div className="avatar avatar-lg online mb-3">
        <img src="/src/assets/img/customer/ayaz.jpg" alt="Img" className="img-fluid rounded-circle" />
      </div>
      <h6 className="fs-14 fw-bold mb-1">Ayaz Khan</h6>
      <p className="fs-12 mb-0">System Admin</p>
    </div>
    <div className="sidebar-nav mb-3">
      <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified bg-transparent" role="tablist">
        <li className="nav-item"><NavLink className="nav-link active border-0" to="#">Menu</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link border-0" to="#">Chats</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link border-0" href="#">Inbox</NavLink></li>
      </ul>
    </div>
  </div>
  <div className="sidebar-header p-3 pb-0 pt-2">
    <div className="text-center rounded bg-light p-2 mb-4 sidebar-profile d-flex align-items-center">
      <div className="avatar avatar-md onlin">
        <img src="/src/assets/img/customer/ayaz.png" alt="Img" className="img-fluid rounded-circle" />
      </div>
      <div className="text-start sidebar-profile-info ms-2">
        <h6 className="fs-14 fw-bold mb-1">Ayaz khan</h6>
        <p className="fs-12">System Admin</p>
      </div>
    </div>
    <div className="d-flex align-items-center justify-content-between menu-item mb-3">
      <div>
        <NavLink to="/" className="btn btn-sm btn-icon bg-light">
          <i className="ti ti-layout-grid-remove" />
        </NavLink>
      </div>
      <div>
        <NavLink to="chat.html" className="btn btn-sm btn-icon bg-light">
          <i className="ti ti-brand-hipchat" />
        </NavLink>
      </div>
      <div>
        <NavLink to="email.html" className="btn btn-sm btn-icon bg-light position-relative">
          <i className="ti ti-message" />
        </NavLink>
      </div>
      <div className="notification-item">
        <NavLink to="activities.html" className="btn btn-sm btn-icon bg-light position-relative">
          <i className="ti ti-bell" />
          <span className="notification-status-dot" />
        </NavLink>
      </div>
      <div className="me-0">
        <NavLink to="general-settings.html" className="btn btn-sm btn-icon bg-light">
          <i className="ti ti-settings" />
        </NavLink>
      </div>
    </div>
        </div>
        
  <div className="sidebar-inner slimscroll">
    <div id="sidebar-menu" className="sidebar-menu">
      <ul>
        <li className="submenu-open">
          <h6 className="submenu-hdr">Main</h6>
          <ul>
            <li className="active"><NavLink to="/"><i className="ti ti-layout-grid fs-16 me-2" /><span>ANK Dashboard</span></NavLink></li>
          </ul>
        </li>
        <li className="submenu-open">
          <h6 className="submenu-hdr">Inventory</h6>
          <ul>
                  <li><NavLink to="/productList"><i data-feather="box" /><span>Products</span></NavLink></li>  
            <li><NavLink to="/addProduct"><i class="ti ti-table-plus fs-16 me-2"></i><span>Create Product</span></NavLink></li>      
          </ul>
              </li>
       
      </ul>
    </div>
        </div>
        
</div>
{/* /Sidebar */}

    </>
  )
}

export default Sidebar