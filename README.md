<h1>🍔 Food Delivery API</h1>
  <p>A full-featured backend API for a food delivery platform built with <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong>.</p>

  <h2>🚀 Features</h2>
  <ul>
    <li>User Authentication (Register/Login with JWT)</li>
    <li>Restaurant CRUD (Admin)</li>
    <li>Food Menu Management</li>
    <li>Cart: Add / View / Clear</li>
    <li>Place Orders & View History</li>
    <li>Submit & View Reviews</li>
    <li>Protected Routes with JWT</li>
  </ul>

  <h2>📁 Folder Structure</h2>
  <pre><code>food-delivery-api/
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
├── server.js
└── .env</code></pre>

  <h2>🔧 Tech Stack</h2>
  <ul>
    <li><strong>Backend:</strong> Node.js, Express</li>
    <li><strong>Database:</strong> MongoDB (via Mongoose)</li>
    <li><strong>Auth:</strong> JWT</li>
    <li><strong>Environment:</strong> dotenv</li>
    <li><strong>Email (Optional):</strong> Nodemailer</li>
  </ul>

  <h2>📦 Installation</h2>
  <pre><code>git clone https://github.com/your-username/food-delivery-api.git
cd food-delivery-api
npm install</code></pre>

  <h2>⚙️ Environment Variables</h2>
  <p>Create a <code>.env</code> file:</p>
  <pre><code>PORT=5000
MONGO_URI=mongodb://localhost:27017/fooddb
JWT_SECRET=your_jwt_secret
SMTP_EMAIL=youremail@gmail.com
SMTP_PASSWORD=yourpassword</code></pre>

  <h2>▶️ Running the Server</h2>
  <pre><code>npm run dev</code></pre>

  <h2>📬 API Endpoints</h2>

  <h3>🔐 Auth</h3>
  <ul>
    <li>POST <code>/api/auth/register</code></li>
    <li>POST <code>/api/auth/login</code></li>
  </ul>

  <h3>👤 User</h3>
  <ul>
    <li>GET <code>/api/users/profile</code></li>
    <li>PUT <code>/api/users/profile</code></li>
  </ul>

  <h3>🍽️ Restaurants</h3>
  <ul>
    <li>POST <code>/api/restaurants/</code></li>
    <li>GET <code>/api/restaurants/</code></li>
    <li>GET <code>/api/restaurants/:id</code></li>
  </ul>

  <h3>🧾 Menu / Foods</h3>
  <ul>
    <li>POST <code>/api/foods/</code></li>
    <li>GET <code>/api/foods/restaurant/:restaurantId</code></li>
  </ul>

  <h3>🛒 Cart</h3>
  <ul>
    <li>POST <code>/api/cart/add</code></li>
    <li>GET <code>/api/cart/</code></li>
    <li>DELETE <code>/api/cart/clear</code></li>
  </ul>

  <h3>📦 Orders</h3>
  <ul>
    <li>POST <code>/api/orders/</code></li>
    <li>GET <code>/api/orders/</code></li>
  </ul>

  <h3>🌟 Reviews</h3>
  <ul>
    <li>POST <code>/api/reviews/</code></li>
    <li>GET <code>/api/reviews/food/:foodId</code></li>
  </ul>

  <h2>🔐 JWT Authentication</h2>
  <p>Send your JWT token in the request headers:</p>
  <pre><code>Authorization: Bearer &lt;your_token&gt;</code></pre>

  <h2>✅ To-Do (Optional)</h2>
  <ul>
    <li>Admin dashboard with roles</li>
    <li>Payment integration</li>
    <li>Order status updates</li>
    <li>Delivery partner assignment</li>
  </ul>

  <h2>📄 License</h2>
  <p>This project is licensed under the MIT License.</p>

  <h2>👨‍💻 Author</h2>
  <p><strong>Gowtham</strong><br>