# pkhlunev.github.io
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
</head>
<body>
    <img src="images/main.jpg" class = "a">
    <h1>Расчет количества рулонов</h1> 
    <div>
        <a href="index2.html" class = "whycountwords">Принцип расчета</a>
        <a href='index3.html' class = 'countitwords'>Рассчитать количество рулонов</a>
        <a href="index4.html" class  = "helpme">Обратная связь</a>
    </div>
</body>
<script src="index.js"></script>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css" />
    <title>Document</title>
</head>
<body>
    <div>
        <img src="images/howtocount.jpg" class = "a">
        <span class = "index3title">Принцип расчета</span>
        <span class = 'maybeyouwonder'>Вероятно, некоторые задаются вопросом "А как же именно производятся расчеты?" В этой статье вы узнаете все подробности об этом.</span>
        <span class = 'afterfirst'>После ввода значений "длина" и "ширина" в метрах, вычисляется периметр по формуле : <b>(длина + ширина)*2</b>. Следующим шаг программы - вычисление площади помещения. Для этого используется уже найденный <i>периметр</i> помещения и высота помещения, введенная пользоватедем. Формула рассчетов : <b>Периметр * высота</b></span>
        <span class = 'almostlast'>Предпоследний этап программы - вычисление <i>площади рулона</i>. После того, как пользователь вводит длину и ширину, используется формула : <b>длина рулона * ширина рулона</b> </span>
        <span class = 'last'>Наконец, заключительный этап программы - на основе всех полученных данных кол-во рулонов определяется по следующей формуле : <b>Площадь помещения / площадь рулона.</b> Чтобы цифры не выскочили за пределы разумного, у всех параметров стоит округление лишь до 2 знаков после запятой, у кол-ва рулонов - до одного знака.</span>

    </div>
</body>
</html>
