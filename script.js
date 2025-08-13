document.addEventListener('DOMContentLoaded', () => {
  const blogData = [
    {
      title: "The Rise of AI: What's Next?",
      category: "tech",
      date: "2025-07-20",
      excerpt: "Artificial Intelligence is evolving fast. Here's what to expect in the next decade...",
      image: "https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1-1500x1000.jpg"
    },
    {
      title: "10 Minimalist Habits to Change Your Life",
      category: "lifestyle",
      date: "2025-07-18",
      excerpt: "Living with less can lead to more peace, clarity, and happiness. Discover how.",
      image: "https://www.becomingminimalist.com/wp-content/uploads/2021/02/daily-habits.jpg"
    },
    {
      title: "Exploring the Alps: A Visual Journey",
      category: "travel",
      date: "2025-07-15",
      excerpt: "From snow-capped peaks to charming villages—let the Alps take your breath away.",
      image: "https://ichef.bbci.co.uk/images/ic/976xn/p0c3s7hl.jpg"
    }
  ];

  const blogList = document.getElementById('blog-list');
  const filterCategory = document.getElementById('category-filter');
  const sortBy = document.getElementById('sort-by');

  function renderBlogs(data) {
    blogList.innerHTML = "";
    data.forEach(blog => {
      const card = document.createElement('div');
      card.className = 'blog-card';
      card.innerHTML = `
        <img src="${blog.image}" alt="${blog.title}" loading="lazy" />
        <div class="content">
          <h3>${blog.title}</h3>
          <p>${blog.excerpt}</p>
          <p><small><strong>Category:</strong> ${blog.category} | <strong>Date:</strong> ${blog.date}</small></p>
        </div>
      `;
      blogList.appendChild(card);
    });
  }

  function filterAndSort() {
    const category = filterCategory.value;
    const sort = sortBy.value;

    let filtered = blogData.filter(b => category === "all" || b.category === category);

    filtered.sort((a, b) => {
      return sort === "newest"
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date);
    });

    renderBlogs(filtered);
  }

  filterCategory.addEventListener('change', filterAndSort);
  sortBy.addEventListener('change', filterAndSort);

  renderBlogs(blogData);
});