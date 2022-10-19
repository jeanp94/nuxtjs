<template>
    <div>
      <Headersite />
      <Titlesite />
      <Contentsite />
      <Footersite />
    </div>
</template>

<style scoped>
@font-face {
    font-family: 'Forma DJR Cyrillic Display';
    src: url('FormaDJRCyrillicDisplay-Regular.woff2') format('woff2'),
        url('FormaDJRCyrillicDisplay-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'Forma DJR Display';
    src: url('FormaDJRDisplay-Regular.woff2') format('woff2'),
        url('FormaDJRDisplay-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
*,html{
    font-family: 'Forma DJR Cyrillic Display';
    font-size: 16px;
}
h1{
    font-family: 'Forma DJR Display';
    font-size: 5em !important;
}
.footer{
    font-family: 'Forma DJR Display';
}
h2{
    font-size: 22px !important;
    font-weight: 500 !important;
}
.background__color{
    background: #40defa;
}
.background__secundary{
    background:#6fe8fb;
}
.background__terc{
    background:#96eefc;
    height: 100%;
}
.background__footer{
    background:#c0f5fd;
}
.square{
    list-style: square;
}

li.py-2.ss{
    position: relative;
    font-size: 18px;
    color: black;
    font-weight: 400;
}
.flex.flex-column {
    overflow: hidden;
}
li.py-2.ss::before {
    content: '';
    width: 5000px;
    height: 2px;
    background: #387b88;
    position: absolute;
    bottom: 0;
    right: -108px;
}
ul#data {
    overflow-y: scroll;
    overflow-x: hidden;
    height: calc(100% - 60px);
}
ul#data::-webkit-scrollbar-track {
    border: 1px solid #000;
    padding: 2px 0;
  }
  
  ul#data::-webkit-scrollbar {
    width: 15px;
    background:rgb(171, 185, 178);
  }
  
  ul#data::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    border: 1px solid #000;
  }
  .h-50{
    height: 80vh;
  }
@media screen and (max-width:1276px) {
    h1{
        font-size: 4em !important;
    }
    .mresponsible{
        margin: 0 !important;
    }
}
@media screen and (max-width:1024px) {
    h1{
        font-size: 3em !important;
    }
    h2{
        font-size: 18px !important;
    }
    li.py-2.ss{
        font-size: 16px !important;
    }
    .h-50{
        height: 70vh;
      }
}
@media screen and (max-width:980px) {
    .h-50{
        height: 50vh;
      }
}
@media screen and (max-width:768px) {
    .flex.flex-column {
        flex-direction: column;
    }
    h1{
        font-size: 2em !important;
    }
    h2{
        font-size: 14px !important;
    }
    li.py-2.ss{
        font-size: 13px !important;
    }
    .h-50{
        height: 100%;
      }
      ul#data{
        height: 500px;
      }
}

</style>

