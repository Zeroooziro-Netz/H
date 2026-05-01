const RESTAURANT_WHATSAPP = "491701234567";
// Hier deine WhatsApp-Nummer eintragen, z.B. 491721234567

const MENU_DATA = {
  "Grill": [
    ["01 Gyros Tasche", "🥙", [["Standard", 6.50]]],
    ["02 Pomm-Gyros", "🍟", [["Standard", 5.00]]],
    ["03 Gyros XL-Pita", "🥙", [["Standard", 10.00]]],
    ["04 Gyros Rolle-Wrap", "🌯", [["Standard", 7.50]]],
    ["05 Gyros Lahmacun", "🍕", [["Standard", 7.50]]],
    ["06 Gyros Portion", "🥩", [["Standard", 10.00]]],
    ["07 Gyros Teller", "🍽️", [["Standard", 10.00]]],
    ["08 Cevapcici Teller", "🍽️", [["Standard", 11.00]]],
    ["09 Grill Teller", "🍽️", [["Standard", 13.00]]],
    ["10 Rebas Spezial Teller", "🍽️", [["Standard", 15.00]]],
    ["11 Souvlaki Teller", "🍢", [["Standard", 11.00]]],
    ["12 Bifteki Teller", "🥩", [["Standard", 11.00]]],
    ["13 Susukit Teller", "🍢", [["Standard", 11.00]]],
    ["14 Puten Teller", "🍗", [["Standard", 11.00]]],
    ["15 Taxi Teller", "🍟", [["Standard", 10.00]]]
  ],
  "Überbacken": [
    ["16 Gyros überbacken", "🧀", [["Standard", 10.00]]],
    ["17 Souvlaki überbacken", "🧀", [["Standard", 11.00]]],
    ["18 Bifteki überbacken", "🧀", [["Standard", 11.00]]],
    ["19 Souzuki überbacken", "🧀", [["Standard", 11.00]]],
    ["20 Schweinesteak überbacken", "🧀", [["Standard", 11.00]]],
    ["21 Putensteak überbacken", "🧀", [["Standard", 11.00]]],
    ["22 Schnitzel überbacken", "🧀", [["Standard", 11.00]]]
  ],
  "Baguette": [
    ["23 Gyros Baguette", "🥖", [["Standard", 7.00]]],
    ["24 Thunfisch Baguette", "🥖", [["Standard", 7.00]]],
    ["25 Salami/Schinken Baguette", "🥖", [["Standard", 7.00]]]
  ],
  "Nudelauflauf": [
    ["26 Gyros Auflauf", "🍝", [["Standard", 9.00]]],
    ["27 Garnelen-Nudel-Auflauf", "🍝", [["Standard", 9.00]]],
    ["28 Chicken Breast Auflauf", "🍝", [["Standard", 9.00]]],
    ["29 Vegetarischer Auflauf", "🍝", [["Standard", 9.00]]]
  ],
  "Pide & Lahmacun": [
    ["30 Pide Hackfleisch", "🥙", [["Standard", 8.00]]],
    ["31 Pide Gouda/Weißkäse", "🥙", [["Standard", 9.00]]],
    ["32 Pide Sucuk", "🥙", [["Standard", 9.00]]],
    ["33 Pide Gyros", "🥙", [["Standard", 10.00]]],
    ["35 Lahmacun", "🍕", [["Standard", 2.50]]],
    ["36 Lahmacun Spezial", "🍕", [["Standard", 6.00]]]
  ],
  "Vegetarisch": [
    ["38 Vegetaria Tasche", "🥗", [["Standard", 5.00]]],
    ["39 Vegetaria Rolle-Dürüm", "🌯", [["Standard", 6.00]]],
    ["40 Falafel Tasche", "🧆", [["Standard", 6.50]]],
    ["41 Falafel Rolle-Dürüm", "🌯", [["Standard", 7.00]]],
    ["42 Falafel Teller", "🥗", [["Standard", 9.00]]]
  ],
  "Schnitzel": [
    ["43 Schnitzel Wiener Art", "🍗", [["Standard", 9.00]]],
    ["44 Paprika Schnitzel", "🍗", [["Standard", 12.00]]],
    ["45 Jägerschnitzel", "🍗", [["Standard", 12.00]]],
    ["46 Hawaii Schnitzel", "🍗", [["Standard", 14.00]]],
    ["47 Putenschnitzel", "🍗", [["Standard", 12.00]]]
  ],
  "Pizza": [
    ["51 Margherita", "🍕", [["Klein", 5.50], ["Groß", 7.50]]],
    ["52 Salami", "🍕", [["Klein", 7.00], ["Groß", 8.00]]],
    ["53 Schinken", "🍕", [["Klein", 7.00], ["Groß", 8.00]]],
    ["54 Funghi", "🍕", [["Klein", 7.00], ["Groß", 8.00]]],
    ["55 Akropolis", "🍕", [["Klein", 7.50], ["Groß", 9.00]]],
    ["56 Italia", "🍕", [["Klein", 7.50], ["Groß", 9.00]]],
    ["57 Spinat", "🍕", [["Klein", 7.00], ["Groß", 8.00]]],
    ["58 Hawaii", "🍕", [["Klein", 7.50], ["Groß", 9.00]]],
    ["59 Tonno", "🍕", [["Klein", 7.00], ["Groß", 9.00]]],
    ["60 Roma", "🍕", [["Klein", 7.50], ["Groß", 10.00]]],
    ["61 Napoli", "🍕", [["Klein", 7.50], ["Groß", 9.00]]],
    ["62 Ankara", "🍕", [["Klein", 8.00], ["Groß", 9.00]]],
    ["63 Pizza Nr. 63", "🍕", [["Klein", 8.00], ["Groß", 10.00]]],
    ["64 Sucuk Pizza", "🍕", [["Klein", 8.00], ["Groß", 10.00]]],
    ["65 Regina", "🍕", [["Klein", 8.50], ["Groß", 10.00]]],
    ["66 Pizza Nr. 66", "🍕", [["Klein", 8.50], ["Groß", 10.00]]],
    ["67 Gyros Pizza", "🍕", [["Klein", 9.00], ["Groß", 11.00]]],
    ["68 Alao", "🍕", [["Klein", 8.00], ["Groß", 9.50]]],
    ["69 Sole", "🍕", [["Klein", 8.50], ["Groß", 10.00]]],
    ["70 Familien & Party Pizza 40x40", "🍕", [["40x40", 23.00]]],
    ["71 Familien & Party Pizza 40x60", "🍕", [["40x60", 35.00]]]
  ],
  "Pizzabrötchen": [
    ["72 Pizzabrötchen", "🥖", [["Standard", 3.50]]],
    ["73 Pizzabrötchen gefüllt mit Salami", "🥖", [["Standard", 6.00]]],
    ["74 Pizzabrötchen mit Peperoni", "🥖", [["Standard", 6.00]]],
    ["75 Pizzabrötchen gefüllt mit Schinken", "🥖", [["Standard", 6.00]]],
    ["76 Pizzabrötchen gefüllt mit Thunfisch", "🥖", [["Standard", 6.00]]],
    ["78 Pizzabrötchen gefüllt mit Gyros", "🥖", [["Standard", 7.00]]],
    ["79 Pizzabrötchen Vegetarisch", "🥖", [["Standard", 7.00]]],
    ["80 Calzone", "🍕", [["Standard", 10.00]]]
  ],
  "Imbiss": [
    ["81 Bratwurst", "🌭", [["Standard", 3.50]]],
    ["82 Currywurst", "🌭", [["Standard", 4.00]]],
    ["83 Paprikawurst", "🌭", [["Standard", 4.00]]],
    ["84 Jägerwurst", "🌭", [["Standard", 4.00]]],
    ["85 Currywurst mit Pommes", "🍟", [["Standard", 7.00]]],
    ["86 Cheeseburger / Hamburger / Chickenburger", "🍔", [["Standard", 5.00]]],
    ["87 Pommes", "🍟", [["Klein", 3.00], ["Groß", 3.50]]],
    ["88 Portion Tzatziki", "🥣", [["Klein", 3.00], ["Groß", 6.00]]],
    ["89 Weinblätter", "🍃", [["Standard", 6.00]]]
  ],
  "Salate": [
    ["90 Gemischter Salat", "🥗", [["Klein", 7.00], ["Groß", 8.00]]],
    ["91 Bauern Salat", "🥗", [["Klein", 6.00], ["Groß", 7.00]]],
    ["92 Tonno Salat", "🥗", [["Klein", 7.50], ["Groß", 9.00]]],
    ["93 Gyros Salat", "🥗", [["Klein", 7.50], ["Groß", 9.00]]],
    ["94 Pollo Salat", "🥗", [["Klein", 7.50], ["Groß", 9.00]]],
    ["95 Hawaii Salat", "🥗", [["Klein", 7.00], ["Groß", 8.00]]]
  ],
  "Saucen": [
    ["96 Ketchup / Mayonnaise", "🥫", [["Standard", 0.50]]],
    ["97 Jägersauce / Paprikasauce", "🥫", [["Standard", 0.50]]],
    ["98 Metaxasauce / Hollandaise", "🥫", [["Standard", 1.00]]]
  ],
  "Getränke": [
    ["99 Cola / Fanta / Sprite / Uludağ", "🥤", [["Dose 0,33l", 2.00]]],
    ["100 Mezzo Mix", "🥤", [["Dose 0,33l", 2.00]]],
    ["101 Cola / Fanta / Sprite / Uludağ", "🥤", [["1,0l", 3.00]]],
    ["102 Ayran", "🥛", [["0,25l", 1.50]]],
    ["103 Bier", "🍺", [["0,5l", 2.50]]]
  ]
};

