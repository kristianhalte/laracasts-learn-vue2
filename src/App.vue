<template>
  <div id="app">
    <section class="hero is-primary is-medium">

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Laracasts
          </h1>
          <h2 class="subtitle">
            Learn Vue 2
          </h2>
        </div>
      </div>

      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot">
        <nav class="tabs">
          <div class="container">
            <ul>
              <router-link tag="li" to="/" exact>
                <a>Home</a>
              </router-link>
              <router-link tag="li" to="/about">
                <a>About</a>
              </router-link>
            </ul>
          </div>
        </nav>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

</style>
