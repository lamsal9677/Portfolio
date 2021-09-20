<template>
  <div>
    <h2>Work Experience</h2>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <WorkExp
            id="compsize"
            positionName="IT Student Asistant"
            nameOfEmployer="The University of Toledo"
            dateEmployed="September 2019 to Present"
            logoSrc="https://i.imgur.com/pHRraZh.jpg"
          />
        </b-col>
        <b-col>
          <WorkExp
            id="compsize"
            positionName="Front-end Web Developer Intern"
            nameOfEmployer="Unum"
            dateEmployed="June 2021 to August 2021"
            logoSrc="https://i.imgur.com/yul3lGU.jpeg"
          />
        </b-col>
        <b-col>
          <WorkExp
            id="compsize"
            positionName="Application Developer & IT Intern"
            nameOfEmployer="Plastic Technologies Inc."
            dateEmployed="January 2021 to May 2021"
            logoSrc="https://i.imgur.com/w2QVrdp.png"
          />
        </b-col>
      </b-row>
    </b-container>
    <br />
    <h2>Projects</h2>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <Proj id="compsize" />
        </b-col>
        <b-col>
          <Proj id="compsize" />
        </b-col>
        <b-col>
          <Proj id="compsize" />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <Proj id="compsize" />
        </b-col>
        <b-col>
          <Proj id="compsize" />
        </b-col>
        <b-col>
          <Proj id="compsize" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import WorkExp from "../components/WorkExperience/workExp";
import Proj from "../components/Projects/proj";

export default {
  name: "works",
  components: {
    WorkExp,
    Proj,
  },
};
</script>

<style scoped>
#compsize {
  background-color: white;
  height: 350px;
  width: 350px;
  border-radius: 5%;
  margin: auto;
  margin-bottom: 20px;
  border: 2px, red;
  box-shadow: 2px 2px 3px #999;
}
</style>