let currentCategory = "Alle";
let cart = JSON.parse(localStorage.getItem("hso_cart")) || [];

const categories = ["Alle", ...Object.keys(MENU_DATA)];
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");
const categoryTabs = document.getElementById("categoryTabs");
const menuContainer = document.getElementById("menuContainer");
const cartContainer = document.getElementById("cartContainer");
const totalPrice = document.getElementById("totalPrice");

function euro(value) { return value.toFixed(2).replace(".", ",") + " €"; }
function toast(text) {
  const box = document.getElementById("toast");
  box.textContent = text;
  box.style.display = "block";
  setTimeout(() => box.style.display = "none", 2300);
}

function init() {
  categorySelect.innerHTML = categories.map(c => `<option>${c}</option>`).join("");
  categoryTabs.innerHTML = categories.map(c => `
    <div class="tab ${c === currentCategory ? "active" : ""}" onclick="setCategory('${c}')">${c}</div>
  `).join("");
  renderMenu();
  renderCart();
  renderCustomers();
}

function setCategory(category) { currentCategory = category; categorySelect.value = category; init(); }
categorySelect.addEventListener("change", e => { currentCategory = e.target.value; init(); });
searchInput.addEventListener("input", renderMenu);

function getItems() {
  let all = [];
  Object.entries(MENU_DATA).forEach(([category, items]) => {
    items.forEach(item => all.push({ category, name: item[0], emoji: item[1], prices: item[2] }));
  });
  const q = searchInput.value.toLowerCase().trim();
  return all.filter(item => (currentCategory === "Alle" || item.category === currentCategory) && item.name.toLowerCase().includes(q));
}

