
# Ship Maintenance Dashboard

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mailaganivenu/ship-maintenance-dashboard.git
   ```

2. Navigate into the project directory:
   ```bash
   cd ship-maintenance-dashboard
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

Open your browser and go to http://localhost:3000 to view the application.

## Application Architecture Overview

- **Frontend**: Built with React functional components and hooks.
- **State Management**: React Context API is used for managing authentication state and global data.
- **Styling**: Tailwind CSS for responsive and modern UI design.
- **Data Persistence**: Uses localStorage to save user sessions, ships, jobs, and other state data.
- **Routing**: React Router (if implemented) manages navigation within the app.

## Main Features

- Authentication system with role-based access (Admin, Inspector, Engineer).
- CRUD operations for Ships and linked Components.
- Maintenance Jobs management with status filters.
- Interactive Calendar view for scheduling.
- Notifications panel for updates.
- Dashboard with KPIs and statistics.

## Known Issues or Limitations

- Data persistence is limited to localStorage — no backend or database integration yet.
- Authentication is simulated; no real security or user management backend.
- No real-time collaboration or multi-user sync.
- Basic error handling in forms and inputs.
- UI could be further enhanced with animations and better responsiveness.

## Technical Decisions

- React was chosen for its component-based architecture and strong ecosystem.
- Tailwind CSS was used for quick, consistent styling without writing custom CSS.
- localStorage was leveraged to persist user data without backend dependencies, suitable for demo and testing.
- Modularized codebase to keep components reusable and maintainable.
- Role management and authentication are simulated to meet assignment requirements efficiently.

## Additional Notes

To build for production, run:
```bash
npm run build
```

Deployment can be done easily on platforms like Vercel, Netlify, or GitHub Pages.

Feel free to enhance the project by connecting to a backend API for real data persistence and authentication.

**Thank you for reviewing the Ship Maintenance Dashboard project!**
