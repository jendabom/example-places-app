/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "My Random Places!",
      places: [], 
      newPlace: {name: "", address: ""}, 
      errors: []
    };
  },
  created: function() {
    axios.get("http://localhost:3000/places").then(function(response) {
      this.places = response.data;
    }.bind(this));
  },
  methods: {
    addPlace: function() {
      var params = {
        inputName: this.newPlace.name, 
        inputAddress: this.newPlace.address
      };
      axios.post("/places", params).then(function(response) {
        this.places.push(response.data);
        this.newPlace = {name: "", address: ""};
        this.errors = [];
      }.bind(this)).catch(function(error) {
        console.log(error.response.data.errors);
        this.errors = error.response.data.errors;
      }.bind(this));
    }
  },
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});