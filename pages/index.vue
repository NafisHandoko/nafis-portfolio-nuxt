<template>
  <div class="fixed top-[30%] left-[6%] hidden md:flex flex-col items-center gap-1">
    <div class="h-[35vh] border-r border-white"></div>
    <div class="rounded-full p-1 bg-white"></div>
    <div class="h-[2vh] border-r border-white"></div>
    <div class="rounded-full p-1 bg-white"></div>
    <div class="h-[5vh] border-r border-white"></div>
  </div>
  <!-- <div class="fixed top-[30%] left-[6%] h-[50vh] border-r border-white"></div> -->
  <div class="hidden md:flex flex-col items-center justify-between py-10 fixed top-[30%] right-[6%] text-white h-[50vh]">
    <a class="" href="https://github.com/nafishandoko"><i class="bi bi-github"></i></a>
    <a class="" href="https://www.linkedin.com/in/nafishandoko"><i class="bi bi-linkedin"></i></a>
    <a class="" href="https://instagram.com/nafishandoko"><i class="bi bi-instagram"></i></a>
    <a class="" href="mailto:naffisioner@gmail.com"><i class="bi bi-envelope"></i></a>
    <a class="" href="https://dribbble.com/nafishandoko"><i class="bi bi-dribbble"></i></a>
  </div>
  <!-- <div
    className="bg-white text-black-primary text-center fixed z-20 top-0 transition-all w-full h-screen flex items-center justify-center">
    <button className='text-3xl block md:hidden py-5 absolute top-2 right-6'><i class="bi bi-x-lg"></i></button>
    <ul className='container mx-auto flex flex-col items-center justify-between gap-10'>
      <li className='text-3xl font-medium'><a href="#">OUR WORK</a></li>
      <li className='text-3xl font-medium'><a href="#">OUR WORK</a></li>
      <li className='text-3xl font-medium'><a href="#">OUR TEAM</a></li>
      <li className='text-3xl font-medium'><a href="#">CONTACT</a></li>
    </ul>
  </div> -->
  <header
    class="bg-center bg-fixed bg-cover text-white bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]">
    <div class='bg-black/70 min-h-screen'>
      <nav
        class='container mx-auto hidden md:flex flex-col md:flex-row items-center md:justify-center w-full px-28 py-10'>
        <ul class='flex flex-row gap-x-7 items-center text-light'>
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
        </ul>
      </nav>
      <!-- <button><i class="bi bi-list"></i></button> -->
      <div
        class='min-h-[75vh] container mx-auto w-full flex flex-col items-center justify-center gap-y-5 text-center px-10 md:px-0'>
        <h1 class='font-bold text-3xl'>NAFIS HANDOKO</h1>
      </div>
    </div>
  </header>
  <section class="bg-black-primary py-16 text-white" id="about">
    <div class="container mx-auto flex flex-col items-center text-center px-10 md:px-40">
      <h2 class="font-bold text-2xl text-white mb-7">Who i am</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatem ea laudantium alias blanditiis,
        fugiat consequatur cumque nam praesentium laborum, libero itaque adipisci autem a dolor quam, ut recusandae iusto
        sint tenetur. Enim laboriosam natus commodi, dignissimos praesentium eos tempora.</p>
    </div>
  </section>
  <section class="bg-black-primary py-16 text-white">
    <div class="container mx-auto flex flex-col items-center px-10 md:px-40">
      <h2 class="font-bold text-2xl mb-7">What i do</h2>
      <div class="flex flex-col md:flex-row items-stretch gap-7">
        <div v-for="(service, index) in services" :key="index">
          <div
            class="bg-black-secondary rounded border border-black-secondary hover:border-white p-5 h-full flex flex-col items-start">
            <i class="self-center text-3xl py-5" :class="service.icon"></i>
            <span class="font-bold text-lg">{{ index + 1 }}</span>
            <h3 class="font-bold text-lg">{{ service.title }}</h3>
            <p class="text-white/[.5]">{{ service.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-black-primary py-16 text-white">
    <div class="container mx-auto flex flex-col items-center px-10 md:px-40">
      <h2 class="font-bold text-2xl mb-7">What i am capable of</h2>
      <div class="flex flex-row flex-wrap items-center justify-center gap-4 text">
        <div v-for="(skill, index) in skills" :key="index">
          <a :href="skill.url" class="inline-block text-center text-3xl border border-white rounded p-3"><i
              :class="skill.class"></i></a>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-black-primary py-16 text-white">
    <div class="container mx-auto flex flex-col items-center px-10 md:px-40">
      <h2 class="font-bold text-2xl mb-7">My projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-7 text-black">
        <div class="bg-white rounded-xl p-2 hover:scale-105 transition-all" v-for="(project, index) in projects">
          <!-- <div
            class="bg-center bg-cover w-full h-[150px] shadow-xl rounded-lg bg-[url('https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80')]">
          </div> -->
          <!-- <div class="bg-center bg-cover w-full h-[150px] shadow-xl rounded-lg" :class="`bg-[url('${project.img}')]`"></div> -->
          <div class="bg-center bg-cover w-full h-[150px] shadow-xl rounded-lg"
            :style="{ backgroundImage: `url(${project.img})` }"></div>
          <div class="flex flex-row items-center p-4 justify-between gap-2">
            <div class="flex flex-col gap-1">
              <h3 class="font-bold">{{ project.title }}</h3>
              <p class="text-sm">{{ project.shortDesc }}</p>
            </div>
            <div class="text-lg flex flex-col items-center gap-1">
              <a class="" :href="project.repo"><i class="bi bi-github"></i></a>
              <a class="" :href="project.demo"><i class="bi bi-box-arrow-up-right"></i></a>
              <NuxtLink :to="`/projects/${index}`"><i class="bi bi-info-circle"></i></NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = ref([
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
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eum, voluptatibus debitis natus repellendus fugiat!"
  }
])

const skills = ref([
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

const projects = ref([
  {
    "title": "mdpreviewer",
    "shortDesc": "Markdown Previewer with Reactjs and Redux for freeCodeCamp submission",
    "longDesc": "This project is part of the submission for freeCodeCamp Front End Development Libraries. The objective is to build Markdown Previewer based on user stories provided here. This project must be built using any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery. Thus, i use the mix of Reactjs and Redux for this project.",
    "repo": "https://github.com/NafisHandoko/markdown-previewer",
    "demo": "https://react-mdpreviewer.netlify.app/",
    "img": "/img/portfolio/mdpreviewer.png"
  },
  {
    "title": "TempSticky",
    "shortDesc": "This a Temporary Sticky Note Website using Reactjs",
    "longDesc": "This is Web App where you can add notes using sticky note. Note that the sticky notes that you’ve written here are temporary, means that it will be deleted when you close the page.",
    "repo": "https://github.com/NafisHandoko/TempSticky",
    "demo": "https://tempsticky.netlify.app/",
    "img": "/img/portfolio/tempsticky.png"
  },
  {
    "title": "depr-calc",
    "shortDesc": "Depression Calculator with Flask and LVQ as a Final Project for Datamining Subject in the College",
    "longDesc": "Depression Calculator(depr-calc) is a platform for detecting potential levels of depression. Here you can diagnose how much potential you currently have for depression. This application works using the Learning Vector Quantization method which makes predictions based on the data like age, gender, and also characteristics or symptoms that you can enter in the form.",
    "repo": "https://github.com/NafisHandoko/depr-calc",
    "demo": "https://depr-calc.nafishandoko.repl.co/",
    "img": "/img/portfolio/depr-calc.png"
  },
  {
    "title": "gsheet-crud",
    "shortDesc": "CRUD based Contact Book with Google Sheet API",
    "longDesc": "lorem ipsum dolor sit amet",
    "repo": "https://github.com/NafisHandoko/gsheet-crud",
    "demo": "https://nafishandoko.github.io/gsheet-crud/",
    "img": "/img/portfolio/gsheet-crud.png"
  },
  {
    "title": "random-quote",
    "shortDesc": "Random Quote Machine with jQuery, SASS, and Forismatic API",
    "longDesc": "lorem ipsum dolor sit amet",
    "repo": "https://github.com/NafisHandoko/random-quote",
    "demo": "https://nafishandoko.github.io/random-quote/",
    "img": "/img/portfolio/random-quote.png"
  },
  {
    "title": "Cokro Collection",
    "shortDesc": "Landing Page for Cokro Collection with Bootstrap",
    "longDesc": "lorem ipsum dolor sit amet",
    "repo": "https://github.com/NafisHandoko/cokrocollection",
    "demo": "https://nafishandoko.github.io/cokrocollection/",
    "img": "/img/portfolio/cokrocollection.png"
  },
  {
    "title": "Dahar Flutter",
    "shortDesc": "Javanese Food Shopping App with Flutter",
    "longDesc": "lorem ipsum dolor sit amet",
    "repo": "https://github.com/NafisHandoko/dahar-flutter",
    "demo": "https://drive.google.com/drive/folders/1AGUN85hflvn9BBqQEan1iTEymz2K_yry?usp=sharing",
    "img": "/img/portfolio/dahar-flutter.png"
  },
  {
    "title": "React Pomodoro",
    "shortDesc": "Timer/Pomodoro using ReactJS",
    "longDesc": "lorem ipsum dolor sit amet",
    "repo": "https://github.com/NafisHandoko/react-clock",
    "demo": "https://nafishandoko-rclock.netlify.app/",
    "img": "/img/portfolio/react-clock.png"
  },
  {
    "title": "React Calculator",
    "shortDesc": "Calculator built with Reactjs for freeCodeCamp Submission",
    "longDesc": "lorem ipsum dolor sit amet",
    "repo": "https://github.com/NafisHandoko/react-calculator",
    "demo": "https://nafishandoko-rcalculator.netlify.app/",
    "img": "/img/portfolio/react-calculator.png"
  },
  {
    "title": "Drum Machine",
    "shortDesc": "Drum Machine with Reactjs for freeCodeCamp Submission",
    "longDesc": "lorem ipsum dolor sit amet",
    "repo": "https://github.com/NafisHandoko/drum-machine",
    "demo": "https://nafishandoko-drummachine.netlify.app/",
    "img": "/img/portfolio/drum-machine.png"
  },
  {
    "title": "Gotravel",
    "shortDesc": "Travel Landing Page with React & Tailwind",
    "longDesc": "lorem ipsum dolor sit amet",
    "repo": "https://github.com/NafisHandoko/gotravel/tree/jadi",
    "demo": "https://react-gotravel.netlify.app/",
    "img": "/img/portfolio/gotravel.png"
  },
  {
    "title": "Artcody",
    "shortDesc": "Artcody Landing Page with HTML, CSS, and AOS",
    "longDesc": "lorem ipsum dolor sit amet",
    "repo": "https://github.com/NafisHandoko/artcody-official",
    "demo": "https://nafishandoko.github.io/artcody-official/",
    "img": "/img/portfolio/artcody.png"
  },
  {
    "title": "DeboksKas",
    "shortDesc": "Financial Record App with Laravel",
    "longDesc": "lorem ipsum dolor sit amet",
    "repo": "https://github.com/benny-rs/deboks-kas",
    "demo": "https://deboks-kas.000webhostapp.com/",
    "img": "/img/portfolio/debokskas.png"
  },
  {
    "title": "Fylo",
    "shortDesc": "Fylo Landing Page with HTML, CSS for FrontendMentor submission",
    "longDesc": "lorem ipsum dolor sit amet",
    "repo": "https://github.com/NafisHandoko/fylo-landing-page",
    "demo": "https://nafishandoko.github.io/fylo-landing-page/",
    "img": "/img/portfolio/fylo.png"
  },
  {
    "title": "HaDe",
    "shortDesc": "HaDe Landingpage, Admin, and Customer side with React & Tailwind",
    "longDesc": "lorem ipsum dolor sit amet",
    "repo": "#",
    "demo": "https://hade-matpro.netlify.app/",
    "img": "/img/portfolio/hade.png"
  },
  {
    "title": "SPDM",
    "shortDesc": "Student Information Management System with Laravel & Tailwindcss",
    "longDesc": "lorem ipsum dolor sit amet",
    "repo": "https://github.com/NafisHandoko/spdm-yhc",
    "demo": "https://spdm-yhc.000webhostapp.com/",
    "img": "/img/portfolio/spdm-yhc.png"
  }
])
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
</style>