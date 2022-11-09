import ColaGenerator from "./components/colaGenerator.js";
import Vendingmachine from "./components/vendingmachine.js";

const colaGenerator = new ColaGenerator();
const vendingmachine = new Vendingmachine();

// https://v8.dev/features/top-level-await
// await이 탑레벨에서 작동하긴 하는데, await의 대상이 async여야 함!!!!!!!!!
await colaGenerator.setup();
vendingmachine.setup();