// =========================================================
// 1. БАЗА МЕНЮ ZERNO.BAR (РЕАЛЬНІ ВІДПОВІДНІ ФОТО + РОЗМІРИ)
// =========================================================
const DEFAULT_MENU = [
  {
    id: 'espresso',
    name: 'Подвійний Еспресо',
    category: 'coffee',
    categoryLabel: 'Класична кава',
    hasMilk: false,
    desc: 'Насичений шот 100% арабіки Бразилія Можіана з нотами темного шоколаду та лісового горіха.',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80',
    sizes: [
      { label: 'S • 60 мл', price: 55 },
      { label: 'M • 90 мл', price: 65 }
    ]
  },
  {
    id: 'cappuccino',
    name: 'Капучино',
    category: 'coffee',
    categoryLabel: 'Класична кава',
    hasMilk: true,
    desc: 'Класичний баланс еспресо та шовковистої молочної пінки з ніжним карамельним післясмаком.',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80',
    sizes: [
      { label: 'S • 200 мл', price: 70 },
      { label: 'M • 300 мл', price: 85 },
      { label: 'L • 400 мл', price: 95 }
    ]
  },
  {
    id: 'flatwhite',
    name: 'Флет Вайт',
    category: 'coffee',
    categoryLabel: 'Класична кава',
    hasMilk: true,
    desc: 'Подвійний еспресо з тонким шаром мікропіни для тих, хто любить виразний кавовий смак.',
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=80',
    sizes: [
      { label: 'S • 200 мл', price: 80 },
      { label: 'M • 260 мл', price: 95 }
    ]
  },
  {
    id: 'caramel-latte',
    name: 'Солоний Карамельний Лате',
    category: 'signature',
    categoryLabel: 'Авторський напій',
    hasMilk: true,
    desc: 'Ніжний лате з домашньою вершковою карамеллю та дрібкою морської солі.',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80',
    sizes: [
      { label: 'M • 300 мл', price: 95 },
      { label: 'L • 400 мл', price: 110 }
    ]
  },
  {
    id: 'matcha-latte',
    name: 'Матча Лате',
    category: 'signature',
    categoryLabel: 'Авторський напій',
    hasMilk: true,
    desc: 'Японський церемоніальний зелений чай матча, збитий із теплим молоком.',
    image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=800&q=80',
    sizes: [
      { label: 'S • 250 мл', price: 95 },
      { label: 'M • 350 мл', price: 110 }
    ]
  },
  {
    id: 'citrus-raf',
    name: 'Раф Цитрус-Ваніль',
    category: 'signature',
    categoryLabel: 'Авторський напій',
    hasMilk: false,
    desc: 'Вершковий кавовий напій, збитий із натуральною мадагаскарською ваніллю та цедрою апельсина.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    sizes: [
      { label: 'M • 300 мл', price: 105 },
      { label: 'L • 400 мл', price: 120 }
    ]
  },
  {
    id: 'tiramisu',
    name: 'Класичний Тірамісу',
    category: 'desserts',
    categoryLabel: 'Десерт',
    hasMilk: false,
    desc: 'Італійський десерт із печивом савоярді, просоченим нашим еспресо, ніжним сиром маскарпоне та какао.',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80',
    sizes: [
      { label: 'Стандарт • 160 г', price: 125 },
      { label: 'Велика • 240 г', price: 165 }
    ]
  },
  {
    id: 'almond-croissant',
    name: 'Мигдалевий Круасан',
    category: 'desserts',
    categoryLabel: 'Випічка',
    hasMilk: false,
    desc: 'Хрусткий французький круасан на вершковому маслі з ніжним мигдалевим кремом франжипан.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    sizes: [
      { label: '1 шт • 130 г', price: 95 }
    ]
  },
  {
    id: 'basque-cheesecake',
    name: 'Баскський Чізкейк',
    category: 'desserts',
    categoryLabel: 'Десерт',
    hasMilk: false,
    desc: 'Карамелізований зовні та кремовий усередині чізкейк Сан-Себастьян з вершкового сиру.',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80',
    sizes: [
      { label: 'Порція • 170 г', price: 130 }
    ]
  },
  {
    id: 'syrnyky',
    name: 'Сирники з ягідним конфітюром',
    category: 'desserts',
    categoryLabel: 'Сніданок',
    hasMilk: false,
    desc: 'Румяні фермерські сирники зі сметаною, свіжими ягодами та домашнім ягідним соусом.',
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80',
    sizes: [
      { label: '2 шт • 220 г', price: 135 },
      { label: '3 шт • 320 г', price: 175 }
    ]
  }
];

