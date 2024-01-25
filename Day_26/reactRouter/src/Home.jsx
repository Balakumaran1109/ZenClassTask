import React from "react";
import Content from "./Content";

function Home() {
  return (
    <div>
      <Content
        imgAddress0={
          "https://github.com/Balakumaran1109/Class-Notes/blob/main/GCourses.png?raw=true"
        }
        imgAddress1={
          "https://www.guvi.in/blog/wp-content/uploads/2023/07/UX-Designer-roadmap-for-beginners.webp"
        }
        imgAddress3={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs9tTdMKChyhEUVJxbnkGI0sPF93BoX_V-xA&usqp=CAU"
        }
        imgAddress2={
          "https://media.geeksforgeeks.org/wp-content/uploads/20230209164251/How-to-Become-a-UIUX-Designer.png"
        }
        cardTitle1={"What Does a UI/UX Designer Do? [2024 Career Guide]"}
        cardText1={
          "In the vast digital landscape we navigate daily, the seamless and intuitive experiences we encounte"
        }
        cardTitle2={"8 Steps In The UX Design Process You Should Know"}
        cardText2={
          "The success of a product or a service not only depends on its features but"
        }
        cardTitle3={
          "Data Engineering Projects: How to Build Real-time Streaming Data Pipelines"
        }
        cardText3={
          "In the world of data engineering, building real-time streaming data pipelines is a challenging yet"
        }
      ></Content>
    </div>
  );
}

export default Home;
