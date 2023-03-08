<template>
  <header
    class="bg-center bg-cover text-white bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]">
    <div class='bg-black/50 min-h-screen'>
      <nav class='container mx-auto flex flex-col md:flex-row items-center md:justify-center w-full px-28 py-10'>
        <ul class='flex flex-row gap-x-7 items-center text-light'>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Works</a></li>
        </ul>
      </nav>
      <div
        class='min-h-[75vh] container mx-auto w-full flex flex-col items-center justify-center gap-y-5 text-center px-10 md:px-0'>
        <h1 class='font-bold text-3xl'>WEB DEVELOPER</h1>
      </div>
    </div>
  </header>
  <section class="bg-[#141414] py-16 text-white">
    <div class="container mx-auto flex flex-col items-center text-center px-32">
      <h2 class="font-bold text-2xl text-white mb-7">Who am i</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatem ea laudantium alias blanditiis,
        fugiat consequatur cumque nam praesentium laborum, libero itaque adipisci autem a dolor quam, ut recusandae iusto
        sint tenetur. Enim laboriosam natus commodi, dignissimos praesentium eos tempora.</p>
    </div>
  </section>
  <section class="bg-[#141414] py-16 text-white">
    <div class="container mx-auto flex flex-col items-center px-32">
      <h2 class="font-bold text-2xl mb-7">What i do</h2>
      <div class="flex flex-row items-center gap-7">
        <div v-for="service in services" :key="service.id">
          <div class="bg-[#252525] rounded border border-[#252525] hover:border-white p-5 pt-10 space-y-2">
            <span class="font-bold text-lg">{{ service.id }}</span>
            <h3 class="font-bold text-lg">{{ service.title }}</h3>
            <p class="text-white/[.5]">{{ service.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>

  </section>
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
</script>