function renderMenu() {
  const items = getItems();
  menuContainer.innerHTML = items.map(item => `
    <div class="menu-item">
      <div class="item-head">
        <div class="emoji">${item.emoji}</div>
        <div><h3>${item.name}</h3><small>${item.category}</small></div>
      </div>
      <div class="price-row">
        ${item.prices.map(p => `
          <button class="price-btn" onclick="addToCart('${escapeText(item.name)}','${escapeText(p[0])}',${p[1]})">
            ${p[0]} · ${euro(p[1])}
          </button>
        `).join("")}
      </div>
    </div>
  `).join("");
}

function escapeText(text) { return String(text).replaceAll("'", "\\'"); }
function addToCart(name, size, price) {
  const existing = cart.find(i => i.name === name && i.size === size);
  if (existing) existing.qty++; else cart.push({ name, size, price, qty: 1 });
  saveCart(); renderCart(); toast("Zum Warenkorb hinzugefügt");
}
function changeQty(index, amount) { cart[index].qty += amount; if (cart[index].qty <= 0) cart.splice(index, 1); saveCart(); renderCart(); }
function clearCart() { cart = []; saveCart(); renderCart(); }
function saveCart() { localStorage.setItem("hso_cart", JSON.stringify(cart)); }

function renderCart() {
  if (!cart.length) { cartContainer.innerHTML = `<div class="cart-item">Noch keine Gerichte ausgewählt.</div>`; totalPrice.textContent = euro(0); return; }
  cartContainer.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <div><div class="cart-title">${item.name}</div><div class="cart-meta">${item.size} · ${euro(item.price)} · ${item.qty}x</div></div>
      <div class="qty"><button onclick="changeQty(${index},-1)">−</button><strong>${item.qty}</strong><button onclick="changeQty(${index},1)">+</button></div>
    </div>
  `).join("");
  totalPrice.textContent = euro(cart.reduce((sum, item) => sum + item.price * item.qty, 0));
}

function getCustomerData() {
  return {
    name: document.getElementById("customerName").value.trim(),
    phone: document.getElementById("customerPhone").value.trim(),
    zip: document.getElementById("customerZip").value.trim(),
    address: document.getElementById("customerAddress").value.trim(),
    notes: document.getElementById("orderNotes").value.trim()
  };
}
function saveCustomer() {
  const customer = getCustomerData();
  if (!customer.name || !customer.phone || !customer.address) { toast("Name, Telefon und Adresse ausfüllen"); return; }
  const customers = JSON.parse(localStorage.getItem("hso_customers")) || [];
  const existingIndex = customers.findIndex(c => c.phone === customer.phone);
  if (existingIndex >= 0) customers[existingIndex] = customer; else customers.push(customer);
  localStorage.setItem("hso_customers", JSON.stringify(customers)); renderCustomers(); toast("Stammkunde gespeichert");
}
function renderCustomers() {
  const customers = JSON.parse(localStorage.getItem("hso_customers")) || [];
  const box = document.getElementById("savedCustomers");
  if (!customers.length) { box.innerHTML = `<div class="customer">Noch keine Stammkunden gespeichert.</div>`; return; }
  box.innerHTML = customers.map((c, index) => `<div class="customer" onclick="loadCustomer(${index})"><strong>${c.name}</strong><br><small>${c.phone} · ${c.zip} ${c.address}</small></div>`).join("");
}
function loadCustomer(index) {
  const customers = JSON.parse(localStorage.getItem("hso_customers")) || [];
  const c = customers[index];
  document.getElementById("customerName").value = c.name;
  document.getElementById("customerPhone").value = c.phone;
  document.getElementById("customerZip").value = c.zip;
  document.getElementById("customerAddress").value = c.address;
  document.getElementById("orderNotes").value = c.notes || "";
  toast("Stammkunde geladen");
}
function clearCustomerForm() {
  document.getElementById("customerName").value = "";
  document.getElementById("customerPhone").value = "";
  document.getElementById("customerZip").value = "40764";
  document.getElementById("customerAddress").value = "";
  document.getElementById("orderNotes").value = "";
}
function sendWhatsApp() {
  const c = getCustomerData();
  if (!c.name || !c.phone || !c.address) { toast("Kundendaten fehlen"); return; }
  if (!cart.length) { toast("Warenkorb ist leer"); return; }
  const orderLines = cart.map(item => `${item.qty}x ${item.name} (${item.size}) - ${euro(item.price * item.qty)}`).join("\n");
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const message = `Neue Bestellung - Hso‘s Gyros\n\nKunde:\nName: ${c.name}\nTelefon: ${c.phone}\nAdresse: ${c.zip} ${c.address}\n\nBestellung:\n${orderLines}\n\nGesamt: ${euro(total)}\n\nNotizen:\n${c.notes || "-"}`;
  window.open(`https://wa.me/${RESTAURANT_WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank");
}

