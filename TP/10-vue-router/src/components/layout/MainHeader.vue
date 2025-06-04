<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><i class="fa-solid fa-home me-2"></i>GameMaster</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <RouterLink activeClass="active" to="/" class="nav-link">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink activeClass="active" to="/about" class="nav-link">About</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink activeClass="active" to="/games" class="nav-link">Game list</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
