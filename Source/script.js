// Hàm này sẽ chạy ngay khi web vừa mở để áp dụng theme 
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme-preference');
    const txtDark = document.getElementById('txt-darkmode');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (txtDark) txtDark.innerText = "Tối";
    } else {
        document.body.classList.remove('dark-mode');
        if (txtDark) txtDark.innerText = "Sáng";
    }
}

// Gọi hàm ngay lập tức
window.addEventListener('DOMContentLoaded', applySavedTheme);


/* CƠ SỞ DỮ LIỆU VỀ MẶT HÀNG ĐANG BÀY BÁN VÀ BÁO TIN TỨC  */
const database = {
    news: [
        {
            id: 101,
            title:      "Chào mừng tân sinh viên khóa 2026",
            date:       "1/9/2026",
            summary:    "Sol Mart & Coffee dành tặng hàng ngàn ưu đãi cho các bạn sinh viên mới nhập học...",
            img:        "AnhNews/A2.jpg",
            category:   "Sự kiện",
            content:    "Đến hẹn lại lên , sau kì thi căng thẳng để có thể bước tiếp trên con đường học vấn , lựa chọn một ngôi trường cho ước mơ và tương lai..."
        },
        {
            id: 102,
            title:      "Sol đã ra mắt Menu Mới",
            date:       "22/04/2026",
            summary:    "Khám phá bộ sưu tập đồ uống giải nhiệt mới nhất chỉ có tại Sol.",
            img:        "AnhNews/B1.jpg",
            category:   "Khuyến mãi"
        },
        {
            id: 103,
            title:      "Góc nhìn Sol từ trên cao ",
            date:       "20/04/2026",
            summary:    "Sol Mart & Coffee với góc nhìn khác...",
            img:        "AnhNews/B2.jpg",
            category:   "Ngoại quan"
        },
        {
            id: 104,
            title:      "Sol Coffee & Tea",
            date:       "21/04/2026",
            summary:    "Sol Mart & Coffee Bên ngoài và bên trong...",
            img:        "AnhNews/B3.jpg",
            category:   "Sự kiện"
        },
        {
            id: 105,
            title:      "Bên trong Mart có gì?",
            date:       "23/04/2026",
            summary:    "Sol Mart & Coffee Bên ngoài và bên trong...",
            img:        "AnhNews/B4.jpg",
            category:   "Ngoại quan"
        },
        {
            id: 106,
            title:      "Những ống bê tông sắc màu!",
            date:       "18/04/2026",
            summary:    "Đã từ lâu sinh viên đã quen với những chiếc...",
            img:        "AnhNews/B5.jpg",
            category:   "Ngoại quan"
        },
        {
            id: 107,
            title:      "Sol Food có gì?",
            date:       "12/04/2026",
            summary:    "Với ẩm thực đường phố , Sol Food hiện đang là...",
            img:        "AnhNews/B6.jpg",
            category:   "Sự kiện"
        },
        {
            id: 108,
            title:      "Không gian học tập bên trong Mart",
            date:       "10/04/2026",
            summary:    "Góc nhìn thoáng đãng, không gian mát mẻ...",
            img:        "AnhNews/B7.jpg",
            category:   "Ngoại quan"
        },

    ],

    coffee: {
        "🌭Bánh mỳ nè🔥": [
            { id: 201, name: "Bánh mỳ thịt"         , price: 25000, img: "AnhCoffee&Tea/AnhBanhmi/BanhmiThit.jpg" },
            { id: 202, name: "Bánh mỳ xúc xích"     , price: 25000, img: "AnhCoffee&Tea/AnhBanhmi/BanhmiXucxich.jpg" },
            { id: 203, name: "Bánh mỳ nem "         , price: 25000, img: "AnhCoffee&Tea/AnhBanhmi/BanhmiNem.png" },
            { id: 204, name: "Bánh mỳ hồ lô"        , price: 25000, img: "AnhCoffee&Tea/AnhBanhmi/BanhmiHolo.jpg" },
            { id: 205, name: "Bánh mỳ trứng"        , price: 25000, img: "AnhCoffee&Tea/AnhBanhmi/BanhmiTrung.jpg" },
            { id: 206, name: "Bánh mỳ thập cẩm"     , price: 25000, img: "AnhCoffee&Tea/AnhBanhmi/BanhmiThapcam.jpg" },
        ],
        "🍚Xôi Các loại🔥": [
            { id: 301, name: "Xôi thịt"         , price: 30000, img: "AnhCoffee&Tea/AnhXoi/Xoithit.jpg" },
            { id: 302, name: "Xôi xúc xích"     , price: 30000, img: "AnhCoffee&Tea/AnhXoi/XoiXucxich.jpg" },
            { id: 303, name: "Xôi nem"          , price: 30000, img: "AnhCoffee&Tea/AnhXoi/XoiNem.jpg" },
            { id: 304, name: "Xôi hồ lô"        , price: 30000, img: "AnhCoffee&Tea/AnhXoi/XoiHolo.jpg" },
            { id: 305, name: "Xôi trứng"        , price: 30000, img: "AnhCoffee&Tea/AnhXoi/XoiTrung.jpg" },
            { id: 306, name: "Xôi thập cẩm"     , price: 30000, img: "AnhCoffee&Tea/AnhXoi/XoiThapcam.jpg" },
        ],
        "🧋Nước Uống 🔥": [
            { id: 401, name: "Sữa đậu nành"         , price: 10000, img: "AnhCoffee&Tea/AnhNuocUong/Suadaunanh.jpg" },
            { id: 402, name: "Trà thái xanh"        , price: 10000, img: "AnhCoffee&Tea/AnhNuocUong/TraThaixanh.jpg" },
            { id: 403, name: "Trà Đào "             , price: 10000, img: "AnhCoffee&Tea/AnhNuocUong/Tradao.jpg" },
            { id: 404, name: "Nước mía"             , price: 10000, img: "AnhCoffee&Tea/AnhNuocUong/Nuocmia.jpg" },
        ]
    },

    mart: {
        "🍜 Sol Food 6h00-13h menu": [
            { id: 601, name: "Bún mọc"      , price: 30000, img: "AnhMart/SolFood/BunMoc.png" }, 
            { id: 602, name: "Phở Gà"       , price: 35000, img: "AnhMart/SolFood/PhoGa.jpg" },
            { id: 603, name: "Phở Bò"       , price: 35000, img: "AnhMart/SolFood/PhoBo.jpg" },
            { id: 604, name: "Phở Trộn"     , price: 40000, img: "AnhMart/SolFood/PhoTron.jpg" },
            { id: 605, name: "Mì Tôm Bò"    , price: 35000, img: "AnhMart/SolFood/MytomBo.jpg" },
            { id: 606, name: "Mì Tôm Gà"    , price: 35000, img: "AnhMart/SolFood/MytomGa.jpg" },
            { id: 607, name: "Mì Tôm Mọc"   , price: 35000, img: "AnhMart/SolFood/MytomMoc.jpg" },
            { id: 608, name: "Bún đậu"      , price: 35000, img: "AnhMart/SolFood/BunDau.jpg" },
        ],
        "🥤Đồ Uống giải khát⚡": [
            { id: 701, name: "Nước Cocacola chai"   , price: 11000, img: "AnhMart/DoUongGiaiKhat/ColaChai.jpg" },
            { id: 702, name: "Nước 7Up chai"        , price: 11000, img: "AnhMart/DoUongGiaiKhat/7Upchai.jpg" },
            { id: 703, name: "Nước Redbull"         , price: 11000, img: "AnhMart/DoUongGiaiKhat/Redbull.jpg" },
            { id: 704, name: "Nước Không Độ Mixi "  , price: 11036, img: "AnhMart/DoUongGiaiKhat/Khongdochai.jpg" },
            { id: 705, name: "Nước Revive Trắng"    , price: 11000, img: "AnhMart/DoUongGiaiKhat/ReviveTrang.jpg" },
            { id: 706, name: "Nước Revive Vàng"     , price: 11000, img: "AnhMart/DoUongGiaiKhat/ReviveVang.jpg" },
            { id: 707, name: "Nước Fanta Cam ép"    , price: 11000, img: "AnhMart/DoUongGiaiKhat/FantaCam.jpg" },
            { id: 708, name: "Nước Fanta Soda kem"  , price: 11000, img: "AnhMart/DoUongGiaiKhat/FantaSoda.jpg" },
            { id: 709, name: "Nước Fanta dâu tây"   , price: 11000, img: "AnhMart/DoUongGiaiKhat/FantaDau.jpg" },
            { id: 710, name: "Nước Fanta nho tím"   , price: 11000, img: "AnhMart/DoUongGiaiKhat/FantaNho.jpg" },
            { id: 711, name: "Nuớc Tăng Lực Wake247", price: 11000, img: "AnhMart/DoUongGiaiKhat/Chai247.jpg" },
            { id: 712, name: "Nước Pepsi"           , price: 11000, img: "AnhMart/DoUongGiaiKhat/PepsiChai.jpeg" },
            { id: 713, name: "Nước Spire"           , price: 11000, img: "AnhMart/DoUongGiaiKhat/ChaiSpire.jpg" },
            { id: 714, name: "Nước Lọc các loại"    , price: 11000, img: "AnhMart/DoUongGiaiKhat/NuocLocDasani.jpg" },
            { id: 715, name: "Nước Lọc vị sữa chua" , price: 11000, img: "AnhMart/DoUongGiaiKhat/ChaiGoodMood.jpg" },
            { id: 716, name: "Nước ICE+ Đào hồng"   , price: 11000, img: "AnhMart/DoUongGiaiKhat/ChaiDaoICE.jpg" },
            { id: 717, name: "Nước ICE+ Cam chanh"  , price: 11000, img: "AnhMart/DoUongGiaiKhat/ChaiCamChanhICE.jpg" },
            { id: 718, name: "Nước ICE+ Nho xanh"   , price: 11000, img: "AnhMart/DoUongGiaiKhat/ChaiNhoXanhICE.jpg" },
            { id: 719, name: "Nước Dr Thanh"        , price: 11000, img: "AnhMart/DoUongGiaiKhat/ChaiDrThanh.jpg" },
            { id: 720, name: "Nước Number One"      , price: 11000, img: "AnhMart/DoUongGiaiKhat/ChaiNumberOne.jpg" },
        ],
    }
};

