# How to Check Meta Title and Description

## Method 1: Browser Developer Tools (Easiest)

1. **Open your blog page** in the browser (e.g., `http://localhost:3000/en/blogs/your-blog-slug`)

2. **Right-click anywhere on the page** → Select **"Inspect"** or **"Inspect Element"**

3. Go to the **Elements/Inspector** tab

4. Look in the `<head>` section for:
   - `<title>` tag - This is your meta title
   - `<meta name="description">` tag - This is your meta description
   - `<meta property="og:title">` - Open Graph title (for social sharing)
   - `<meta property="og:description">` - Open Graph description
   - `<meta name="twitter:title">` - Twitter card title
   - `<meta name="twitter:description">` - Twitter card description

## Method 2: View Page Source

1. **Right-click on the page** → Select **"View Page Source"** (or press `Ctrl+U` / `Cmd+U`)

2. Press `Ctrl+F` / `Cmd+F` to search for:
   - `"<title>"` - to find the page title
   - `"meta name=\"description\""` - to find the meta description
   - `"og:title"` - to find Open Graph tags

3. Scroll to the `<head>` section at the top of the HTML

## Method 3: Browser Tab Title (Quick Check)

- The **browser tab title** shows the `<title>` tag directly
- This is the easiest way to verify the title is changing per blog post

## Method 4: SEO Testing Tools (Online)

### Google Search Console Rich Results Test
- URL: https://search.google.com/test/rich-results
- Enter your blog URL to see how it appears in search

### Facebook Sharing Debugger
- URL: https://developers.facebook.com/tools/debug/
- Enter your blog URL to see Open Graph tags

### Twitter Card Validator
- URL: https://cards-dev.twitter.com/validator
- Enter your blog URL to see Twitter card preview

### Meta Tags Preview Tool
- URL: https://metatags.io/
- Enter your blog URL to preview all meta tags

## Method 5: Using Browser Extensions

### SEO META in 1 CLICK (Chrome Extension)
- Install the extension
- Click the icon on any page to see all meta tags

### Open Graph Preview (Chrome Extension)
- Preview how your page will look when shared on social media

## Method 6: Programmatic Check (For Developers)

### Using curl in Terminal
```bash
curl -s http://localhost:3000/en/blogs/your-blog-slug | grep -E "<title>|<meta.*description"
```

### Using PowerShell
```powershell
Invoke-WebRequest -Uri "http://localhost:3000/en/blogs/your-blog-slug" | Select-String -Pattern "<title>|<meta.*description"
```

## What to Look For

When checking a blog detail page, you should see:

1. **Title**: Should be `[Blog Title] | Kettaneh`
   - Example: "How to Choose the Right Air Conditioner | Kettaneh"

2. **Meta Description**: Should be the blog's description
   - This comes from the `Description` field in Strapi, or `meta_description` if available

3. **Open Graph Tags**: Should match the title and description
   - Used when sharing on Facebook, LinkedIn, etc.

4. **Twitter Tags**: Should match the title and description
   - Used when sharing on Twitter/X

## Quick Test Checklist

- [ ] Browser tab shows the correct blog title
- [ ] View Source shows `<title>[Blog Title] | Kettaneh</title>`
- [ ] Meta description tag exists and has content
- [ ] Open Graph tags are present
- [ ] Twitter card tags are present
- [ ] Each blog post has a unique title

## Troubleshooting

If the title isn't changing:
1. Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)
2. Clear browser cache
3. Check the browser console for errors
4. Verify the blog slug matches in the URL
5. Check server logs for fetch errors

