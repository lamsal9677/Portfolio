<template>
  <div>
    <img
      src="https://i.imgur.com/28HKaOq.png"
      alt="Contact me"
      id="headerImg"
    />
    <div class="grid-container-main">
      <div class="grid-container">
        <div class="grid-item">
          <img
            src="https://i.imgur.com/1WrvbjM.png"
            alt=""
            height="30rem"
            width="30rem"
            style="margin: 1rem;"
          />
          Location: Toledo, OH
        </div>
        <div class="grid-item">
          <img
            src="https://i.imgur.com/gneDrBn.png"
            alt=""
            height="30rem"
            width="30rem"
            style="margin: 1rem;"
          />Email: slamsal@rockets.utoledo.edu
        </div>
        <div class="grid-item">
          <img
            src="https://i.imgur.com/VxCnOgh.png"
            alt=""
            height="30rem"
            width="30rem"
            style="margin: 1rem;"
          />LinkedIn: In/Lamsal9677
        </div>
        <div class="grid-item"></div>
        <div class="grid-item"></div>
      </div>
      <div class="grid-container">
        <div class="grid-item">
          <input
            type="name"
            class="grid-textbox"
            style="width: 75%"
            placeholder="Name"
          />
        </div>
        <div class="grid-item">
          <input
            type="email"
            class="grid-textbox"
            style="width: 75%"
            placeholder="Email"
          />
        </div>
        <div class="grid-item">
          <textarea
            class="grid-textbox"
            rows="4"
            cols="50"
            placeholder="Message"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#headerImg {
  width: 30rem;
  height: 7.5rem;
  display: flex;
  margin: auto;
}
.grid-container-main {
  margin-top: 2%;
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 10px;
}
.grid-container {
  display: grid;
  grid-template-columns: auto;
  padding: 10px;
}
.grid-item {
  padding: 20px;
}
.grid-textbox {
  width: 100%;
  border: 0px none;
  border-bottom: 2px solid;
  background-color: inherit;
}
.grid-textbox:focus {
  width: 100%;
  border: 0px none;
  border-bottom: 3px solid black;
  outline: none;
}
</style>