// =========================================================
// 2. СТАН ДОДАТКУ (ЗБЕРЕЖЕННЯ В LOCALSTORAGE)
// =========================================================
const STORAGE_KEYS = {
  stoplist: 'zernobar_stoplist_v1',
  preorders: 'zernobar_preorders_v1',
  bookings: 'zernobar_bookings_v1'
};

function getTodayISO() {
  const now = new Date();
  const offset = now.getTimezoneOffset();
  const local = new Date(now.getTime() - offset * 60 * 1000);
  return local.toISOString().split('T')[0];
}

let stopList = JSON.parse(localStorage.getItem(STORAGE_KEYS.stoplist)) || {};

let preorders = JSON.parse(localStorage.getItem(STORAGE_KEYS.preorders)) || [
  {
    id: 'ZB-101',
    customerName: 'Ірина',
    phone: '068 321 44 10',
    pickupTime: 'Через 15 хвилин',
    items: 'Капучино (M • 300 мл) × 1, Мигдалевий Круасан × 1',
    total: 180,
    status: 'Готується'
  }
];

let tableBookings = JSON.parse(localStorage.getItem(STORAGE_KEYS.bookings)) || [
  {
    id: 'TBL-201',
    date: getTodayISO(),
    time: '12:00',
    tableId: '2',
    tableName: 'Стіл №2',
    zone: 'Біля панорамного вікна',
    guests: '2 гості',
    guestName: 'Максим',
    phone: '097 554 12 89',
    notes: 'Біля вікна'
  }
];

let cart = [];
let activeCategory = 'all';
let selectedTable = null;

function saveState() {
  localStorage.setItem(STORAGE_KEYS.stoplist, JSON.stringify(stopList));
  localStorage.setItem(STORAGE_KEYS.preorders, JSON.stringify(preorders));
  localStorage.setItem(STORAGE_KEYS.bookings, JSON.stringify(tableBookings));
}

// =========================================================
// 3. ВІДОБРАЖЕННЯ КАРТОК МЕНЮ ТА РОЗМІРІВ ПОРЦІЙ
// =========================================================
const menuGrid = document.getElementById('menu-grid');

