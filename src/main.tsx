import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react'
import App from './App.tsx'
import './index.css'

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
 
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
	<BrowserRouter>
	<main className="dark text-foreground bg-background">
		<div className="w-screen h-screen p-8 items-start justify-center">
			<ClerkProvider publishableKey={PUBLISHABLE_KEY}>
				<App />
			</ClerkProvider>
		</div>
	</main>
    </BrowserRouter>

  </React.StrictMode>,
)