let cart = [];
let orders = [];


/*  Hàm đóng mở thanh bên Menu */
function openSidebar() { document.getElementById('sidebar').classList.add('active'); document.getElementById('overlay').classList.add('active'); }
function closeSidebar() { document.getElementById('sidebar').classList.remove('active'); document.getElementById('overlay').classList.remove('active'); }



function resetNavButtons() {
    document.getElementById('btn-coffee').classList.remove('active-coffee');
    document.getElementById('btn-mart').classList.remove('active-mart');
}






// --- SỬA HÀM RENDER SHELVES ---
function renderShelves(category) {
    const data = database[category];
    drawProductsToScreen(data, category);
}

// --- SỬA HÀM RENDER SOL NEWS - tạo tin tức Sol ---
function renderSolNews() {
    drawNewsToScreen(database.news);
}

// Hàm 1: showPageView đứng riêng
function showPageView(viewId) {
    document.querySelectorAll('.page-view').forEach(v => v.style.display = 'none');
    document.getElementById(`view-${viewId}`).style.display = 'block';

    const isDark = document.body.classList.contains('dark-mode');
    if (viewId !== 'home') {
        document.body.className = 'view-green';
        resetNavButtons();
    }
    if (isDark) document.body.classList.add('dark-mode');

    if (viewId === 'cart') renderCart();
    if (viewId === 'orders') renderOrders();
    closeSidebar();
}


