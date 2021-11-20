<template>
  <section id="navigation-menu" class="menu menu3 cid-sLhoPz7Ycg" once="menu">
    <nav class="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
      <div class="container">
        <nuxt-link to="/">
          <div class="navbar-brand">
            <span class="navbar-logo">
              <img src="~/assets/images/bitflow.png" :alt="templateName" style="height: 3rem;">
            </span>
            <span class="navbar-caption-wrap"><a class="navbar-caption text-black text-primary display-7">{{ templateName }}</a></span>
          </div>
        </nuxt-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div class="hamburger">
            <span />
            <span />
            <span />
            <span />
          </div>
        </button>
        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <ul class="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
            <li class="nav-item">
              <nuxt-link to="/#switch-header-1">
                <a class="nav-link link text-black text-primary display-4"><span class="ti-pencil-alt mbr-iconfont mbr-iconfont-btn" />Mission</a>
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/works">
                <a class="nav-link link text-black text-primary display-4"><span class="ti-layout-tab mbr-iconfont mbr-iconfont-btn" />Works</a>
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/#our-team">
                <a class="nav-link link text-black text-primary display-4"><span class="ti-headphone-alt mbr-iconfont mbr-iconfont-btn" />Team</a>
              </nuxt-link>
            </li>
          </ul>
          <div class="icons-menu">
            <a class="iconfont-wrapper" href="https://github.com/Website-Mania/bitflow" target="_blank" title="Save this template!">
              <span class="p-2 mbr-iconfont ti-import" />
            </a>
            <a class="iconfont-wrapper" href="#" title="Toggle dark mode">
              <span class="p-2 mbr-iconfont ti-shine" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  data () {
    return {
      templateName: 'Bitflow'
    }
  }
}
</script>
