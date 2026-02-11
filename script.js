let listings = [];

function generateListings() {
    const locations = [
        // MUMBAI (5 listings)
        {
            id: 1, name: "Sea View Apartment", price: 4500, city: "Mumbai", type: "Apartment", unique: "Arabian Sea View", rating: 4.8,
            image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
            bestTime: "Evening", timeDesc: "Sunset over the sea"
        },
        {
            id: 2, name: "Bandra Bohemian Loft", price: 3500, city: "Mumbai", type: "Loft", unique: "Artistic Vibes", rating: 4.6,
            image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600",
            bestTime: "Night", timeDesc: "Enjoy Mumbai's nightlife"
        },
        {
            id: 3, name: "Colaba Heritage Stay", price: 6000, city: "Mumbai", type: "Heritage", unique: "Colonial Architecture", rating: 4.9,
            image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600",
            bestTime: "Morning", timeDesc: "Walk to Gateway of India"
        },
        {
            id: 4, name: "Juhu Beach Villa", price: 12000, city: "Mumbai", type: "Villa", unique: "Private Pool", rating: 5.0,
            image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600",
            bestTime: "Evening", timeDesc: "Beachside luxury"
        },
        {
            id: 5, name: "Powai Lake View", price: 4000, city: "Mumbai", type: "Condo", unique: "Lake & Garden View", rating: 4.5,
            image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
            bestTime: "Morning", timeDesc: "Peaceful morning jogs"
        },

        // NEW YORK (5 listings)
        {
            id: 6, name: "Manhattan Penthouse", price: 25000, city: "New York", type: "Penthouse", unique: "Central Park View", rating: 4.9,
            image: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=600",
            bestTime: "Night", timeDesc: "City lights of Manhattan"
        },
        {
            id: 7, name: "Brooklyn Brownstone", price: 15000, city: "New York", type: "Townhouse", unique: "Historic Charm", rating: 4.7,
            image: "https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=600",
            bestTime: "Morning", timeDesc: "Coffee on the stoop"
        },
        {
            id: 8, name: "SoHo Artist Loft", price: 18000, city: "New York", type: "Loft", unique: "Trendy District", rating: 4.6,
            image: "https://images.pexels.com/photos/1059078/pexels-photo-1059078.jpeg?auto=compress&cs=tinysrgb&w=600",
            bestTime: "Evening", timeDesc: "Art galleries and dining"
        },
        {
            id: 9, name: "Times Square Suite", price: 22000, city: "New York", type: "Suite", unique: "Heart of Action", rating: 4.5,
            image: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=600",
            bestTime: "Night", timeDesc: "Bright neon lights"
        },
        {
            id: 10, name: "Chelsea Garden Apt", price: 14000, city: "New York", type: "Apartment", unique: "Private Patio", rating: 4.8,
            image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600",
            bestTime: "Morning", timeDesc: "Quiet High Line walks"
        },

        // ZURICH (5 listings)
        {
            id: 11, name: "Lake Zurich Villa", price: 30000, city: "Zurich", type: "Villa", unique: "Direct Lake Access", rating: 5.0,
            image: "https://images.pexels.com/photos/3363351/pexels-photo-3363351.jpeg?auto=compress&cs=tinysrgb&w=600",
            bestTime: "Evening", timeDesc: "Sunset over the Alps"
        },
        {
            id: 12, name: "Old Town Apartment", price: 18000, city: "Zurich", type: "Apartment", unique: "Medieval Streets", rating: 4.7,
            image: "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=600",
            bestTime: "Morning", timeDesc: "Historical walking tours"
        },
        {
            id: 13, name: "Seefeld Penthouse", price: 22000, city: "Zurich", type: "Penthouse", unique: "Luxury Living", rating: 4.8,
            image: "https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg?auto=compress&cs=tinysrgb&w=600",
            bestTime: "Night", timeDesc: "Fine dining nearby"
        },
        {
            id: 14, name: "Uetliberg Chalet", price: 15000, city: "Zurich", type: "Chalet", unique: "Mountain Views", rating: 4.9,
            image: "https://images.pexels.com/photos/730469/pexels-photo-730469.jpeg?auto=compress&cs=tinysrgb&w=600",
            bestTime: "Morning", timeDesc: "Hiking trails at doorstep"
        },
        {
            id: 15, name: "Limmat River Loft", price: 19000, city: "Zurich", type: "Loft", unique: "River Views", rating: 4.6,
            image: "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=600",
            bestTime: "Evening", timeDesc: "Riverside cafes"
        }
    ];
    listings.push(...locations);
}