function createFallbackSvg(title) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
    <rect width="800" height="500" fill="#EFE8DF"/>
    <circle cx="400" cy="220" r="54" fill="#8B5A2B" opacity="0.18"/>
    <text x="400" y="315" font-family="sans-serif" font-size="26" font-weight="bold" fill="#261A14" text-anchor="middle">${title}</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function renderMenu() {
  menuGrid.innerHTML = '';

  const filtered = DEFAULT_MENU.filter((item) => {
    return activeCategory === 'all' || item.category === activeCategory;
  });

  filtered.forEach((item) => {
    const isSoldOut = Boolean(stopList[item.id]);
    const card = document.createElement('article');
    card.className = `menu-card ${isSoldOut ? 'sold-out' : ''}`;

    const sizesHtml = item.sizes
      .map(
        (s, idx) => `
        <button type="button" class="size-pill ${idx === 0 ? 'active' : ''}" data-size-idx="${idx}">
          ${s.label}
        </button>`
      )
      .join('');

    const milkHtml = item.hasMilk
      ? `<select class="milk-select">
           <option value="0" data-label="Звичайне молоко">Звичайне молоко</option>
           <option value="15" data-label="Безлактозне молоко">Безлактозне молоко (+15 грн)</option>
           <option value="20" data-label="Кокосове молоко">Кокосове молоко (+20 грн)</option>
         </select>`
      : '';

    card.innerHTML = `
      <div class="menu-photo-wrap">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        <span class="menu-cat-tag">${item.categoryLabel}</span>
        ${isSoldOut ? '<div class="sold-out-banner">Тимчасово закінчилось</div>' : ''}
      </div>
      <div class="menu-card-body">
        <div>
          <h3>${item.name}</h3>
          <p class="menu-item-desc">${item.desc}</p>
        </div>
        <div>
          <div class="size-selector">${sizesHtml}</div>
          ${milkHtml}
          <div class="menu-card-footer">
            <span class="item-price">${item.sizes[0].price} грн</span>
            <button type="button" class="add-to-cart-btn" ${isSoldOut ? 'disabled' : ''}>
              ${isSoldOut ? 'Немає в наявності' : '+ У замовлення'}
            </button>
          </div>
        </div>
      </div>
    `;

    // Запасне зображення, якщо пропаде інтернет
    const imgEl = card.querySelector('img');
    imgEl.addEventListener('error', () => {
      imgEl.src = createFallbackSvg(item.name);
    });

    // Логіка перемикання розміру чашки / порції та вибору молока
    let currentSizeIdx = 0;
    let milkExtra = 0;
    let milkLabel = item.hasMilk ? 'Звичайне молоко' : '';

    const priceEl = card.querySelector('.item-price');
    const sizePills = card.querySelectorAll('.size-pill');
    const milkSelect = card.querySelector('.milk-select');

    function updateCardPrice() {
      const total = item.sizes[currentSizeIdx].price + milkExtra;
      priceEl.textContent = `${total} грн`;
    }

    sizePills.forEach((pill) => {
      pill.addEventListener('click', () => {
        sizePills.forEach((p) => p.classList.remove('active'));
        pill.classList.add('active');
        currentSizeIdx = Number(pill.getAttribute('data-size-idx'));
        updateCardPrice();
      });
    });

    if (milkSelect) {
      milkSelect.addEventListener('change', () => {
        milkExtra = Number(milkSelect.value);
        milkLabel = milkSelect.options[milkSelect.selectedIndex].getAttribute('data-label');
        updateCardPrice();
      });
    }

    // Додавання у передзамовлення "З собою"
    const addBtn = card.querySelector('.add-to-cart-btn');
    addBtn.addEventListener('click', () => {
      const chosenSize = item.sizes[currentSizeIdx];
      const finalPrice = chosenSize.price + milkExtra;
      const details = milkLabel ? `${chosenSize.label}, ${milkLabel}` : chosenSize.label;
      const cartKey = `${item.id}_${chosenSize.label}_${milkLabel}`;

      const existing = cart.find((c) => c.key === cartKey);
      if (existing) {
        existing.qty += 1;
      } else {
        cart.push({
          key: cartKey,
          name: item.name,
          details,
          price: finalPrice,
          qty: 1
        });
      }

      updateCartUI();
      showToast(`Додано: ${item.name} (${chosenSize.label})`);
    });

    menuGrid.appendChild(card);
  });
}

// Фільтрація категорій меню
document.querySelectorAll('#menu-filters .filter-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#menu-filters .filter-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.getAttribute('data-category');
    renderMenu();
  });
});

// =========================================================
// 4. КОШИК ПЕРЕДЗАМОВЛЕННЯ "З СОБОЮ"
// =========================================================
const cartDrawer = document.getElementById('cart-drawer');
const cartOverlay = document.getElementById('cart-overlay');
const openCartBtn = document.getElementById('open-cart-btn');
const closeCartBtn = document.getElementById('close-cart-btn');
const headerCartCount = document.getElementById('header-cart-count');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartTotalPrice = document.getElementById('cart-total-price');

function openCart() {
  cartDrawer.classList.add('open');
  cartOverlay.classList.add('open');
}

function closeCart() {
  cartDrawer.classList.remove('open');
  cartOverlay.classList.remove('open');
}

