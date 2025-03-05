
// Insert the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Blog data
const blogs = [
  
  {
    title: "Exploring the Boundless: An Introduction to the World of Possibilities in Data Science and Machine Learning",
    date: "Feb 12, 2024",
    description: "Hey there! Welcome to our first exploration into the boundless realms of data science and machine learning.",
    link: "blogs/b2.html"
  },
  {
    title: "Unveiling the Core: Foundations of Data Science",
    date: "Feb 14, 2024",
    description: "Unveiling the Core: Foundations of Data Science.",
    link: "blogs/b3.html"
  },
  {
    title: "Charting the Territory: A Journey into Data Science and Machine Learning",
    date: "Feb 16, 2024",
    description: "Exploring the World of Data Science and Machine Learning.",
    link: "blogs/b4.html"
  },
  {
    title: "Essential Data Science Books for Starting Out",
    date: "Feb 22, 2024",
    description: "On my journey into the world of data science has been both exhilarating and daunting.",
    link: "blogs/b7.html"
  },
  {
    title: "Exploring Python Libraries for Data Science: A Simple Guide",
    date: "Feb 18, 2024",
    description: "Learn what matters.",
    link: "blogs/b5.html"
  },
  {
    title: "Mastering the Tools: Essential Languages and Libraries in Data Science",
    date: "Feb 10, 2024",
    description: "In our exploration of data science, understanding the tools of the trade is paramount.",
    link: "blogs/b1.html"
  },
  {
    title: "Simple Python Project: HDBMS - Bridging the Gap Between Coding Basics and Real-World Application",
    date: "Feb 20, 2024",
    description: "Hospital Database Management System.",
    link: "blogs/b6.html"
  }

];

// Insert blogs into the page
const blogsContainer = document.getElementById('blogs');
blogs.forEach(blog => {
  const blogElement = document.createElement('div');
  blogElement.classList.add('bg-white', 'shadow', 'p-6', 'rounded-lg');
  blogElement.innerHTML = `
    <h3 class="text-2xl font-bold mb-2"><a href="${blog.link}" class="hover:underline">${blog.title}</a></h3>
    <p class="text-gray-600 mb-4">${blog.date}</p>
    <p class="mb-4">${blog.description}</p>
    <a href="${blog.link}" class="text-blue-700 hover:underline">Read more</a>
  `;
  blogsContainer.appendChild(blogElement);
});
