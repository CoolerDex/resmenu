document.getElementById('breakfastButton').addEventListener("click", function () {
    if (document.getElementById('breakfastListContainer').style.display === "") {
        document.getElementById('breakfastListContainer').style.display = "inline-block";
    }
    else {
        document.getElementById('breakfastListContainer').style.display = "";

    }
});
document.getElementById('lunchButton').addEventListener("click", function () {
    if (document.getElementById('lunchListContainer').style.display === "") {
        document.getElementById('lunchListContainer').style.display = "inline-block";
    }
    else {
        document.getElementById('lunchListContainer').style.display = "";

    }
});
document.getElementById('dessertButton').addEventListener("click", function () {
    if (document.getElementById('dessertListContainer').style.display === "") {
        document.getElementById('dessertListContainer').style.display = "inline-block";
    }
    else {
        document.getElementById('dessertListContainer').style.display = "";

    }
});

function insertCard(boxName, imageSrc, foodName, foodPrice, foodDescription) {
    const box = document.getElementById(boxName).querySelector('.foodBox');

    const foodCard = document.createElement('div');
    foodCard.className = 'foodCard';

    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = foodName;
    imgContainer.appendChild(img);

    const detailsContainer = document.createElement('div');

    const nameDiv = document.createElement('div');
    nameDiv.textContent = foodName;
    detailsContainer.appendChild(nameDiv);

    const priceDiv = document.createElement('div');
    priceDiv.textContent = foodPrice;
    detailsContainer.appendChild(priceDiv);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.textContent = foodDescription;
    detailsContainer.appendChild(descriptionDiv);

    foodCard.appendChild(imgContainer);
    foodCard.appendChild(detailsContainer);

    box.appendChild(foodCard);
}

insertCard('breakfastBox', './foods/breakfast/englishbreakfast.jpg', 'صبحانه انگلیسی', '40000 تومان', 'شامل تخم‌مرغ، بیکن، سوسیس، لوبیا، گوجه‌فرنگی، قارچ و نان تست است.');
insertCard('breakfastBox', './foods/breakfast/khachapoori.jpg', 'خاچاپوری', '20000 تومان', 'نان گرجی پر شده با پنیر، تخم‌مرغ و کره.');
insertCard('breakfastBox', './foods/breakfast/avocadotoast.jpg', 'توست آواکادو', '35000 تومان', 'نان تُست شده با تکه‌های آواکادو و چاشنی‌های مختلف.');
insertCard('breakfastBox', './foods/breakfast/oatmeal.jpg', 'اوتمیل', '35000 تومان', 'بلغور جو دوسر پخته شده با آب یا شیر که اغلب با میوه‌ها و مغزها سرو می‌شود.');
insertCard('breakfastBox', './foods/breakfast/sweetpotatoes.jpg', 'سیب زمینی شیرین', '15000 تومان', 'نوعی سیب‌زمینی که شیرینی طبیعی دارد و معمولاً در طعم‌دهی و طبخ‌های شیرین مورد استفاده قرار می‌گیرد.');

insertCard('dessertBox', './foods/dessert/chococake.jpg', 'کیک شکلاتی', '40000 تومان', 'کیکی با طعم شکلات، که معمولاً حاوی کاکائو و یا شکلات تخته‌ای است و ممکن است با خامه یا گاناش شکلاتی پوشانده شود.');
insertCard('dessertBox', './foods/dessert/waffle.jpg', 'وافل', '32000 تومان', 'دسری که از تست خمیری درست شده و معمولاً در قالب شبکه‌ای و چند لایه سرو می‌شود، اغلب با مپس و میوه‌های تازه یا خامه تزئین می‌شود.');
insertCard('dessertBox', './foods/dessert/croissant.jpg', 'کروسان', '35000 تومان', 'نوعی خرما‌پایی فرانسوی با لایه‌هایی نازک از خمیر خرمایی و کره که به شکل نیم‌دایره‌ای و خمیده است و معمولاً به عنوان صبحانه یا دسر مصرف می‌شود.')
insertCard('dessertBox', './foods/dessert/icecream.jpg', 'بستنی', '20000 تومان', 'دسری خنک و خوشمزه از خامه، شکر و مواد طعم‌دهنده، که به صورت یخ زده و در انواع مختلف از جمله وانیلی، شکلاتی، میوه‌ای و... عرضه می‌شود.')
insertCard('dessertBox', './foods/dessert/milkshake.jpg', 'میلک شیک', '45000 تومان', 'نوشیدنی از شیر، میوه یا مواد شکلاتی و مقداری بستنی مخلوط‌شده است')
insertCard('dessertBox', './foods/dessert/pancakes.jpg', 'پنکیک', '35000 تومان', 'نوعی نانکوکی است که با خمیر آرد، تخم‌مرغ، شیر و پودرکره تهیه می‌شود و معمولاً با عسل، مربا، میوه تازه یا شکلات تزئین می‌شود و به عنوان صبحانه یا دسر سرو می‌شود.')

