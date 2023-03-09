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
</script>

<template>
  <NuxtLayout>
    <Layout>
      <NuxtPage />
    </Layout>
  </NuxtLayout>
</template>
