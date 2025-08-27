# Share Me Frontend

Modern React frontend for the Share Me notes sharing platform built with Vite, Tailwind CSS, and React Router.

## Features

- **Modern React**: Built with React 18, hooks, and functional components
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Authentication**: Complete login/register flow with JWT
- **File Upload**: Drag-and-drop PDF upload interface
- **Real-time Updates**: Instant feedback with toast notifications
- **Type Filtering**: Filter notes by PDFs, links, or view all

## Tech Stack

- **React 18** with functional components and hooks
- **React Router v6** for navigation
- **Tailwind CSS** for styling
- **Vite** for build tooling and development
- **Axios** for API communication
- **React Hot Toast** for notifications
- **Lucide React** for icons

## Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Backend server running (see backend README)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Project Structure

```
frontend/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── LoginForm.jsx    # User login form
│   │   ├── RegisterForm.jsx # User registration form
│   │   ├── NoteCard.jsx     # Individual note display
│   │   └── UploadForm.jsx   # File upload and link sharing
│   ├── pages/               # Page components
│   │   ├── AuthPage.jsx     # Authentication page
│   │   └── Dashboard.jsx    # Main dashboard
│   ├── context/             # React context
│   │   └── AuthContext.jsx  # Authentication state management
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # App entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── index.html               # HTML template
```

## Components

### Authentication Components

#### LoginForm
- Email and password input fields
- Password visibility toggle
- Form validation and error handling
- Loading states during authentication

#### RegisterForm
- Complete user registration with all required fields
- Password confirmation validation
- Age and gender selection
- Real-time form validation

### Dashboard Components

#### UploadForm
- Tabbed interface for PDF upload and link sharing
- Drag-and-drop file upload
- File type and size validation
- Progress indicators and success feedback

#### NoteCard
- Displays individual notes (PDFs and links)
- Download/view functionality
- Delete option for note owners
- File size and upload date display

### Pages

#### AuthPage
- Switches between login and register forms
- Responsive design with gradient background
- Automatic redirect for authenticated users

#### Dashboard
- Main application interface
- Tabbed navigation between upload and view modes
- Filter controls for note types
- Responsive grid layout for notes

## State Management

### AuthContext
Manages authentication state across the application:

```javascript
const {
  user,           // Current user object
  token,          // JWT token
  loading,        // Loading state
  login,          // Login function
  register,       // Register function
  logout,         // Logout function
  isAuthenticated // Authentication status
} = useAuth();
```

## Styling

### Tailwind CSS Classes
The application uses custom Tailwind classes defined in `index.css`:

- `.btn-primary`: Primary button styling
- `.btn-secondary`: Secondary button styling
- `.input-field`: Form input styling
- `.card`: Card component styling

### Custom Colors
Primary color palette defined in `tailwind.config.js`:
- Primary: Blue shades (50-900)
- Responsive breakpoints for mobile-first design

## API Integration

### Axios Configuration
- Base URL configured for development proxy
- JWT token automatically included in requests
- Error handling with toast notifications

### API Endpoints Used
- Authentication: `/api/auth/*`
- Notes: `/api/notes/*`
- File uploads: `/api/notes/upload-pdf`

## Development

### Available Scripts

- `npm run dev`: Start development server (port 3000)
- `npm run build`: Build for production
- `npm run preview`: Preview production build

### Development Features

- **Hot Module Replacement**: Instant updates during development
- **Proxy Configuration**: API requests proxied to backend (port 5000)
- **ESLint**: Code linting (if configured)
- **TypeScript**: Type checking (if configured)

## User Experience

### Authentication Flow
1. User visits application
2. Redirected to login/register page if not authenticated
3. Registration: User creates account and is redirected to login form
4. Login: User signs in with registered credentials
5. Form validation with real-time feedback
6. Success/error notifications
7. Automatic redirect to dashboard after successful login

### Dashboard Experience
1. Tabbed interface for different actions
2. Upload tab: PDF upload and link sharing
3. View tab: Browse and filter notes
4. Real-time updates after actions
5. Responsive design for all screen sizes

### File Upload Experience
1. Drag-and-drop or click to upload
2. File validation (type and size)
3. Progress indication
4. Success confirmation
5. Automatic refresh of notes list

## Responsive Design

- **Mobile-first approach**
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Flexible grid system** for note cards
- **Touch-friendly** interface elements
- **Optimized** for all device sizes

## Performance

- **Code splitting** with React Router
- **Lazy loading** for components
- **Optimized builds** with Vite
- **Minimal bundle size** with tree shaking
- **Fast development** with HMR

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ features
- CSS Grid and Flexbox
- Local Storage for authentication persistence
