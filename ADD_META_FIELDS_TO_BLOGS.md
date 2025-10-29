# How to Add Meta Title and Meta Description Fields to Blogs

## Overview
This guide explains how to add custom SEO fields to your Strapi Blog content type so you can set custom meta titles and descriptions for each blog post.

## Steps to Add Meta Fields in Strapi

### 1. Access Strapi Admin Panel
1. Navigate to your Strapi admin panel (usually at `http://localhost:1337/admin`)
2. Log in with your admin credentials

### 2. Open Content-Type Builder
1. Click on **Content-Type Builder** in the left sidebar (under **General**)
2. Find **Blog** in the list of content types
3. Click on **Blog** to edit it

### 3. Add Meta Title Field
1. Click on **Add another field** button
2. Select **Text** field type
3. Configure the field:
   - **Name**: `meta_title`
   - **Display name**: `Meta Title` (or "SEO Title")
   - **Type**: **Short text** or **Long text**
   - Mark it as **Optional** (not required)
4. Click **Finish**
5. Click **Save**

### 4. Add Meta Description Field
1. Click on **Add another field** button again
2. Select **Textarea** field type
3. Configure the field:
   - **Name**: `meta_description`
   - **Display name**: `Meta Description` (or "SEO Description")
   - Mark it as **Optional** (not required)
4. Click **Finish**
5. Click **Save**

### 5. Restart Strapi Server
After adding the fields, you need to restart your Strapi server:
```bash
# Stop the current Strapi server (Ctrl+C)
# Then restart it
npm run develop
# or
npm run start
```

## How It Works

### For Individual Blog Posts
The updated code will now check for these custom fields first:

```typescript
// Priority order:
1. blog.meta_title (if set in Strapi)
2. Auto-generated title: "{Blog Title} | Kettaneh - Expert {Keyword} Solutions"

// Same for description:
1. blog.meta_description (if set in Strapi)
2. Auto-generated description from blog.Description + keywords
```

### For Blog List Page
The blog list page (`/en/blogs`) already fetches SEO data from the `blog-page` content type. To customize it:

1. Go to **Content-Type Builder** → **Blog Page**
2. Ensure there's a **Component** or **Group** field named **seo** containing:
   - `meta_title` (Text)
   - `meta_description` (Textarea)

If these fields don't exist, add them following the same steps above.

## Usage After Adding Fields

### Editing a Blog Post
1. Go to **Content Manager** → **Blog**
2. Create or edit a blog post
3. You'll now see two new fields:
   - **Meta Title**: Custom SEO title (optional)
   - **Meta Description**: Custom SEO description (optional)
4. Fill them in for SEO optimization
5. Save and publish

### If Fields Are Left Empty
If you don't fill in these fields, the system will automatically generate SEO-friendly titles and descriptions based on your blog's title and description.

## Benefits

✅ **Full Control**: Set custom SEO titles and descriptions for each blog post
✅ **Fallback Support**: If not filled, auto-generates SEO-friendly content
✅ **Better SEO**: Optimize titles and descriptions for search engines
✅ **Flexible**: Can be used for different purposes than the blog title/description

## Testing

After adding the fields:

1. Create a test blog post in Strapi
2. Fill in the meta fields
3. Publish the blog
4. Visit the blog post on your website
5. View the page source or use browser dev tools to verify the meta tags
6. Check the `<title>` tag in the HTML head section
7. Check the `<meta name="description">` tag

Example:
```html
<title>Your Custom Meta Title</title>
<meta name="description" content="Your custom meta description">
```

## Notes

- Field names must match exactly: `meta_title` and `meta_description` (lowercase with underscore)
- The fields are optional, so existing blogs will continue to work
- Changes take effect after restarting Strapi
- Make sure to rebuild/restart your Next.js app if needed

