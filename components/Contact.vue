<template>
  <section 
    id="contact" 
    class="wrapper style2 special fade">
    <div class="container">
      <header>
        <h2>Magna faucibus lorem diam</h2>
        <p>Ante metus praesent faucibus ante integer id accumsan eleifend</p>
      </header>
      <form 
        method="post" 
        action="#" 
        class="cta">
        <div class="row gtr-uniform gtr-50">
          <div class="col-8 col-12-xsmall">
            <input 
              id="email" 
              type="email" 
              name="email" 
              placeholder="Your Email Address">
          </div>
          <div class="col-4 col-12-xsmall">
            <input 
              type="submit" 
              value="Get Started" 
              class="fit primary">
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact"
};
</script>
