# 🚀 Modern Portfolio Website - Lahiru Senadheera

A stunning, professional, and fully responsive portfolio website built with Bootstrap 5, featuring modern animations, particle effects, and a beautiful gradient design.

## ✨ Features

### 🎨 Modern Design

- **Bootstrap 5** - Latest version for robust responsive design
- **Particles.js** - Interactive particle background effect
- **AOS (Animate On Scroll)** - Smooth scroll animations
- **Gradient Colors** - Eye-catching purple/blue gradient theme
- **Google Fonts (Poppins)** - Clean, modern typography
- **Bootstrap Icons** - 2000+ high-quality icons

### 🔥 Key Highlights

- ✅ Fully Responsive (Mobile, Tablet, Desktop)
- ✅ Modern Gradient Theme
- ✅ Animated Hero Section with Particles
- ✅ Smooth Scroll Animations
- ✅ Interactive Project Cards
- ✅ Professional Contact Form
- ✅ Back to Top Button
- ✅ Progress Bar Indicator
- ✅ Hover Effects & Transitions
- ✅ SEO Friendly

## 📁 File Structure

```
portfolio/
├── index.html      # Main HTML file with Bootstrap 5
├── styles.css      # Custom CSS with modern gradients
├── script.js       # JavaScript for interactivity
└── README.md       # This file
```

## 🚀 Quick Start

### 1. Open the Portfolio

Simply open `index.html` in your web browser to view your portfolio.

### 2. No Installation Required!

All libraries are loaded from CDN:

- Bootstrap 5.3.2
- Bootstrap Icons 1.11.1
- Particles.js 2.0.0
- AOS (Animate On Scroll) 2.3.1
- Google Fonts (Poppins)

## ✏️ Customization Guide

### 🎯 Step 1: Add Your GitHub Projects

Edit the `projects` array in **script.js** (lines 5-50):

```javascript
const projects = [
  {
    icon: "bi-code-slash", // Bootstrap icon class
    title: "Your Project Name",
    description: "Brief description of your project",
    tags: ["PHP", "MySQL", "JavaScript"],
    github: "https://github.com/Senadheera-eng/your-repo-name",
    demo: "https://your-demo-link.com", // Optional
  },
  // Add more projects...
];
```

**Available Bootstrap Icons:**

- `bi-code-slash` - Code/Development
- `bi-phone` - Mobile Apps
- `bi-shop` - E-commerce/POS
- `bi-graph-up-arrow` - Analytics/Trading
- `bi-mortarboard` - Education
- `bi-cash-coin` - Finance
- `bi-robot` - AI/ML
- `bi-database` - Database
- Find more at: https://icons.getbootstrap.com/

### 🎨 Step 2: Change Colors

Edit the CSS variables in **styles.css** (lines 6-13):

```css
:root {
  --primary: #6366f1; /* Main purple */
  --primary-dark: #4f46e5; /* Darker purple */
  --secondary: #8b5cf6; /* Secondary purple */
  --accent: #ec4899; /* Pink accent */
  --dark: #0f172a; /* Dark blue */
  --light: #f1f5f9; /* Light gray */
}
```

### 📝 Step 3: Update Personal Information

Edit **index.html**:

- Line 68-72: Name and title
- Line 73-77: Description
- Line 129-149: About section
- Line 152-155: Statistics (Projects/Experience)
- Line 475-515: Contact information

### 🌐 Step 4: Add Social Links

Update these sections in **index.html**:

- Hero section (lines 89-99)
- Contact section (lines 491-505)
- Footer (lines 578-590)

## 🎨 Color Schemes

### Current Theme (Purple/Blue)

```css
Primary: #6366f1
Secondary: #8b5cf6
```

### Alternative Themes:

**Green/Teal:**

```css
--primary: #10b981;
--secondary: #14b8a6;
```

**Orange/Red:**

```css
--primary: #f97316;
--secondary: #ef4444;
```

**Blue/Cyan:**

```css
--primary: #3b82f6;
--secondary: #06b6d4;
```

## 📱 Sections Overview

1. **Hero** - Animated intro with particles background
2. **About** - Your story, stats, and skills
3. **Projects** - Portfolio showcase with cards
4. **Services** - What you offer
5. **Contact** - Contact form and information
6. **Footer** - Quick links and social media

## 🌐 Deployment Options

### GitHub Pages (Free)

1. Create a new repository on GitHub
2. Upload all files
3. Go to Settings → Pages
4. Select branch and deploy
5. Your site: `https://yourusername.github.io/repo-name`

### Netlify (Free)

1. Drag and drop your folder to Netlify
2. Get instant deployment
3. Custom domain supported

### Vercel (Free)

1. Import from GitHub
2. Automatic deployments
3. Edge network for speed

## 🔧 Advanced Features

### Enable Typing Effect

Uncomment the typing effect code in **script.js** (line 331-345)

### Add Preloader

Add this to your HTML before `</body>`:

```html
<div id="preloader">
  <div class="spinner"></div>
</div>
```

### Integrate Real Contact Form

**Option 1: Formspree (Easiest)**

```html
<form action="https://formspree.io/f/YOUR_ID" method="POST"></form>
```

**Option 2: EmailJS**

```javascript
emailjs.send("service_id", "template_id", formData);
```

**Option 3: Custom Backend**
Create a PHP/Node.js endpoint and update form submission in script.js

## 📊 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🎯 Performance Tips

1. **Optimize Images**: Use WebP format
2. **Lazy Loading**: Add `loading="lazy"` to images
3. **Minify CSS/JS**: Use online minifiers before deployment
4. **CDN**: All libraries already on CDN
5. **Caching**: Enable browser caching

## 🐛 Troubleshooting

**Particles not showing?**

- Check browser console for errors
- Ensure particles.js CDN is loading

**Animations not working?**

- Verify AOS library is loaded
- Check `AOS.init()` is called

**Projects not displaying?**

- Open browser console (F12)
- Check for JavaScript errors
- Verify projects array format

**Mobile menu not working?**

- Ensure Bootstrap JS is loaded
- Check navbar structure

## 📝 To-Do Checklist

- [ ] Add your real GitHub repository URLs
- [ ] Update project descriptions
- [ ] Change email address
- [ ] Update social media links
- [ ] Add your photo (optional)
- [ ] Customize colors to your brand
- [ ] Test on multiple devices
- [ ] Set up contact form backend
- [ ] Add Google Analytics (optional)
- [ ] Deploy to hosting

## 🎓 Learning Resources

- [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.3/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [AOS Animation](https://michalsnik.github.io/aos/)
- [Particles.js](https://vincentgarreau.com/particles.js/)
- [CSS Gradients](https://cssgradient.io/)

## 💡 Tips for Best Results

1. **High-Quality Content**: Write clear, compelling descriptions
2. **Professional Photos**: Use high-res images
3. **Consistent Updates**: Add new projects regularly
4. **Mobile-First**: Test on phones first
5. **Fast Loading**: Keep images optimized
6. **SEO**: Add meta tags and descriptions
7. **Analytics**: Track visitor behavior
8. **Testimonials**: Add client feedback
9. **Blog**: Consider adding a blog section
10. **Portfolio Pieces**: Show your best work

## 🤝 Need Help?

- Check browser console for errors (F12)
- Verify all CDN links are working
- Test in incognito mode
- Clear browser cache
- Check file paths are correct

## 📄 License

Feel free to use this template for your own portfolio!

---

**Built with ❤️ for Peak - Lahiru Senadheera**

_Modern. Professional. Impressive._
