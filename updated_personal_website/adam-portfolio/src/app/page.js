"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const projects = [
    { 
      name: "High Tackle Recognition System", 
      link: "#", 
      image: "🏉",
      githubLink: "https://github.com/gibbsy619/AN-OPTIMISED-END-TO-END-SYSTEM-TO-IDENTIFY-HIGH-RISK-RUGBY-TACKLES",
      detailedInfo: `
      **An Optimised End-to-End System to Identify High-Risk Rugby Tackles**  

      **Introduction**  
      Head injuries in rugby are a growing concern, with concussion rates rising at all levels of the sport.  
      Current Head Injury Assessment (HIA) methods rely heavily on human judgment, which can lead to inconsistencies and bias.  
      This project presents an AI-driven, end-to-end system that automatically detects high-risk tackles using computer vision and machine learning, helping improve player safety and assist referees in real-time.  

      **System Overview**  
      The system consists of three core machine learning models, working together to analyze rugby footage and classify tackle risks:  
      - Player Detection: Utilizes OpenPose, a deep learning model that detects player positions and movements.  
      - Tackle Detection: Identifies when a tackle occurs by analyzing the relative movement and positioning of players.  
      - Tackle Risk Classification: Determines if a tackle is low-risk or high-risk based on player positioning.  

      **Methodology & Development**  
      - Video footage from professional rugby matches was used to train and test the models.  
      - Player tracking was refined with custom algorithms, ensuring unique player IDs were maintained across frames.  

      **Key Technologies Used**  
      - OpenPose for player detection and pose estimation  
      - Deep learning-based object detection models (YOLO, RetinaNet, Mask R-CNN)  
      - Python & TensorFlow for model training and evaluation  

      **Results & Performance**  
      - Overall System Accuracy: 71.56%  
      - High-risk tackle detection accuracy: 50%  
      - Non-dangerous tackle detection accuracy: 78%  
      - Outperformed previous rule-based systems, offering improved decision-making capabilities.  

      **Challenges & Limitations**  
      - Ball Detection Issues: Existing models struggled to accurately detect the ball in complex scenarios.  
      - Camera Angle Variability: System performance can fluctuate based on video angles and resolutions.  
      - Real-time Integration: Further development is needed to reduce latency, allowing for potential use by referees and medical teams during live matches.  

      **Potential Applications & Future Work**  
      - Referee Assistance: Automated tackle risk classification could aid referees in making quicker, more accurate decisions.  
      - Player Safety Monitoring: Clubs and medical staff could use it to track dangerous tackles throughout a season.  
      - Expansion to Other Sports: The model could be adapted to detect high-risk plays in American football, hockey, and MMA.  

      **Conclusion**  
      This project demonstrates that AI and computer vision can be used to automate and improve rugby tackle assessments, reducing reliance on human judgment and enhancing player safety.  

      **Want to learn more?** 
      If you're interested in AI applications in sports, feel free to reach out or check out my full dissertation!
      `
    },
    { 
      name: "NRL Analytics Platform", 
      link: "#", 
      image: "🏉",
      githubLink: "https://github.com/gibbsy619/NRL-analytics-platform",
      detailedInfo: `NRL Analytics Platform: Comprehensive Analysis of Rugby League Performance
      **Introduction**
      The NRL (National Rugby League) Analytics Platform provides an in-depth analysis of rugby league performance metrics, helping to visualize and understand match data.

      **System Overview**
      Data Collection: SQL queries extract match statistics, including scores, player performance, and team metrics.
      Data Processing: Aggregates match data to provide season-long performance insights.
      Data Visualization: Uses React and JavaScript to create interactive dashboards.
      **Methodology & Development**
      Database Management: SQL ensures efficient data retrieval.
      Front-end Development: JavaScript & React for user interaction.
      Back-end Development: Node.js & Express for API handling.
      **Challenges & Limitations**
      Data Quality: Ensuring accurate historical data.
      Scalability: Handling large data volumes.
      Real-time Integration: Potential future enhancement.
      **Potential Applications**
      Coaching Assistance: Detailed insights for training.
      Fan Engagement: Deeper understanding of team performance.
      **Conclusion**
      The NRL Analytics Platform demonstrates how data-driven approaches can enhance rugby league analysis, offering valuable insights into match performance and trends.
      `
    }, { 
      name: "Golf Strava-like Application", 
      link: "#", 
      image: "⛳️",
      githubLink: "https://github.com/gibbsy619/Golf-Strava",
      detailedInfo: `
      **Golf Strava Application: Simplified Golf Scorekeeping and GPS Tracking**  

      **Introduction**  
      The Golf Strava Application is designed to provide an easy-to-use platform for golfers to keep score and track their rounds using GPS, similar to how Strava tracks fitness activities.  

      **System Overview**  
      - Scorekeeping: Allows users to easily input and manage scores for each hole during their golf round.  
      - GPS Tracking: Utilizes the device's GPS to track the golfer's movements and map out the round.  
      - Data Visualization: Uses React and JavaScript to create interactive maps and scorecards.  

      **Methodology & Development**  
      - Data Storage: Currently uses a JSON file for storing round data and scores, with plans to integrate cloud storage in the future.  
      - Front-end Development: Developed with JavaScript & React to ensure a user-friendly interface.  
      - Back-end Development: Node.js & Express handle API requests and data processing.  

      **Challenges & Limitations**  
      - GPS Accuracy: Ensuring precise tracking of the golfer's location.  
      - User Experience: Making the app intuitive and easy to use during a round.  
      - Battery Consumption: Managing GPS usage to minimize battery drain.  

      **Potential Applications**  
      - Performance Tracking: Detailed insights into each round to help golfers improve their game.  
      - Social Sharing: Ability to share rounds and scores with friends and the golfing community.  

      **Conclusion**  
      The Golf Strava Application aims to bring the convenience and functionality of fitness tracking apps to the world of golf, offering golfers a simple yet powerful tool to enhance their playing experience. Future enhancements include integrating cloud storage for better data management and accessibility.`
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/adam-gilbert-449090231/" },
    { name: "GitHub", url: "https://github.com/gibbsy619/" }
  ];

  const openModal = (project) => {
    setCurrentProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProject(null);
  };

  return (
    <div className="flex flex-col items-center justify-between p-6 overflow-y-auto min-h-screen relative">
      <div className="absolute inset-0 animate-bgMove z-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center relative z-10 flex flex-col items-center justify-center mt-20"
      >
        <div className="flex items-center justify-center space-x-4">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E03AQHjn6_vuoc1nw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1672925888334?e=1747267200&v=beta&t=3PHo3KifBHla-nKYWU9pQ-_NEc4WI4WBE4lpcXMR4qI"
            alt="Profile Picture"
            className="w-30 h-30 rounded-full object-cover border-4 border-white"
          />
          
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md">Hi, I'm Adam!</h1>
            <p className="text-lg md:text-xl text-white mt-2 drop-shadow-md">An AI software developer.</p>
          </div>
        </div>

        <div className="mt-6 flex space-x-6 md:space-x-8 relative z-10">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="flex items-center space-x-2 text-white hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.name === "GitHub" && <span className="mr-2">🐙</span>}
              {social.name === "LinkedIn" && <span className="mr-2">🔗</span>}
              <span>{social.name}</span>
            </a>
          ))}
        </div>
      </motion.div>

      <div className="flex flex-wrap justify-between gap-6 items-stretch w-full max-w-screen-lg mx-auto mt-8 mb-8">
        {projects.map((project, index) => {
          const colors = ["hsl(284, 61%, 74%)", "hsl(172, 45%, 75%)", "hsl(206, 84%, 86%)"];

          return (
            <motion.div
              key={index}
              className="flex-1 min-w-[250px] max-w-[350px] rounded-xl text-white text-center shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
              style={{ backgroundColor: colors[index % colors.length] }}
              onClick={() => openModal(project)}
            >
                <div className="flex flex-col h-full">
                  <div className="w-full h-[250px] rounded-lg overflow-hidden relative text-6xl flex justify-center items-center">
                    <span>{project.image}</span>
                  </div>
                  <div className="flex-grow p-4 text-left">
                    <a href={project.link} className="text-white font-semibold text-xl hover:underline break-words">
                      {project.name}
                    </a>
                  </div>
                </div>
            </motion.div>
          );
        })}
      </div>

      {isModalOpen && currentProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-3xl w-full overflow-y-auto max-h-[90vh] relative flex flex-col">
            <button className="absolute top-4 right-4 text-xl font-bold text-gray-700" onClick={closeModal}>
              X
            </button>

            <h3 className="text-2xl font-semibold mb-4">{currentProject.name}</h3>

            <a
              href={currentProject.githubLink}
              className="text-blue-600 hover:underline mb-4 flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-2">🐙</span>
              View on GitHub
            </a>

            <div className="text-lg whitespace-pre-line">
              {currentProject.detailedInfo.split("\n").map((line, index) => {
                if (line.trim().startsWith("**") && line.trim().endsWith("**")) {
                  return (
                    <h2 key={index} className="text-xl font-bold mt-4">
                      {line.replace(/\*\*/g, "")}
                    </h2>
                  );
                }
                return <p key={index} className="mb-2">{line}</p>;
              })}
            </div>

            <a
              href={currentProject.githubLink}
              className="text-blue-600 hover:underline mt-auto text-center flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-2">🐙</span>
              View on GitHub
            </a>
          </div>
        </div>
      )}

    <footer className="w-full py-4 text-white text-center mt-auto relative">
            <p className="text-sm">
              Developed by Adam Gilbert. All rights reserved. &copy; {new Date().getFullYear()}
            </p>
          </footer>
    </div>
  );
}











