<template>
  <div class="products">
    <Header />
    <Hero />
    <h2>Shop our latest deals.</h2>
    <ul class="overview">
      <li class="overview__item" v-for="product in stories" :key="product.full_slug">
        <nuxt-link class="overview__item-inner" :to="'/' + product.full_slug">
          <h2>{{product.content.name}}</h2>
          <img
            width="100%"
            v-if="product.content.images.length > 0"
            :src="product.content.images[0].filename | resize('300x0')"
            :alt="product.content.images[0].name"
          />
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Hero from "@/components/Hero";
export default {
  components: {
    Header,
    Hero
  },
  data() {
    return { stories: [] };
  },
  asyncData(context) {
    // Check if we are in the editing mode
    let editMode = false;

    if (
      context.query._storyblok ||
      context.isDev ||
      (typeof window !== "undefined" &&
        window.localStorage.getItem("_storyblok_draft_mode"))
    ) {
      if (typeof window !== "undefined") {
        window.localStorage.setItem("_storyblok_draft_mode", "1");
        if (window.location == window.parent.location) {
          window.localStorage.removeItem("_storyblok_draft_mode");
        }
      }
      editMode = true;
    }
    return context.app.$storyapi
      .get(`cdn/stories/`, {
        starts_with: "products/",
        version: editMode ? "draft" : "published",
        cv: context.store.state.cacheVersio
      })
      .then(res => {
        return res.data;
      })
      .catch(res => {
        if (!res.response) {
          console.error(res);
          errorCallback({
            statusCode: 404,
            message: "Failed to receive content from the api."
          });
        } else {
          console.error(res.response.data);
          errorCallback({
            statusCode: res.response.status,
            message: res.response.data
          });
        }
      });
  }
};
</script>

<style>
.products {
  padding-top: 20px;
  margin: 0 auto;
  max-width: 1200px;
}
.products h2 {
  text-align: center;
  padding: 20px;
}
.overview {
  display: flex;
  flex-direction: row;
  margin: 0px;
  padding: 0px;
  margin-top: 20px;
}
.overview__item {
  margin: 0 0.5rem;
  width: calc(100% / 3 * 1);
  list-style: none;
}

.overview__item-inner {
  padding: 60px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px 0 rgba(14, 30, 37, 0.36);
  text-decoration: none;
  color: #000;
  display: block;
}
.overview__item-inner h2 {
  padding: 20px;
}
@media screen and (max-device-width: 35rem) {
  .products {
    max-width: 900px;
  }

  .overview {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .overview__item-inner {
    padding: 20px;
    margin-bottom: 10px;
    box-shadow: 0 2px 4px 0 rgba(14, 30, 37, 0.36);
    text-decoration: none;
    color: #000;
    display: block;
  }
}
</style>