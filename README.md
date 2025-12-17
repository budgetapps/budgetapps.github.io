# Budget Apps Website

A modern, SEO-optimized affiliate website showcasing 18 budget and personal finance applications.

## 🚀 Features

- **App Store-Inspired Design**: Clean, modern interface with smooth animations
- **SEO Optimized**: Complete with schema markup, meta tags, and semantic HTML
- **Modular Architecture**: Separate header and footer files loaded dynamically
- **Fully Responsive**: Mobile-first design that works on all devices
- **18 Featured Apps**: Each app has its own dedicated page
- **Affiliate Ready**: Optimized for affiliate marketing with proper link structure

## 📦 Structure

```
budgetapps.github.io/
├── index.html              # Homepage
├── header.html             # Shared header component
├── footer.html             # Shared footer component
├── styles.css              # Main stylesheet
├── script.js               # JavaScript for dynamic loading
├── images/                 # App icons/images
│   ├── pocketguard.jpg
│   ├── rocket-money.jpg
│   └── ... (other app images)
└── [app-name].html        # Individual app pages
```

## 🎨 Apps Included

1. **PocketGuard** - $25/subscriber
2. **Rocket Money** - High commission
3. **Quicken Simplifi** - $40+/sale
4. **Empower** - $50-$144/lead
5. **Qube Money** - Referral program
6. **MoneyPatrol** - Unlimited commissions
7. **BudgetSheet** - 20% recurring
8. **ProjectionLab** - Recurring commissions
9. **Copilot Money** - Revenue share
10. **Tiller** - $25/subscription
11. **PocketSmith** - Premium plans
12. **Trim** - $6+/lead
13. **Clever Fox** - High commission
14. **CalendarBudget** - Competitive rates
15. **SimplePlanning** - 50% commission
16. **LivePlan** - $20 + 20%
17. **Moneyspire** - Software sales
18. **FamZoo** - ShareASale network

## 🔧 Setup Instructions

1. **Clone/Download** the repository
2. **Add Images**: Place app icon images in the `/images` folder with filenames matching the app names
3. **Update Affiliate Links**: Replace `#` in app detail pages with your actual affiliate links
4. **Deploy**: Upload to GitHub Pages or any static hosting service
5. **Configure**: Update meta tags and URLs to match your domain

## 📝 Customization

### Adding New Apps

1. Create a new HTML file: `app-name.html`
2. Copy structure from `pocketguard.html`
3. Update content, meta tags, and affiliate links
4. Add app card to `index.html` apps grid
5. Add app icon image to `/images` folder

### Styling

All styles are in `styles.css`. Key CSS variables in `:root`:
- `--primary-color`: Main brand color
- `--text-primary`: Primary text color
- `--bg-secondary`: Background variations

### SEO Optimization

Each page includes:
- Schema.org structured data
- Open Graph tags
- Twitter Card tags
- Canonical URLs
- Descriptive meta tags
- Semantic HTML5 elements

## 🌐 Deployment to GitHub Pages

1. Create repository: `username.github.io`
2. Push code to main branch
3. Enable GitHub Pages in repository settings
4. Site will be live at `https://username.github.io`

## 📱 Responsive Breakpoints

- Mobile: < 480px
- Tablet: 481px - 768px
- Desktop: > 768px

## ⚡ Performance Features

- Lazy loading for images
- Intersection Observer for animations
- Minimal JavaScript dependencies
- Optimized CSS animations
- Mobile-first approach

## 🔒 Affiliate Compliance

- All affiliate links include `rel="nofollow sponsored"`
- Clear commission disclosure on app pages
- Transparent affiliate relationship

## 📄 License

Free to use for personal and commercial projects. Attribution appreciated but not required.

## 🤝 Contributing

Feel free to fork and customize for your own affiliate website!
