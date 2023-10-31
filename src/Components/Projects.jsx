import React from 'react';

const projectsData = [
  {
    title: "India In Color",
    description: "Developed a data-driven application leveraging advanced computer vision techniques to extract and analyze predominant colors from images. The tool, built primarily for deepening my web development skills, serves to narrate the vibrant and diverse colors of India. Through this innovative approach, the application not only showcases the myriad hues representing Indian culture but also integrates sophisticated data analysis to offer users insights into the significance and prevalence of each color.",
    // link: "link_to_project1.com"
  },
  {
    title: "TrackShare",
    description: "Developing a social media app for effortless playlist sharing with a 5,000+ title library, using Spotify's API and AWS S3 for recommendations, aiming for a 4.5/5 user rating with native Flutter/CSS and design thinking.",
    // link: "link_to_project1.com"
  },
  {
    title: "Legal Q&A Language Model",
    description: "Designed and deployed an advanced OpenAI language model that achieved a 30% reduction in client downtime by streamlining legal query solutions. This model was seamlessly integrated into a live web interface, resulting in a significant 40% decrease in response time for improved client access to legal counsel.",
    image: "/Resources/LawyerProject.png",
    link: "https://www.youtube.com/watch?v=X7-KDZed1Ns"
  },
  {
    title: "Corporate Transportation Dashboard",
    description: "Placed first place in the OSU Honda Hack 2023 challenge with a prize pool over $3000. Created a dashboard to serve as a hub for transportation companies to view overall statistics as well as act as an interface to transfer to and purchase electric vehicles. Calculated carbon emissions and reduction in operating costs from current replacements.",
    image: "/Resources/HondaProject.png",
    link: "https://github.com/SuvanD0/Streamlit-Dash---Honda "
  },
  {
    title: "Heart Health Prediction Model",
    description: "Decision Tree Classifier model to predict heart disease in South Asians. Researched and provided health recommendations specific to South Asian communities.",
    image: "/Resources/HearthealthCALC1.png",
    link: "https://suvand0-hearthealthpredicitonmodel-homepage-y23qm0.streamlit.app/ "
  },

  {
    title: "Windmill Failure Detection Algorithm",
    description: "Placed first place in the OSU Honda Hack 2023 challenge with a prize pool over $3000. Created a dashboard to serve as a hub for transportation companies to view overall statistics as well as act as an interface to transfer to and purchase electric vehicles. Calculated carbon emissions and reduction in operating costs from current replacements.",
    link: "https://www.youtube.com/watch?v=O_gQqMcUqF8"
  },
  {
    title: "Presence of Polarizing Words in Australian Media",
    description: "Leveraging advanced R statistical techniques, I conducted a comprehensive textual analysis on a dataset of Australian media articles to identify the occurrence of polarizing lexemes. Subsequently, I employed sentiment analysis algorithms to quantify the correlation between these lexemes and the shifts in reader sentiment towards the content.",
    link: "https://github.com/SuvanD0/Presence-of-Polarizing-words-in-Australian-Media#polarizing-words-in-media-over-time"
  },
];


const Projects = () => {
  // Styles
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    fontFamily: 'Arial, sans-serif',
    marginTop: '100px'
  };

  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '15px',
    textAlign: 'center',
    transition: 'transform 0.3s ease'
  };

  const cardImageStyle = {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '5px',
    marginBottom: '15px'
  };

  const cardTitleStyle = {
    fontSize: '20px',
    marginBottom: '10px'
  };

  const cardDescriptionStyle = {
    fontSize: '16px',
    marginBottom: '15px'
  };

  const cardLinkStyle = {
    color: '#333',
    textDecoration: 'none',
    transition: 'color 0.3s ease'
  };

  return (
    <div style={gridStyle}>
      {projectsData.map((project, index) => (
        <div key={index} style={cardStyle}>
          {project.image && <img src={project.image} alt={project.title} style={cardImageStyle} />}
          <h3 style={cardTitleStyle}>{project.title}</h3>
          <p style={cardDescriptionStyle}>{project.description}</p>
          {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" style={cardLinkStyle}>View Project</a>}
        </div>
      ))}
    </div>
  );
};

export default Projects;
