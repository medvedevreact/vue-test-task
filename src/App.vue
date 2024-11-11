<template>
  <div id="app">
    <header class="header">
      <h1>
        <router-link class="logo-link" to="/"> Note-manager </router-link>
      </h1>

      <router-link to="/addNote" class="add-note-btn"> + </router-link>
    </header>
    <div class="header-container">
      <router-view :notes="notes"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      notes: [
        {
          name: "Покупка продуктов",
          content:
            "Сегодня нужно купить молоко, хлеб, яйца и фрукты. Возможно, стоит заглянуть в магазин бытовой химии.",
          lastEdited: "Сегодня в 12:00",
        },
        {
          name: "Запись в дневник",
          content:
            "Пишу о том, как прошел мой день. Работал, гулял с друзьями в парке, вечером посмотрел интересный фильм.",
          lastEdited: "Сегодня в 18:30",
        },
        {
          name: "Список дел на неделю",
          content:
            "1. Закончить проект в понедельник.\n2. Поехать к родителям во вторник.\n3. Заняться спортом в четверг.",
          lastEdited: "Вчера в 16:45",
        },
        {
          name: "План по работе",
          content:
            "1. Завершить отчет по проекту.\n2. Пройти тренинг по новым технологиям.\n3. Позвонить клиенту.",
          lastEdited: "Сегодня в 09:00",
        },
        {
          name: "Чтение книги",
          content:
            "Прочитал еще одну главу из книги. Очень интересно, особенно вторая часть о философии.",
          lastEdited: "Вчера в 20:15",
        },
        {
          name: "Покупки онлайн",
          content:
            "Нужно заказать новый телефон, а также купить аксессуары для него.",
          lastEdited: "Вчера в 21:00",
        },
        {
          name: "Задачи на месяц",
          content:
            "1. Написать отчет.\n2. Сделать апдейт для мобильного приложения.\n3. Встретиться с коллегами.",
          lastEdited: "Позавчера в 10:30",
        },
        {
          name: "План по дому",
          content:
            "1. Починить крышу.\n2. Покрасить забор.\n3. Убраться в подвале.",
          lastEdited: "Сегодня в 14:00",
        },
        {
          name: "Встреча с друзьями",
          content: "Завтра встречаемся с друзьями в парке для пикника.",
          lastEdited: "Сегодня в 19:30",
        },
        {
          name: "Выходные",
          content:
            "Выехать на выходные на дачу и провести время на свежем воздухе.",
          lastEdited: "Сегодня в 08:00",
        },
        {
          name: "Рабочие планы",
          content: "Необходимо завершить все срочные задачи до пятницы.",
          lastEdited: "Сегодня в 11:15",
        },
        {
          name: "Сортировка фото",
          content:
            "Пересматриваю фотографии, удаляю ненужные и сортирую по альбомам.",
          lastEdited: "Сегодня в 17:30",
        },
      ],
    };
  },
};
</script>

<style>
.header {
  height: 150px;
  background-color: rgb(26, 36, 63);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
}

.add-note-btn {
  background-color: orange;
  color: white;
  padding: 15px;
  width: 40px;
  height: 40px;
  font-size: 32px;
  border-radius: 50%;
  display: flex;
  color: black;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.add-note-btn:hover {
  background-color: rgb(214, 139, 0);
}

.logo-link {
  text-decoration: none;
  color: white;
}
.header-container {
  padding-left: 15px;
  padding-right: 15px;
  max-width: 1310px;
  width: 100%;
  margin: 0 auto;
}
</style>
