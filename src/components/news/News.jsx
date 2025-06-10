import React, { useEffect, useState } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { api } from "../../axiosConfig";
import BelarusLogo from "./belarusLogo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

// Кастомная правая стрелка
const CustomNextArrow = (props) => {
  const { style, onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
        borderRadius: "50%",
        width: "30px",
        height: "30px",
        right: "-35px",
        zIndex: 2,
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
      }}
    >
      <ArrowForwardIos style={{ color: "gray", fontSize: "10px" }} />
    </div>
  );
};

// Кастомная левая стрелка
const CustomPrevArrow = (props) => {
  const { style, onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
        borderRadius: "50%",
        width: "30px",
        height: "30px",
        left: "-45px",
        zIndex: 2,
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
      }}
    >
      <ArrowBackIos style={{ color: "gray", fontSize: "10px" }} />
    </div>
  );
};

// Русское форматирование даты
const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Чистим HTML, декодируем сущности
function cleanHtmlText(html) {
  const decoded = html
    .replace(/\\u003C/g, "<")
    .replace(/\\u003E/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&ndash;/g, "–")
    .replace(/&mdash;/g, "—")
    .replace(/&laquo;/g, "«")
    .replace(/&raquo;/g, "»")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&");

  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = decoded;
  return tempDiv.textContent || "";
}

// Получаем первое осмысленное предложение, избегая сокращений
function getFirstSentence(text) {
  const regex = /(?<!\b[а-яА-ЯёЁ]{1,3})\.(?!\S)/g;
  const match = regex.exec(text);
  if (match) {
    return text.slice(0, match.index + 1);
  }
  return text;
}

export default function NewsComponent() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/news`);
      console.log(response.data, "Новости:");
      setNewsData(response.data);
    } catch (error) {
      console.error("Ошибка загрузки новостей:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (!newsData || newsData.length === 0) {
    return <Typography>Не удалось загрузить новости.</Typography>;
  }

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    autoplay: true,
    autoplaySpeed: 10000,
    draggable: true,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: "#f4f7fa",
        textAlign: "left",
        height: "80%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      <Typography
        sx={{ fontSize: "32px", textAlign: "center", mb: 2 }}
        gutterBottom
      >
        Новости
      </Typography>

      <Slider {...sliderSettings}>
        {newsData.map((item) => {
          const cleanedText = cleanHtmlText(item.text);
          const firstSentence = getFirstSentence(cleanedText);

          return (
            <div key={item.id}>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "5px",
                }}
              >
                <BelarusLogo color={item.stormColor} />
              </div>
              <div
                style={{
                  maxWidth: "90%",
                  fontWeight: 700,
                  textAlign: "left",
                  fontSize: "18px",
                  overflow: "hidden",
                }}
              >
                {item.title}
              </div>
              <div
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  color: "#666",
                }}
              >
                Выписано: {formatDate(item.Date_write)}
              </div>
              <div style={{ fontSize: "16px" }}>
                {firstSentence}{" "}
                <a
                  href={`https://pogoda.by/information/news/${item.id}`}
                  target="_blank"
                  style={{ color: "blue" }}
                >
                  Подробнее...
                </a>
              </div>
            </div>
          );
        })}
      </Slider>

      {/* Счётчик снизу */}
      <Box
        sx={{
          mt: 2,
          textAlign: "center",
          fontSize: "14px",
          color: "#888",
        }}
      >
        {currentSlide + 1} / {newsData.length}
      </Box>
      <Box
        sx={{
          mt: 2,
          textAlign: "center",
          fontSize: "14px",
          color: "#888",
        }}
      >
        Данные предоставлены{" "}
        <a href={`https://pogoda.by`} target="_blank" style={{ color: "blue" }}>
          pogoda.by
        </a>
      </Box>
    </Box>
  );
}
