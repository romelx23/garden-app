<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import {
  Navigation,
  // Pagination,
  // Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const onSwiper = () => {
  // console.log(swiper);
};
const onSlideChange = () => {
  // console.log("slide change");
};
</script>

<template>
  <Swiper
    :onSwiper="onSwiper"
    :onSlideChange="onSlideChange"
    class="mySwiper"
    :pagination="{ clickable: true }"
    :navigation="true"
    :scrollbar="{ draggable: true }"
    :autoplay="true"
    :loop="true"
    :modules="[Navigation, A11y, Autoplay]"
  >
    <SwiperSlide>
      <img
        src="https://res.cloudinary.com/react-romel/image/upload/v1711041472/portfolio/garden-app/Banner_horizontal_sobre_restaurante_vegano_moderno_verde_y_blanco_fgboup.webp"
        class="w-full h-[400px] object-cover rounded-xl"
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        src="https://res.cloudinary.com/react-romel/image/upload/v1711041469/portfolio/garden-app/Portada_para_Facebook_D%C3%ADa_de_la_Educaci%C3%B3n_Ambiental_Ilustrado_Verde_y_Caf%C3%A9_aygbp4.webp"
        class="w-full h-[400px] object-cover rounded-xl"
      />
    </SwiperSlide>
    <SwiperSlide>
      <img
        src="https://res.cloudinary.com/react-romel/image/upload/v1711041471/portfolio/garden-app/Banner_Horizontal_Bebida_Te_Ilustrado_Llamativo_Verde_dg8ub2.webp"
        class="w-full h-[400px] object-cover rounded-xl"
      />
    </SwiperSlide>
  </Swiper>
</template>

<style scoped></style>
