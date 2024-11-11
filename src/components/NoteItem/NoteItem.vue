<template>
  <li class="note-item">
    <router-link
      :to="{ name: 'Note', params: { id: note.id } }"
      class="note-link"
    >
      <strong>{{ note.name }}</strong
      >: {{ note.content }}
      <p class="note-last-edited">
        Последнее редактирование: {{ note.lastEdited }}
      </p>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "NoteItem",
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
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

.note-last-edited {
  font-size: 0.9em;
  color: #666;
  margin-top: 10px;
}

.note-link {
  text-decoration: none;
  color: inherit;
  display: block;
  width: 100%;
  height: 100%;
}
</style>
