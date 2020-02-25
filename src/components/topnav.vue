<template>
  <div>
    <!-- <nav class="navbar navbar-light fixed-top" id="topnav">
      <div class="container-fluid">
        <a href="/production" class="navbar-brand">
          <img src="../../public/desktop logo optimized.svg" alt />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="nav navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Dropdown link</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="topnav">
      <div class="container-fluid">
        <a href="/production" class="navbar-brand">
          <img src="../../public/desktop logo optimized.svg" alt />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item pt-3 active">
              <form action>
                  <input type="search" placeholder="search" />
                  <i class="fa fa-search"></i>
                </form>
            </li>
            <li class="nav-item pt-3">
              <a class="nav-link border-left border-right" href="#">
                <img src="../../public/mail.svg" height="16px" alt /> Messages
              </a>
            </li>

            <li class="nav-item pt-3 dropdown">
              <a
                class="nav-link dropdown-toggle border-right"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img src="../../public/shopping-cart (1).svg" height="20px" alt />
                Market Place
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item pt-3">
              <a class="nav-link border-right" href="#">
                <i class="fas fa-align-left"></i> Notifications
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <div class="profile-img"></div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {};
</script>