openCartBtn.addEventListener('click', openCart);
closeCartBtn.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  headerCartCount.textContent = totalCount;
  cartTotalPrice.textContent = `${totalAmount} грн`;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML =
      '<div class="empty-cart-msg">Ваш кошик порожній. Оберіть напої або випічку з меню, щоб забрати без черги.</div>';
    return;
  }

  cartItemsContainer.innerHTML = '';
  cart.forEach((item, index) => {
    const row = document.createElement('div');
    row.className = 'cart-item-row';
    row.innerHTML = `
      <div class="cart-item-info">
        <strong>${item.name}</strong>
        <span>${item.details} • ${item.price * item.qty} грн</span>
      </div>
      <div class="cart-qty-controls">
        <button type="button" class="qty-btn" data-action="minus">−</button>
        <strong>${item.qty}</strong>
        <button type="button" class="qty-btn" data-action="plus">+</button>
      </div>
    `;

    row.querySelector('[data-action="minus"]').addEventListener('click', () => {
      if (item.qty > 1) {
        item.qty -= 1;
      } else {
        cart.splice(index, 1);
      }
      updateCartUI();
    });

    row.querySelector('[data-action="plus"]').addEventListener('click', () => {
      item.qty += 1;
      updateCartUI();
    });

    cartItemsContainer.appendChild(row);
  });
}

// Оформлення передзамовлення
document.getElementById('preorder-form').addEventListener('submit', (e) => {
  e.preventDefault();
  if (cart.length === 0) {
    showToast('Додайте хоча б один напій або десерт у кошик.');
    return;
  }

  const pickupTime = document.getElementById('pickup-time').value;
  const customerName = document.getElementById('preorder-name').value.trim();
  const phone = document.getElementById('preorder-phone').value.trim();
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const itemsText = cart.map((i) => `${i.name} (${i.details}) × ${i.qty}`).join(', ');

  const newOrder = {
    id: `ZB-${Math.floor(102 + Math.random() * 890)}`,
    customerName,
    phone,
    pickupTime,
    items: itemsText,
    total: totalAmount,
    status: 'Нове'
  };

  preorders.unshift(newOrder);
  saveState();

  cart = [];
  updateCartUI();
  closeCart();
  e.target.reset();
  renderAdminData();
  showToast(`Передзамовлення ${newOrder.id} прийнято! Готуємо ${pickupTime.toLowerCase()}.`);
});

// =========================================================
// 5. ІНТЕРАКТИВНА КАРТА КАВ'ЯРНІ ТА БРОНЮВАННЯ СТОЛИКІВ
// =========================================================
const bookingDateInput = document.getElementById('booking-date');
const bookingTimeSelect = document.getElementById('booking-time');
const tableNodes = document.querySelectorAll('.table-node');
const displayTableTitle = document.getElementById('display-table-title');
const displayTableMeta = document.getElementById('display-table-meta');

bookingDateInput.value = getTodayISO();
bookingDateInput.min = getTodayISO();

function refreshFloorMap() {
  const chosenDate = bookingDateInput.value;
  const chosenTime = bookingTimeSelect.value;

  const busyTableIds = tableBookings
    .filter((b) => b.date === chosenDate && b.time === chosenTime)
    .map((b) => String(b.tableId));

  // Якщо раніше обраний столик став зайнятим на інший час — скидаємо вибір
  if (selectedTable && busyTableIds.includes(selectedTable.id)) {
    selectedTable = null;
    displayTableTitle.textContent = 'Натисніть на столик на карті ліворуч';
    displayTableMeta.textContent = 'Оберіть вільний столик для продовження';
  }

  tableNodes.forEach((node) => {
    const id = node.getAttribute('data-table-id');
    const statusLabel = node.querySelector('.table-status');
    const isBusy = busyTableIds.includes(id);

    node.classList.remove('busy', 'selected');

    if (isBusy) {
      node.classList.add('busy');
      statusLabel.textContent = 'Зайнято';
    } else if (selectedTable && selectedTable.id === id) {
      node.classList.add('selected');
      statusLabel.textContent = 'Обрано';
    } else {
      statusLabel.textContent = 'Вільний';
    }
  });
}