/* Hàm thay đổi màu mỗi khi chuyển qua lại giữa các tab */
function changeTab(mode) {
    showPageView('home');
    const isDark = document.body.classList.contains('dark-mode');

    document.body.className = `theme-${mode}`;

    if (isDark) document.body.classList.add('dark-mode');

    const buttons = document.querySelectorAll('.nav-links .btn-nav');
    buttons.forEach(btn => btn.classList.remove('active-about', 'active-coffee', 'active-mart'));

    const activeBtn = document.getElementById(`btn-${mode}`);
    if (activeBtn) activeBtn.classList.add(`active-${mode}`);

    const about = document.getElementById('section-about');
    const products = document.getElementById('section-products');

    if (mode === 'about') {
        about.style.display = 'block';
        products.style.display = 'none';
        renderSolNews();
    } else {
        about.style.display = 'none';
        products.style.display = 'block';
        renderShelves(mode);
    }
}



window.onload = () => { changeTab('about'); };


/* Hàm thêm vào giỏ hàng */
function addToCart(id, category) {
    let product;
    for (let key in database[category]) {
        let p = database[category][key].find(x => x.id === id);
        if (p) { product = p; break; }
    }
    const existingItem = cart.find(i => i.id === id);
    if (existingItem) { existingItem.qty += 1; } 
    else { cart.push({ ...product, qty: 1 }); }
    updateCartIconCount();
    alert("Đã thêm " + product.name);
}

