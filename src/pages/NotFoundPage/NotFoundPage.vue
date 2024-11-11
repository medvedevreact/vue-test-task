<template>
  <div class="not-found-page">
    <h2 class="not-found-page-title">Страница не найдена</h2>
    <p class="not-found-page-message">
      Извините, страница, которую вы ищете, не существует.
    </p>
    <router-link to="/" class="not-found-page-link"
      >Вернуться на главную страницу</router-link
    >
  </div>
</template>

<script>
export default {
  name: "NotFoundPage",
};
</script>

<style scoped>
.not-found-page {
  text-align: center;
  padding: 50px;
}

.not-found-page-title {
  font-size: 2em;
  margin-bottom: 20px;
}

.not-found-page-message {
  font-size: 1.2em;
  margin-bottom: 20px;
}

.not-found-page-link {
  text-decoration: none;
  color: #007bff;
  font-size: 1.2em;
}

.not-found-page-link:hover {
  text-decoration: underline;
}
</style>
