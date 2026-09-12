exports.logger = {
  info(message, extra) {
    console.log(JSON.stringify({ level: "info", message, extra }));
  },
  error(message, extra) {
    console.error(JSON.stringify({ level: "error", message, extra }));
  },
};
