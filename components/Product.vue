<template>
  <div class="product" v-editable="blok">
    <Header />
    <div class="product__images">
      <div v-if="blok.images.length > 0">
        <img
          :src="(selectedImage.filename || blok.images[0].filename) | resize('300x0')"
          :alt="selectedImage.name || blok.images[0].name"
        />
      </div>
    </div>
    <div class="product__information">
      <h1 class="product__headline">{{ blok.name }}</h1>
      <div class="product__price">$ {{ blok.price }}</div>
      <div class="product__description" v-html="$options.filters.markdown(blok.description)"></div>

      <button
        class="snipcart-add-item"
        :data-item-id="blok._uid"
        :data-item-name="blok.name"
        :data-item-price="blok.price"
        :data-item-url="$nuxt.$route.path"
      >Buy {{blok.name}}</button>
      <ul class="product__thumbs">
        <li
          class="product__thumb"
          v-for="image in blok.images"
          :key="image.filename"
          @click="selectedImage = image"
        >
          <img
            class="product__thumb-image"
            :src="image.filename | resize('55x55')"
            :alt="image.name"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  components: {
    Header
  },
  props: ["blok"],
  data() {
    return {
      selectedImage: {}
    };
  },
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400&family=Proza+Libre&display=swap"
        }
      ]
    };
  }
};
</script>

<style>
body {
  font-family: "Open Sans", sans-serif;
}
h1 {
  font-family: "Proza Libre", sans-serif;
}
.product {
  padding-top: 60px;
  margin: 0 auto;
  max-width: 800px;
  display: flex;
  flex-direction: row;
  margin-top: 4.5rem;
  justify-content: center;
  align-items: center;
}

.product__thumbs {
  margin-top: 20px;
  padding: 0;
}

.product__thumb {
  display: inline-block;
  padding-right: 10px;
  list-style: none;
  width: 55px;
  margin-right: 10px;
  padding: 5px;
  border: 1px solid #ccc;
}

.product__thumb-image {
  max-width: 100%;
}

.product__images {
  margin: 0 0.5rem;
  width: calc(100% / 3 * 2);
}

.product__information {
  margin: 0 0.5rem;
  width: calc(100% / 3 * 1);
}

.product__price {
  font-size: 30px;
  margin-top: 20px;
  margin-bottom: 25px;
}

.product__description {
  margin-bottom: 20px;
}

.product__description h2 {
  margin-top: 20px;
  margin-bottom: 10px;
}

.snipcart-add-item {
  appearance: none;
  display: inline-block;
  padding: 15px 20px;
  cursor: pointer;
  font-size: 20px;
  background: #000;
  color: #fff;
}

.alphachoice {
  color: #000;
  font-size: 80%;
  display: inline-block;
  padding-top: 5px;
}

#snipcart-footer a {
  display: none;
}
#snipcart-header {
  background: linear-gradient(-90deg, #a755c2, #6622cc);
}
/* #snip-layout-billing-address #snipcart-actions .snip-btn,
#snipcart-actions .snip-btn--highlight,
#snipcart-actions .snip-btn--right {
  background: linear-gradient(-90deg, #a755c2, #6622cc) !important;
  color: #fff;
} */
.snip-actions .snip-btn {
  background: linear-gradient(-90deg, #a755c2, #6622cc) !important;
  color: #fff;
}
@media screen and (max-device-width: 35rem) {
  .product {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
}
</style>