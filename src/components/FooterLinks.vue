<template>
  <slot name="footerHeader">The default footer header</slot>
  <ul v-if="footerLinks.length">
    <li v-for="link in footerLinks" :key="link.id"><a :href="link.href" target="_blank">{{ link.text}}</a></li>
  </ul>
  <slot name="footerFooter">Default Footer footer</slot>
</template>

<script setup>
import {inject} from "vue";

let footerLinks = inject('footerLinks')

setTimeout(() => {
  footerLinks.value.push({id:2, href:"https://www.yahoo.co.uk", text: "Yahoo"})
}, 2000)

</script>

<style scoped>

</style>