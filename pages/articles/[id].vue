<template>
    <div>
        <section class="bg-black-primary text-white py-12">
            <div class="container mx-auto flex flex-col items-center px-10 md:px-40">
                <div class="flex flex-row items-center mb-10 w-full gap-5">
                    <div @click="back"
                        class="w-10 h-10 flex items-center justify-center rounded-full border border-white cursor-pointer hover:bg-white hover:text-black-primary transition-all">
                        <i class="bi bi-arrow-left-short"></i>
                    </div>
                    <h1 class="font-bold text-2xl">Back</h1>
                </div>
                <div class="flex flex-col items-center text-center gap-3">
                    <span class="text-purple-500">Published 20 Jan 2022</span>
                    <h1 class="text-3xl">{{ article.title }}</h1>
                    <p class="text-white/[.5] text-sm">How do you create compelling presentations that wow your colleagues
                        and impress your managers?</p>
                    <div
                        class="bg-center bg-cover h-72 w-full bg-[url('https://images.unsplash.com/photo-1508739826987-b79cd8b7da12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80')]">
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-black-primary text-white py-12">
            <div class="container mx-auto flex flex-col items-center px-10 md:px-40">
                <p>{{article.body}}</p>
            </div>
        </section>
</div></template>

<script setup>
const router = useRouter();
const back = () => {
    router.back();
}
// const test = ref(null)
// onMounted(() => {
//     console.log(test.value.innerHTML)
// })

const route = useRoute()
// When accessing /posts/1, route.params.id will be 1
// console.log(route.params.id)
const articleId = ref(route.params.id)
const { data: article } = await useFetch(`https://dummyjson.com/posts/${articleId.value}`)
</script>