// --- Initialize ---
generateListings();

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('listingsContainer');
    if (container) {
        renderListings(listings);

        // Listeners for filters
        const priceRange = document.getElementById('priceRange');
        if (priceRange) {
            priceRange.addEventListener('input', (e) => {
                document.getElementById('priceLabel').innerText = '₹' + parseInt(e.target.value).toLocaleString();
                filterListings();
            });
        }
    }
});

// --- Core Logic ---
function renderListings(data) {
    const container = document.getElementById('listingsContainer');
    if (!container) return;
    container.innerHTML = '';

    if (data.length === 0) {
        container.innerHTML = '<p style="text-align:center; width:100%; padding:20px;">No listings found for this time or price.</p>';
        return;
    }

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        // Badge color based on time
        let badgeColor = '#ff385c';
        if (item.bestTime === 'Night') badgeColor = '#4b3c6b';
        if (item.bestTime === 'Morning') badgeColor = '#ffbb00';
        if (item.bestTime === 'Evening') badgeColor = '#ff7b00';

        card.innerHTML = `
            <div class="card-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x300?text=No+Image'">
                <span class="badge" style="background:${badgeColor}; color:white;">Best at ${item.bestTime}</span>
            </div>
            <div class="card-details" style="padding: 15px;">
                <div class="card-header">
                    <h3>${item.name}</h3>
                    <div class="card-rating">★ ${item.rating}</div>
                </div>
                <p class="location">${item.type} in ${item.city}</p>
                <p class="unique-feature" style="font-size:13px; color:#555;"><i>"${item.timeDesc}"</i></p>
                <div class="price"><span>₹${item.price.toLocaleString()}</span> night</div>
                
                <div class="card-actions">
                    <button class="btn-primary" onclick="openBooking(${item.id})">Book</button>
                    <button class="btn-secondary" onclick="viewMap('${item.name}')">Map</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function filterListings() {
    const city = document.getElementById('cityFilter').value;
    const time = document.getElementById('timeFilter').value; // New Filter
    const maxPrice = parseInt(document.getElementById('priceRange').value);

    const filtered = listings.filter(item => {
        const matchCity = city === 'all' || item.city === city;
        const matchTime = time === 'all' || item.bestTime === time;
        const matchPrice = item.price <= maxPrice;
        return matchCity && matchPrice && matchTime;
    });

    renderListings(filtered);
}

// --- Booking Modal ---
let currentBooking = null;

function openBooking(id) {
    const item = listings.find(l => l.id === id);
    if (!item) return;

    currentBooking = item;
    const modal = document.getElementById('bookingModal');
    const title = document.getElementById('modalTitle');
    const details = document.getElementById('modalPriceDetails');

    title.innerText = `Book ${item.name}`;
    details.innerHTML = `
        <div class="row"><span>${item.name} x 5 nights</span> <span>₹${(item.price * 5).toLocaleString()}</span></div>
        <div class="row"><span>Cleaning fee</span> <span>₹2,500</span></div>
        <div class="row"><span>Service fee</span> <span>₹3,500</span></div>
        <div class="row total"><span>Total before taxes</span> <span>₹${(item.price * 5 + 6000).toLocaleString()}</span></div>
    `;

    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('bookingModal').style.display = 'none';
}

function confirmBooking(event) {
    event.preventDefault();
    alert(`Booking Confirmed for ${currentBooking.name}!\nTotal: ₹${(currentBooking.price * 5 + 6000).toLocaleString()}\nConfirmation sent to email.`);
    closeModal();
}

// --- Navigation ---
function viewMap(locationName) {
    // Encode and redirect to map page
    window.location.href = `map.html?q=${encodeURIComponent(locationName)}`;
}

// --- Login Logic ---
function login() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    let msg = document.getElementById("msg");

    if (user === "admin" && pass === "1234") {
        window.location.href = "home.html";
    } else {
        msg.innerText = "Invalid Login!";
        msg.style.color = "red";
    }
}
