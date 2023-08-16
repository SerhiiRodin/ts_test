import { concatenation } from "./concatenation";
import "./example";
import { combine } from "./fnExample";
const button = document.querySelector("button");
const input = document.querySelector("input");
if (button && input) {
    button.addEventListener("click", () => {
        concatenation(input.value, "hello!!");
    });
}
combine(15, "aaa");
//# sourceMappingURL=index.js.map