/* Hàm tạo đơn thẻ mặt hàng */
function renderCart() {
    const list = document.getElementById('cart-items-list'), summary = document.getElementById('cart-summary-box');
    if (cart.length === 0) { list.innerHTML = "<p style='text-align:center; padding:20px;'>Trống</p>"; summary.style.display = "none"; return; }
    summary.style.display = "block";
    let total = 0;
    list.innerHTML = cart.map(item => {
        total += item.price * item.qty;
        return `
            <div class="cart-item-row">
                <img src="${item.img}" class="cart-item-img">
                <div class="cart-item-info"><b>${item.name}</b><br><span style="color:red; font-weight:bold;">${item.price.toLocaleString()}đ</span></div>
                <div class="cart-qty-controls">
                    <button class="btn-qty" onclick="updateQty(${item.id}, -1)">-</button>
                    <b style="min-width:20px; text-align:center;">${item.qty}</b>
                    <button class="btn-qty" onclick="updateQty(${item.id}, 1)">+</button>
                </div>
            </div>`;
    }).join('');
    document.getElementById('total-price').innerText = total.toLocaleString() + "đ";
}

/* Hàm cập nhật giá trị số lượng đơn trong giỏ */
function updateQty(id, change) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.qty += change;
        if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
    }
    renderCart();
    updateCartIconCount();
}

/* Hàm cập nhật số lượng đơn hàng */
function updateCartIconCount() {
    const count = cart.reduce((total, item) => total + item.qty, 0);
    document.getElementById('cart-count').innerText = count;
}


/* Hàm mở nút chi tiết */
function openDetail(id, type) {
    let data;
    if (type === 'news') { data = database.news.find(item => item.id === id); } 
    else {
        const allProducts = [...Object.values(database.coffee).flat(), ...Object.values(database.mart).flat()];
        data = allProducts.find(item => item.id === id);
    }
    if (!data) return;
    const body = document.getElementById('modal-body-content');
    body.innerHTML = `
        <img src="${data.img}" alt="${data.name || data.title}">
        <h2 style="margin-top:15px; border-bottom: 2px solid #000; padding-bottom:5px;">${data.name || data.title}</h2>
        <p style="margin-top:10px; line-height:1.5; color:#333;">${data.content || data.summary || "Thông tin đang cập nhật..."}</p>
        ${data.price ? `<h3 style="color:red; margin-top:10px;">Giá: ${data.price.toLocaleString()}đ</h3>` : ''}
        ${data.date ? `<small style="color:gray;">Ngày đăng: ${data.date}</small>` : ''}`;
    document.getElementById('modal-detail').style.display = "block";
}


/* Hàm đóng modal  */
function closeModal() { document.getElementById('modal-detail').style.display = "none"; }


/* Hàm tạo đơn và random mã đơn hàng */
function checkout() {
    if (cart.length === 0) return;
    orders.unshift({ id: "#SOL" + Math.floor(Math.random() * 9000), items: [...cart], time: new Date().toLocaleString(), orderId: Date.now() });
    cart = []; updateCartIconCount();
    alert("Đặt hàng thành công!"); showPageView('orders');
}

