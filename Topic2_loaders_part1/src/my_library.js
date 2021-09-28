const MyLibrary = () => {
  console.log("Hello World")
}

const DoSomething = () => {
  console.log("Doing something...");
}

const DoSomethingAsync = () => {
  console.log("Doing something async...");
}

export default MyLibrary;
export { 
  DoSomething, 
  DoSomethingAsync
}