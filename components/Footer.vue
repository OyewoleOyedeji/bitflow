<template>
  <section id="footer" class="footer5 cid-sLln5ZHt9S" once="footers">
    <div class="container">
      <div class="media-container-row">
        <div class="col-md-2 col-6">
          <div class="media-wrap">
            <nuxt-link to="/">
              <a>
                <img src="~/assets/images/bitflow.png" alt="Template logo">
              </a>
            </nuxt-link>
          </div>
        </div>
        <div class="col-10 col-6">
          <p class="mbr-text align-right links mbr-fonts-style display-7">
            <a class="text-black" href="/#switch-header-1">Mission</a> &nbsp;&nbsp;&nbsp;&nbsp;
            <nuxt-link to="/works">
              <a class="text-black">Works</a> &nbsp;&nbsp;&nbsp;&nbsp;
            </nuxt-link>
            <a class="text-black" href="/#our-team">Team</a>
          </p>
        </div>
      </div>
      <div class="footer-lower">
        <div class="media-container-row">
          <div class="col-md-12">
            <hr>
          </div>
        </div>
        <div class="media-container-row">
          <div class="col-md-6 copyright">
            <p class="mbr-text mbr-fonts-style display-7">
              © Copyright {{ currentYear }} {{ templateAuthor }} - All Rights Reserved. Made using Mobirise
            </p>
          </div>
          <div class="col-md-6">
            <div class="social-list align-right">
              <div class="soc-item">
                <a href="https://github.com/Website-Mania/bitflow" title="Download this template!">
                  <span class="mbr-iconfont mbr-iconfont-social ti-import" />
                </a>
              </div>
              <div class="soc-item">
                <a href="#" title="Share this template with others!">
                  <span class="mbr-iconfont mbr-iconfont-social ti-share" />
                </a>
              </div>
              <div class="soc-item">
                <a href="https://dev.to" target="_blank" title="Visit the author's blog!">
                  <span class="mbr-iconfont mbr-iconfont-social fab fa-fw fa-dev" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      currentYear: new Date().getFullYear(),
      templateAuthor: 'Oyewole Oyedeji'
    }
  }
}
</script>
