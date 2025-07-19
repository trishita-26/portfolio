import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "ML Lecture Summarizer",
    description:
      "An AI-powered tool that summarizes lengthy ML lectures into concise notes using NLP techniques.",
    tags: ["Python", "NLP", "Text Summarization", "Streamlit", "Pandas"],
    githubUrl: "https://github.com/trishita-26/ml_lecture_summarizer",
    demoUrl: "",  // no demo link yet
  },
  {
    id: 2,
    title: "Power BI Sales Dashboard",
    description:
      "Interactive Power BI dashboard for tracking KPIs, regional performance, and product sales insights.",
    tags: ["Power BI", "Data Cleaning", "DAX", "Excel"],
    githubUrl: "https://github.com/trishita-26/powerbi-sales-dashboard",
    demoUrl: "",
   
  },

  {
    id: 3,
    title: "Recommender System from Scratch",
    description:
      "Built a matrix factorization-based recommender system in Python, demonstrating core collaborative filtering concepts.",
    tags: ["Python", "Machine Learning", "Recommender Systems", "Matrix Factorization"],
    githubUrl: "https://github.com/trishita-26/Building-a-Recommender-System-From-Scratch-with-Matrix-Factorization-in-Python",
    demoUrl: "",
   
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A curated list of some of my personal and academic projects. I focus on blending data, design, and logic to build meaningful products.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* {project.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              )} */}

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/trishita-26"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
