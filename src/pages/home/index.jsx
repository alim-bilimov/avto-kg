import React from "react";
import "./home.scss";

const Home = () => {
  return (
    <body>
      <div id="home">
        <div className="container">
          <div className="home">
            <div className="home--left">
              <h1>
                ВЫКУПИМ ВАШ <br /> АВТОМОБИЛЬ В ЛЮБОМ <br /> СОСТОЯНИИ В БИШКЕКЕ
              </h1>
              <p>
                Нам уже доверились более 500 человек. <br /> Приедем, осмотрими{" "}
                <br />
                купим ваше авто из любой точки Кыргызстана!
              </p>
              <button>ЗВОНИТЕ: (0707) 893-939+</button>
            </div>
            <div className="home--right">
              <h2>Оценить автомобиль:</h2>
              <div className="box">
                <input type="text" placeholder="Ваше Имя" />
                <input type="text" placeholder="Ваш номер телефона" />
                <input type="text" placeholder="Куда приехать?" />
                <button>Отправить</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Home;
