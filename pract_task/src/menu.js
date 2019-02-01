class Menu {

  constructor(options,btnToggle,btnopen,btnClose) {
    this.btnTog=btnToggle;
    this.btnOp=btnopen;
    this.btnCl=btnClose;
    this.elem="";

  getElem() {
    if (!this.elem) {
      this.render();
    }
    return this.elem;
  }

  render() {
    this.elem = document.createElement("div");
    this.elem.className = "menu";

    let titleElem = document.createElement("span");
    this.elem.appendChild(titleElem);
    titleElem.className = "title";
    titleElem.textContent = this.options.title;

    this.elem.onmousedown = function() {
      return false;
    };

    this.elem.onclick = (event) => {
      if (event.target.closest(".title")) {
        this.toggle();
      }
    }
    this.btnTog.onclick = (event) => {
        this.toggle();
    }
    this.btnOp.onclick = (event) => {
        this.open();
    }
    this.btnCl.onclick = (event) => {
        this.close();
    }
  }

  renderItems() {
    let items = this.options.items || [];
    let list = document.createElement("ul");
    items.forEach(function(item) {
      let li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
    this.elem.appendChild(list);
  }

  open() {
    if (!this.elem.querySelector("ul")) {
      this.renderItems();
    }
    this.elem.classList.add("open");
  }

  close() {
    this.elem.classList.remove("open");
  }

  toggle() {
    this.elem.classList.contains("open") ? this.close() : this.open();
  }
}

var btnToggle = document.createElement("button");
var textInBtn = document.createTextNode("menu1.toggle()");
btnToggle.appendChild(textInBtn);
document.body.appendChild(btnToggle);
btnOpen = document.createElement("button");
textInBtn = document.createTextNode("menu1.open()");
btnOpen.appendChild(textInBtn);
document.body.appendChild(btnOpen);
btnClose = document.createElement("button");
textInBtn = document.createTextNode("menu1.close()");
btnClose.appendChild(textInBtn);
document.body.appendChild(btnClose);
var menu = new Menu({
  title: "Сладости",
  items: [
    "Торт",
    "Пончик",
    "Пирожное",
    "Шоколадка",
    "Мороженое"
  ]

},btnToggle,btnOpen,btnClose);

function clone(){
var btnToggle = document.createElement("button");
var textInBtn = document.createTextNode("menu1.toggle()");
btnToggle.appendChild(textInBtn);
document.body.appendChild(btnToggle);
btnOpen = document.createElement("button");
textInBtn = document.createTextNode("menu1.open()");
btnOpen.appendChild(textInBtn);
document.body.appendChild(btnOpen);
btnClose = document.createElement("button");
textInBtn = document.createTextNode("menu1.close()");
btnClose.appendChild(textInBtn);
document.body.appendChild(btnClose);

});

function clone(){

  var menu1 = new Menu({
    title: "Сладости",
    items: [
      "Торт",
      "Пончик",
      "Пирожное",
      "Шоколадка",
      "Мороженое"
    ]
  },btnToggle,btnOpen,btnClose);
  document.body.appendChild(menu1.getElem());
}
  });
  var btn = document.createElement("button");
var textInBtn = document.createTextNode("menu1.toggle()");
btn.appendChild(textInBtn);
btn.setAttribute("onclick","menu1.toggle()")
  document.body.appendChild(btn);
btn = document.createElement("button");
textInBtn = document.createTextNode("menu1.open()");
btn.appendChild(textInBtn);
btn.setAttribute("onclick","menu1.open()")
  document.body.appendChild(btn);
btn = document.createElement("button");
textInBtn = document.createTextNode("menu1.close()");
btn.appendChild(textInBtn);
btn.setAttribute("onclick","menu1.close()")
  document.body.appendChild(btn);

  document.body.appendChild(menu1.getElem());
}
document.body.appendChild(menu.getElem());
