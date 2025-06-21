(LIVE)[https://my-p12321.vercel.app/]

# Supreme Group Website Clone

A modern, responsive website clone built with Next.js 15, featuring smooth animations, scroll-based interactions, and a professional design inspired by Supreme Group's automotive nonwoven solutions.

## 🚀 Features

### ✨ Interactive Elements
- **Scroll-based vehicle type switching** - Automatic content changes based on scroll position
- **Manual click navigation** - Click to switch between passenger and commercial vehicles
- **Smooth title animations** - Dynamic title positioning from center to top
- **3D vehicle visualization** - Interactive vehicle parts selection
- **Responsive navbar** - Shows/hides based on scroll direction

### 🎨 Design & Animations
- **Full-screen video background** - YouTube video integration on hero section
- **Gradient text effects** - Beautiful gradient on "360-degree" text
- **Glowing line indicators** - Visual feedback for active sections
- **Staggered text animations** - Word-by-word reveal effects
- **Professional footer** - With SVG watermark and organized links

### 📱 Responsive Design
- **Mobile-first approach** - Optimized for all screen sizes
- **Touch-friendly interactions** - Enhanced mobile experience
- **Flexible layouts** - Grid systems that adapt to different viewports

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: CSS Transitions & Transforms

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

## 🚀 Getting Started

### 1. Clone the Repository

\`\`\`bash
git clone <repository-url>
cd supreme-group-clone
\`\`\`

### 2. Install Dependencies

Using npm:
\`\`\`bash
npm install
\`\`\`

Using yarn:
\`\`\`bash
yarn install
\`\`\`

### 3. Run the Development Server

Using npm:
\`\`\`bash
npm run dev
\`\`\`

Using yarn:
\`\`\`bash
yarn dev
\`\`\`

### 4. Open in Browser

Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

\`\`\`
supreme-group-clone/
├── app/                          # Next.js App Router
│   ├── contact/                  # Contact page
│   │   └── page.tsx
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── components/                   # Reusable components
│   ├── ui/                      # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── textarea.tsx
│   └── footer.tsx               # Footer component
├── hooks/                       # Custom React hooks
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── lib/                         # Utility functions
│   └── utils.ts
├── public/                      # Static assets
│   ├── Group.svg               # Logo watermark
│   ├── hero-bg.png             # Hero background
│   ├── reference-design.png     # Design reference
│   ├── contact-reference.png    # Contact page reference
│   └── transition-reference.png # Transition reference
├── next.config.mjs             # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Project dependencies
\`\`\`

## 🎯 Key Components

### Home Page (`app/page.tsx`)
- **Hero Section**: Full-screen video background with overlay text
- **Interactive Section**: Scroll-based vehicle type switching
- **Contact Section**: Inline contact form with fixed dimensions
- **Footer**: Professional footer with watermark

### Contact Page (`app/contact/page.tsx`)
- **Dedicated contact form** with validation
- **Responsive design** with fixed container dimensions
- **Form error handling** and user feedback

### Footer Component (`components/footer.tsx`)
- **SVG watermark** with dark gray styling
- **Organized link sections** (Applications, Company, More)
- **Social media links** and company information

## 🎨 Styling Guide

### Color Palette
- **Primary**: Teal (`#14b8a6`)
- **Secondary**: Cyan (`#22d3ee`)
- **Accent**: Blue (`#0067B1`)
- **Text**: Gray shades (`#374151`, `#6b7280`)
- **Background**: White and gray gradients

### Typography
- **Headings**: Font weights from light (300) to bold (700)
- **Body**: Regular (400) and medium (500) weights
- **Special**: Gradient text effects for emphasis

### Animations
- **Duration**: 300ms to 1500ms for different effects
- **Easing**: `ease-out` for smooth transitions
- **Delays**: Staggered animations with calculated delays

## 🔧 Configuration

### Tailwind CSS
The project uses a custom Tailwind configuration with:
- **Custom colors** matching the brand palette
- **Extended spacing** for precise layouts
- **Custom animations** for smooth effects

### Next.js
- **App Router** for modern routing
- **TypeScript** for type safety
- **Image optimization** for better performance

## 📱 Responsive Breakpoints

- **Mobile**: `< 768px`
- **Tablet**: `768px - 1024px`
- **Desktop**: `> 1024px`
- **Large Desktop**: `> 1280px`

## 🎭 Interactive Features

### Scroll-Based Switching
- **Automatic detection** of scroll position
- **Smooth transitions** between vehicle types
- **Visual indicators** with glowing effects

### Manual Navigation
- **Click handlers** for immediate switching
- **Temporary override** of scroll-based behavior
- **3-second reset** to re-enable automatic switching

### Form Validation
- **Real-time validation** on contact forms
- **Error messaging** with user-friendly feedback
- **Loading states** during form submission

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- **Netlify**
- **Railway**
- **DigitalOcean App Platform**

## 🔍 Performance Optimizations

- **Image optimization** with Next.js Image component
- **Code splitting** with dynamic imports
- **CSS optimization** with Tailwind's purge feature
- **Font optimization** with Next.js font loading

## 🐛 Troubleshooting

### Common Issues

**1. Video not loading**
- Check YouTube video URL and permissions
- Ensure autoplay is supported in browser

**2. Animations not working**
- Verify Tailwind CSS is properly configured
- Check for JavaScript errors in console

**3. Form submission issues**
- Implement proper form handling logic
- Add server-side validation

### Development Tips

- Use browser dev tools to debug scroll positions
- Test on multiple devices for responsive behavior
- Monitor performance with Lighthouse

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions:
- **Email**: info@supremegroup.co.in
- **Phone**: +91 22 25208822
- **Address**: Supreme House, 110, 16th Road, Chembur, Mumbai - 400071

## 🙏 Acknowledgments

- **Supreme Group** for design inspiration
- **Next.js team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **shadcn/ui** for beautiful UI components

---

**Built with ❤️ using Next.js and Tailwind CSS**
