<template>
  <div class="home-page">
    <h2 class="home-page-title">Все заметки</h2>
    <div class="filter-dates">
      <label for="start-date">Начальная дата:</label>
      <input
        type="date"
        id="start-date"
        v-model="localFilterStartDate"
        @change="updateFilterStartDate"
      />
      <label for="end-date">Конечная дата:</label>
      <input
        type="date"
        id="end-date"
        v-model="localFilterEndDate"
        @change="updateFilterEndDate"
      />
    </div>
    <ul class="notes-list">
      <NoteItem v-for="note in filteredNotes" :key="note.id" :note="note" />
    </ul>
    <h3 v-if="isNotesEmpty">Нет подходящих заметок 😢</h3>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import NoteItem from "@/components/NoteItem/NoteItem.vue";

export default {
  name: "HomePage",
  components: {
    NoteItem,
  },
  data() {
    return {
      localFilterStartDate: null,
      localFilterEndDate: null,
    };
  },
  computed: {
    ...mapState(["notes"]),
    ...mapGetters(["filteredNotes"]),
    isNotesEmpty() {
      return this.filteredNotes.length === 0;
    },
  },
  methods: {
    ...mapActions(["setFilterStartDate", "setFilterEndDate"]),
    updateFilterStartDate() {
      this.setFilterStartDate(this.localFilterStartDate);
    },
    updateFilterEndDate() {
      this.setFilterEndDate(this.localFilterEndDate);
    },
  },
};
</script>

<style scoped>
.home-page {
  padding: 20px 0px;
}

.home-page-title {
  color: #333;
  margin-bottom: 20px;
}

.filter-dates {
  margin-bottom: 20px;
  display: flex;
}

.filter-dates label {
  margin-right: 10px;
}

.filter-dates input {
  margin-right: 20px;
}

.notes-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  gap: 40px;
  align-items: start;
  list-style-type: none;
}

@media (max-width: 768px) {
  .notes-list {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .notes-list {
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 768px) {
  .filter-dates {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
