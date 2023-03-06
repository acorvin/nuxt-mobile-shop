<template>
  <header class="main-header">
    <nav class="main-nav">
      <ul class="nav-links">
        <nuxt-link to="/" tag="li" class="nav-link">
          <a>Products</a>
        </nuxt-link>
        <nuxt-link to="#" tag="li" class="nav-link">
          <a class="snipcart-checkout">Checkout</a>
        </nuxt-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  height: 2.5rem;
}
.main-nav {
  height: 100%;
}
.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.nav-link {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  padding: 0.3rem;
}
.nav-link a {
  display: block;
  text-decoration: none;
  color: linear-gradient(-90deg, #a755c2, #6622cc);
}
.nav-link a:hover,
.nav-link a:active,
.nav-link.nuxt-link-exact-active a {
  color: #333;
}
</style>