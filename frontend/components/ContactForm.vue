<template>
  <section id="fake-contact-form" class="form3 cid-sLlbcpxLAu mbr-fullscreen">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-7 col-12">
          <div class="image-wrapper">
            <img class="w-100" src="~/assets/images/contact-image.webp" alt="Woman with laptop attending to two women sitting">
          </div>
        </div>
        <div class="col-lg-3 offset-lg-1 mbr-form">
          <form action="javascript:void(0)" method="POST" class="mbr-form form-with-styler">
            <div class="row">
              <div hidden="hidden" data-form-alert-danger="" class="alert alert-danger col-12">
                Oops...! some
                problem!
              </div>
            </div>
            <div class="dragArea row">
              <div class="col-lg-12 col-md-12 col-sm-12">
                <h1 class="mbr-section-title mb-4 display-2">
                  <strong>What do you think?</strong>
                </h1>
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12">
                <p class="mbr-text mbr-fonts-style mb-4 display-7">
                  Would love to hear from you
                </p>
              </div>
              <div data-for="email" class="col-lg-12 col-md col-sm-12 form-group">
                <input
                  id="email-fake-contact-form"
                  type="text"
                  name="email"
                  placeholder="Your email"
                  data-form-field="email"
                  class="form-control"
                  value=""
                >
              </div>
              <div class="col-lg-12 col-md col-sm-12 form-group" data-for="opinion">
                <textarea
                  id="opinion-fake-contact-form"
                  type="opinion"
                  name="opinion"
                  placeholder="Your opinion"
                  data-form-field="opinion"
                  class="form-control"
                  value=""
                />
              </div>
              <div class="col-md-auto col-12 mbr-section-btn">
                <button type="submit" class="btn btn-black display-4">
                  <span class="ti-location-arrow mbr-iconfont mbr-iconfont-btn" />Send away
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="offset-lg-1" />
      </div>
    </div>
  </section>
</template>
