<template>
  <header id="header">
    <a
      class="logo"
      href="index.html">Landed</a>
    <nav id="nav">
      <ul>
        <li>
          <nuxt-link
            to="/"
            active-class="current">Home</nuxt-link>
        </li>
        <li>
          <a href="#">Generic</a>
        </li>
        <li>
          <a href="#">Elements</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
#header {
  animation: none;
  background: none;
  box-shadow: none;
  height: 6rem;
  line-height: 6rem;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10001;
  padding: 0 2rem;
  left: 0;
  cursor: default;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    color: _palette(fg-bold);
    font-size: 1.5rem;
    font-weight: 500;
    height: inherit;
    line-height: inherit;
    text-decoration: none;
  }
  a {
    transition: color 0.2s ease-in-out;
    color: _palette(accent1);
  }
  #nav {
    font-size: 1rem;
    height: auto;
    line-height: 1;
    margin: 0;
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        display: inline-block;
        margin: 0.1rem;
        padding: 0.65rem 0 0.5rem 0;
        position: relative;
        text-align: center;
        .current {
          border-bottom: 3px solid _palette(accent1);
        }
        & a {
          color: _palette(fg-bold);
        }
      }
    }
  }
}
</style>
