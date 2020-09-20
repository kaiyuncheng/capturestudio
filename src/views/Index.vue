<template>
  <div class="index">
    <loading :active.sync="isLoading"></loading>

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
            <img class="d-block w-100" src="https://images.unsplash.com/photo-1547948577-438c80482068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" />
          </div>
          <div class="carousel-txt">
            <h3>We capture your best moments.<span>- Capture Studio</span></h3>
            <a herf="#" class="button">
              LEARN MORE
            </a>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://images.unsplash.com/photo-1492176861288-6b481cfad893?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />
          <div class="carousel-txt">
            <h3>We record your memories of lifetime.
              <span>- Capture Studio</span>
            </h3>
            <a herf="#" class="button">
              LEARN MORE
            </a>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" />
          <div class="carousel-txt">
            <h3>We record your memories of lifetime.
              <span>- Capture Studio</span>
            </h3>
            <a herf="#" class="button">
              LEARN MORE
            </a>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://images.unsplash.com/photo-1551966775-a4ddc8df052b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" />
          <div class="carousel-txt">
            <h3>We capture your best moments.
              <span>- Capture Studio</span>
            </h3>
            <a herf="#" class="button">
              LEARN MORE
            </a>
          </div>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="Third slide" />
          <div class="carousel-txt">
            <h3>We capture your best memories with your love ones.
              <span>- Capture Studio</span>
            </h3>
            <a herf="#" class="button">
              LEARN MORE
            </a>
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
            <a herf="#" class="button">
              MORE ABOUT US
            </a>
          </div>
          <div class="col-12 col-md-6">
            <div class="img">
              <!-- <img src="https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80" alt=""> -->
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
            <!-- <p>
              We provide the best services and quality of photos.
            </p> -->
          </div>
        </div>
      </div>
    </div>

    <div class="section services">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-md-6">
            <a href="#" class="img">
              <img src="https://images.unsplash.com/photo-1597685046918-cb86c4d730d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="">
              <div class="category">
                <span>LEARN MORE</span>
                <span>WEDDING <i class="fas fa-angle-right"></i></span>
              </div>
            </a>
          </div>
          <div class="col-12 col-md-6">
            <a href="#" class="img">
              <img src="https://images.unsplash.com/photo-1561525140-c2a4cc68e4bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="">
              <div class="category">
                <span>LEARN MORE</span>
                <span>FAMILY <i class="fas fa-angle-right"></i></span>
              </div>
            </a>
          </div>
          <div class="col-12 col-md-6">
            <a href="#" class="img">
              <img src="https://images.unsplash.com/photo-1524492188898-7e0f39d0ec03?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="">
              <div class="category">
                <span>LEARN MORE</span>
                <span>CHILDREN <i class="fas fa-angle-right"></i></span>
              </div>
            </a>
          </div>
          <div class="col-12 col-md-6">
            <a href="#" class="img">
              <img src="https://images.unsplash.com/photo-1550791753-b14198adc434?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="">
              <div class="category">
                <span>LEARN MORE</span>
                <span>MATERNITY<i class="fas fa-angle-right"></i></span>
              </div>
            </a>
          </div>
          <div class="col-12 col-md-6">
            <a href="#" class="img">
              <img src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="">
              <div class="category">
                <span>LEARN MORE</span>
                <span>EVENT<i class="fas fa-angle-right"></i></span>
              </div>
            </a>
          </div>
          <div class="col-12 col-md-6">
            <a href="#" class="img">
              <img src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="">
              <div class="category">
                <span>LEARN MORE</span>
                <span>COMMERCIAL<i class="fas fa-angle-right"></i></span>
              </div>
            </a>
          </div>
          <div class="col-12 col-md-6">
            <a href="#" class="img">
              <img src="https://images.unsplash.com/photo-1470072508653-1be229b63562?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="">
              <div class="category">
                <span>LEARN MORE</span>
                <span>PORTRAIT<i class="fas fa-angle-right"></i></span>
              </div>
            </a>
          </div>
          <div class="col-12 col-md-6">
            <a href="#" class="img">
              <img src="https://images.unsplash.com/photo-1572200426105-138b932bba64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="">
              <div class="category">
                <span>LEARN MORE</span>
                <span>PET<i class="fas fa-angle-right"></i></span>
              </div>
            </a>
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
          <a herf="#" class="row comment">
            <div class="comment__img col-10 col-md-3">
              <img src="https://images.unsplash.com/photo-1541250848049-b4f7141dca3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" alt="">
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
          </a>
        </div>
        <div class="carousel-item">
          <a herf="#" class="row comment">
            <div class="comment__img col-10 col-md-3">
              <img src="https://images.unsplash.com/photo-1588979355313-6711a095465f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=642&q=80" alt="">
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
          </a>
        </div>
        <div class="carousel-item">
          <a herf="#" class="row comment">
            <div class="comment__img col-10 col-md-3">
              <img src="https://images.unsplash.com/photo-1542037179399-bbf09c7f9888?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" alt="">
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
          </a>
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
              <img src="https://images.unsplash.com/photo-1559852349-c9347670ff66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=784&q=80" alt="">
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
              <img src="https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="">
            </div>
          </div>
          <div class="team__member col-md-6 col-lg-3 col-12">
            <div class="team__img">
              <img src="https://images.unsplash.com/photo-1591201565097-554dd2a0b815?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" alt="">
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
              <img src="https://images.unsplash.com/photo-1561756639-e3ba20b38a5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" alt="">
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
              <button class="submit" type="submit"><i class="fas fa-paper-plane"></i></button>
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
};
</script>
