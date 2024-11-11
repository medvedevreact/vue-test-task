<template>
  <div class="add-note-page">
    <button class="back-button" @click="goBack">
      <span class="arrow">&#8592;</span> Вернуться на главную страницу
    </button>
    <div class="page-wrapper">
      <h2 class="page-title">Добавление заметки</h2>
      <NoteForm />
    </div>
  </div>
</template>

<script>
import NoteForm from "@/components/NoteForm/NoteForm.vue";

export default {
  name: "AddNotePage",
  components: {
    NoteForm,
  },
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.add-note-page {
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.page-wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.back-button {
  align-self: flex-start;
  margin-bottom: 20px;
  padding: 10px 20px;
  background-color: orange;
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
}

.back-button:hover {
  background-color: rgb(214, 139, 0);
}

.arrow {
  margin-right: 10px;
  font-size: 20px;
}

.page-title {
  margin-bottom: 20px;
}
</style>