/* Hàm tạo đơn  */
function renderOrders() {
    const list = document.getElementById('orders-list');
    if (orders.length === 0) { list.innerHTML = "<p style='text-align:center; padding:20px;'>Chưa có đơn hàng.</p>"; return; }
    list.innerHTML = orders.map(order => `
        <div class="white-item-box">
            <div><b>Mã Đơn: ${order.id}</b><br><b>Trạng thái: đang chuẩn bị</b><br><small>Thời gian: ${order.time}</small></div>
            <button class="close-btn" onclick="orders = orders.filter(o => o.orderId !== ${order.orderId}); renderOrders();" style="background: #ff4d4d; color: white; border: 2px solid #000; border-radius: 5px; width: 30px; height: 30px;">×</button>
        </div>`).join('');
}



/* Hàm hiển thị lên màn hình sau khi tìm kiếm ở tin tức SOl  */
function drawNewsToScreen(newsArray) {
    const container = document.getElementById('news-list');
    if (!container) return;
    let html = `<h2 class="title-border">📰 BẢN TIN SOL</h2><div class="news-container">`;
    newsArray.forEach(item => {
        html += `
            <div class="news-card">
                <div class="news-img-box"><img src="${item.img}" alt="news"></div>
                <div class="news-content">
                    <span class="news-tag">${item.category}</span>
                    <h3 class="news-title">${item.title}</h3>
                    <p class="news-summary">${item.summary}</p>
                    <div class="news-footer">
                        <span>📅 ${item.date}</span>
                        <button class="btn-nav" onclick="openDetail(${item.id}, 'news')">Đọc tiếp</button>
                    </div>
                </div>
            </div>`;
    });
    html += `</div>`;
    container.innerHTML = html;
}

/* Hàm Hiển thị , vẽ sản phẩm và có quan hệ với hàm tìm kiếm , hiển thị sản phẩm của Sol */
function drawProductsToScreen(data, category, keyword = "") {
    const shelfContainer = document.getElementById('product-shelves');
    if (!shelfContainer) return;
    let html = "";
    for (let title in data) {
        const filteredItems = data[title].filter(p => p.name.toLowerCase().includes(keyword.toLowerCase()));
        if (filteredItems.length > 0) {
            html += `<h2 class="title-border">${title}</h2><div class="product-grid">`;
            filteredItems.forEach(p => {
                html += `
                <div class="card">
                    <div class="card-img-box"><img src="${p.img}" alt="${p.name}"></div>
                    <h4 style="font-size:13px; height:34px; overflow:hidden;">${p.name}</h4>
                    <p style="color:red; font-weight:bold; margin:5px 0;">${p.price.toLocaleString()}đ</p>
                    <div style="display:flex; gap:5px; margin-top:auto;">
                        <button class="btn-nav" style="flex:1; font-size:11px;" onclick="openDetail(${p.id}, 'product')">Chi tiết</button>
                        <button class="btn-nav" style="flex:1; background:#FFEB3B; font-size:11px;" onclick="addToCart(${p.id}, '${category}')">Thêm +</button>
                    </div>
                </div>`;
            });
            html += `</div>`;
        }
    }  
    shelfContainer.innerHTML = html || "<p style='text-align:center; padding:20px;'>Không tìm thấy món bạn cần...</p>";
}


/* Hàm tìm kiếm  */
function handleSearch() {
    const keyword = document.getElementById('main-search').value.toLowerCase().trim();
    const aboutDisplay = document.getElementById('section-about').style.display;

    if (aboutDisplay !== 'none') {
        const filteredNews = database.news.filter(n => n.title.toLowerCase().includes(keyword));
        drawNewsToScreen(filteredNews);
    } else {
        const currentType = document.body.className.includes('theme-coffee') ? 'coffee' : 'mart';
        drawProductsToScreen(database[currentType], currentType, keyword);
    }
}

/* --- LOGIC CHO TRANG CÀI ĐẶT --- */

// 1. Hàm bật/tắt Dark Mode
function toggleDarkMode() {
    // Chèn class .dark-mode vào thẻ body hoặc xóa nó đi
    const isDark = document.body.classList.toggle('dark-mode');

    // Thay đổi chữ hiển thị trên nút
    const txt = document.getElementById('txt-darkmode');
    if (txt) txt.innerText = isDark ? "Tối" : "Sáng";

    // Lưu lại lựa chọn để khi load lại trang không bị mất
    localStorage.setItem('theme-preference', isDark ? 'dark' : 'light');
}