insertCard('lunchBox', './foods/lunch/fish.jpg', 'ماهی', '70000 تومان', 'غذایی سالم و پر از پروتئین که از آبزیان دریایی یا آب شیرین تهیه می‌شود و معمولاً با پختن، سرخ‌کردن، بخارپزی یا پخت در فویل طعم‌دهی می‌شود، و با انواع مختلف از ادویه‌جات و سس‌ها می‌توان آن را سرو کرد.');
insertCard('lunchBox', './foods/lunch/joojekebab.jpg', 'جوجه کباب', '75000 تومان', 'تکه‌هایی از گوشت جوجه که با ادویه‌ها و مربا ترکیب شده و سپس درون اجاق پخته میشود');
insertCard('lunchBox', './foods/lunch/kebab.jpg', 'کباب کوبیده', '65000 تومان', 'کبابی از گوشت چرخ‌کرده با ادویه‌ها و پیاز که به صورت استیک‌های کوچک و تکه‌های دایره‌ای شکل ساخته می‌شود و در اجاق یا روی آتش پخته می‌شود.');
insertCard('lunchBox', './foods/lunch/kfc.jpg', 'مرغ سوخاری', '56000 تومان', 'مرغی که پس از خوراک شدن در روغن گرم تفت داده شده و با ترکیبی از ادویه‌ها، نمک و فلفل طعم‌دهی می‌شود، معمولاً به عنوان غذای اصلی سرو می‌شود.');
insertCard('lunchBox', './foods/lunch/pizza.jpg', 'پیتزا', '69000 تومان', ' نوعی غذای ایتالیایی که از بیسکویت ترکیب شده با سس گوجه فرنگی، پنیر و انواع مختلف از تهیه شده');
insertCard('lunchBox', './foods/lunch/rice.jpg', 'برنج', '30000 تومان', 'محصول غذایی اصلی که از دانه‌های برنج تهیه شده و به عنوان جزء اصلی در غذاهای مختلف جهانی، از جمله پیلو، بریانی و سوشی مورد استفاده قرار می‌گیرد.');
insertCard('lunchBox', './foods/lunch/salad.jpg', 'سالاد', '28000 تومان', 'مخلوطی از مواد تازه مانند سبزیجات، میوه‌ها، نوشیدنی‌ها، سس‌ها و احتمالاً گوشت یا ماهی که به عنوان یک غذای سرد و خنک سرو می‌شود.');
insertCard('lunchBox', './foods/lunch/soup.jpg', 'سوپ', '20000 تومان', 'غذایی که از مایعی مانند آب یا مرغ‌نوش پخته شده است و معمولاً با سبزیجات، گوشت، ماهی یا حبوبات تهیه می‌شود.');
insertCard('lunchBox', './foods/lunch/snack.jpg', 'اسنک', '32000 تومان', 'نوعی مزه‌وری طبخی که در تنور یا فر پخته می شود');
insertCard('lunchBox', './foods/lunch/sushi.jpg', 'سوشی', '50000 تومان', 'یک نوع غذای ژاپنی که شامل برنج خوراکی با خیار ، ماهی تن وسوشی');
insertCard('lunchBox', './foods/lunch/noodles.jpg', 'نودل', '10000 تومان', 'غذایی آسیایی که از نودل‌های رشته‌ای ساخته شده و با سس‌های مختلف مانند سس‌های ترش، شیرین یا ترکیبی ارائه می‌شود.');
