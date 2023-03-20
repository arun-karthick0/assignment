const menu = [
  {
    id: 1,
    title: "Jerry sandwitchs",
    category: "breakfast",
    price: 13.3,
    img: "https://assets3.thrillist.com/v1/image/1202445/1584x1056/crop;jpeg_quality=60;progressive.jpg",
    desc: `kskc scnkosjmcolsjc mnsdcojsodcjsodc ososjdclsmdcj jcfojsofpgp koefkpekf `,
  },
  {
    id: 2,
    title: "little goat",
    category: "lunch",
    price: 17,
    img: "https://assets3.thrillist.com/v1/image/1202448/1584x1054/crop;jpeg_quality=60.jpg",
    desc: `dofjidf hnfishfi9sjf fjidfo9wsjdowd dfhishfiosjfosf fhnishf0pwifpwrj  j0owidf0prfwr `,
  },
  {
    id: 3,
    title: "big star",
    category: "breakfast",
    price: 18.2,
    img: "https://assets3.thrillist.com/v1/image/1202438/1584x1054/crop;jpeg_quality=60.jpg",
    desc: `skisdf wdfjwifwsfnkwsf fjo9wsfuo9dfjowsd fo9ujf0wifowejkfklwefwe fjwoifu0wqfowqpfkwqeklf ioeujf0owefjkpowefk.`,
  },
  {
    id: 4,
    title: "fat rice",
    category: "breakfast",
    price: 60.2,
    img: "https://assets3.thrillist.com/v1/image/1202443/1584x1054/crop;jpeg_quality=60.jpg",
    desc: `sfiedfn edfjiejfe fjofuje0ofjkp0wqefi-3 nefeof0euf0ef wqemfeiofj0qeoifpwqf iowjfq0ofgp-0efgeg `,
  },
  {
    id: 5,
    title: "XOCO",
    category: "lunch",
    price: 37.2,
    img: "https://assets3.thrillist.com/v1/image/1202749/1584x1054/crop;jpeg_quality=60.jpg",
    desc: `cjishcfiscf scfjiosjfo9sjds dksniodj0wodfpqf fiwjfpoqjfpoqf fnciowqjpoqjfpoejfcpoj fiojfopqcfjacfef `,
  },
  {
    id: 6,
    title: "koffee brick",
    category: "drinks",
    price: 4.5,
    img: "https://img.theculturetrip.com/768x/smart/wp-content/uploads/2018/07/coffee-608968_1280.jpg",
    desc: `fikdjfioedf ndfjojf0ojfode fksjf0oefp[0wqflq mf qfopqfpqpqjfiqfnmksfkqnfwqf qfiowqejhfipoqejfpowqefwqe]`,
  },
  {
    id: 7,
    title: "owen",
    category: "breakfast",
    price: 6.43,
    img: "https://assets3.thrillist.com/v1/image/1203665/1280x1920/scale;webp=auto;jpeg_quality=60.jpg",
    desc: `ksdjfsdfsd fsnfsiojfocsjcfs fsnofijdfpwsd fwsfmnosjdfpowsdf wsdfjwsodfjjkdfpdf sdfjojdfpowjkdfpwsfwsnfikjfojdf smndfodfjowsdf `,
  },
  {
    id: 8,
    title: "SUNDA",
    category: "lunch",
    price: 57.4,
    img: "https://assets3.thrillist.com/v1/image/1202748/1584x1054/crop;jpeg_quality=60.jpg",
    desc: `feikfjiosf nfkwjfojwofw fwfowjf0ojkwpdf w,dfowjfp0wf w,fnwiojfowfp-wrfpwklrp[wikwef mwfowejwoeprfkwpf sndfihnwsiofwsf  `,
  },
  {
    id: 9,
    title: "cafe",
    category: "drinks",
    price: 3.4,
    img: "https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2018/07/rsz_beverage-cafe-caffeine-433228.jpg",
    desc: `sjkfhnisjhfd fswnfiwshwdf wsmdfihdfwsdfws ndfwidfhwiodfjhdfjowjfwsnf fwfo9wjfowqfjsfve`,
  },
  {
    id: 10,
    title: "coalfire pizza",
    category: "dinner",
    price: 70.4,
    img: "https://assets3.thrillist.com/v1/image/1202440/1584x1054/crop;jpeg_quality=60.jpg",
    desc: `scfnjksfnscf  sdfhisfhs dsjfiosjocfijscf siosjfo9sfosds ifjhewifgjpjf fqsjpofjsapof;mfsad, fqeiogepotefged g.`,
  },
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
  });
  displayMenu = displayMenu.join("");
  console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const category = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
    })
    .join("");

  btnContainer.innerHTML = category;
  const filter = btnContainer.querySelectorAll(".filter-btn");
  console.log(filter);

  filter.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  })
}
