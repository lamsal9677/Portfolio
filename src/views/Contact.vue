<template>
  <div>
    <img
      src="https://i.imgur.com/28HKaOq.png"
      alt="Contact me"
      id="headerImg"
    />
    <div class="grid-container-main">
      <div class="grid-container">
        <div class="grid-item">Get In Touch</div>
        <div class="grid-item">LinkedIn</div>
        <div class="grid-item">GitHub</div>
        <div class="grid-item">Email</div>
      </div>
      <div class="grid-container">
        <div class="grid-item">Contact Form</div>
        <div class="grid-item">
          <input
            type="text"
            class="grid-textbox"
            style="width: 50%"
            placeholder="Name"
          />
        </div>
        <div class="grid-item">
          <input
            type="text"
            class="grid-textbox"
            style="width: 50%"
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
  border: 0px none;
  border-bottom: 2px solid;
}
</style>