// 2. Hàm bật/tắt Tương phản
function toggleContrast() {
    const isHigh = document.body.classList.toggle('high-contrast');
    const txt = document.getElementById('txt-contrast');
    if (txt) txt.innerText = isHigh ? "Bật" : "Tắt";
}

// 3. Tự động kiểm tra chế độ đã lưu trong cài đặt khi mở Web
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme-preference') === 'dark') {
        toggleDarkMode();
    }
});


/* Làm mới sự kiện */
window.onclick = function (event) {
    const modal = document.getElementById('modal-detail');
    if (event.target == modal) closeModal();
}


/* Hàm thay đổi theme để kiểm tra xem chế độ tối có chạy không  */
function changeTheme(themeName) {
    // 1. Kiểm tra xem Dark Mode có đang bật không trước khi đổi theme
    const isDark = document.body.classList.contains('dark-mode');

    // 2. Xóa các class theme cũ (để không bị chồng chéo màu nền)
    document.body.classList.remove('theme-about', 'theme-coffee', 'theme-mart', 'view-green');

    // 3. Thêm class theme mới mà người dùng vừa chọn
    document.body.classList.add(themeName);

    // 4. CỰC KỲ QUAN TRỌNG: Nếu đang ở Dark Mode thì phải ép nó ở lại
    if (isDark) {
        document.body.classList.add('dark-mode');
    }
}


/* Hàm bật tắt chế độ tối  */
function toggleDarkMode() {
    // Bật/tắt class dark-mode trên thẻ body
    const isDark = document.body.classList.toggle('dark-mode');

    // Lưu lựa chọn của người dùng vào máy tính (Local Storage)
    localStorage.setItem('user-theme', isDark ? 'dark' : 'light');

    // Cập nhật chữ hiển thị trong nút bấm ở trang Cài đặt
    const txt = document.getElementById('txt-darkmode');
    if (txt) {
        txt.innerText = isDark ? "Tối" : "Sáng";
    }
}

/* Hàm giảm chuyển động */
function toggleReducedMotion() {
    const isReduced = document.body.classList.toggle('reduced-motion');
    localStorage.setItem('motion-preference', isReduced ? 'reduced' : 'normal');

    const txt = document.getElementById('txt-motion'); // Giả sử bạn đặt ID này cho nút bấm
    if (txt) txt.innerText = isReduced ? "Bật" : "Tắt";
}


