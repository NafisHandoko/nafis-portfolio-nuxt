<template>
    <section class="bg-black-primary text-white py-12">
        <div class="container mx-auto flex flex-col items-center px-10 md:px-40">
            <div class="flex flex-row items-center mb-10 w-full gap-5">
                <div @click="back"
                    class="w-10 h-10 flex items-center justify-center rounded-full border border-white cursor-pointer hover:bg-white hover:text-black-primary transition-all">
                    <i class="bi bi-arrow-left-short"></i>
                </div>
                <h1 class="font-bold text-2xl">Back to home</h1>
            </div>
            <div class="flex flex-col items-center text-center gap-3">
                <span class="text-purple-500">Our blog</span>
                <h1 class="text-3xl">Resources and insights</h1>
                <p class="text-white/[.5] text-sm">The latest industry news, interviews, technologies, and resources</p>
                <div class="flex flex-row items-stretch gap-3">
                    <input type="text" name="email" id="email" placeholder="Enter your email"
                        class="border rounded border-[#D0D5DD] px-5 text-sm">
                    <input type="button" value="Get started" class="bg-purple-500 hover:bg-purple-600 px-5 rounded text-sm">
                </div>
            </div>
        </div>
    </section>
    <section class="bg-black-primary text-white py-12">
        <div class="container mx-auto flex flex-col items-center px-10 md:px-40">
            <div class="flex flex-col items-start gap-2">
                <div
                    class="bg-center bg-cover h-72 w-full bg-[url('https://images.unsplash.com/photo-1508739826987-b79cd8b7da12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80')]">
                </div>
                <span class="text-purple-500 text-sm">Olivia Rhye • 20 Jan 2022</span>
                <h2 class="text-2xl">UX review presentations</h2>
                <p class="text-white/[.5]">How do you create compelling presentations that wow your colleagues and impress
                    your managers?</p>
            </div>
        </div>
    </section>
    <section class="bg-black-primary text-white py-12">
        <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-7 px-10 md:px-40">
            <div class="flex flex-col items-start gap-2" v-for="index in 10" :key="index">
                <div
                    class="bg-center bg-cover h-48 w-full bg-[url('https://images.unsplash.com/photo-1508739826987-b79cd8b7da12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80')]">
                </div>
                <span class="text-purple-500 text-sm">Olivia Rhye • 20 Jan 2022</span>
                <h2 class="text-2xl">UX review presentations</h2>
                <p class="text-white/[.5]">How do you create compelling presentations that wow your colleagues and impress
                    your managers?</p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const router = useRouter();
const back = () => {
    router.back();
}

const route = useRoute()
// When accessing /posts/1, route.params.id will be 1
// console.log(route.params.id)
// const projectId = ref<string | string[]>(route.params.id)
// const { data: project } = await useFetch(`/api/projects/${projectId.value}`)
</script>