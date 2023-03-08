<template>
  <div class="fixed top-[30%] left-[6%] h-[50vh] border-r border-white"></div>
  <div class="flex flex-col items-center justify-between py-10 fixed top-[30%] right-[6%] text-white h-[50vh]">
    <a class="" href="https://github.com/nafishandoko"><i class="bi bi-github"></i></a>
    <a class="" href="https://www.linkedin.com/in/nafishandoko"><i class="bi bi-linkedin"></i></a>
    <a class="" href="https://instagram.com/nafishandoko"><i class="bi bi-instagram"></i></a>
    <a class="" href="mailto:naffisioner@gmail.com"><i class="bi bi-envelope"></i></a>
    <a class="" href="https://dribbble.com/nafishandoko"><i class="bi bi-dribbble"></i></a>
  </div>
  <header
    class="bg-center bg-cover text-white bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]">
    <div class='bg-black/50 min-h-screen'>
      <nav class='container mx-auto flex flex-col md:flex-row items-center md:justify-center w-full px-28 py-10'>
        <ul class='flex flex-row gap-x-7 items-center text-light'>
          <li class="indexLi"><a href="#">Home</a></li>
          <li class="indexLi"><a href="#">About</a></li>
          <li class="indexLi"><a href="#">Services</a></li>
          <li class="indexLi"><a href="#">Skills</a></li>
          <li class="indexLi"><a href="#">Works</a></li>
        </ul>
      </nav>
      <div
        class='min-h-[75vh] container mx-auto w-full flex flex-col items-center justify-center gap-y-5 text-center px-10 md:px-0'>
        <h1 class='font-bold text-3xl'>WEB DEVELOPER</h1>
      </div>
    </div>
  </header>
  <section class="bg-[#141414] py-16 text-white">
    <div class="container mx-auto flex flex-col items-center text-center px-40">
      <h2 class="font-bold text-2xl text-white mb-7">Who i am</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatem ea laudantium alias blanditiis,
        fugiat consequatur cumque nam praesentium laborum, libero itaque adipisci autem a dolor quam, ut recusandae iusto
        sint tenetur. Enim laboriosam natus commodi, dignissimos praesentium eos tempora.</p>
    </div>
  </section>
  <section class="bg-[#141414] py-16 text-white">
    <div class="container mx-auto flex flex-col items-center px-40">
      <h2 class="font-bold text-2xl mb-7">What i do</h2>
      <div class="flex flex-row items-stretch gap-7">
        <div v-for="service in services" :key="service.id">
          <div class="bg-[#252525] rounded border border-[#252525] hover:border-white p-5 pt-10 space-y-2 h-full">
            <span class="font-bold text-lg">{{ service.id }}</span>
            <h3 class="font-bold text-lg">{{ service.title }}</h3>
            <p class="text-white/[.5]">{{ service.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-[#141414] py-16 text-white">
    <div class="container mx-auto flex flex-col items-center px-40">
      <h2 class="font-bold text-2xl mb-7">What i am capable of</h2>
      <div class="flex flex-row items-center gap-4 text">
        <div v-for="skill in skills" :key="skill.id">
          <a :href="skill.url" class="inline-block text-center text-3xl border border-white rounded p-3"><i
              :class="skill.class"></i></a>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-[#141414] py-16 text-white">
    <div class="container mx-auto flex flex-col items-center px-40">
      <h2 class="font-bold text-2xl mb-7">My projects</h2>
      <div class="grid grid-cols-3 gap-7 text-black">
        <div class="bg-white rounded-xl p-2" v-for="(project, index) in projects">
          <div class="bg-center bg-cover w-full h-[150px] shadow-xl rounded-lg bg-[url('https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80')]"></div>
          <div class="flex flex-row items-center p-4 gap-3">
            <div class="flex flex-col gap-1">
              <h3 class="font-bold">Social Media App</h3>
              <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat qui officia corporis tempora nihil voluptate.</p>
            </div>
            <div class="text-lg flex flex-col items-center gap-1">
              <a class="" href="https://github.com/nafishandoko"><i class="bi bi-github"></i></a>
              <a class="" href="https://github.com/nafishandoko"><i class="bi bi-box-arrow-up-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer></footer>
</template>

<script setup>
const services = ref([
  {
    id: 1,
    title: "Web Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eum, voluptatibus debitis natus repellendus fugiat!"
  },
  {
    id: 2,
    title: "UI/UX Design",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eum, voluptatibus debitis natus repellendus fugiat!"
  },
  {
    id: 3,
    title: "Mobile Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eum, voluptatibus debitis natus repellendus fugiat!"
  }
])

const skills = ref([
  {
    id: 1,
    class: "devicon-html5-plain-wordmark colored",
    url: "https://html.com/html5/"
  },
  {
    id: 2,
    class: "devicon-css3-plain-wordmark colored",
    url: "https://css3.com/"
  },
  {
    id: 3,
    class: "devicon-javascript-plain colored",
    url: "https://www.javascript.com/"
  },
  {
    id: 4,
    class: "devicon-tailwindcss-plain colored",
    url: "https://tailwindcss.com/"
  },
  {
    id: 5,
    class: "devicon-react-original-wordmark colored",
    url: "https://reactjs.org/"
  },
  {
    id: 6,
    class: "devicon-nextjs-original-wordmark",
    url: "https://nextjs.org/"
  }
])

const projects = ref([
  {
    title: "Social Media App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat qui officia corporis tempora nihil voluptate.",
    demo: "",
    repo: ""
  },
  {
    title: "Social Media App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat qui officia corporis tempora nihil voluptate.",
    demo: "",
    repo: ""
  },
  {
    title: "Social Media App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat qui officia corporis tempora nihil voluptate.",
    demo: "",
    repo: ""
  },
  {
    title: "Social Media App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat qui officia corporis tempora nihil voluptate.",
    demo: "",
    repo: ""
  },
  {
    title: "Social Media App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat qui officia corporis tempora nihil voluptate.",
    demo: "",
    repo: ""
  }
])
</script>

<style scoped>
.indexLi:after {
  width: 0;
  height: 1px;
  background-color: white;
  position: absolute;
  bottom: -5px;
  left: 0;
  content: '';
  transition: width 0.2s ease-in-out;
}

.indexLi:hover:after {
  width: 100%;
}
</style>