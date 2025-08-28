<template>
  <div>
    <PhosphorIcon name="acorn" />

    <!-- All the keys should be preloaded even though only one is truthy -->
    <PhosphorIcon :name="{ 'sun': true, 'moon-stars': false }" />
  </div>
</template>
