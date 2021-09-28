import MyLibrary, { DoSomething, DoSomethingAsync } from "./my_library.js";

MyLibrary();

(async function init() {
  await DoSomething();
  await DoSomethingAsync();
})();