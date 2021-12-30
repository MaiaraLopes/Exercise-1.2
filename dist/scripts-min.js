let pokemonRepository = (function () {
  let t = [],
    e = "https://pokeapi.co/api/v2/pokemon/?limit=150";
  function n(e) {
    t.push(e);
  }
  function o(t) {
    let e = t.detailsUrl;
    return fetch(e)
      .then(function (t) {
        return t.json();
      })
      .then(function (e) {
        (t.imageUrlFront = e.sprites.front_default),
          (t.imageUrlBack = e.sprites.back_default),
          (t.height = e.height);
      })
      .catch(function (t) {
        console.error(t);
      });
  }
  function a(t) {
    o(t).then(function () {
      i(t);
    });
  }
  function i(t) {
    let e = $(".modal-body"),
      n = $(".modal-title");
    n.empty(), e.empty();
    let o = $('<h1 class="text-capitalize">' + t.name + "</h1>"),
      a = $(
        '<img class="modal-img" style="width:50%" alt="' +
          t.name +
          ' front image">'
      );
    a.attr("src", t.imageUrlFront);
    let i = $(
      '<img class="modal-img" style="width:50%" alt="' +
        t.name +
        ' back image">'
    );
    i.attr("src", t.imageUrlBack);
    let l = $("<p>Height: " + 10 * t.height + " cm</p>");
    n.append(o), e.append(a), e.append(i), e.append(l);
  }
  return {
    add: n,
    getAll: function () {
      return t;
    },
    addListItem: function (t) {
      let e = document.querySelector(".pokemon-list"),
        n = document.createElement("li"),
        o = document.createElement("button");
      (o.dataset.target = "#exampleModalCenter"),
        (o.dataset.toggle = "modal"),
        (o.innerText = t.name),
        o.classList.add("btn-outline-info", "text-capitalize", "button-class"),
        n.classList.add("list-group-item"),
        o.addEventListener("click", function () {
          a(t);
        }),
        n.appendChild(o),
        e.appendChild(n);
    },
    loadList: function () {
      return fetch(e)
        .then(function (t) {
          return t.json();
        })
        .then(function (t) {
          t.results.forEach(function (t) {
            n({ name: t.name, detailsUrl: t.url });
          });
        })
        .catch(function (t) {
          console.error(t);
        });
    },
    loadDetails: o,
    showDetails: a,
    showModal: i,
  };
})();
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (t) {
    pokemonRepository.addListItem(t);
  });
});
