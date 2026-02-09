<script setup lang="ts">
defineProps({
  error: {
    type: Object,
    required: true,
  },
})

function handleError() {
  clearError({ redirect: '/' })
}

function goBack() {
  clearError()
  useRouter().back()
}
</script>

<template>
  <main class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8" style="background: #b1ddab">
    <div class="text-center">
      <h1><a href="/" class="!mt-4 !text-3xl !font-bold !tracking-tight !text-white !sm:text-5xl">
        {{ error.statusCode }}
      </a></h1>
      <p class="mt-6 text-base leading-7 text-neutral-600">
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <NuxtLink
            class="!bg-blue-800 !lang_it !hover:bg-accent-hover !cursor-pointer !rounded-md !px-3.5 !py-2.5 !text-sm !font-semibold !text-white !shadow-sm"
            @click="handleError"
        >
          Go back home
        </NuxtLink>
        <NuxtLink
            class="!bg-green-800 !lang_it !hover:bg-accent-hover !cursor-pointer !rounded-md !px-3.5 !py-2.5 !text-sm !font-semibold !text-white !shadow-sm"
            @click="goBack"
        >
          Go back
        </NuxtLink>
      </div>
    </div>
  </main>
</template>