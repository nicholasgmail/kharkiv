<script setup lang="ts">
const i18n = useI18n()
const localeCookie = useCookie('locale')

const switchLanguage = (locale: string) => {
  i18n.locale.value = locale
  localeCookie.value = locale
}

// при завантаженні
onMounted(() => {
  if (localeCookie.value) {
    i18n.locale.value = localeCookie.value
  }
})

</script>

<template>
  <!-- Header -->
  <div class="container" style="margin-top: 1rem">
    <div class="row justify-center content-center">
      <div class="col-auto md:hidden">
        <div class="flex flex-row justify-around items-center gap-4 my-4">
          <button class="!bg-green-800 lang_it" @click="switchLanguage('en')">CS</button>
          <button class="!bg-blue-800 lang_it" @click="switchLanguage('cs')">EN</button>
        </div>
      </div>
      <div class="col-auto">
        <h1><a href="/" id="logo">
          <img src="/images/vintage_truck.svg" alt="Obchodní firma společnosti zní: Kivenko s.r.o."
                   title="Obchodní firma společnosti zní: Kivenko s.r.o." class="logo_img"/>
        </a></h1>
      </div>
    </div>
  </div>
  <header id="header">
    <div class="logo container">
      <div>
        <h1><a href="/" id="logo">
        </a></h1>
        <p>{{ $t(`The company's business name is: Kivenko s.r.o.`) }}</p>
      </div>
    </div>
  </header>
</template>
<style>
.logo_img {
  width: 50%;
  margin: 0 auto;
}
</style>