/* Hàm xử lý khi người dùng ấn nút Gửi thông tin */
/* Sửa lại hàm trong script.js */
function submitContactForm(event) {
    // CHÌA KHÓA Ở ĐÂY: Chặn không cho trình duyệt load lại trang web
    if (event) event.preventDefault();

    // 1. Lấy vùng chứa nội dung của Modal có sẵn trên web SOL
    const modalBody = document.getElementById('modal-body-content');
    const modal = document.getElementById('modal-detail');

    if (!modalBody || !modal) {
        console.error("Không tìm thấy cấu trúc Modal trên trang web!");
        return;
    }

    // 2. Nạp nội dung thông báo vào Modal
    modalBody.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <i class="fas fa-check-circle" style="font-size: 50px; color: #00FF99; margin-bottom: 15px;"></i>
            <h2 style="margin-bottom: 10px; text-transform: uppercase; color: #000;">Thành Công!</h2>
            <p style="font-size: 15px; font-weight: bold; margin-bottom: 20px; color: #000;">Đã gửi thông tin liên hệ của bạn đến SOL Team.</p>
            <button class="btn-nav" style="background: #000; color: #fff; padding: 10px 20px; border-radius: 8px; cursor: pointer;" onclick="closeModal()">Đóng thông báo</button>
        </div>
    `;

    // 3. Hiển thị Modal lên màn hình
    modal.style.display = "block";

    // 4. Xóa sạch chữ trong các ô nhập liệu sau khi gửi thành công
    const inputs = document.querySelectorAll('.contact-box input, .contact-container textarea');
    inputs.forEach(input => input.value = '');
}








/* ==========================================================================
   HỆ THỐNG QUẢN LÝ TÀI KHOẢN VÀ ĐỒNG BỘ GIỎ HÀNG THƯƠNG MẠI ĐIỆN TỬ
   ========================================================================== */

// Hàm kiểm tra trạng thái đăng nhập khi người dùng mở trang chủ SOL
function checkUserAuthStatus() {
    const currentUser = localStorage.getItem('sol_currentUser');
    const btnLogin = document.getElementById('btn-menu-login');
    const boxLogged = document.getElementById('user-logged-box');
    const txtUsername = document.getElementById('menu-username');

    if (!btnLogin || !boxLogged) return;

    if (currentUser) {
        // Nếu đã đăng nhập: Ẩn nút đăng nhập, hiển thị cụm Đăng xuất + Tên User
        btnLogin.style.display = 'none';
        boxLogged.style.display = 'flex';
        if (txtUsername) txtUsername.innerText = currentUser;

        // Đồng bộ dữ liệu giỏ hàng của User này vào mảng biến chạy thực tế trên web
        const userSavedCart = JSON.parse(localStorage.getItem('sol_currentCart')) || [];
        if (typeof cart !== 'undefined') {
            cart = userSavedCart;
            updateCartCount(); // Cập nhật lại số hiển thị ở icon giỏ hàng
        }
    } else {
        // Nếu chưa đăng nhập: Hiện nút Đăng nhập thông thường, ẩn cụm Đăng xuất đi
        btnLogin.style.display = 'center';
        boxLogged.style.display = 'none';
    }
}

// Hàm giải quyết sự kiện Đăng xuất tài khoản
function handleLogout(event) {
    if (event) event.preventDefault();

    const currentUser = localStorage.getItem('sol_currentUser');

    if (currentUser) {
        // TRƯỚC KHI ĐĂNG XUẤT: Cất giỏ hàng hiện tại vào đúng ví dữ liệu của User đó
        let accounts = JSON.parse(localStorage.getItem('sol_accounts')) || {};
        if (accounts[currentUser]) {
            accounts[currentUser].cart = typeof cart !== 'undefined' ? cart : [];
            localStorage.setItem('sol_accounts', JSON.stringify(accounts));
        }
    }

    // Xóa sạch dấu vết phiên đăng nhập cũ
    localStorage.removeItem('sol_currentUser');
    localStorage.removeItem('sol_currentCart');

    // Reset mảng giỏ hàng hiện tại về rỗng trống trơn
    if (typeof cart !== 'undefined') {
        cart = [];
        updateCartCount();
    }

    alert('Đã đăng xuất tài khoản an toàn. Hẹn gặp lại bạn sớm nhé!');
    window.location.reload(); // Tải lại trang để menu cập nhật về trạng thái ban đầu
}

// HÀM LIÊN KẾT BỔ SUNG: Bạn hãy tìm hàm thêm sản phẩm vào giỏ hàng cũ của bạn 
// và dán dòng code dưới đây vào CUỐI HÀM đó để mỗi khi bấm thêm đồ, dữ liệu sẽ lưu ngay vào bộ nhớ máy:
function saveCartToLocalStorage() {
    const currentUser = localStorage.getItem('sol_currentUser');
    if (currentUser) {
        localStorage.setItem('sol_currentCart', JSON.stringify(cart));

        // Cập nhật trực tiếp vào cơ sở dữ liệu tổng
        let accounts = JSON.parse(localStorage.getItem('sol_accounts')) || {};
        if (accounts[currentUser]) {
            accounts[currentUser].cart = cart;
            localStorage.setItem('sol_accounts', JSON.stringify(accounts));
        }
    }
}

// Kích hoạt chạy kiểm tra ngay khi tải trang xong
window.addEventListener('DOMContentLoaded', () => {
    checkUserAuthStatus();

    // Lắng nghe sự kiện thêm sản phẩm để tự động backup dữ liệu
    const originalUpdateCartCount = window.updateCartCount;
    window.updateCartCount = function () {
        if (typeof originalUpdateCartCount === 'function') originalUpdateCartCount();
        saveCartToLocalStorage(); // Tự động đồng bộ mỗi khi giỏ hàng đổi số lượng
    };
});