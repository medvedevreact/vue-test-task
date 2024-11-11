import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: [
      {
        id: 1,
        name: "Покупка продуктов",
        content:
          "Сегодня нужно купить молоко, хлеб, яйца и фрукты. Возможно, стоит заглянуть в магазин бытовой химии.",
        lastEdited: "11.11.2024, 12:00:00",
      },
      {
        id: 2,
        name: "Запись в дневник",
        content:
          "Пишу о том, как прошел мой день. Работал, гулял с друзьями в парке, вечером посмотрел интересный фильм.",
        lastEdited: "11.11.2024, 18:30:00",
      },
      {
        id: 3,
        name: "Список дел на неделю",
        content:
          "1. Закончить проект в понедельник.\n2. Поехать к родителям во вторник.\n3. Заняться спортом в четверг.",
        lastEdited: "10.11.2024, 16:45:00",
      },
      {
        id: 4,
        name: "План по работе",
        content:
          "1. Завершить отчет по проекту.\n2. Пройти тренинг по новым технологиям.\n3. Позвонить клиенту.",
        lastEdited: "11.11.2024, 09:00:00",
      },
      {
        id: 5,
        name: "Чтение книги",
        content:
          "Прочитал еще одну главу из книги. Очень интересно, особенно вторая часть о философии.",
        lastEdited: "10.11.2024, 20:15:00",
      },
      {
        id: 6,
        name: "Покупки онлайн",
        content:
          "Нужно заказать новый телефон, а также купить аксессуары для него.",
        lastEdited: "10.11.2024, 21:00:00",
      },
      {
        id: 7,
        name: "Задачи на месяц",
        content:
          "1. Написать отчет.\n2. Сделать апдейт для мобильного приложения.\n3. Встретиться с коллегами.",
        lastEdited: "09.11.2024, 10:30:00",
      },
      {
        id: 8,
        name: "План по дому",
        content:
          "1. Починить крышу.\n2. Покрасить забор.\n3. Убраться в подвале.",
        lastEdited: "11.11.2024, 14:00:00",
      },
      {
        id: 9,
        name: "Встреча с друзьями",
        content: "Завтра встречаемся с друзьями в парке для пикника.",
        lastEdited: "11.11.2024, 19:30:00",
      },
      {
        id: 10,
        name: "Выходные",
        content:
          "Выехать на выходные на дачу и провести время на свежем воздухе.",
        lastEdited: "11.11.2024, 08:00:00",
      },
      {
        id: 11,
        name: "Рабочие планы",
        content: "Необходимо завершить все срочные задачи до пятницы.",
        lastEdited: "11.11.2024, 11:15:00",
      },
      {
        id: 12,
        name: "Сортировка фото",
        content:
          "Пересматриваю фотографии, удаляю ненужные и сортирую по альбомам.",
        lastEdited: "11.11.2024, 17:30:00",
      },
    ],
    filterStartDate: null,
    filterEndDate: null,
  },
  mutations: {
    ADD_NOTE(state, note) {
      state.notes.push(note);
    },
    DELETE_NOTE(state, id) {
      state.notes = state.notes.filter((note) => note.id !== id);
    },
    SET_FILTER_START_DATE(state, date) {
      state.filterStartDate = date;
    },
    SET_FILTER_END_DATE(state, date) {
      state.filterEndDate = date;
    },
  },
  actions: {
    addNote({ commit }, note) {
      commit("ADD_NOTE", note);
    },
    deleteNote({ commit }, id) {
      commit("DELETE_NOTE", id);
    },
    setFilterStartDate({ commit }, date) {
      commit("SET_FILTER_START_DATE", date);
    },
    setFilterEndDate({ commit }, date) {
      commit("SET_FILTER_END_DATE", date);
    },
  },
  getters: {
    notes: (state) => state.notes,
    filteredNotes: (state) => {
      console.log("fire");
      if (!state.filterStartDate && !state.filterEndDate) {
        return state.notes;
      }

      return state.notes.filter((note) => {
        const noteDate = new Date(note.lastEdited);
        const startDate = state.filterStartDate
          ? new Date(state.filterStartDate)
          : null;
        const endDate = state.filterEndDate
          ? new Date(state.filterEndDate)
          : null;

        if (startDate && endDate) {
          return noteDate >= startDate && noteDate <= endDate;
        } else if (startDate) {
          return noteDate >= startDate;
        } else if (endDate) {
          return noteDate <= endDate;
        }

        return true;
      });
    },
  },
});
