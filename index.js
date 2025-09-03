const userToggle = document.getElementById("user-toggle");
const label = document.querySelector('label[for="user-toggle"]');

window.addEventListener("click", (e) => {
  if (
    !label.contains(e.target) &&
    !document.getElementById("user-toggle").contains(e.target)
  ) {
    userToggle.checked = false;
  }
});
AOS.init({
  duration: 2000,
  once: true,
});
const scrollContainer = document.getElementById("scrollContainer");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

function updateArrows() {
  leftBtn.classList.toggle("hidden", scrollContainer.scrollLeft <= 0);
  rightBtn.classList.toggle(
    "hidden",
    scrollContainer.scrollLeft + scrollContainer.clientWidth >=
      scrollContainer.scrollWidth - 1
  );
}

rightBtn.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
});
leftBtn.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
});

scrollContainer.addEventListener("scroll", updateArrows);
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const productKey = params.get("product");

  const products = {
    OasisShirt: {
      name: "Oasis Shirt Limited Edition",
      price: "₱1,820.47",
      image: "images/oasis.png",
      description: "Limited edition Oasis shirt for true fans.",
      rating: 5,
    },
    NoelGuitar: {
      name: "Noel Gallagher Riviera Dark Wine Red",
      price: "₱51,143.79",
      image: "images/guitar.png",
      description: "Premium guitar inspired by Noel Gallagher.",
      rating: 5,
    },
    AdidasDame7: {
      name: "Adidas Dame 7",
      price: "₱6,000",
      image: "images/H68986.png",
      description: "High-performance basketball shoes by Adidas.",
      rating: 4.5,
    },
  };

  const product = products[productKey];

  if (product) {
    document.getElementById("product-container").innerHTML = `
                <div>
                    <img src="${product.image}" alt="${
      product.name
    }" class="w-full h-[400px] object-contain">
                </div>
                <div>
                    <h1 class="text-3xl font-bold mb-2">${product.name}</h1>
                    <p class="text-2xl font-semibold text-green-600 mb-4">${
                      product.price
                    }</p>
                    <div class="flex mb-4">
                        ${renderStars(product.rating)}
                    </div>
                    <p class="text-gray-700 mb-6">${product.description}</p>
                    <button class="bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-yellow-600 transition">Add to Cart</button>
                </div>
            `;

    const related = Object.entries(products).filter(
      ([key]) => key !== productKey
    );
    related.forEach(([key, item]) => {
      document.getElementById("related-container").innerHTML += `
                    <div class="bg-white h-[400px] w-[250px] flex-shrink-0 p-2 border-2 border-transparent hover:border-gray-900 snap-center cursor-pointer"
                         onclick="window.location.href='product.html?product=${key}'">
                        <img src="${item.image}" alt="${
        item.name
      }" class="h-[280px] mx-auto mb-6">
                        <p class="font-bold">${item.price}</p>
                        <h3 class="text-[17px]">${item.name}</h3>
                        <div class="flex">
                            ${renderStars(item.rating)}
                        </div>
                    </div>
                `;
    });
  } else {
    document.getElementById("product-container").innerHTML =
      "<p>Product not found.</p>";
  }
});

function renderStars(rating) {
  let starsHTML = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      starsHTML += `<i class="fa fa-star text-yellow-400 text-[15px]"></i>`;
    } else if (i - rating < 1) {
      starsHTML += `<i class="fa fa-star-half-alt text-yellow-400 text-[15px]"></i>`;
    } else {
      starsHTML += `<i class="fa fa-star text-gray-300 text-[15px]"></i>`;
    }
  }
  return starsHTML;
}
