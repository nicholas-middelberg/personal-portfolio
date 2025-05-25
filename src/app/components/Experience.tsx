export default function Experience() {
    return (
      <section id="experience" className="section">
        <h2 className="section-title">Experience</h2>
        <div className="experience-section">
          <p className="date-range">01/25 - Current</p>
          <div className="experience-content">
            <h3 className="experience-title"> Software Development Intern at Pharamaceutical Data Services</h3>
            <p className="experience-text">
            I first optimized an hourly data update process for a client, building off of an existing codebase in Python and SQL, and following object-oriented programming principles.
            I developed efficient API queries and implemented batch updates that reduced runtime by 95%. Additionally, I minimized data redundancy by 90%, eliminated manual processes, and significantly improved client satisfaction. 
            To ensure correctness and efficiency, I conducted automated unit testing before deploying to the production database.
            </p>
            <p className="experience-text">
              Next, I designed an AI-assisted ETL pipeline in Python to standardize over 100 altered datasheets and insert them into a relational database.
            </p>
          </div>
        </div>
        <div className="experience-section">
          <p className="date-range">06/24 - 09/24</p>
          <div className="experience-content">
            <h3 className="experience-title"> Research Intern at BioRay Pharmaceuticals</h3>
            <p className="experience-text">
              I worked in an R & D lab focused on developing mRNA cancer treatments. 
              To identify potential new gene targets, I developed a tool in R to analyze single-cell mRNA expression data, implementing a pipeline performing data normalization, PCA-based dimensionality reduction, UMAP clustering, cell malignancy estimation, and data visualization. 
              Using this tool, I then processed data across 20 cancer types and identified three potential new gene targets.
            </p>
          </div>
        </div>
        <div className="experience-section">
          <p className="date-range">06/22 - 03/23</p>
          <div className="experience-content">
            <h3 className="experience-title"> Research Assistant at SDSU Research Foundation</h3>
            <p className="experience-text">
              Working in the Laboratory for Pathogenesis of Clinical Drug Resistance, I led project analysis investigating misunderstood mutations in tuberculosis, identifying and classifying affected genes using Python and Bash.
             This work revealed systemic mutations in &quot;pseudogenes&quot; believed to be responsible for multiple drug resistance. 
             I cleaned and analyzed large datasets using pandas and matplotlib, built two phylogenetic trees, and used chi-squared tests to determine the statistical significance of observed mutations. 
             Throughout the project, I presented weekly updates to a 16-person lab team, including four in-depth presentations lasting over two hours each, as well as two comprehensive literature reviews.
            </p>
          </div>
        </div>
      </section>
      
    );
  }
  