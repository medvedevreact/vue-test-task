<template>
  <form class="note-form" @submit.prevent="submitForm">
    <div class="form-group">
      <label for="name">Название:</label>
      <input type="text" id="name" v-model="note.name" class="form-input" />
    </div>
    <div class="form-group">
      <label for="content">Содержание:</label>
      <textarea
        id="content"
        v-model="note.content"
        class="form-input"
      ></textarea>
    </div>
    <button type="submit" class="form-button">Добавить</button>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </form>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import { mapActions } from "vuex";

export default {
  name: "NoteForm",
  data() {
    return {
      note: {
        id: null,
        name: "",
        content: "",
        lastEdited: "",
      },
      errorMessage: "",
    };
  },
  methods: {
    ...mapActions(["addNote"]),
    submitForm() {
      if (this.note.name.trim() == "" || this.note.content.trim() == "") {
        this.errorMessage = "Пожалуйста, заполните все поля.";
        setTimeout(() => {
          this.errorMessage = "";
        }, 3000);
        return;
      }
      this.note.id = uuidv4();
      this.note.lastEdited = new Date().toLocaleString();
      this.addNote(this.note);
      this.note = {
        name: "",
        content: "",
        lastEdited: new Date().toLocaleString(),
      };
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.note-form {
  border: 1px solid #ccc;
  padding: 30px;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-input {
  width: 100%;
  padding: 15px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.form-input:focus {
  border-color: #007bff;
  outline: none;
}

.form-button {
  padding: 15px 30px;
  background-color: orange;
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  width: 100%;
}

.form-button:hover {
  background-color: rgb(214, 139, 0);
}

.error-message {
  color: red;
  margin-top: 10px;
  font-size: 14px;
}
</style>
