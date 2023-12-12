import axios from "axios";
import { setCookie, getCookie, removeCookie } from "./cookie";

const instance = axios.create({
  baseURL: "https://web-production-51b6.up.railway.app/api/",
  timeout: 5000, // Установите таймаут по необходимости
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${getCookie('access_token')}`
  },
});

// // Функция для обновления токена (нужно дополнить)
// async function refreshToken() {
//   //логика обновления токена, отправкой запроса на сервер за новым токеном
//   // метод для обновления токена fetchNewToken()
//   const newToken = await fetchNewToken();
//   return newToken;
// }

// let isRefreshing = false;
// let refreshSubscribers = [];

// // Функция для добавления запросов в очередь ожидающих обновления токена
// function subscribeTokenRefresh(cb) {
//   refreshSubscribers.push(cb);
// }
// // Функция для обработки успешного обновления токена и повторной отправки запросов
// function onRefreshed(token) {
//   refreshSubscribers.map((cb) => cb(token));
// }

// instance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const { config, response: { status } = {} } = error;
//     const originalRequest = config;

//     if (status === 401) {
//       if (!isRefreshing) {
//         isRefreshing = true;
//         const newToken = await refreshToken(); // Получаем новый токен

//         // После успешного получения нового токена, обновляем токен и выполняем ожидающие запросы
//         if (newToken) {
//           isRefreshing = false;
//           onRefreshed(newToken);
//         }
//       }

//       // Создаем Promise, чтобы ожидающие запросы вернулись после обновления токена
//       const retryOriginalRequest = new Promise((resolve) => {
//         subscribeTokenRefresh((token) => {
//           originalRequest.headers.Authorization = `Bearer ${token}`;
//           resolve(axios(originalRequest));
//         });
//       });

//       return retryOriginalRequest;
//     }

//     return Promise.reject(error);
//   }
// );

export default instance;
