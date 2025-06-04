<template>
  <div class="container">
    <h1>About</h1>
    <p>Texte à propos de ma super app...</p>
    <h2>Sous pages exemples</h2>
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <RouterLink activeClass="active" class="nav-link" to="/about/mentions"
          >Mentions légales</RouterLink
        >
      </li>
      <li class="nav-item">
        <RouterLink activeClass="active" class="nav-link" to="/about/author"
          >Auteur du site</RouterLink
        >
      </li>
    </ul>
    <div class="my-3">
      <RouterView />
    </div>
  </div>
</template>
