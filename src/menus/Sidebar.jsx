import { BrowserRouter, Link } from "react-router";
const Sidebar = () => {
  return (
    <BrowserRouter>
	{/* Sidebar */}
<div className="sidebar" id="sidebar">
  {/* Logo */}
  <div className="sidebar-logo active">
    <a href="/" className="logo logo-normal">
      <img src="/src/assets/img/logo.png" alt="Img" />
    </a>
    <a href="/" className="logo logo-white">
      <img src="/src/assets/img/logo.png" alt="Img" />
    </a>
    <a href="/" className="logo-small">
      <img src="/src/assets/img/logo-small.png" alt="Img" />
    </a>
    <a id="toggle_btn" href="javascript:void(0);">
      <i data-feather="chevrons-left" className="feather-16" />
    </a>
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
        <li className="nav-item"><a className="nav-link active border-0" href="#">Menu</a></li>
        <li className="nav-item"><a className="nav-link border-0" href="chat.html">Chats</a></li>
        <li className="nav-item"><a className="nav-link border-0" href="email.html">Inbox</a></li>
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
        <a href="/" className="btn btn-sm btn-icon bg-light">
          <i className="ti ti-layout-grid-remove" />
        </a>
      </div>
      <div>
        <a href="chat.html" className="btn btn-sm btn-icon bg-light">
          <i className="ti ti-brand-hipchat" />
        </a>
      </div>
      <div>
        <a href="email.html" className="btn btn-sm btn-icon bg-light position-relative">
          <i className="ti ti-message" />
        </a>
      </div>
      <div className="notification-item">
        <a href="activities.html" className="btn btn-sm btn-icon bg-light position-relative">
          <i className="ti ti-bell" />
          <span className="notification-status-dot" />
        </a>
      </div>
      <div className="me-0">
        <a href="general-settings.html" className="btn btn-sm btn-icon bg-light">
          <i className="ti ti-settings" />
        </a>
      </div>
    </div>
        </div>
        
  <div className="sidebar-inner slimscroll">
    <div id="sidebar-menu" className="sidebar-menu">
      <ul>
        <li className="submenu-open">
          <h6 className="submenu-hdr">Main</h6>
          <ul>
            <li className="active"><a href="/"><i className="ti ti-layout-grid fs-16 me-2" /><span>ANK Dashboard</span></a></li>
          </ul>
        </li>
        <li className="submenu-open">
          <h6 className="submenu-hdr">Inventory</h6>
          <ul>
            <li><a href="productList"><i data-feather="box" /><span>Products</span></a></li>           
          </ul>
              </li>
       
      </ul>
    </div>
        </div>
        
</div>
{/* /Sidebar */}

    </BrowserRouter>
  )
}

export default Sidebar