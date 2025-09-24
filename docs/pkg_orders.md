# Документация по пакету PKG_ORDERS

## http_post Отправка POST запроса на сервер


- psurl VARCHAR2 - url запроса

- pjbody JSON_OBJECT_T - тело запроса

- pssecuirity_code VARCHAR2 - Код для проверки

**Возвращает:** JSON_OBJECT_T - Ответ сервера