import React from "react";
import "./home.scss";
import avtoImg1 from "../../image/Vector.svg";
import { GiBuyCard } from "react-icons/gi";
import { MdAttachMoney } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { FaCarCrash } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import mers from "../../image/merscedes.png";
import bmw from "../../image/BMW-Logo-1997.png";
import audi from "../../image/audi.png";
import ferrari from "../../image/ferrari.webp";
import hundai from "../../image/Hyundai_symbol.svg.png";
import kia from "../../image/Kia-logo.png";
import lambargini from "../../image/lamborgini.png";
import nissan from "../../image/nissan.png";
import tayota from "../../image/tayota_png.png";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  "&:not(:last-child)": {
    borderBottom: 1,
  },
  "&::before": {
    display: "none",
  },
  backgroundColor: "#fff",
  padding: "10px",
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#fff",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(2),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const CustomTypography = styled(Typography)(() => ({
  fontSize: "1rem",
  color: "#333",
  fontWeight: "600",
  fontFamily: "sans-serif",
}));

const Home = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <body>
      <section className="avtoBlocks">
        <div className="avtoBlock avtoBlock1">
          <div className="imgRound imgRound1">
            <img className="avtoIcon avtoIcon1" src={avtoImg1} alt="" />
          </div>
          <p className="avto_P">
            Даём справедливую цену за Ваше авто. Покупаем выгоднее, чем в
            trade-in (трейд ин).
          </p>
        </div>
        <div className="avtoBlock avtoBlock2">
          <div className="imgRound imgRound2">
            <span className="avtoIcon avtoIcon2">
              <GiBuyCard />
            </span>
          </div>
          <p className="avto_P">
            Покупаем автомобили в любом юридическом состоянии.
          </p>
        </div>
        <div className="avtoBlock avtoBlock3">
          <div className="imgRound imgRound3">
            <span className="avtoIcon avtoIcon3">
              <MdAttachMoney />
            </span>
          </div>
          <p className="avto_P">
            Полный расчет сразу после заключения сделки на месте.
          </p>
        </div>
        <div className="avtoBlock avtoBlock4">
          <div className="imgRound imgRound4">
            <span className="avtoIcon avtoIcon4">
              <FaCar />
            </span>
          </div>
          <p className="avto_P">
            Осмотр авто и выкуп за 30 минут. Без необходимости ездить куда-либо.
          </p>
        </div>
        <div className="avtoBlock avtoBlock5">
          <div className="imgRound imgRound5">
            <span className="avtoIcon avtoIcon5">
              <FaCarCrash />
            </span>
          </div>
          <p className="avto_P">
            Выкупаем даже авто с техническими проблемами и не на ходу.
          </p>
        </div>
        <div className="avtoBlock avtoBlock6">
          <div className="imgRound imgRound6">
            <span className="avtoIcon avtoIcon6">
              <IoLocation />
            </span>
          </div>
          <p className="avto_P">
            Выезжаем по всей области для осмотра и оценки, в любое удобное для
            Вас время.
          </p>
        </div>
      </section>
      <section className="HowBuyCars">
        <div className="container">
          <h1>
            Как происходит процесс <br /> выкупа авто?
          </h1>
          <div className="roundBlocks">
            <div className="roundBlock">
              <span>
                <FaCheck />
              </span>
            </div>
            <div className="checkLine"></div>
            <div className="roundBlock">
              <span>
                <FaCheck />
              </span>
            </div>
            <div className="checkLine"></div>
            <div className="roundBlock">
              <span>
                <FaCheck />
              </span>
            </div>
          </div>
          <div className="checkBlocks">
            <div className="checkBlock">
              <h3>Оценка автомобиля</h3>
              <p>
                Мы выезжаем по указанному адресу, осматриваем транспортное
                средство и даём свое заключение о его состоянии.
              </p>
            </div>
            <div className="checkBlock">
              <h3>Подписание договора</h3>
              <p>
                Заключается договор купли-продажи – официально, на фирменных
                бланках. Небольшая формальность!
              </p>
            </div>
            <div className="checkBlock">
              <h3>Получение денег</h3>
              <p>
                Если вас устраивает предложенная оценщиком цена, мы выплачиваем
                вам деньги в любом виде.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="questions">
        <div className="container">
          <h1>Часто задаваемые вопросы по выкупу авто...</h1>
          <div className="avtoAcordion">
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary>
                <CustomTypography>
                  Какие автомобили подходят к выкупу?
                </CustomTypography>
              </AccordionSummary>
              <AccordionDetails>
                <CustomTypography className="avto_P">
                  ВЫКУП.KG и его партнёры готовы оценить авто с пробегом
                  (поддержанные машины), а затем могут выкупить его у владельца.
                  Продать нам можно любые автомобили: марка, год выпуска машины,
                  ее пробег и состояние значения не имеют. Под выкуп
                  рассматриваются кредитные автомобили или машины со штрафами.
                </CustomTypography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary>
                <CustomTypography>
                  Как происходит выкуп автомобиля?
                </CustomTypography>
              </AccordionSummary>
              <AccordionDetails>
                <CustomTypography className="avto_P">
                  Технические данные о вашем авто (марка, модель, пробег, год
                  выпуска) из заявки мы вносим в нашу внутреннюю систему и
                  автоматически сравниваем их с аналогичными машинами на рынке
                  за последние полгода. Так мы получаем предварительную
                  стоимость автомобиля, которую вы увидите в форме оценки. После
                  этого с вами свяжется специалист отдела выкупа СберАвто и
                  задаст дополнительные вопросы об авто. В зависимости от
                  комплектации и новой информации предварительная цена на машину
                  может измениться в большую или меньшую сторону. Финальный этап
                  - осмотр машины на выезде (так называемая выездная оценка
                  стоимости) или в офисе партнёра. Специалисты отдела выкупа
                  ВЫКУП.KG или партнёра проверят общее и техническое состояние
                  автомобиля и ПТС. После осмотра машины вам будет озвучена
                  финальная стоимость авто. Если оценочная стоимость автомобиля
                  по результатам осмотра вас устроит, подпишем договор на месте
                  и переведем деньги. Если условия не понравятся - от сделки по
                  продаже авто можно отказаться.
                </CustomTypography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary>
                <CustomTypography>
                  Окончательная ли стоимости оценки, которую я вижу?
                </CustomTypography>
              </AccordionSummary>
              <AccordionDetails>
                <CustomTypography className="avto_P">
                  На сайте вы видите предварительный расчет на основе
                  среднерыночных показателей. Он может меняться в большую или
                  меньшую сторону - после общения с менеджером нашей компании и
                  выездного осмотра авто. Финальную стоимость мы озвучим через
                  полчаса после осмотра машины.
                </CustomTypography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary>
                <CustomTypography>
                  Сколько стоит услуга оценки авто?
                </CustomTypography>
              </AccordionSummary>
              <AccordionDetails>
                <CustomTypography className="avto_P">
                  Платить за оценку и осмотр машины перед продажей не нужно,
                  независимо от того, состоится ли сделка выкупа.
                </CustomTypography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary>
                <CustomTypography>
                  Куда нужно приехать на осмотр автомобиля?
                </CustomTypography>
              </AccordionSummary>
              <AccordionDetails>
                <CustomTypography className="avto_P">
                  Если осмотр проводят сотрудники ВЫКУП.KG, то мы проводим
                  осмотр и выкуп авто там, где вам удобно - на парковке возле
                  дома, возле офиса, у станции метро, бизнес-центра, и даже за
                  городом - на заправке, на даче. В зимнее время часто
                  встречаемся на крытых парковках торговых центрах или в вашем
                  доме. Главное, чтобы место осмотра машины перед покупкой было
                  хорошо освещено, в остальном ограничений нет. Если осмотр авто
                  проводят специалисты партнёра СберАвто, то с вами договорятся
                  о встрече и осмотре в удобное для вас время в офисе партнёра.
                  В обоих случаях осмотр будет для вас абсолютно бесплатным и
                  займёт примерно 1 час.
                </CustomTypography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel6"}
              onChange={handleChange("panel6")}
            >
              <AccordionSummary>
                <CustomTypography>
                  В каком виде должен быть автомобмля для осмотра?
                </CustomTypography>
              </AccordionSummary>
              <AccordionDetails>
                <CustomTypography className="avto_P">
                  Для экономии вашего времени к осмотру автомобиля перед
                  продажей, лучше подготовиться заранее: помыть автомобиль,
                  освободить багажный отсек от лишних предметов, взять с собой
                  полный комплект ключей и документов. Так осмотр пройдет
                  быстрее. Специалист отдела выкупа СберАвто или партнёра
                  расскажет подробнее о подготовке авто с пробегом на продажу.
                </CustomTypography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel7"}
              onChange={handleChange("panel7")}
            >
              <AccordionSummary>
                <CustomTypography>Как осуществляется сделка?</CustomTypography>
              </AccordionSummary>
              <AccordionDetails>
                <CustomTypography className="avto_P">
                  После осмотра авто вам будет озвучена его финальная стоимость.
                  Если вы согласны продать автомобиль по этой цене, на месте
                  осмотра распечатывается и подписывается договор и акт
                  приема-передачи машины. После чего вам будут переведены деньги
                  за авто на карту или банковский счёт без комиссии.
                </CustomTypography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </section>
      <section className="ModelCars">
        <div className="container">
          <div className="modelBlocks">
            <div className="Models">
              <img className="imgModel" src={mers} alt="" />
              <h3>Mercedes-Benz</h3>
            </div>
            <div className="Models">
              <img className="imgModel" src={bmw} alt="" />
              <h3>BMW</h3>
            </div>
            <div className="Models">
              <img className="imgModel" src={audi} alt="" />
              <h3>AUDI</h3>
            </div>
            <div className="Models">
              <img className="imgModel" src={lambargini} alt="" />
              <h3>LAMBORGHINI</h3>
            </div>
            <div className="Models">
              <img className="imgModel" src={ferrari} alt="" />
              <h3>FERRARI</h3>
            </div>
            <div className="Models">
              <img className="imgModel" src={hundai} alt="" />
              <h3>HYUINDAI</h3>
            </div>
            <div className="Models">
              <img className="imgModel" src={kia} alt="" />
              <h3>KIA</h3>
            </div>
            <div className="Models">
              <img className="imgModel" src={nissan} alt="" />
              <h3>NISSAN</h3>
            </div>
            <div className="Models">
              <img className="imgModel" src={tayota} alt="" />
              <h3>TAYOTA</h3>
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
      </section>
    </body>
  );
};

export default Home;
