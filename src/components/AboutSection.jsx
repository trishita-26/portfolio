import { Database, Code, BarChart3 } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Bridging Data with Design 🚀
            </h3>

            <p className="text-muted-foreground">
              I'm <strong>Trisita Ghosh</strong>, a final-year Computer Science
              student specializing in <strong>Artificial Intelligence & Machine Learning</strong>.
              I design scalable web experiences and build robust data pipelines—uniting
              design and data to create powerful digital products.
            </p>

            <p className="text-muted-foreground">
              My skillset spans <strong>frontend technologies</strong> like React,
              Tailwind, and Three.js, and <strong>data engineering</strong> tools like
              Python, SQL, Hadoop, and cloud platforms like GCP & Azure.
              I thrive on solving problems—whether it's building a sleek UI or optimizing
              an ETL workflow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Let’s Collaborate
              </a>

              <a
                href="/Trisita_Ghosh_Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Frontend Engineering</h4>
                  <p className="text-muted-foreground">
                    Building responsive, accessible, and visually engaging UIs using
                    React, Tailwind CSS, and interactive libraries.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Engineering</h4>
                  <p className="text-muted-foreground">
                    Designing ETL pipelines, managing big data, and
                    transforming raw data into actionable insights with
                    tools like Python, SQL, and cloud platforms.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data-Driven Projects</h4>
                  <p className="text-muted-foreground">
                    Applying AI/ML to real-world problems—whether it’s anomaly detection,
                    analytics dashboards, or smart user interfaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
