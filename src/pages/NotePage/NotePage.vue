<template>
  <div class="note-page">
    <h2 class="note-page-title">Заметка {{ note.id }}</h2>
    <div class="note-page-content">
      <div class="note-card">
        <h2>{{ note.name }}</h2>
        <p><strong>Содержание:</strong> {{ note.content }}</p>
        <p><strong>Последнее изменение:</strong> {{ note.lastEdited }}</p>
        <button class="delete-button" @click="handleDelete">Удалить</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "NotePage",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },

  computed: {
    ...mapState(["notes"]),

    note() {
      return this.notes.find((note) => note.id === this.id);
    },
  },
  methods: {
    ...mapActions(["deleteNote"]),
    handleDelete() {
      this.deleteNote(this.id);
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.note-page {
  padding-top: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.note-page-title {
  color: #333;
  margin-bottom: 20px;
  font-size: 24px;
}

.note-page-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.note-card {
  padding: 20px;
  text-align: center;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
}

.note-card h2 {
  color: #333;
  margin-bottom: 20px;
  font-size: 24px;
}

.note-card p {
  margin-bottom: 15px;
  font-size: 16px;
  color: #555;
}

.note-card strong {
  font-weight: bold;
  color: #333;
}

.note-card .last-edited {
  font-size: 14px;
  color: #777;
}

.delete-button {
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;
}

.delete-button:hover {
  background-color: #ff1a1a;
}
</style>
