<template>
    <div>
        <section class="bg-black-primary text-white py-12">
            <div class="container mx-auto flex flex-col items-center px-10 md:px-40">
                <div class="flex flex-row items-center mb-10 w-full gap-5">
                    <div @click="back"
                        class="w-10 h-10 flex items-center justify-center rounded-full border border-white cursor-pointer hover:bg-white hover:text-black-primary transition-all">
                        <i class="bi bi-arrow-left-short"></i>
                    </div>
                    <h1 class="font-bold text-2xl">Project Detail</h1>
                </div>
                <div class="flex flex-col md:flex-row items-start gap-10">
                    <!-- <div class="bg-center bg-cover w-full aspect-square shadow-xl rounded-lg bg-[url('https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80')]"></div> -->
                    <img class="w-full md:w-1/2 rounded-lg" :src="project?.img" alt="">
                    <div class="w-full md:w-1/2 flex flex-col items-start gap-4">
                        <h2 class="font-bold text-xl">{{ project?.title }}</h2>
                        <p class="text-white/[.8]">Tech Stack : React, Tailwind, Golang, PostgreSQL</p>
                        <div class="grid grid-cols-3 lg:grid-cols-4 grid-flow-row auto-rows-max gap-2">
                            <VBadge outlined color="primary">E-Commerce</VBadge>
                            <VBadge outlined color="secondary">Fullstack</VBadge>
                            <VBadge outlined color="warning">API</VBadge>
                            <VBadge outlined color="info">Javascript</VBadge>
                            <VBadge outlined color="success">SQL</VBadge>
                            <VBadge outlined color="error">Vercel</VBadge>
                        </div>
                        <div class="flex flex-row items-center gap-3 text-xl">
                            <a class="" target="_blank" :href="project?.repo"><i class="bi bi-github"></i></a>
                            <a class="" target="_blank" :href="project?.demo"><i class="bi bi-box-arrow-up-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-black-primary text-white">
            <div class="container mx-auto flex flex-col gap-3 px-10 md:px-40">
                <h2 class="font-bold text-xl">Description</h2>
                <p class="text-white/[.8]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt vitae quaerat
                    alias! Esse ea commodi odit
                    ad, dolor impedit magni cumque aut maxime amet nobis, consectetur doloribus libero recusandae sint eius
                    architecto alias officia facilis nihil! Possimus doloremque amet quam animi quis saepe nisi
                    reprehenderit
                    ullam sunt officia, iure nam id temporibus, quos libero beatae harum adipisci nobis maiores facilis ut
                    distinctio necessitatibus consectetur. Aperiam mollitia iusto praesentium alias culpa magni saepe,
                    quibusdam
                    provident, dolores enim fugit suscipit ea voluptates non vitae! Sint, adipisci fuga ducimus totam est
                    dolorem accusamus consequuntur earum quae asperiores ea! Ab officia id quasi quaerat.</p>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
const router = useRouter();
const back = () => {
    router.back();
}

const route = useRoute()
// When accessing /posts/1, route.params.id will be 1
// console.log(route.params.id)
const projectId = ref<string | string[]>(route.params.id)
const { data: project } = await useFetch(`/api/projects/${projectId.value}`)
</script>