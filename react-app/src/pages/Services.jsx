import './Services.css';

const projects = [
  {
    title: 'E-Commerce Store',
    desc: 'A full-stack shopping app with cart, checkout, and payment integration built with React and Node.js.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    github: 'https://github.com/Ayotah',
    live: 'https://your-live-site.com',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Portfolio Website',
    desc: 'A responsive personal portfolio with smooth routing, contact form, and dark theme.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&q=80',
    github: 'https://github.com/Ayotah',
    live: 'https://your-live-site.com',
    tags: ['React', 'CSS', 'Formsubmit'],
  },
  {
    title: 'Weather Dashboard',
    desc: 'Real-time weather app using OpenWeather API with city search and 5-day forecast.',
    image: 'https://images.unsplash.com/photo-1504608524841-42584120d693?w=600&q=80',
    github: 'https://github.com/Ayotah',
    live: 'https://your-live-site.com',
    tags: ['React', 'API', 'CSS'],
  },
  {
    title: 'Task Manager',
    desc: 'A drag-and-drop kanban board with local storage persistence and priority labels.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80',
    github: 'https://github.com/Ayotah',
    live: 'https://your-live-site.com',
    tags: ['React', 'DnD', 'LocalStorage'],
  },
  {
    title: 'Chat Application',
    desc: 'Real-time messaging app with rooms and online status using Socket.io.',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&q=80',
    github: 'https://github.com/Ayotah',
    live: 'https://your-live-site.com',
    tags: ['React', 'Socket.io', 'Node.js'],
  },
  {
    title: 'Blog Platform',
    desc: 'A markdown-powered blog with categories, search, and a clean reading experience.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80',
    github: 'https://github.com/Ayotah',
    live: 'https://your-live-site.com',
    tags: ['React', 'Markdown', 'Firebase'],
  },
];

export default function Projects() {
  return (
    <main className="services">
      <div className="services__header">
        <p className="services__eyebrow">My Work</p>
        <h1 className="services__title">Projects I've built</h1>
        <p className="services__sub">A collection of real-world projects — click to explore the code or see it live.</p>
      </div>

      <div className="services__grid">
        {projects.map((p) => (
          <div key={p.title} className="services__card project-card">

            <div className="project-card__img-wrap">
              <img src={p.image} alt={p.title} className="project-card__img" />
            </div>

            <div className="project-card__body">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>

              <div className="project-card__tags">
                {p.tags.map(tag => (
                  <span key={tag} className="project-card__tag">{tag}</span>
                ))}
              </div>

              <div className="project-card__links">
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-card__btn">
                  <i className="bi bi-github"></i> GitHub
                </a>
                <a href={p.live} target="_blank" rel="noopener noreferrer" className="project-card__btn project-card__btn--live">
                  <i className="bi bi-box-arrow-up-right"></i> Live
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </main>
  );
}