# Profile Card Component - Stage 0

A fully accessible, responsive profile card component built with semantic HTML, modern CSS, and vanilla JavaScript. Designed for automated testing with comprehensive `data-testid` coverage.

## 📋 Project Overview

This project implements a professional profile card that displays user information including:
- Profile avatar with alt text
- User name and biography
- Live millisecond timestamp
- Social media links
- Hobbies and dislikes lists

**All elements are fully testable** via `data-testid` attributes for automated test suites.

## ✨ Features

- ✅ **Semantic HTML5** - Uses proper semantic tags (`<article>`, `<figure>`, `<nav>`, `<section>`)
- ✅ **Fully Accessible** - WCAG compliant with proper heading hierarchy, alt text, and ARIA labels
- ✅ **Responsive Design** - Mobile, tablet, and desktop optimized (breakpoints: 480px, 768px)
- ✅ **Keyboard Navigation** - All interactive elements are keyboard-focusable with visible focus states
- ✅ **Live Timestamp** - Millisecond precision with real-time updates every 100ms
- ✅ **Test Ready** - Every visible element includes required `data-testid` attributes
- ✅ **Security** - Social links use `rel="noopener noreferrer"` to prevent vulnerabilities
- ✅ **Modern CSS** - Flexbox layout, smooth transitions, and micro-interactions

## 🚀 Quick Start

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required

### Installation

1. **Clone the repository** (or download the HTML file):
```bash
git clone https://github.com/yourusername/profile-card-component.git
cd profile-card-component
```

2. **Run locally** - Choose one of these methods:

#### Option A: Open directly in browser
```bash
# Simply double-click the index.html file
# or
open index.html
```

#### Option B: Use Python (built-in server)
```bash
# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000
```
Then visit: `http://localhost:8000`

#### Option C: Use Node.js (if installed)
```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server

# Visit: http://localhost:8080
```

#### Option D: Use Live Server (VS Code extension)
1. Install the "Live Server" extension in VS Code
2. Right-click `index.html` → "Open with Live Server"

## 📁 Project Structure

```
profile-card-component/
├── index.html          # Complete component (HTML + CSS + JS)
├── README.md           # This file
└── LICENSE             # MIT License (optional)
```

## 🧪 Testing

### Data-TestID Reference

All elements are queryable via these `data-testid` attributes:

| Element | data-testid | Type |
|---------|-------------|------|
| Root container | `test-profile-card` | `<article>` |
| User name | `test-user-name` | `<h2>` |
| Biography | `test-user-bio` | `<p>` |
| Live timestamp (ms) | `test-user-time` | `<time>` |
| Avatar image | `test-user-avatar` | `<img>` |
| Social links container | `test-user-social-links` | `<ul>` |
| Social link - Twitter | `test-user-social-twitter` | `<a>` |
| Social link - GitHub | `test-user-social-github` | `<a>` |
| Social link - LinkedIn | `test-user-social-linkedin` | `<a>` |
| Social link - Email | `test-user-social-email` | `<a>` |
| Hobbies list | `test-user-hobbies` | `<ul>` |
| Dislikes list | `test-user-dislikes` | `<ul>` |

### Example Test Queries

```javascript
// Query elements in browser console or test scripts

// Get the entire card
const card = document.querySelector('[data-testid="test-profile-card"]');

// Get user name
const name = document.querySelector('[data-testid="test-user-name"]').textContent;
// Output: "Alex Johnson"

// Get live timestamp
const timestamp = document.querySelector('[data-testid="test-user-time"]').textContent;
// Output: "1729267845123" (updates every 100ms)

// Get all hobbies
const hobbies = document.querySelectorAll('[data-testid="test-user-hobbies"] li');
// Output: NodeList(5) [li, li, li, li, li]

// Get social links
const socialLinks = document.querySelectorAll('[data-testid*="test-user-social-"]');
// Output: NodeList(4) [a, a, a, a]

// Check if avatar has alt text
const avatar = document.querySelector('[data-testid="test-user-avatar"]');
console.log(avatar.alt); // "Profile picture of Alex Johnson"
```

### Manual Testing Checklist

- [ ] Card displays correctly on mobile (< 480px)
- [ ] Card displays correctly on tablet (480px - 768px)
- [ ] Card displays correctly on desktop (> 768px)
- [ ] All text is readable without zooming
- [ ] Avatar loads and displays with correct border radius
- [ ] Social links open in new tabs
- [ ] Timestamp updates live (watch the number change)
- [ ] Hover effects work on social links and tags
- [ ] Tab through all interactive elements
- [ ] Focus styles are clearly visible
- [ ] All colors meet WCAG AA contrast requirements

## 🔧 Customization

### Change User Information

Edit the HTML content inside the component:

```html
<!-- Change name -->
<h2 data-testid="test-user-name">Your Name Here</h2>

<!-- Change bio -->
<p data-testid="test-user-bio">Your bio text here</p>

<!-- Change avatar -->
<img 
    src="https://your-image-url.jpg" 
    alt="Your profile description" 
    data-testid="test-user-avatar"
>

<!-- Add/remove hobbies -->
<ul data-testid="test-user-hobbies">
    <li>Your hobby</li>
    <li>Another hobby</li>
</ul>

<!-- Update social links -->
<a href="https://your-url.com" data-testid="test-user-social-twitter">
    𝕏
</a>
```

### Adjust Timestamp Update Speed

In the JavaScript section, modify the `setInterval` value:

```javascript
// Update every 100ms (current - fast)
setInterval(updateTimestamp, 100);

// Update every 1000ms (1 second - recommended for production)
setInterval(updateTimestamp, 1000);

// Update every 5000ms (5 seconds - slower)
setInterval(updateTimestamp, 5000);
```

### Modify Colors

Edit the CSS gradient colors:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
/* Change to your preferred colors */
```

## 📱 Responsive Breakpoints

- **Mobile**: < 480px - Single column, smaller fonts
- **Tablet**: 480px - 768px - Optimized spacing
- **Desktop**: > 768px - Full layout with hover effects

## ♿ Accessibility Features

- Semantic HTML markup for proper screen reader support
- `alt` text for all images
- `aria-label` attributes on interactive elements
- Keyboard-focusable all interactive elements
- High contrast text (WCAG AA compliant)
- Proper heading hierarchy (h2 for name)
- Focus indicators visible on all interactive elements
- Sufficient touch target sizes (40px minimum)

## 🔒 Security

- Social links use `rel="noopener noreferrer"` to prevent Tabnapping attacks
- No external dependencies (reduces attack surface)
- No localStorage or sessionStorage usage
- All data is client-side only

## 🚢 Deployment

### Netlify (Recommended)

1. Create GitHub repo and push code
2. Connect to Netlify: https://netlify.com
3. Deploy automatically on each push

### GitHub Pages

1. Push to GitHub
2. Enable GitHub Pages in repository settings
3. Select `main` branch as source
4. Live URL: `https://yourusername.github.io/profile-card-component`

### Vercel

1. Connect GitHub repo: https://vercel.com
2. Auto-deploys on push
3. Get live URL automatically

## 📝 Browser Support

- ✅ Chrome/Edge 88+
- ✅ Firefox 87+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## 📄 License

MIT License - Feel free to use for personal and commercial projects

## 🤝 Contributing

Suggestions? Found a bug? Feel free to open an issue or submit a pull request!

## 📞 Support

For questions or issues:
1. Check the browser console for errors
2. Verify all `data-testid` attributes are present
3. Test on multiple browsers
4. Check network tab if images don't load
