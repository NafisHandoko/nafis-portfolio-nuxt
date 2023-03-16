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
                    <h1 class="text-3xl">UX review presentations</h1>
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
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, facere repellendus nihil magni
                    doloribus voluptatibus saepe id recusandae autem quos cum aliquam, dolorem quam. Nesciunt sunt iure nisi
                    perferendis quas et aut, nostrum, recusandae omnis animi praesentium laborum saepe pariatur natus amet
                    placeat voluptatibus aliquid eligendi. Veniam facere laboriosam suscipit natus dolor magnam cupiditate,
                    iste quos soluta rerum voluptatibus, provident perspiciatis, amet aperiam at mollitia similique? Hic
                    dolorem aliquam minima. Mollitia aspernatur placeat magni minus eligendi, voluptate incidunt quas nulla,
                    fuga, magnam velit nemo ab? Corrupti hic facere maxime quos in perferendis possimus dicta ipsum
                    provident aperiam iste maiores adipisci sequi ipsa rem nobis iusto, id qui quasi quo! Laboriosam,
                    voluptatibus possimus necessitatibus quod aut quis eveniet? Eveniet placeat provident vero id et non
                    iste commodi inventore ipsam laudantium quae ipsa odit ullam ipsum voluptates minima ab omnis, assumenda
                    velit facere? Dolores consequuntur veritatis quisquam officia quas inventore quo nihil quasi itaque
                    autem in fugit, natus aspernatur reiciendis deleniti numquam est ex recusandae, illo aliquid doloribus
                    illum mollitia voluptate assumenda. Assumenda perferendis corporis, eius blanditiis autem consequuntur,
                    non consequatur neque voluptatum molestias quisquam explicabo! Id aliquam modi voluptas nisi dolore eos.
                    Commodi cupiditate consequuntur nemo, et rerum qui vero sapiente!</p>
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
</script>