tableNodes.forEach((node) => {
  node.addEventListener('click', () => {
    if (node.classList.contains('busy')) {
      showToast('Цей столик вже заброньовано на обраний час. Оберіть інший.');
      return;
    }

    selectedTable = {
      id: node.getAttribute('data-table-id'),
      name: node.getAttribute('data-table-name'),
      zone: node.getAttribute('data-zone'),
      seats: node.getAttribute('data-seats')
    };

    displayTableTitle.textContent = `${selectedTable.name} • ${selectedTable.zone}`;
    displayTableMeta.textContent = `Місткість: до ${selectedTable.seats} гостей • ${bookingDateInput.value} о ${bookingTimeSelect.value}`;

    refreshFloorMap();
  });
});

bookingDateInput.addEventListener('change', () => {
  refreshFloorMap();
  if (selectedTable) {
    displayTableMeta.textContent = `Місткість: до ${selectedTable.seats} гостей • ${bookingDateInput.value} о ${bookingTimeSelect.value}`;
  }
});

bookingTimeSelect.addEventListener('change', () => {
  refreshFloorMap();
  if (selectedTable) {
    displayTableMeta.textContent = `Місткість: до ${selectedTable.seats} гостей • ${bookingDateInput.value} о ${bookingTimeSelect.value}`;
  }
});

// Підтвердження бронювання столика
document.getElementById('table-booking-form').addEventListener('submit', (e) => {
  e.preventDefault();

  if (!selectedTable) {
    showToast('Будь ласка, натисніть на вільний столик на карті кав’ярні.');
    return;
  }

  const newBooking = {
    id: `TBL-${Math.floor(202 + Math.random() * 790)}`,
    date: bookingDateInput.value,
    time: bookingTimeSelect.value,
    tableId: selectedTable.id,
    tableName: selectedTable.name,
    zone: selectedTable.zone,
    guests: document.getElementById('booking-guests').value,
    guestName: document.getElementById('booking-guest-name').value.trim(),
    phone: document.getElementById('booking-guest-phone').value.trim(),
    notes: document.getElementById('booking-notes').value.trim()
  };

  tableBookings.unshift(newBooking);
  saveState();

  selectedTable = null;
  displayTableTitle.textContent = 'Натисніть на столик на карті ліворуч';
  displayTableMeta.textContent = 'Оберіть вільний столик для продовження';
  e.target.reset();

  refreshFloorMap();
  renderAdminData();
  showToast(`${newBooking.tableName} заброньовано на ${newBooking.date} о ${newBooking.time}!`);
});

// =========================================================
// 6. АДМІН-КАБІНЕТ ЗАКЛАДУ (PIN: 1111)
// =========================================================
const adminModal = document.getElementById('admin-modal');
const openAdminBtn = document.getElementById('open-admin-btn');
const footerAdminBtn = document.getElementById('footer-admin-btn');
const closeAdminBtn = document.getElementById('close-admin-btn');
const adminLoginView = document.getElementById('admin-login-view');
const adminDashboardView = document.getElementById('admin-dashboard-view');

function openAdmin() {
  adminModal.classList.add('open');
  renderAdminData();
}

function closeAdmin() {
  adminModal.classList.remove('open');
}

openAdminBtn.addEventListener('click', openAdmin);
footerAdminBtn.addEventListener('click', openAdmin);
closeAdminBtn.addEventListener('click', closeAdmin);

document.getElementById('admin-login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const pin = document.getElementById('admin-pin-input').value.trim();
  if (pin === '1111') {
    adminLoginView.classList.add('hidden');
    adminDashboardView.classList.remove('hidden');
    renderAdminData();
  } else {
    showToast('Невірний PIN-код. Для демонстрації введіть 1111.');
  }
});

// Перемикання вкладок адмінки
document.querySelectorAll('.admin-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.admin-tab').forEach((t) => t.classList.remove('active'));
    document.querySelectorAll('.admin-panel').forEach((p) => p.classList.remove('active'));

    tab.classList.add('active');
    const targetId = `tab-${tab.getAttribute('data-admin-tab')}`;
    document.getElementById(targetId).classList.add('active');
  });
});

