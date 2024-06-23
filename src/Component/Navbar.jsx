const Navbar = ({ category }) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4">Newsbar</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div
                className="nav-link active"
                onClick={() => category(business)}
                aria-current="page"
              >
                Business
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link active"
                onClick={() => category(entertainment)}
                aria-current="page"
              >
                Entertainment
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link active"
                onClick={() => category(General)}
                aria-current="page"
              >
                general
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link active"
                onClick={() => category(health)}
                aria-current="page"
              >
                Health
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link active"
                onClick={() => category(science)}
                aria-current="page"
              >
                Science
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link active"
                onClick={() => category(sports)}
                aria-current="page"
              >
                Sports
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link active"
                onClick={() => category(technology)}
                aria-current="page"
              >
                Technology
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
