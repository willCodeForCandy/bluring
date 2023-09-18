const bgImg = document.createElement("div");
bgImg.className = "bg-image";
document.body.prepend(bgImg);
const container = document.createElement("div");
container.className = "login-container";

container.innerHTML = `
<h1>Password Strength Checker</h1>
<div><label for="username">Username</label>
<input type="text" name="username" id="username"></div>
<div><label for="password">Password</label>
<input type="password" name="password" id="password">
</div>
<button>Submit</button>
`;

document.body.append(container);
const blurBackground = (event) => {
  password = event.target.value;
  bgImg.style.filter = `blur(${password.length}px)`;
};
document.querySelector("#password").addEventListener("input", blurBackground);
