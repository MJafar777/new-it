import {
  Box,
  Button,
  Container,
  Card,
  List,
  ListItem,
  Paper,
  Stack,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Aos from "aos";
import React from "react";
import laptops from "../images/215-2158471_new-computers-servers-or-laptops-computer-and-laptop-png-removebg-preview (1).png";

const ServiceCotolog = () => {
  function createData(name, calories, fat) {
    return { name, calories, fat };
  }

  const rows = [
    createData("Выезд мастера и диагностика", "Бесплатно", "-"),
    createData(
      "Установка новой батареи питания BIOS",
      "от 65600 сум.",
      "1 год"
    ),
    createData(
      "Установка новой батареи питания CMOS",
      "от 82600 сум.",
      "1 год"
    ),
    createData(
      "Установка новой батареи питания CMOS",
      "от 82600 сум.",
      "1 год"
    ),
    createData(
      "Установка новой батареи питания CMOS",
      "от 82600 сум.",
      "1 год"
    ),
    createData(
      "Установка новой батареи питания CMOS",
      "от 82600 сум.",
      "1 год"
    ),
    createData(
      "Установка новой батареи питания CMOS",
      "от 82600 сум.",
      "1 год"
    ),
    createData(
      "Установка новой батареи питания CMOS",
      "от 82600 сум.",
      "1 год"
    ),
    createData(
      "Установка новой батареи питания CMOS",
      "от 82600 сум.",
      "1 год"
    ),
    createData(
      "Установка новой батареи питания CMOS",
      "от 82600 сум.",
      "1 год"
    ),
    createData(
      "Установка новой батареи питания CMOS",
      "от 82600 сум.",
      "1 год"
    ),
  ];

  const specialist = [
    {
      img: "url(https://service-eco.uz/wp-content/uploads/%D0%92%D0%B8%D1%82%D0%B0%D0%BB%D0%B8%D0%B9-%D0%9F%D0%BE%D1%82%D0%B0%D1%88%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2.jpg)",
      name: "ВИТАЛИЙ ПОТАШНИКОВ",
      info: "Менеджер отдела ремонта ноутбуков",
      experience: "ОПЫТ РАБОТЫ:6 лет",
      price: "ОЦЕНОК:71",
    },
    {
      img: "url(https://service-eco.uz/wp-content/uploads/%D0%92%D0%B8%D0%BA%D1%82%D0%BE%D1%80-%D0%9A%D1%83%D0%BB%D0%B5%D1%88%D0%BE%D0%B2.jpg)",
      name: "КУЛЕШОВ ВИКТОР",
      info: "Мастер по ремонту ноутбуков",
      experience: "ОПЫТ РАБОТЫ:17 лет",
      price: "ОЦЕНОК:99",
    },
    {
      img: "url(https://service-eco.uz/wp-content/uploads/%D0%92%D0%B8%D1%82%D0%B0%D0%BB%D0%B8%D0%B9-%D0%9F%D0%BE%D1%82%D0%B0%D1%88%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2.jpg)",
      name: "ВИТАЛИЙ ПОТАШНИКОВ",
      info: "Менеджер отдела ремонта ноутбуков",
      experience: "ОПЫТ РАБОТЫ:6 лет",
      price: "ОЦЕНОК:71",
    },
    {
      img: "url(https://service-eco.uz/wp-content/uploads/%D0%92%D0%B8%D0%BA%D1%82%D0%BE%D1%80-%D0%9A%D1%83%D0%BB%D0%B5%D1%88%D0%BE%D0%B2.jpg)",
      name: "КУЛЕШОВ ВИКТОР",
      info: "Мастер по ремонту ноутбуков",
      experience: "ОПЫТ РАБОТЫ:17 лет",
      price: "ОЦЕНОК:99",
    },
    {
      img: "url(https://service-eco.uz/wp-content/uploads/%D0%92%D0%B8%D1%82%D0%B0%D0%BB%D0%B8%D0%B9-%D0%9F%D0%BE%D1%82%D0%B0%D1%88%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2.jpg)",
      name: "ВИТАЛИЙ ПОТАШНИКОВ",
      info: "Менеджер отдела ремонта ноутбуков",
      experience: "ОПЫТ РАБОТЫ:6 лет",
      price: "ОЦЕНОК:71",
    },
    {
      img: "url(https://service-eco.uz/wp-content/uploads/%D0%92%D0%B8%D0%BA%D1%82%D0%BE%D1%80-%D0%9A%D1%83%D0%BB%D0%B5%D1%88%D0%BE%D0%B2.jpg)",
      name: "КУЛЕШОВ ВИКТОР",
      info: "Мастер по ремонту ноутбуков",
      experience: "ОПЫТ РАБОТЫ:17 лет",
      price: "ОЦЕНОК:99",
    },
    {
      img: "url(https://service-eco.uz/wp-content/uploads/%D0%92%D0%B8%D1%82%D0%B0%D0%BB%D0%B8%D0%B9-%D0%9F%D0%BE%D1%82%D0%B0%D1%88%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2.jpg)",
      name: "ВИТАЛИЙ ПОТАШНИКОВ",
      info: "Менеджер отдела ремонта ноутбуков",
      experience: "ОПЫТ РАБОТЫ:6 лет",
      price: "ОЦЕНОК:71",
    },
    {
      img: "url(https://service-eco.uz/wp-content/uploads/%D0%92%D0%B8%D0%BA%D1%82%D0%BE%D1%80-%D0%9A%D1%83%D0%BB%D0%B5%D1%88%D0%BE%D0%B2.jpg)",
      name: "КУЛЕШОВ ВИКТОР",
      info: "Мастер по ремонту ноутбуков",
      experience: "ОПЫТ РАБОТЫ:17 лет",
      price: "ОЦЕНОК:99",
    },
  ];

  const brands = [
    {
      brand: "hp",
    },
    {
      brand: "Dell",
    },
    {
      brand: "Sony",
    },
    {
      brand: "Toshiba",
    },
    {
      brand: "Acer",
    },
    {
      brand: "Asus",
    },
    {
      brand: "Samsung",
    },
    {
      brand: "Apple",
    },
    {
      brand: "Msi",
    },
    {
      brand: "Lenovo",
    },
    {
      brand: "Fujitsu",
    },
    {
      brand: "Gateway",
    },
  ];

  const faults = [
    {
      img: "https://service-eco.uz/wp-content/uploads/nout-1.png",
      info: "Не включается",
    },
    {
      img: "https://service-eco.uz/wp-content/uploads/nout-2.png",
      info: "Не зарежается",
    },
    {
      img: "https://service-eco.uz/wp-content/uploads/nout-1.png",
      info: "Не включается",
    },
    {
      img: "https://service-eco.uz/wp-content/uploads/nout-2.png",
      info: "Не зарежается",
    },
    {
      img: "https://service-eco.uz/wp-content/uploads/nout-1.png",
      info: "Не включается",
    },
    {
      img: "https://service-eco.uz/wp-content/uploads/nout-2.png",
      info: "Не зарежается",
    },
    {
      img: "https://service-eco.uz/wp-content/uploads/nout-1.png",
      info: "Не включается",
    },
    {
      img: "https://service-eco.uz/wp-content/uploads/nout-2.png",
      info: "Не зарежается",
    },
  ];

  const advantages = [
    {
      img: "https://service-eco.uz/wp-content/uploads/serv3.png",
      title: "Гарантия низкой цены",
      info: "Наш прайс составлен на основе средних рыночных цен, потому что мы закупаем запчасти напрямую у производителей.",
    },
    {
      img: "https://service-eco.uz/wp-content/uploads/serv2.png",
      title: "Гарантия низкой цены",
      info: "Наш прайс составлен на основе средних рыночных цен, потому что мы закупаем запчасти напрямую у производителей.",
    },
    {
      img: "https://service-eco.uz/wp-content/uploads/serv1.png",
      title: "Гарантия низкой цены",
      info: "Наш прайс составлен на основе средних рыночных цен, потому что мы закупаем запчасти напрямую у производителей.",
    },
  ];

  Aos.init({
    offset: 200,
    duration: 600,
    easing: "ease-in-sine",
    delay: 100,
  });

  const Buttonstyled = styled(Button)({
    color: "#fff",
    p: "20px 30px",
    background: "#0E4D8D",
    border: "1px solid #0E4D8D",
    borderRadius: "50px 0 50px 50px",
    "&:hover": { background: "none", color: "#0E4D8D" },
  });

  const TitleStyled = styled(Typography)({
    padding: "15px",
    color: "#fff",
    textShadow: "3px 1px 10px #0E4D8D",
    display: "flex",
    alignItems: "center",
  });

  const MarkStyled = styled(Box)({
    width: "8px",
    margin: "0 15px",
    height: "8px",
    borderRadius: "50px 0 50px 50px",
    border: "3px solid #0E4D8D",
  });

  return (
    <Stack>
      <Box
        sx={{
          backgroundImage: `url('https://images.unsplash.com/photo-1544281679-e669cb87ea50?crop=faces%2Cedges&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjYzMzIzNTA3&ixlib=rb-1.2.1&q=60&w=1200&auto=format&h=630&mark-w=64&mark-align=top%2Cleft&mark-pad=50&blend-mode=normal&blend-alpha=10&blend-w=1&mark=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&blend=000000')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "600px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          data-aos="fade-up"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            align="center"
            sx={{
              fontSize: "50px",
              fontWeight: "900",
              color: "#0E4D8D",
              textShadow: "-1px 1px 0px #fff",
            }}
          >
            РЕМОНТ НОУТБУКОВ ТАШКЕНТ
          </Typography>
          <Typography
            variant="h1"
            align="center"
            sx={{
              fontSize: "30px",
              p: "20px",
              fontWeight: "400",
              color: "#0E4D8D",
              textShadow: "-1px 1px 0px #fff",
            }}
          >
            Мастер с опытом 15 лет починит Ваш ноутбук за пару часов!
          </Typography>
          <Buttonstyled>Вызвать мастера</Buttonstyled>
          <Typography
            sx={{
              p: "10px",
              color: "#0E4D8D",
              textShadow: "-1px 1px 0px #fff",
            }}
          >
            Менеджер перезвонит Вам в течение 30 секунд
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            data-aos="fade-right"
            sx={{ background: "rgb(100, 99, 99,0.6)" }}
          >
            <TitleStyled>
              <MarkStyled></MarkStyled> Диагностика бесплатная
            </TitleStyled>
            <TitleStyled>
              <MarkStyled></MarkStyled> Выезд мастера бесплатный
            </TitleStyled>
            <TitleStyled>
              <MarkStyled></MarkStyled> Гарантия от 365 дней
            </TitleStyled>
          </Box>
          <Box data-aos="fade-left" sx={{ background: "rgb(100, 99, 99,0.6)" }}>
            <TitleStyled>
              <MarkStyled></MarkStyled> Любой ремонт за 1 день
            </TitleStyled>
            <TitleStyled>
              <MarkStyled></MarkStyled> Опыт мастеров больше 10 лет
            </TitleStyled>
            <TitleStyled>
              <MarkStyled></MarkStyled> Персональный менеджер
            </TitleStyled>
          </Box>
        </Box>
      </Box>

      <Container sx={{ p: "20px 0" }}>
        <Typography variant="h5" align={"center"}>
          Популярные поломки ноутбуков
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {faults.map((props) => (
            <Card
              sx={{
                maxWidth: 300,
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                margin: "20px 0",
                borderRadius: "50px 0 50px 50px",
                background: "#f7f8f2",
              }}
            >
              <Box>
                <img
                  style={{ width: "250px" }}
                  src="https://service-eco.uz/wp-content/uploads/nout-1.png"
                  alt="img"
                />
              </Box>

              <Typography gutterBottom variant="h5" component="div">
                {props.info}
              </Typography>
            </Card>
          ))}
        </Box>
      </Container>

      <Box
        sx={{
          backgroundImage:
            "linear-gradient(90deg,#000000 40%,rgba(0,0,0,0) 70%),url(https://goebits.com/wp-content/uploads/2018/04/Contact-GoEBits-1.jpg)",
          backgroundSize: "cover",
          width: "100%",
          height: "490px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            color: "#fff",
            pl: "10%",
            width: { xs: "100%", sm: "50%", md: "30%" },
          }}
        >
          <Typography color="#0E4D8D" sx={{ p: "10px 0" }} variant="h5">
            Не нашли свою поломку?
          </Typography>
          <Typography sx={{ p: "10px 0 20px 0" }}>
            Наши специалисты бесплатно вас проконсультируют и ответят на все
            вопросы оставьте заявку
          </Typography>
          <Buttonstyled>Задать вопрос</Buttonstyled>
        </Box>
      </Box>

      <Container sx={{ p: "20px 0" }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ p: "10px 0", color: "#0E4D8D" }}
        >
          Сервис по ремонту ноутбуков
        </Typography>
        <Typography>
          Компьютерная техника стала незаменимым помощником человека, при
          решении рабочих, учебных, творческих задач. Часто поломка лэптопа
          делает невозможным выполнение срочных проектов. В подобных ситуациях
          следует сразу обращаться в специализированный сервисный центр. Не
          рекомендуется пытаться самостоятельно восстановить работоспособность
          устройства, неквалифицированные действия приводят к полному выходу из
          строя девайса. Наша компания занимается комплексным восстановлением
          ноутбуков различных брендов, моделей. На сайте представлены отзывы
          клиентов, которые смогли оперативно решить проблему.{" "}
        </Typography>
        <Box align="center">
          <img src={laptops} alt="" />
        </Box>

        <Box>
          <Typography variant="h4" sx={{ color: "#0E4D8D", p: "20px 0" }}>
            Распространенные неисправности лэптопов
          </Typography>
          <Typography variant="h5">
            Часто мастер по ремонту ноутбуков производит замену следующих
            составляющих:
          </Typography>

          <List sx={{ listStyleType: "disc" }}>
            <ListItem>
              {" "}
              <MarkStyled></MarkStyled> клавиатура;
            </ListItem>
            <ListItem>
              {" "}
              <MarkStyled></MarkStyled> система охлаждения;
            </ListItem>
            <ListItem>
              {" "}
              <MarkStyled></MarkStyled> материнская плата;
            </ListItem>
            <ListItem>
              {" "}
              <MarkStyled></MarkStyled> жесткий диск;
            </ListItem>
            <ListItem>
              {" "}
              <MarkStyled></MarkStyled> матрица;
            </ListItem>
            <ListItem>
              {" "}
              <MarkStyled></MarkStyled> экран;
            </ListItem>
            <ListItem>
              {" "}
              <MarkStyled></MarkStyled> аккумулятор;
            </ListItem>
            <ListItem>
              {" "}
              <MarkStyled></MarkStyled> блок питания;
            </ListItem>
            <ListItem>
              {" "}
              <MarkStyled></MarkStyled> видеокарта;
            </ListItem>
            <ListItem>
              {" "}
              <MarkStyled></MarkStyled> шлейфы;
            </ListItem>
            <ListItem>
              {" "}
              <MarkStyled></MarkStyled> петли;
            </ListItem>
            <ListItem>
              {" "}
              <MarkStyled></MarkStyled> корпус;
            </ListItem>
          </List>

          <Typography variant="h5">
            {" "}
            Отдельным направлением работы считаются следующие действия:{" "}
          </Typography>
          <List>
            <ListItem>
              {" "}
              <MarkStyled></MarkStyled> чистка от пыли, загрязнений,
            </ListItem>
            <ListItem>
              {" "}
              <MarkStyled></MarkStyled> модернизация ОС;
            </ListItem>
            <ListItem>
              {" "}
              <MarkStyled></MarkStyled> установка необходимых программ;
            </ListItem>
            <ListItem>
              {" "}
              <MarkStyled></MarkStyled> нормализация работы BIOS;
            </ListItem>
            <ListItem>
              {" "}
              <MarkStyled></MarkStyled> восстановление утерянных данных.
            </ListItem>
          </List>
        </Box>

        <Box>
          <Typography variant="h3" align="center" color="#0E4D8D" p="10px">
            Цены на ремонт ноутбуков
          </Typography>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
              <TableHead>
                <TableRow>
                  <TableCell>НАИМЕНОВАНИЕ УСЛУГИ</TableCell>
                  <TableCell align="right">ЦЕНА</TableCell>
                  <TableCell align="right">ГАРАНТИЯ</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Typography
          align="center"
          color="#0E4D8D"
          variant="h5"
          sx={{ margin: "20px" }}
        >
          Специалисты отдела ремонта ноутбуков
        </Typography>

        <Box sx={{ display: "flex", overflow: "auto" }}>
          {specialist.map((props) => (
            <Box
              sx={{
                minWidth: "300px",
                height: "400px",
                margin: "20px",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "end",
                borderRadius: "10px",
                backgroundImage: `${props.img}`,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "30%",
                  display: "flex",
                  justifyContent: "flex-start",
                  p: "10px",
                  background: "rgb(210, 239, 248, 0.2)",
                  alignItems: "start",
                  flexDirection: "column",
                }}
              >
                <Typography color="#0E4D8D" sx={{ fontSize: "20px" }}>
                  {props.name}
                </Typography>
                <Typography>{props.info}</Typography>
                <Typography color="#0E4D8D">{props.experience}</Typography>
                <Typography>{props.price}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>

      <Box
        sx={{
          backgroundImage:
            "linear-gradient(90deg,#000000 40%,rgba(0,0,0,0) 70%),url(https://images.pexels.com/photos/5699475/pexels-photo-5699475.jpeg?auto=compress&cs=tinysrgb&w=600)",
          backgroundSize: "cover",
          width: "100%",
          height: "490px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            color: "#fff",
            pl: "10%",
            width: { xs: "100%", sm: "50%", md: "30%" },
          }}
        >
          <Typography color="#0E4D8D" sx={{ p: "10px 0" }} variant="h5">
            Не нашли свою поломку?
          </Typography>
          <Typography sx={{ p: "10px 0 20px 0" }}>
            Наши специалисты бесплатно вас проконсультируют и ответят на все
            вопросы оставьте заявку
          </Typography>
          <Buttonstyled>Задать вопрос</Buttonstyled>
        </Box>
      </Box>

      <Container>
        <Box>
          <Typography
            variant="h5"
            align="center"
            color="#0E4D8D"
            sx={{ margin: "20px" }}
          >
            Все мастера прошли квалификацию от брендов
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {brands.map((brand) => (
              <Box
                sx={{
                  width: "250px",
                  height: "100px",
                  border: "1px solid #0E4D8D",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  m: "10px",
                  borderRadius: "50px 0 50px 50px",
                }}
              >
                {brand.brand}
              </Box>
            ))}
          </Box>
        </Box>

        <Box>
          <Typography
            variant="h5"
            align="center"
            color="#0E4D8D"
            sx={{ margin: "20px" }}
          >
            Мы отличаемся тремя преимуществами
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {advantages.map((advantage) => (
              <Box
                sx={{
                  width: "300px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  justifyContent: "center",
                  m: "10px",
                  borderRadius: "50px 0 50px 50px",
                  border: "1px solid #0E4D8D",
                  p: "20px",
                }}
              >
                {advantage.brand}
                <Box>
                  <img src={advantage.img} alt="" />
                </Box>
                <Typography color="#0E4D8D" sx={{ p: "10px 0" }}>
                  {advantage.title}
                </Typography>
                <Typography>{advantage.info}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>

      <Box
        sx={{
          backgroundImage:
            "linear-gradient(90deg,#000000 40%,rgba(0,0,0,0) 70%),url(https://images.pexels.com/photos/3822844/pexels-photo-3822844.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3822844.jpg&fm=jpg)",
          backgroundSize: "cover",
          width: "100%",
          height: "490px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            color: "#fff",
            pl: "10%",
            width: { xs: "100%", sm: "50%", md: "30%" },
          }}
        >
          <Typography color="#0E4D8D" sx={{ p: "10px 0" }} variant="h5">
            Закажите бесплатный выезд мастера за 34 мин.
          </Typography>
          <Typography sx={{ p: "10px 0 20px 0" }}>
            Наши специалисты бесплатно вас проконсультируют и ответят на все
            вопросы оставьте заявку
          </Typography>
          <Buttonstyled>Задать вопрос</Buttonstyled>
        </Box>
      </Box>
    </Stack>
  );
};

export default ServiceCotolog;
