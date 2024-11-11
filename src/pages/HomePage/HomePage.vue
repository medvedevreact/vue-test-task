<template>
  <div class="home-page">
    <h2 class="page-title">Все заметки</h2>
    <ul class="notes">
      <li v-for="(note, index) in notes" :key="index" class="note-item">
        <strong>{{ note.name }}</strong
        >: {{ note.content }}
        <p class="last-edited">
          Последнее редактирование: {{ note.lastEdited }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "home-page",
  props: {
    notes: Array,
  },
};
</script>

<style scoped>
.home-page {
  font-family: "Arial", sans-serif;
  padding: 20px;
}

.page-title {
  color: #333;
  margin-bottom: 20px;
}

.notes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  gap: 40px;
  align-items: start;
  list-style-type: none;
}

.note-item {
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.note-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.last-edited {
  font-size: 0.9em;
  color: #666;
  margin-top: 10px;
}

@media (max-width: 768px) {
  .notes {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .notes {
    grid-template-columns: 1fr;
  }
}
</style>
