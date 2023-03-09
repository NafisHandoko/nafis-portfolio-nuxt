<script setup lang="ts">
const title = 'Nafis Handoko';

useHead({
  title,
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    {
      name: 'description',
      key: 'description',
      content: title,
    },
  ],
});
const slide = ref(false)
const welcome = () => {
  setTimeout(() => {
    slide.value = true
  }, 3000)
}
welcome()
</script>

<template>
  <NuxtLayout>
    <Layout>
      <div class="bg-black-primary w-full h-screen fixed z-10 bottom-0 left-0 transition-all"
        :class="{ 'bottom-[100%]': slide }">
        <div class="container mx-auto flex items-center justify-center h-full">
          <h1 class="font-bold text-3xl text-white tracking-[20px] animate-bounce">HELLO!</h1>
        </div>
      </div>
      <NuxtPage />
    </Layout>
  </NuxtLayout>
</template>