function renderAdminData() {
  document.getElementById('admin-orders-count').textContent = preorders.length;
  document.getElementById('admin-bookings-count').textContent = tableBookings.length;

  // 1. Список передзамовлень
  const ordersList = document.getElementById('admin-orders-list');
  if (preorders.length === 0) {
    ordersList.innerHTML = '<p class="admin-note">Активних передзамовлень поки немає.</p>';
  } else {
    ordersList.innerHTML = '';
    preorders.forEach((order, idx) => {
      const card = document.createElement('div');
      card.className = 'admin-record-card';
      card.innerHTML = `
        <div>
          <strong>${order.id} • ${order.customerName} (${order.phone})</strong>
          <span>Забрати: <b>${order.pickupTime}</b> • Сума: <b>${order.total} грн</b></span>
          <span>Склад: ${order.items}</span>
        </div>
        <div class="admin-record-actions">
          <select class="status-select">
            <option value="Нове" ${order.status === 'Нове' ? 'selected' : ''}>Нове</option>
            <option value="Готується" ${order.status === 'Готується' ? 'selected' : ''}>Готується</option>
            <option value="Готово до видачі" ${order.status === 'Готово до видачі' ? 'selected' : ''}>Готово до видачі</option>
          </select>
          <button type="button" class="delete-record-btn">Видати / Закрити</button>
        </div>
      `;

      card.querySelector('.status-select').addEventListener('change', (e) => {
        preorders[idx].status = e.target.value;
        saveState();
        showToast(`Статус замовлення ${order.id}: ${e.target.value}`);
      });

      card.querySelector('.delete-record-btn').addEventListener('click', () => {
        preorders.splice(idx, 1);
        saveState();
        renderAdminData();
      });

      ordersList.appendChild(card);
    });
  }

  // 2. Список бронювань столиків
  const bookingsList = document.getElementById('admin-bookings-list');
  if (tableBookings.length === 0) {
    bookingsList.innerHTML = '<p class="admin-note">Заброньованих столиків поки немає.</p>';
  } else {
    bookingsList.innerHTML = '';
    tableBookings.forEach((b, idx) => {
      const card = document.createElement('div');
      card.className = 'admin-record-card';
      card.innerHTML = `
        <div>
          <strong>${b.tableName} (${b.zone}) • ${b.date} о ${b.time}</strong>
          <span>Гість: ${b.guestName} (${b.phone}) • ${b.guests}</span>
          ${b.notes ? `<span>Коментар: ${b.notes}</span>` : ''}
        </div>
        <div class="admin-record-actions">
          <button type="button" class="delete-record-btn">Звільнити столик</button>
        </div>
      `;

      card.querySelector('.delete-record-btn').addEventListener('click', () => {
        tableBookings.splice(idx, 1);
        saveState();
        refreshFloorMap();
        renderAdminData();
        showToast('Столик знову вільний на карті.');
      });

      bookingsList.appendChild(card);
    });
  }

  // 3. Керування стоп-листом меню
  const stoplistGrid = document.getElementById('admin-stoplist-grid');
  stoplistGrid.innerHTML = '';
  DEFAULT_MENU.forEach((item) => {
    const isSoldOut = Boolean(stopList[item.id]);
    const row = document.createElement('label');
    row.className = 'stoplist-item';
    row.innerHTML = `
      <span>${item.name}</span>
      <input type="checkbox" ${!isSoldOut ? 'checked' : ''}>
    `;

    row.querySelector('input').addEventListener('change', (e) => {
      if (e.target.checked) {
        delete stopList[item.id];
      } else {
        stopList[item.id] = true;
      }
      saveState();
      renderMenu();
    });

    stoplistGrid.appendChild(row);
  });
}

// =========================================================
// 7. МОБІЛЬНЕ МЕНЮ ТА СПЛИВАЮЧІ СПОВІЩЕННЯ
// =========================================================
const burgerBtn = document.getElementById('burger-btn');
const mainNav = document.getElementById('main-nav');

burgerBtn.addEventListener('click', () => mainNav.classList.toggle('open'));
mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});

const toast = document.getElementById('toast');
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3200);
}

// Ініціалізація при завантаженні сторінки
renderMenu();
updateCartUI();
refreshFloorMap();