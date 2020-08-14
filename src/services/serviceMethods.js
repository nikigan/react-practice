import instance from "./serviceBase";

const timeout = 5000;

export default {
  POST(path, data) {
    return instance.post(path, data, { timeout });
  },
  PUT(path, data) {
    return instance.put(path, data, { timeout });
  },
  PATCH(path, data) {
    return instance.patch(path, data, { timeout });
  },
  GET(path, params) {
    return instance.get(path, {
      params,
      timeout,
    });
  },
  DELETE(path) {
    return instance.delete(path);
  },
};
