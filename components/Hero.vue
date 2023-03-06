<template>
  <div>
    <section class="hero">
      <div
        class="hero-body"
        :style="{ backgroundImage: 'url(' + require('@/assets/bgimg.png') + ')' }"
      >
        <div class="container">
          <div class="hero-text">
            <h1>Your Style. Your Way.</h1>
            <p>Free Shipping on all mobile orders</p>
            <button class="btn">Shop Now</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head: {
    title: "Home"
  }
};
</script>

<style>
.hero {
  padding: 20px 0;
}
.hero-body {
  height: 400px;
  width: 1200px;
  background-position: center cover;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
h1 {
  font-size: 38px;
}
p {
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
}
.btn {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 1rem;
  outline: none;
}
@media screen and (max-device-width: 35rem) {
  .hero-body {
    max-width: 900px;
  }
}
</style>