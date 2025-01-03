import React from "react";
import styles from "./Timeline.module.css";

const timelineData = [
  { year: "2019", text: "This slide is 100% editable. Adapt it to your needs and capture your audience's attention.", icon: "📄" },
  { year: "2021", text: "This slide is 100% editable. Adapt it to your needs and capture your audience's attention.", icon: "👥" },
  { year: "2022", text: "This slide is 100% editable. Adapt it to your needs and capture your audience's attention.", icon: "📊" },
  { year: "2023", text: "This slide is 100% editable. Adapt it to your needs and capture your audience's attention.", icon: "🤝" },
  { year: "2024", text: "This slide is 100% editable. Adapt it to your needs and capture your audience's attention.", icon: "📋" },
  { year: "2025", text: "This slide is 100% editable. Adapt it to your needs and capture your audience's attention.", icon: "📋" },
];

const Timeline = () => {
  return (
    <div className={styles.timeline}>
      {timelineData.map((item, index) => (
        <div key={index} className={styles.item}>
          <div className={styles.year}>
            <span>{item.year}</span>
          </div>
          <div className={styles.content}>
            <div className={styles.icon}>{item.icon}</div>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