let addressTimer;
document.getElementById("customerAddress").addEventListener("input", function () {
  clearTimeout(addressTimer);
  const query = this.value.trim();
  if (query.length < 3) { hideSuggestions(); return; }
  addressTimer = setTimeout(() => searchAddress(query), 450);
});
async function searchAddress(query) {
  const zip = document.getElementById("customerZip").value.trim() || "40764";
  const url = `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&limit=6&countrycodes=de&street=${encodeURIComponent(query)}&city=${encodeURIComponent("Langenfeld")}&postalcode=${encodeURIComponent(zip)}`;
  try {
    const response = await fetch(url, { headers: { "Accept": "application/json" } });
    const data = await response.json();
    const filtered = data.filter(item => {
      const a = item.address || {};
      const city = a.city || a.town || a.village || "";
      return city.toLowerCase().includes("langenfeld");
    });
    showSuggestions(filtered);
  } catch (error) { console.error(error); toast("Adresssuche aktuell nicht erreichbar"); }
}
function showSuggestions(results) {
  const box = document.getElementById("addressSuggestions");
  if (!results.length) { box.innerHTML = `<div>Keine Adresse gefunden</div>`; box.style.display = "block"; return; }
  box.innerHTML = results.map(item => {
    const a = item.address || {};
    const street = a.road || "";
    const house = a.house_number || "";
    const postcode = a.postcode || "40764";
    const city = a.city || a.town || "Langenfeld";
    const text = `${street} ${house}`.trim();
    return `<div onclick="selectAddress('${escapeText(text)}','${escapeText(postcode)}')">${postcode} ${text}, ${city}</div>`;
  }).join("");
  box.style.display = "block";
}
function selectAddress(address, zip) { document.getElementById("customerAddress").value = address; document.getElementById("customerZip").value = zip || "40764"; hideSuggestions(); }
function hideSuggestions() { document.getElementById("addressSuggestions").style.display = "none"; }
document.addEventListener("click", e => { if (!e.target.closest(".address-wrap")) hideSuggestions(); });

init();
