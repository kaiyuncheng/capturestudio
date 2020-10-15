<template>
  <div class="index">
    <loading :active.sync="isLoading">
      <div class="loadingio-spinner-blocks-qb5ljn1p9ul">
        <div class="ldio-t4qo1eyy1z">
          <div style="left:22px;top:22px;animation-delay:0s"></div>
          <div style="left:42px;top:22px;animation-delay:0.125s"></div>
          <div style="left:62px;top:22px;animation-delay:0.25s"></div>
          <div style="left:22px;top:42px;animation-delay:0.875s"></div>
          <div style="left:62px;top:42px;animation-delay:0.375s"></div>
          <div style="left:22px;top:62px;animation-delay:0.75s"></div>
          <div style="left:42px;top:62px;animation-delay:0.625s"></div>
          <div style="left:62px;top:62px;animation-delay:0.5s"></div>
        </div>
      </div>
    </loading>

    <!-- CAROUSEL SLIDESHOW -->
    <div id="carouselExampleIndicators" class="carousel slide carousel__index" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="carousel-img">
            <img class="d-block w-100" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/lp3NYVSbVTj0y9PQNoEzw9HUVLvoRHYCR4rhG54P0oWJiwOXCLzTyp5Tn7nDdUdFmSH23UyhFv8IFr83UBMHZyFmq3T2Xu6lBU0k5qHld1YUXi02JQMzKEpJKC2oN9ZG.jpeg" alt="Capture your best moments" />
          </div>
          <div class="carousel-txt">
            <h3>We capture your best moments.<span>- Capture Studio</span></h3>
            <router-link to="/services" class="button">
              LEARN MORE
            </router-link>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/eaWOrVO9xNyMP5FH9bbNKoX3XJk95KTfD7bwNidlzuWnjojpYAnyhTUJGbZk9lwzOYSDS0cWy6IPXWzuuVRbFe9lBIRVEqtr4y5ETawnlWx1iQweGXclIDGbSYlHB20D.jpeg" alt="Capture your best moments" />
          <div class="carousel-txt">
            <h3>We record your memories of lifetime.
              <span>- Capture Studio</span>
            </h3>
            <router-link to="/services" class="button">
              LEARN MORE
            </router-link>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/nu6nScP4O3o0Avd5y9LOxJwdZfjaaAjOuqXKM3kyJkSMf4wmkpdJfQrYYz4b5Os20f3Rk6WV7kioOqz2BHVyXouHpikoItmdyf21lNA2V7vULsooDfVWPVl5SztsI9Ai.jpeg" alt="Capture your best moments" />
          <div class="carousel-txt">
            <h3>We record your memories of lifetime.
              <span>- Capture Studio</span>
            </h3>
            <router-link to="/services" class="button">
              LEARN MORE
            </router-link>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/Ep8Csi5NkNUAC6vJVvpzXiBFGmqcwI0F6wvh7LXw8YvoTDvtBAc4FFD70vKH4d9nRdM28L7KEWDBkuNmdaFWuXrd1zOjoiA5HYxY09FXgrCeFptNTjEvFwMd2O7obJts.jpeg" alt="Capture your best moments" />
          <div class="carousel-txt">
            <h3>We capture your best moments.
              <span>- Capture Studio</span>
            </h3>
            <router-link to="/services" class="button">
              LEARN MORE
            </router-link>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/QpiUy4ecjEcVrm3wp88342E1tXM13j1uLyDp2A8CUqEyPWbHK1drRQ87VPt7GrTI5xlWenUizBMtdzFfSKBtWIzUBdr0Dph1v2RMWSSzvPb0dMhc25dIPs0DZT3lQ02i.jpeg" alt="Capture your best moments" />
          <div class="carousel-txt">
            <h3>We capture your best memories with your love ones.
              <span>- Capture Studio</span>
            </h3>
            <router-link to="/services" class="button">
              LEARN MORE
            </router-link>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <div class="prev"><i class="fas fa-chevron-left"></i></div>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <div class="next"><i class="fas fa-chevron-right"></i></div>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <div class="section about">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <span>- Meet Capture Studio</span>
            <h3>
              BUILT TO SEE, CATCH, AND CAPTURE THROUGH LIFE WITH YOU.
            </h3>
            <p>
              Our Photography is not just another beatiful picture.
              Your life is a personal story that we are there to document.
            </p>
            <router-link to="/about" class="button">
              MORE ABOUT US
            </router-link>
          </div>
          <div class="col-12 col-md-6">
            <div class="img">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section intro">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <span>- Services We Provide</span>
            <h3>
              HERE, YOU ARE THE CENTER OF ATTENTION FOREVER.
            </h3>
          </div>
        </div>
      </div>
    </div>

    <div class="section services">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="img" @click="goTo('Wedding')">
              <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/QOHbxTWgDcLHfjsrj2CvCdgCRTl0udTnOuIRkOhsjmzRXBoAqTl5kzdtVAG3rGI3rKQGcgIprb6jae2aCzj0UUnKiDXirDBX9N5nXrFcBcbulGT6t4jFt231WPz4FTBT.jpeg" alt="WEDDING">
              <div class="category">
                <span>LEARN MORE</span>
                <span>WEDDING <i class="fas fa-angle-right"></i></span>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="img" @click="goTo('Family')">
              <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/ChA9UIhXpSbkat9GYU8K52cUIZjWOjuKKJRsJxOa46Px9Wzu0K3FiBDfgmyv8f9dzXoCYw4DeU4AmmX9nf6ObcCsRk3Y0dtIvI2iydnv2T0RgCIuj24lXAZJU5PEUJcq.jpeg" alt="FAMILY">
              <div class="category">
                <span>LEARN MORE</span>
                <span>FAMILY <i class="fas fa-angle-right"></i></span>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="img" @click="goTo('Children')">
              <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/F7AvFxxlWWrO7fTZ8Vx8617Ae3hEoXAwSzgJWPKzwxsquZQrRGp8aDIlO3VisckWaLjaNBR4OBPrmWe6LoMN0VfJspSMYsgUVpWM8tM3km48jhvJD9AS4osxNYoxLy6h.jpeg" alt="CHILDREN">
              <div class="category">
                <span>LEARN MORE</span>
                <span>CHILDREN <i class="fas fa-angle-right"></i></span>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="img" @click="goTo('Maternity')">
              <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/H77c7XHN17lQoelAXGzq2AkHa2B6kKyN5WcXejBmQLq9WyejAiDcuaRcQnwzwvG6hInWyRV1Dsg3FhEe0wpFytEwNg6he0HDxwuNmjGY0gkMSILHZyuGdpEd1a5SD6Rb.jpeg" alt="MATERNITY">
              <div class="category">
                <span>LEARN MORE</span>
                <span>MATERNITY<i class="fas fa-angle-right"></i></span>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="img" @click="goTo('Event')">
              <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/QZ0HBX101ZY0DNx7CG0c31QnybtsPRUC7q2oQUx7MY9uBIQm7ZoLTCMCPAafi24C13Wc4ZxUXfqNAuss6sj5tQsrZ7WGYGTGuOoM83c47nYMPMepTAoN54n8Th77dgAm.jpeg" alt="EVENT">
              <div class="category">
                <span>LEARN MORE</span>
                <span>EVENT<i class="fas fa-angle-right"></i></span>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="img" @click="goTo('Commercial')">
              <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/abm8dc6kK1dak7QVKqctRSJeR7IYqz1UCksFnZ8Xvd9zsYHki9fmN7P4koYdecT8xu8S7u9U5sgpAewpu4D0yf6JeLNUTHDHFclz53hW2srkkN70ohSLYFafI9FB6hUe.jpeg" alt="COMMERCIAL">
              <div class="category">
                <span>LEARN MORE</span>
                <span>COMMERCIAL<i class="fas fa-angle-right"></i></span>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="img" @click="goTo('Portrait')">
              <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/F09mbwysIWjVmNaczG7iXqDQBxgbLKI3epHqeKGDWObgf6rbVs7ODoi13UXPvEWCyqd5dmoK2GIzmsori0eULsq5c0glO00tGlhRin0Rzeutq8CYK3u4rq8ZPlJhBoCi.jpeg" alt="PORTRAIT">
              <div class="category">
                <span>LEARN MORE</span>
                <span>PORTRAIT<i class="fas fa-angle-right"></i></span>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="img" @click="goTo('Pet')">
              <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/VtJtqCTGpcFjNL2sTaO8GtXAHCuuqcM84slWSOoBkuymZZiCRPPSKSFVfWh2x39cYiGgQq3AP3fmYnjLM4ueXJ2cEZtXJHuexXtRhjuHMBHxiQZLfWE3D9y0zalQy0LF.jpeg" alt="PET">
              <div class="category">
                <span>LEARN MORE</span>
                <span>PET<i class="fas fa-angle-right"></i></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section philosophy">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-4 items">
            <div class="item item_brand">
              <i class="fas fa-thumbs-up"></i>
              <h4>
                Brand Quality
              </h4>
              <p>
                We are a leading full-service
                photography agency in the
                photography industry in the
                world. Consistently adhere to
                the customer-oriented, belief
                in the power of the brand and
                the choice of 50,000 people.
              </p>
            </div>
          </div>
          <div class="col-12 col-md-4 items">
              <span>- Our Philosophy</span>
              <h3>
                WHY <br>YOU SHOULD <br>CHOOSE US
              </h3>
          </div>
          <div class="col-12 col-md-4 items">
            <div class="item item_service">
              <i class="fas fa-camera-retro"></i>
              <h4>
                Service Concept
              </h4>
              <p>
                The service concept of “Capture
                Studio”
                and the supporting shooting chain are not just a one-time shooting,
                We build trust with each customer,
                focusing on the long-term, we care more   about you.
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CAROUSEL COMMETS -->
    <div id="carouselExampleIndicators2"
      class="carousel slide carousel__comments" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <router-link to="/galleries" class="row comment">
            <div class="comment__img col-10 col-md-3">
              <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/V0QWA5nDL77L09ZbCLguTdqKrOxAZfmOwGUQA0klT2axiRqHRFQlbsnuMIT6PmYpsSnAb6MK0Q6qrZ5v8L8uLxht2Uaj22ykfSonAqk9EkTx388WnzReeltjBJ6A4MW1.jpeg" alt="Amy & John">
              <span>Amy & John, London</span>
            </div>
            <div class="comment__txt col-10 col-md-7">
              <i class="fas fa-quote-left"></i>
              <h4>
                We loved every bit of our Pre-wedding shoots with Capture
                Studio. our professional photographer Kevin was the best guide for us.
              </h4>
              <i class="fas fa-quote-right"></i>
              <a herf="#" class="linkgalleries">
                <span>SEE PHOTOS</span>
                <i class="fas fa-image"></i>
              </a>
            </div>
          </router-link>
        </div>
        <div class="carousel-item">
          <router-link to="/galleries" class="row comment">
            <div class="comment__img col-10 col-md-3">
              <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/itwwSrjhsS1zERPjut61IK7c5WndQvASv3R0ejJXg315sfUGtnec4aZIxdgGi6JWtIn3sXR42mgkoKJI3X9TZwLaH1BVNHVyUHkSaCblMbD7OBcsfVIwa28LzsF7exnG.jpeg" alt="Family Jones">
              <span>Family Jones , Hawaii</span>
            </div>
            <div class="comment__txt col-10 col-md-7">
              <i class="fas fa-quote-left"></i>
              <h4>
                We did family photo shoot with him and although we had never
                done anything like this before we couldn’t feel more
                comfortable and more at ease.
              </h4>
              <i class="fas fa-quote-right"></i>
              <a herf="#" class="linkgalleries">
                <span>SEE PHOTOS</span>
                <i class="fas fa-image"></i>
              </a>
            </div>
          </router-link>
        </div>
        <div class="carousel-item">
          <router-link to="/galleries" class="row comment">
            <div class="comment__img col-10 col-md-3">
              <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/64OKAir5cOfMh6YWuFAWfajn7zRNAHU4xtIM0VYqSVe8VPgE7t0Aa03cq3LJ4RkXxRKdh3VrlU4QiwUIfVHLnvjSgjrkHb7BwoCMdN5yzK8HsohQzWUVl7bjFvBKcoqS.jpeg" alt="Mrs. Kimmel">
              <span>Mrs. Kimmel, Paris</span>
            </div>
            <div class="comment__txt col-10 col-md-7">
              <i class="fas fa-quote-left"></i>
              <h4>
                Our Children had a great time during the photoshoot.
                Anna, our photographer did her great jobs gave us the best memories.
              </h4>
              <i class="fas fa-quote-right"></i>
              <a herf="#" class="linkgalleries">
                <span>SEE PHOTOS</span>
                <i class="fas fa-image"></i>
              </a>
            </div>
          </router-link>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators2"
        role="button"
        data-slide="prev"
      >
        <div class="prev"><i class="fas fa-chevron-left"></i></div>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators2"
        role="button"
        data-slide="next"
      >
        <div class="next"><i class="fas fa-chevron-right"></i></div>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <div class="section team">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <span>- Meet Our Team</span>
            <h3>
              WE PROVIDE YOU THE MOST PROFESSIONAL PHOTOGRAPHERS
            </h3>
          </div>
          <div class="team__member col-md-6 col-lg-3 col-12">
            <div class="team__img">
              <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/PdqcPvi1XTPUP8FNj3mBhawWWBocmLpE9lPEs5D3S3hDUgCEYcSk7VZ5bDuKu7Z7vWWkujyLZBQRJWtDbTl0HicVKZ6R7jPQ1cupI4T08DIpIQG9jWuOiKDOrlCOOta1.jpeg" alt="James Cox">
            </div>
            <h4> James Cox</h4>
            <span>Founder & Photographer</span>
            <p>
              We aim to capture the essence of your best and translate it
              into images that you can hang on your living room walls.
            </p>
          </div>
          <div class="team__member col-md-6 col-lg-3 col-12">
            <p>
              Kevin is orginally from Taiwan based in New York. And he
              has worked with Capture
              Studio for 5 years. He is a professional weddings photographer.
            </p>
            <h4> Kevin Lee</h4>
            <span>Photographer</span>
            <div class="team__img">
              <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/2jrJZcqTko5WyimNMiy0nyMkj8V4OPC560xipAd8puYcZfnimIz0wEETPoECMHuPaQyd4nf7gPkXdlnBZLu6bLDgQ6HTIdXBtS8YMPtxdY3N2sB1xSXtGa5dyGR5IkEn.jpeg" alt="Kevin Lee">
            </div>
          </div>
          <div class="team__member col-md-6 col-lg-3 col-12">
            <div class="team__img">
              <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/3yEgkoNncbzK9yCd1zvWP4zevjJfdWDwR7wokomSL4Tn4TifA5ekdoedUOUhaqdDXFfxJVg8vsNpEjyl5aZ5OY6Yb6uNdUOdaVIGw2oOg69bSjlXL2O670zVtLU2GuNm.jpeg" alt="Lauren Smith">
            </div>
            <h4> Lauren Smith</h4>
            <span>Photographer</span>
            <p>
              Lauren is orginally from Amsterdam and
              has lived and worked with
              Capture Studio for the past
              20 years. With a solid background
              in business management and a
              passion for animals and family photography.
            </p>
          </div>
          <div class="team__member col-md-6 col-lg-3 col-12">
            <p>
              Johnny is passion Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, obcaecati expedita totam, ad aut aliquid fuga, optio a
              minus dignissimos deleniti assumenda.
            </p>
            <h4> Johnny Brown</h4>
            <span>Videographer</span>
            <div class="team__img">
              <img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/vqhbGVeFxm5aCCRAT7bOVzzOrKzg2brvJRzUmFqq3ozrQe0813DDg6QV17Q3SqPVls3DLiRDbszIAHAcTtpinvRATMteRst7klbX2C52r9ktiKJzJia0iJMsutDkKGIP.jpeg" alt="Johnny Brown">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section subscribe">
      <div class="subscribe__bg">
        <div class="subscribe__item">
            <h4>Sign up <br>for our newsletter.
            </h4>
            <form class="subscribe__form" action="">
              <input type="email" id="email" name="email" placeholder="Please Enter Your Email">
              <button class="button" type="submit"><i class="fas fa-paper-plane"></i></button>
            </form>
            <p>Stay in the know on news, special offers, and more.</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      filterCategory: '',
      isLoading: false,
      fullPage: true,
    };
  },
  components: {},
  created() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },

  methods: {

    goTo(item) {
      this.$router.push('/services');
      this.filterCategory = item;
    },
  },

  beforeDestroy() {
    this.$bus.$emit('category', this.filterCategory);
  },
};
</script>
