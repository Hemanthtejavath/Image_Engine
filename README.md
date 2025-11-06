# 🖼️ Image Search Engine

A simple and interactive **Image Search Engine** built with **HTML, CSS, and JavaScript** that fetches images from a free image API and displays them dynamically on the webpage.

---

## 🚀 Features

- 🔍 Search for any image topic (e.g., nature, cars, technology)
- 🧠 Fetches images in real-time using an external API
- 💡 Responsive grid layout for displaying images
- 🖱️ Smooth hover scaling effect for better user experience
- 🌐 Built using JavaScript (no frameworks)

---

## 🛠️ Tech Stack

- **HTML5** – structure  
- **CSS3** – styling & hover effects  
- **JavaScript (ES6)** – API fetching & DOM manipulation  
- **API Used:** [Unsplash API](https://unsplash.com/developers) *(or any free image API you’ve used)*

---

## ⚙️ How It Works

1. User enters a keyword in the search box.  
2. JavaScript sends a request to the image API.  
3. The API returns JSON data with image URLs.  
4. The images are displayed dynamically on the page.  

---

## 📸 Preview

> Add a screenshot or GIF here showing how your app looks.  
> Example:  
> ![App Screenshot](./screenshot.png)

---

## 🧾 Example Code Snippet

```js
async function searchImages(query) {
  const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=YOUR_ACCESS_KEY`);
  const data = await response.json();
  displayImages(data.results);
}
