# 🎵 Lyrica

**Lyrica** is a modern, minimalist music streaming web app inspired by Spotify. Built with Next.js and TypeScript, it offers a clean UI, responsive design, seamless audio playback, and integrates third-party services like **Stripe** for payments and **Supabase** for authentication and database functionality.

- **Live Demo**: [https://lyrica-sable-eta.vercel.app](https://lyrica-sable-eta.vercel.app)
- **GitHub Repository**: [github.com/Adish2406/lyrica](https://github.com/Adish2406/lyrica)

---

## 🚀 Features

- 🎷 Music streaming with an intuitive player
- 🎨 Sleek and responsive UI
- 🧱 Navigation with React Router
- ⚡ Built with Next.js and TypeScript
- ✉️ User authentication and session management via Supabase
- 💳 Secure payments and subscriptions via Stripe
- ☁️ Deployed on Vercel

---

## 💠 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or later)
- **npm** (v6 or later)
- A **Supabase account** and project
- A **Stripe account** with a test product

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Adish2406/lyrica.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd lyrica
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Configure environment variables**:

   Create a `.env.local` file and add the following:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

   STRIPE_SECRET_KEY=your_stripe_secret_key
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_WEBHOOK_SECRET=your_webhook_secret
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

5. **Start the development server**:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## 🧪 Available Scripts

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm start`: Starts the production server.

---

## 🌐 Deployment

This project is deployed on [Vercel](https://vercel.com/). To deploy your own version:

1. **Fork the repository** to your GitHub account.
2. **Sign in to Vercel** and import your forked repository.
3. **Configure the project settings**, including environment variables.
4. **Deploy** the project. Vercel will handle the build and deployment process.

---

## 📁 Project Structure

```
lyrica/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable components
│   ├── pages/          # Next.js pages
│   ├── styles/         # CSS/SASS files
│   └── utils/          # Utility functions
├── .env.local          # Environment variables
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

