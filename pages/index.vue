<template>
  <div>
    <a href="#header"
      class="fixed bottom-[5%] right-[5%] text-white w-10 h-10 hidden md:flex items-center justify-center rounded-full border border-white cursor-pointer hover:bg-white hover:text-black-primary transition-all">
      <i class="bi bi-arrow-up-short"></i>
    </a>
    <div class="fixed top-[30%] left-[6%] hidden md:flex flex-col items-center gap-1">
      <div class="h-[35vh] border-r border-white"></div>
      <div class="rounded-full p-1 bg-white"></div>
      <div class="h-[2vh] border-r border-white"></div>
      <div class="rounded-full p-1 bg-white"></div>
      <div class="h-[5vh] border-r border-white"></div>
    </div>
    <!-- <div class="fixed top-[30%] left-[6%] h-[50vh] border-r border-white"></div> -->
    <div
      class="hidden md:flex flex-col items-center justify-between py-10 fixed top-[30%] right-[6%] text-white h-[50vh]">
      <a class="glow transition-all" target="_blank" href="https://github.com/nafishandoko"><i
          class="bi bi-github"></i></a>
      <a class="glow transition-all" target="_blank" href="https://www.linkedin.com/in/nafishandoko"><i
          class="bi bi-linkedin"></i></a>
      <a class="glow transition-all" target="_blank" href="https://instagram.com/nafishandoko"><i
          class="bi bi-instagram"></i></a>
      <a class="glow transition-all" target="_blank" href="mailto:naffisioner@gmail.com"><i
          class="bi bi-envelope"></i></a>
      <a class="glow transition-all" target="_blank" href="https://dribbble.com/nafishandoko"><i
          class="bi bi-dribbble"></i></a>
    </div>
    <div :class="showMobileNav ? 'left-[50%] md:left-[100%]' : 'left-[100%]'"
      class="bg-white text-black-primary text-center fixed z-20 top-0 left-[100%] transition-all w-1/2 h-screen flex items-center justify-center">
      <button @click="showMobileNav = false" class='text-3xl block md:hidden py-5 absolute top-2 right-6'><i
          class="bi bi-x-lg"></i></button>
      <ul class='container mx-auto flex flex-col items-center justify-between gap-7'>
        <li class='text-xl font-medium'><a href="#">Home</a></li>
        <li class='text-xl font-medium'><a href="#about">About</a></li>
        <li class='text-xl font-medium'><a href="#services">Services</a></li>
        <li class='text-xl font-medium'><a href="#skills">Skills</a></li>
        <li class='text-xl font-medium'><a href="#works">Works</a></li>
        <li class='text-xl font-medium'>
          <NuxtLink to="/articles">Articles</NuxtLink>
        </li>
      </ul>
    </div>
    <header id="header"
      class="bg-center bg-fixed bg-cover text-white bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]">
      <div class='bg-black/70 min-h-screen'>
        <nav
          class='container mx-auto flex flex-col md:flex-row items-center md:justify-center w-full px-7 md:px-28 py-10'>
          <button class='text-3xl block md:hidden self-end' @click="showMobileNav = true"><i
              class="bi bi-list"></i></button>
          <ul class='hidden md:flex flex-row gap-x-7 items-center text-light'>
            <li class="border border-transparent hover:border-b-white transition-all"><a class="glow transition-all"
                href="#">Home</a></li>
            <li class="border border-transparent hover:border-b-white transition-all"><a class="glow transition-all"
                href="#about">About</a>
            </li>
            <li class="border border-transparent hover:border-b-white transition-all"><a class="glow transition-all"
                href="#services">Services</a>
            </li>
            <li class="border border-transparent hover:border-b-white transition-all"><a class="glow transition-all"
                href="#skills">Skills</a>
            </li>
            <li class="border border-transparent hover:border-b-white transition-all"><a class="glow transition-all"
                href="#works">Works</a>
            </li>
            <li class="border border-transparent hover:border-b-white transition-all">
              <NuxtLink class="glow transition-all" to="/articles">Articles</NuxtLink>
            </li>
          </ul>
        </nav>
        <!-- <button><i class="bi bi-list"></i></button> -->
        <div
          class='min-h-[75vh] container mx-auto w-full flex flex-col items-center justify-center gap-y-2 text-center px-10 md:px-0'>
          <!-- <h1 class='font-bold text-3xl'>Hi I am <span ref="typed"></span></h1> -->
          <h1 class="font-bold text-3xl">
            Hi i am
            <span class="typed-text">{{ typedData.typeValue }}</span>
            <span class="blinking-cursor">|</span>
            <span class="cursor" :class="{ typing: typedData.typeStatus }">&nbsp;</span>
          </h1>
          <!-- <p class="text-sm font-light">Web Developer</p> -->
        </div>
      </div>
    </header>
    <section class="bg-black-primary py-16 text-white" id="about">
      <div class="container mx-auto flex flex-col items-center text-center px-10 md:px-40" data-aos="fade-up">
        <h2 class="font-bold text-2xl text-white mb-7">Who i am</h2>
        <p>I am a Computer Science student majoring in
          Information Technology at Universitas Jember. I
          am a person who has a passion in the world of
          technology such as software development and UI
          design. As a college student, I have used
          languages like Javascript, Laravel, Flask, and
          Flutter to work on a variety of projects.
          Additionally, I have completed a five-month
          internship at PT Bisa Artifisial Indonesia as a Web
          Programmer working on a jobdesk creating
          websites using ReactJS and Tailwindcss for
          landing pages, the admin side, and customers.</p>
      </div>
    </section>
    <section class="bg-black-primary py-16 text-white" id="services">
      <div class="container mx-auto flex flex-col items-center px-10 md:px-40">
        <h2 class="font-bold text-2xl mb-7">What i do</h2>
        <div class="flex flex-col md:flex-row items-stretch gap-7">
          <div v-for="(service, index) in services" :key="index" class="w-full md:w-1/3">
            <div data-aos="flip-right"
              class="shadow-2xl shadow-white/[.5] bg-black-secondary rounded border border-black-secondary hover:border-white p-5 h-full flex flex-col items-start">
              <i class="self-center text-3xl py-5" :class="service.icon"></i>
              <span class="font-bold text-lg">{{ index + 1 }}</span>
              <h3 class="font-bold text-lg">{{ service.title }}</h3>
              <p class="text-white/[.5]">{{ service.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-black-primary py-16 text-white" id="skills">
      <div class="container mx-auto flex flex-col items-center px-10 md:px-40">
        <h2 class="font-bold text-2xl mb-7">What i am capable of</h2>
        <div class="flex flex-row flex-wrap items-center justify-center gap-4 text">
          <div v-for="(skill, index) in skills" :key="index">
            <a target="_blank" :href="skill.url"
              class="shadow-2xl shadow-white inline-block text-center text-3xl border border-white rounded p-3"
              data-aos="flip-down"><i :class="skill.class"></i></a>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-black-primary py-16 text-white" id="works">
      <div class="container mx-auto flex flex-col items-center px-10 md:px-40">
        <h2 class="font-bold text-2xl mb-7">My projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-7 text-black">
          <div class="bg-white rounded-xl p-2 hover:scale-105 transition-all" v-for="(project, index) in projects">
            <!-- <div
            class="bg-center bg-cover w-full h-[150px] shadow-xl rounded-lg bg-[url('https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80')]">
          </div> -->
            <!-- <div class="bg-center bg-cover w-full h-[150px] shadow-xl rounded-lg" :class="`bg-[url('${project.img}')]`"></div> -->
            <div class="bg-center bg-cover w-full h-[150px] shadow-xl rounded-lg"
              :style="{ backgroundImage: `url(${project.img})` }" data-aos="flip-left"></div>
            <div class="flex flex-row items-center p-4 justify-between gap-2">
              <div class="flex flex-col gap-1">
                <h3 class="font-bold">{{ project.title }}</h3>
                <p class="text-sm">{{ project.shortDesc }}</p>
              </div>
              <div class="text-lg flex flex-col items-center gap-1">
                <a class="" target="_blank" :href="project.repo"><i class="bi bi-github"></i></a>
                <a class="" target="_blank" :href="project.demo"><i class="bi bi-box-arrow-up-right"></i></a>
                <NuxtLink :to="`/projects/${index}`"><i class="bi bi-info-circle"></i></NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<!-- <script lang="ts">
import Typed from 'typed.js'

export default {
  mounted() {
    const options = {
      strings: ['a Mobile Developer', 'Nafis Handoko', 'a Web Developer', 'a UI Designer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    }
    const typed = new Typed(this.$refs.typed, options)
  },
  beforeDestroy() {
    // Make sure to destroy the Typed instance when the component is destroyed
    this.$typed.destroy()
  }
}
</script> -->

<script setup lang="ts">
const showMobileNav = ref<boolean>(false)

interface Service {
  icon: string,
  title: string,
  desc: string
}

const services = ref<Service[]>([
  {
    icon: "bi bi-code-slash",
    title: "Web Development",
    desc: "I can help you build a good looking website with stunning animation"
  },
  {
    icon: "bi bi-palette",
    title: "UI/UX Design",
    desc: "I can help you build a complete prototye of your products"
  },
  {
    icon: "bi bi-phone",
    title: "Mobile Development",
    desc: "I am able to create mobile app with Flutter that can help you solve your problem"
  }
])

interface Skill {
  class: string,
  url: string
}

const skills = ref<Skill[]>([
  {
    class: "devicon-html5-plain-wordmark colored",
    url: "https://html.com/html5/"
  },
  {
    class: "devicon-css3-plain-wordmark colored",
    url: "https://css3.com/"
  },
  {
    class: "devicon-javascript-plain colored",
    url: "https://www.javascript.com/"
  },
  {
    class: "devicon-tailwindcss-plain colored",
    url: "https://tailwindcss.com/"
  },
  {
    class: "devicon-react-original-wordmark colored",
    url: "https://reactjs.org/"
  },
  {
    class: "devicon-nextjs-original-wordmark",
    url: "https://nextjs.org/"
  },
  {
    class: "devicon-laravel-plain-wordmark colored",
    url: "https://laravel.com/"
  },
  {
    class: "devicon-flutter-plain colored",
    url: "https://flutter.dev/"
  }
])

const { data: projects } = await useFetch('/api/projects')

interface TypedData {
  typeValue: string,
  typeStatus: boolean,
  displayTextArray: string[],
  typingSpeed: number,
  erasingSpeed: number,
  newTextDelay: number,
  displayTextArrayIndex: number,
  charIndex: number,
}
const typedData = ref<TypedData>({
  typeValue: "",
  typeStatus: false,
  displayTextArray: ['Nafis Handoko', 'a Web Developer', 'a Mobile Developer', 'a UI Designer'],
  typingSpeed: 80,
  erasingSpeed: 80,
  newTextDelay: 1500,
  displayTextArrayIndex: 0,
  charIndex: 0,
})

const typeText = () => {
  if (typedData.value.charIndex < typedData.value.displayTextArray[typedData.value.displayTextArrayIndex].length) {
    if (!typedData.value.typeStatus) typedData.value.typeStatus = true;
    typedData.value.typeValue += typedData.value.displayTextArray[typedData.value.displayTextArrayIndex].charAt(
      typedData.value.charIndex
    );
    typedData.value.charIndex += 1;
    setTimeout(typeText, typedData.value.typingSpeed);
  } else {
    typedData.value.typeStatus = false;
    setTimeout(eraseText, typedData.value.newTextDelay);
  }
}

const eraseText = () => {
  if (typedData.value.charIndex > 0) {
    if (!typedData.value.typeStatus) typedData.value.typeStatus = true;
    typedData.value.typeValue = typedData.value.displayTextArray[typedData.value.displayTextArrayIndex].substring(
      0,
      typedData.value.charIndex - 1
    );
    typedData.value.charIndex -= 1;
    setTimeout(eraseText, typedData.value.erasingSpeed);
  } else {
    typedData.value.typeStatus = false;
    typedData.value.displayTextArrayIndex += 1;
    if (typedData.value.displayTextArrayIndex >= typedData.value.displayTextArray.length)
      typedData.value.displayTextArrayIndex = 0;
    setTimeout(typeText, typedData.value.typingSpeed + 1000);
  }
}

onMounted(() => {
  setTimeout(typeText, typedData.value.newTextDelay + 200);
})
</script>

<style scoped>
.link:after {
  width: 0;
  height: 1px;
  background-color: white;
  position: absolute;
  bottom: -5px;
  left: 0;
  content: '';
  transition: width 0.2s ease-in-out;
}

.link:hover:after {
  width: 100%;
}

.glow:hover {
  /* text-shadow: 0 0 50px white; */
  text-shadow:
    0 0 30px white,
    0 0 30px white,
    0 0 30px white,
    0 0 30px white;
  filter: dropshadow(color=white, offx=2, offy=2);
}

/* span.typed-text {
  color: #d2b94b;
} */

.blinking-cursor {
  font-size: 2rem;
  color: white;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}

@keyframes blink {

  from,
  to {
    color: transparent;
  }

  50% {
    color: white;
  }
}

@-moz-keyframes blink {

  from,
  to {
    color: transparent;
  }

  50% {
    color: white;
  }
}

@-webkit-keyframes blink {

  from,
  to {
    color: transparent;
  }

  50% {
    color: white;
  }
}

@-ms-keyframes blink {

  from,
  to {
    color: transparent;
  }

  50% {
    color: white;
  }
}

@-o-keyframes blink {

  from,
  to {
    color: transparent;
  }

  50% {
    color: white;
  }
}
</style>