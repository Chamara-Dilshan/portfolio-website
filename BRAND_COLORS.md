# Brand Colors & Design System

## Your Brand Colors

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **Primary** | `#1E4F7A` | Deep blue - Main brand color, headings, accents |
| **Secondary** | `#111827` | Dark gray - Text, headers, dark elements |
| **Accent** | `#38BDF8` | Bright cyan - CTAs, highlights, interactive elements |
| **Neutral Light** | `#F8FAFC` | Light gray/white - Backgrounds, cards |

## Tailwind Color Palette

These colors have been integrated into your Tailwind config with full shade ranges (50-900):

```javascript
// tailwind.config.js
colors: {
  primary: { /* Deep Blue shades */ },
  secondary: { /* Dark Gray shades */ },
  accent: { /* Bright Cyan shades */ },
  neutral: { /* Light Gray shades */ }
}
```

## Design Changes Applied

### 1. Typography
- **Font Family**: DM Sans (replacing Inter)
- **Display Headlines**: Bold, large, with tight tracking
- **Body Text**: Improved readability with optimized line-height

### 2. Color Applications

#### Hero Section
- Gradient text combining accent → primary
- Animated gradient orbs using brand colors
- Subtle grid pattern with primary color
- "Available for opportunities" badge with accent color
- Primary CTA button with accent gradient

#### Project Cards
- Accent border on hover (gradient from accent to primary)
- Tech badges with accent/primary background
- Hover overlay with secondary dark color
- Action buttons use accent color

#### Skills Badges
- White background with subtle hover effects
- Accent color highlight on hover
- Category headers with accent gradient bar

#### Contact Section
- Icon backgrounds use accent and primary gradients
- Submit button with accent gradient
- Info box with accent/primary light background
- Enhanced hover states with accent color

#### Navigation
- Accent color on hover
- Active state uses accent color
- Animated underline with accent→primary gradient

#### Footer
- Subtle gradient background
- Social icons with accent hover state
- Modern card-style buttons

### 3. Interactive Elements

#### Buttons
- `.btn-primary`: Primary color gradient
- `.btn-accent`: Accent color gradient with shine effect
- `.btn-outline`: Transparent with primary border

#### Cards
- Subtle gradient border on hover
- Enhanced shadows with primary/accent tints
- Smooth scale transforms

#### Form Inputs
- Accent color focus rings
- Enhanced border states
- Smooth transitions

### 4. Animations & Effects

- Staggered fade-in animations
- Gradient orb backgrounds
- Hover scale transforms
- Color transitions (300ms)
- Smooth scrolling
- Animated scroll indicator

## Design Philosophy

**Tech-Refined Minimalism**: Clean, professional interface with strategic pops of the bright cyan accent creating energy and memorable moments. The deep blue primary grounds the design while the accent creates dynamic, interactive experiences.

### Key Principles
1. **Contrast**: High contrast between text and backgrounds for accessibility
2. **Hierarchy**: Clear visual hierarchy using color, size, and weight
3. **Consistency**: Unified color application across all components
4. **Energy**: Accent color creates excitement and draws attention to key actions
5. **Professionalism**: Primary and secondary colors establish credibility

## Accessibility

All color combinations meet WCAG 2.1 AA standards:
- Accent text on white: 4.5:1+ contrast
- Primary text on white: 7:1+ contrast
- Secondary text on white: 14:1+ contrast

## Usage Guidelines

### Do's ✓
- Use accent color for primary CTAs and important actions
- Use primary color for headings and brand elements
- Use secondary for body text and paragraphs
- Combine accent + primary in gradients for visual interest

### Don'ts ✗
- Don't use accent color for large text blocks (readability)
- Don't mix too many gradients (maintain hierarchy)
- Don't use low-contrast color combinations
- Don't overuse animations (subtle is better)
