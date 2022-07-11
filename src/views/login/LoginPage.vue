<script lang="ts" setup>
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import { useRouter } from "vue-router";
import { useUserStore } from "/@/store/user";
let particles = {
  background: {
    color: {
      value: "white",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: "push",
      },
      onHover: {
        enable: false,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
        speed: 3,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "random",
    },
    links: {
      color: "random",
      distance: 120,
      enable: true,
      opacity: 0.3,
      width: 1.5,
    },
    collisions: {
      enable: false,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: true,
      speed: 5,
      straight: true,
    },
    number: {
      density: {
        enable: true,
        value_area: 1000,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: true,
};

let router = useRouter();

const particlesInit = async (engine: Engine) => {
  await loadFull(engine);
};

let loginAction = function () {
  useUserStore().login("111", "2222");
  router.replace({ path: "/" });
};
</script>

<template>
  <div class="h-screen w-screen bg-slate-800 flex justify-center items-center">
    <Particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :options="particles"
    />
    <div
      class="w-[450px] h-[550px] bg-slate-600 z-10 rounded-2xl drop-shadow-lg backdrop-blur-sm backdrop-opacity-50 bg-opacity-60"
      @click="loginAction"
    ></div>
  </div>
</template>

<style scoped></style>
