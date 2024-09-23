//loader

document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loaderScreen").style.visibility = "visible";
  } else {
    setTimeout(function () {
      document.querySelector("#loaderScreen").style.display = "none";
    }, 1000);

    document.querySelector("#loaderScreen").style.zIndex = -1;
    document.querySelector("#loaderScreen").style.opacity = 0;
    document.querySelector("body").style.visibility = "visible";
  }
};

//double click to change layout

document.addEventListener('DOMContentLoaded', function () {
  const layoutElement = document.getElementById('layout');
  const layouts = ['layoutA', 'layoutB', 'layoutC'];
  const starterScreen = document.getElementById('starter');
  let currentLayoutIndex = 0;

  //double click to change layout

  let clickCount = 0;
  let timer;

  layoutElement.addEventListener('click', function () {
    clickCount++;
    if (clickCount === 2) {
      clearTimeout(timer);
      layoutElement.classList.remove(layouts[currentLayoutIndex]);
      currentLayoutIndex = (currentLayoutIndex + 1) % layouts.length;
      layoutElement.classList.add(layouts[currentLayoutIndex]);

      clickCount = 0;
    } else {
      timer = setTimeout(function () {
        clickCount = 0;
      }, 250);
    }
  });

  //starter screen intitialization

  starterScreen.addEventListener('click', function () {
    starterScreen.classList.remove('visible');
    Tone.start();
  })

  const indexToShow = showSlideBasedOnDate();

  if (indexToShow !== -1) {
    currentSlideIndex = indexToShow;
    showSlide(currentSlideIndex);
  }
});

// alllll the data here

let dataOverlay = [
  {
    hanName: "立春",
    vietName1: "Lập",
    vietName2: "xuân",
    engName: "Beginning of Spring",
    dateCalendar: "February 4—18",
    poem1: "Đông bắc cán đẩu quay sang,\nGió hòa phơi phới muôn phương yên lành.",
    poem2: "Đón xuân rực vẻ cờ xanh,\nNhà nông sao ứng điềm lành vui thay!",
    canvasId: "lapxuan",
    primary1: "#1A6850",
    primary2: "#F5E6E6",
    secondary1: "#D66969",
    secondary2: "#FFA5A5",
    wheelRotation: "315deg",
    pA1: 12,
    pA2: 10,
    pB2: 0,
    pA3: 0,
    pA4: 0,
  },
  {
    hanName: "雨水",
    vietName1: "Vũ",
    vietName2: "thủy",
    engName: "Rain Water",
    dateCalendar: "February 19—March 5",
    poem1: "Luật xuân di tắc tháng giêng,\nĐuốc soi sân rạng, gió chen cửa vào.",
    poem2: "Nhà nông mùa tốt vui sao!\nRuộng nương thu được dồi dào lúa ngô.",
    canvasId: "vuthuy",
    primary1: "#165E44",
    primary2: "#EAEAEA",
    secondary1: "#408CB5",
    secondary2: "#80AEC3",
    wheelRotation: "330deg",
    pA1: 24,
    pA2: 10,
    pB2: 0,
    pA3: 0,
    pA4: 0,
  },
  {
    hanName: "驚蟄",
    vietName1: "Kinh",
    vietName2: "trập",
    engName: "Awakening of Insects",
    dateCalendar: "March 6—20",
    poem1: "Sấm vang trời đất thuận hòa,\nHợp vào tiếng luật gọi là Lâm trung.",
    poem2: "Cỏ cây mắm mổng nở tung,\nCác loài sâu bọ phá vùng bò ra.",
    canvasId: "kinhtrap",
    primary1: "#256A2C",
    primary2: "#FAEDD1",
    secondary1: "#ABA634",
    secondary2: "#F3B63C",
    wheelRotation: "345deg",
    pA1: 48,
    pA2: 10,
    pB2: 0,
    pA3: 0,
    pA4: 0,
  },
  {
    hanName: "春分",
    vietName1: "Xuân",
    vietName2: "phân",
    engName: "Spring Equinox",
    dateCalendar: "March 21—April 4",
    poem1: "Chim sao hợp luật Tuy tân,\nNgày đêm cân đối là xuân nửa chừng.",
    poem2: "Phương đông khi tốt tràn dâng,\nTrông về nam cực vui mừng mây quang.",
    canvasId: "xuanphan",
    primary1: "#1C6E4E",
    primary2: "#FAEDD2",
    secondary1: "#EA9595",
    secondary2: "#FBD27F",
    wheelRotation: "0deg",
    pA1: 24,
    pA2: 10,
    pB2: 0,
    pA3: 0,
    pA4: 0,
  },
  {
    hanName: "清明",
    vietName1: "Thanh",
    vietName2: "minh",
    engName: "Pure Brightness",
    dateCalendar: "April 5—19",
    poem1: "Ất phương cán đẩu quay về,\nTừ nay muốn vật chỉnh tề sạch trong.",
    poem2: "Non kỳ mới nở hoa vông,\nHoa du như lửa ánh hồng bóng dương.",
    canvasId: "thanhminh",
    primary1: "#FAEDD2",
    primary2: "#1C6E4E",
    secondary1: "#F3B63C",
    secondary2: "#71B33D",
    wheelRotation: "15deg",
    pA1: 3,
    pA2: 10,
    pB2: 0,
    pA3: 0,
    pA4: 0,
  },
  {
    hanName: "穀雨",
    vietName1: "Cốc",
    vietName2: "vũ",
    engName: "Grain Rain",
    dateCalendar: "April 20—May 5",
    poem1: "Tháng ba hoa đậm màu xuân,\nMưa đào mong được thêm phần tươi xanh.",
    poem2: "Nước nhuẩn lúa tốt chín nhanh,\nMuôn kho nghìn vựa hợp tình thơ ngâm.",
    canvasId: "cocvu",
    primary1: "#FAEDD2",
    primary2: "#3E7911",
    secondary1: "#F3B63C",
    secondary2: "#71B33D",
    wheelRotation: "30deg",
    pA1: 96,
    pA2: 10,
    pB2: 100,
    pA3: 0,
    pA4: 0,
  },
  {
    hanName: "立夏",
    vietName1: "Lập",
    vietName2: "hạ",
    engName: "Beginning of Summer",
    dateCalendar: "May 6—20",
    poem1: "Ngày dài ứng luật giáp trung,\nTiết hè khí chuyển theo vòng lục dương.",
    poem2: "Mùa này muôn vật nở nang,\nGió hòe sóng liễu du dương điều hoa.",
    canvasId: "lapha",
    primary1: "#FAEDD2",
    primary2: "#D23255",
    secondary1: "#E88CA5",
    secondary2: "#9F1C33",
    wheelRotation: "45deg",
    pA1: 12,
    pA2: 10,
    pB2: 100,
    pA3: 0,
    pA4: 0,
  },
  {
    hanName: "小滿",
    vietName1: "Tiểu",
    vietName2: "mãn",
    engName: "Grain Buds",
    dateCalendar: "May 21—June 5",
    poem1: "Lúa chiêm muôn khoảnh mây vàng\nGặp thì đều được nở nang trường thành,",
    poem2: "Bụi trần mưa dội sạch sanh,\nTrên sông Phổ tế gió lành thoảng qua.",
    canvasId: "tieuman",
    primary1: "#FAEDD2",
    primary2: "#D23242",
    secondary1: "#FFA5A5",
    secondary2: "#E9772C",
    wheelRotation: "60deg",
    pA1: 6,
    pA2: 10,
    pB2: 100,
    pA3: 0,
    pA4: 0,
  },
  {
    hanName: "芒種",
    vietName1: "Mang",
    vietName2: "chủng",
    engName: "Grain in Ear",
    dateCalendar: "June 6—20",
    poem1: "Tháng năm vừa tạnh mưa mơ,\nLúa mang gieo mạ bây giờ tốt ngay.",
    poem2: "Ngoài trời tán lửa quang mây,\nDần dần khí nóng hằng ngày sinh ra.",
    canvasId: "mangchung",
    primary1: "#FAEDD2",
    primary2: "#C72127",
    secondary1: "#FFC0A5",
    secondary2: "#E9772C",
    wheelRotation: "75deg",
    pA1: 3,
    pA2: 10,
    pB2: 100,
    pA3: 0,
    pA4: 0,
  },
  {
    hanName: "夏至",
    vietName1: "Hạ",
    vietName2: "chí",
    engName: "Summer Solstice",
    dateCalendar: "June 21—July 6",
    poem1: "Trời nam sao đẩu quay về,\nHoàng trung ứng luật là khi giữa hè.",
    poem2: "Âm dương sáng chói ba kỳ,\nXôi vàng chảy dá nổi uy mặt trời.",
    canvasId: "hachi",
    primary1: "#D23255",
    primary2: "#FAEDD2",
    secondary1: "#FF7E29",
    secondary2: "#FFC0A5",
    wheelRotation: "90deg",
    pA1: 0,
    pA2: 20,
    pB2: 75,
    pA3: 0,
    pA4: 0,
  },
  {
    hanName: "小暑",
    vietName1: "Tiểu",
    vietName2: "thử",
    engName: "Minor Heat",
    dateCalendar: "July 7—22",
    poem1: "Mây màu năm sắc khắp trời,\nHuy hoàng nam lục rạng ngời ánh dương.",
    poem2: "Quân đài, thuốc mát, giếng băng,\nBao người tránh nắng lăng xăng nực cười.",
    canvasId: "tieuthu",
    primary1: "#D23242",
    primary2: "#FAEDD2",
    secondary1: "#FF7E29",
    secondary2: "#F9BA80",
    wheelRotation: "105deg",
    pA1: 0,
    pA2: 40,
    pB2: 200,
    pA3: 0,
    pA4: 0,
  },
  {
    hanName: "大暑",
    vietName1: "Đại",
    vietName2: "thử",
    engName: "Major heat",
    dateCalendar: "July 23—August 7",
    poem1: "Khí sao thuần hỏa nấu nung,\nNắng hè hun đúc giữa trong lò trời.",
    poem2: "Nam phong đàn gảy thành thơi,\nHết buồn, nhiều của, thoa đời muôn dân.",
    canvasId: "daithu",
    primary1: "#C72127",
    primary2: "#FAEDD2",
    secondary1: "#FF7E29",
    secondary2: "#F2D490",
    wheelRotation: "120deg",
    pA1: 0,
    pA2: 60,
    pB2: 200,
    pA3: 0,
    pA4: 0,
  },
  {
    hanName: "立秋",
    vietName1: "Lập",
    vietName2: "thu",
    engName: "Beginning of Autumn",
    dateCalendar: "August 8—22",
    poem1: "Gió thu hây hẩy khắp hơi,\nHơi thu một tiếng võng rơi giếng vang.",
    poem2: "Chim ưng chiên, sao dao quang,\nLệnh hành túc sái rõ ràng nghiêm minh.",
    canvasId: "lapthu",
    primary1: "#C95433",
    primary2: "#FAEDD2",
    secondary1: "#E18740",
    secondary2: "#FBC97E",
    wheelRotation: "135deg",
    pA1: 0,
    pA2: 10,
    pB2: 100,
    pA3: 0,
    pA4: 0,
  },
  {
    hanName: "處暑",
    vietName1: "Xử",
    vietName2: "thử",
    engName: "End of Heat",
    dateCalendar: "August 23—September 7",
    poem1: "Thanh thương khí hậu hòa bình,\nHâu hãy gió mát phát sinh dần dần.",
    poem2: "Chẩn, Trương, Thuần Vỹ độ phân,\nQua ba ngày phục nhẹ phần nắng thiêu.",
    canvasId: "xuthu",
    primary1: "#FAEDD2",
    primary2: "#C95433",
    secondary1: "#FBC97E",
    secondary2: "#E18740",
    wheelRotation: "150deg",
    pA1: 0,
    pA2: 10,
    pB2: 0,
    pA3: 75,
    pA4: 0,
  },
  {
    hanName: "白露",
    vietName1: "Bạch",
    vietName2: "lộ",
    engName: "White Dew",
    dateCalendar: "September 8—22",
    poem1: "Cỏ cây khói tòa quẩn quanh,\nNước thần rơi xuống là thành mùa thu.",
    poem2: "Cúc như tắm ngọc từng xâu,\nQuế như ban sáng hạt châu trên cành.",
    canvasId: "bachlo",
    primary1: "#FAEDD2",
    primary2: "#BF752A",
    secondary1: "#E8C29C",
    secondary2: "#DB9B5B",
    wheelRotation: "165deg",
    pA1: 0,
    pA2: 10,
    pB2: 0,
    pA3: 100,
    pA4: 0,
  },
  {
    hanName: "秋分",
    vietName1: "Thu",
    vietName2: "phân",
    engName: "Autumn Equinox",
    dateCalendar: "September 23—October 7",
    poem1: "Sấm vừa im tiếng trên không,\nỔ sâu thêm cửa là vòng thu phân.",
    poem2: "Nửa đêm sao hiện Lão nhân,\nTăng soi muôn nước chung phần sáng trong.",
    canvasId: "thuphan",
    primary1: "#FAEDD2",
    primary2: "#B78946",
    secondary1: "#E1C180",
    secondary2: "#8A5D1C",
    wheelRotation: "180deg",
    pA1: 0,
    pA2: 10,
    pB2: 0,
    pA3: 125,
    pA4: 0,
  },
  {
    hanName: "寒露",
    vietName1: "Hàn",
    vietName2: "lộ",
    engName: "Cold Dew",
    dateCalendar: "October 8—22",
    poem1: "Rượu trời thánh thót trên mây,\nĐằm đằm thấm xuống cành cây lạnh lùng.",
    poem2: "Giọng ve tiếng hạc chập trùng,\nRắn bơi rùa uống thong dong dịu dàng.",
    canvasId: "hanlo",
    primary1: "#EAEAEA",
    primary2: "#2D6F8F",
    secondary1: "#79A5BB",
    secondary2: "#79A5BB",
    wheelRotation: "195deg",
    pA1: 0,
    pA2: 10,
    pB2: 0,
    pA3: 150,
    pA4: 0,
  },
  {
    hanName: "霜降",
    vietName1: "Sương",
    vietName2: "giáng",
    engName: "Frost's Descent",
    dateCalendar: "October 23—November 6",
    poem1: "Nhác trông lau sậy xanh xanh,\nĐọng ngưng giọt móc biến thành giọt sương.",
    poem2: "Lệnh thu nghiêm túc khác thường,\nCỏ cây rừng rú điểm vàng khắp nơi.",
    canvasId: "suonggiang",
    primary1: "#EAEAEA",
    primary2: "#79A4BB",
    secondary1: "#2D618F",
    secondary2: "#2D618F",
    wheelRotation: "210deg",
    pA1: 0,
    pA2: 10,
    pB2: 0,
    pA3: 175,
    pA4: 0,
  },
  {
    hanName: "立冬",
    vietName1: "Lập",
    vietName2: "đông",
    engName: "Beginning of Winter",
    dateCalendar: "November 7—21",
    poem1: "Bảy sao Bắc đầu long lanh,\nKhông gian nổi gió lệnh hành chẳng sai,",
    poem2: "Vượng, hưu, phát, Kiền, Khôn, Đoài\nTừ nay muôn vật tới nơi hoàn thành.",
    canvasId: "lapdong",
    primary1: "#79A4BB",
    primary2: "#EAEAEA",
    secondary1: "#2D6D8F",
    secondary2: "#B1CAD8",
    wheelRotation: "225deg",
    pA1: 0,
    pA2: 10,
    pB2: 0,
    pA3: 150,
    pA4: 1,
  },
  {
    hanName: "小雪",
    vietName1: "Tiểu",
    vietName2: "tuyết",
    engName: "Minor Snow",
    dateCalendar: "November 22—December 6",
    poem1: "Mầu non mờ mịt hơi mù,\nMây ngừng nước đọng ù ù gió cây.",
    poem2: "Đất trời không chút bị rây,\nĐóa hoa sầu cánh tung bay dịu dàng.",
    canvasId: "tieutuyet",
    primary1: "#408CB5",
    primary2: "#EAEAEA",
    secondary1: "#16445C",
    secondary2: "#A4C1D1",
    wheelRotation: "240deg",
    pA1: 0,
    pA2: 10,
    pB2: 0,
    pA3: 125,
    pA4: 12,
  },
  {
    hanName: "大雪",
    vietName1: "Đại",
    vietName2: "tuyết",
    engName: "Major Snow",
    dateCalendar: "December 7—21",
    poem1: "Khắp nơi hoa bạc chứa dầy,\nĐất bằng ba thước dầy dầy tràn dâng.",
    poem2: "Phương nam khí hậu đâu bằng,\nHằng năm luôn được tượng trưng ôn hòa.",
    canvasId: "daituyet",
    primary1: "#2D6F8F",
    primary2: "#EAEAEA",
    secondary1: "#408CB5",
    secondary2: "#C3C7DB",
    wheelRotation: "255deg",
    pA1: 0,
    pA2: 10,
    pB2: 0,
    pA3: 100,
    pA4: 25,
  },
  {
    hanName: "冬至",
    vietName1: "Đông",
    vietName2: "chí",
    engName: "Winter Solstice",
    dateCalendar: "December 22—January 5",
    poem1: "Cuối năm ngày đón đêm lành,\nMai cung liễu diện đâm cành trổ hoa.",
    poem2: "Mặt trời nam tuyến lần qua,\nÂm tiêu dương trưởng tin đà báo xuân.",
    canvasId: "dongchi",
    primary1: "#3155A6",
    primary2: "#EAEAEA",
    secondary1: "#6B89CD",
    secondary2: "#CDD3DF",
    wheelRotation: "270deg",
    pA1: 0,
    pA2: 10,
    pB2: 0,
    pA3: 0,
    pA4: 50,
  },
  {
    hanName: "小寒",
    vietName1: "Tiểu",
    vietName2: "hàn",
    engName: "Minor Cold",
    dateCalendar: "January 6—19",
    poem1: "Bên trời man mác mây mù,\nDần dẫn gió bắc ù ù trên không.",
    poem2: "Nước khan cá lặn lòng sông,\nMây che cốt núi mịt mùng sắc cây.",
    canvasId: "tieuhan",
    primary1: "#3C479D",
    primary2: "#EAEAEA",
    secondary1: "#7981BB",
    secondary2: "#A7ABC3",
    wheelRotation: "285deg",
    pA1: 0,
    pA2: 10,
    pB2: 0,
    pA3: 0,
    pA4: 100,
  },
  {
    hanName: "大寒",
    vietName1: "Đại",
    vietName2: "hàn",
    engName: "Major Cold",
    dateCalendar: "January 20—February 3",
    poem1: "Liền trời băng kết tuyết bay,\nLạnh lùng đất bắc chịu vầy biết sao!",
    poem2: "Trời cho khí hậu nam triều,\nĐông hè nóng lệnh thầy đều thích trung.",
    canvasId: "daihan",
    primary1: "#242B5D",
    primary2: "#EAEAEA",
    secondary1: "#7981BB",
    secondary2: "#AAAFD6",
    wheelRotation: "300deg",
    pA1: 0,
    pA2: 10,
    pB2: 0,
    pA3: 0,
    pA4: 150,
  },
];

//initializing the slide and audio index

let slide;
let root = document.documentElement;
let currentSlideIndex = 0;
const audioFiles = [polySynthA1, polySynthA2, polySynthB1, polySynthB2, polySynthC1, polySynthC2, polySynthD1, polySynthD2];
const audioRanges = [[0, 1], [2, 5], [6, 8], [9, 11], [12, 14], [15, 17], [18, 20], [21, 23]];

//index screen and if move it will break so must stay here

const table = document.getElementById("termIndex");
const indexScreen = document.getElementById("indexScreen");
const closeIndex = document.getElementById("closeIndex");
const about = document.getElementById('about');
const credits = document.getElementById('credits');
const aboutButton = document.getElementById('aboutButton');
const creditsButton = document.getElementById('creditsButton');

document.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('han') || target.classList.contains('viet') || target.classList.contains('eng') || target.classList.contains('wheel') || target.classList.contains('date')) {
    indexScreen.classList.add('visible');
  }
});

document.addEventListener('click', (event) => {
  const closeIndex = event.target.closest('#closeIndex');
  const indexScreen = document.getElementById('indexScreen');
  showSlide(currentSlideIndex);
  if (closeIndex) {
    indexScreen.classList.remove('visible');
  }
});

function toggleSectionVisibility(section) {
  if (section.classList.contains('visible')) {
      section.classList.remove('visible');
  } else {
      about.classList.remove('visible');
      credits.classList.remove('visible');
      termIndex.classList.remove('visible');
      section.classList.add('visible');
  }
}

aboutButton.addEventListener('click', function() {
  toggleSectionVisibility(about);
});

creditsButton.addEventListener('click', function() {
  toggleSectionVisibility(credits);
});

closeIndex.addEventListener('click', function() {
  toggleSectionVisibility(termIndex);
});

//merging the viet entry if there's no break

dataOverlay.forEach((data, index) => {
  const row = table.insertRow();

  let mergedVietNames = false;

  Object.values(data).slice(0, 5).forEach((value, colIndex) => {
    const cell = row.insertCell();

    if (colIndex === 1 && data.vietName2 && !mergedVietNames) {
      const vietNames = data.vietName1 + " " + data.vietName2;
      cell.textContent = vietNames;
      mergedVietNames = true;
    } else if (colIndex !== 2) {
      cell.textContent = value;
    }
  });

  row.addEventListener('click', (event) => {
    currentSlideIndex = index;
    //console.log(`Clicked on row ${index}. Current slide index is now ${currentSlideIndex}`);

    const indexScreen = document.getElementById('indexScreen');
    if (indexScreen) {
      indexScreen.classList.remove('visible');
    } else {
    }
  });
});

//bg canvas

let rainInstance;
let heatInstance;
let mistInstance;
let freezeInstance;

//data to CSS

const updateCSSVariables = (dataOverlay) => {
  const root = document.documentElement;

  for (const key in dataOverlay) {
    root.style.setProperty(`--${key}`, dataOverlay[key]);
  }
};

//data to HTML

function showSlide(index) {
  slide = dataOverlay[index];

  document.querySelector('.date').textContent = slide.dateCalendar;
  document.querySelector('.han').textContent = slide.hanName;
  document.querySelector('.viet').innerHTML = `<span>${slide.vietName1}</span> <span>${slide.vietName2}</span>`;
  document.querySelector('.eng').textContent = slide.engName;
  document.querySelector('.poem').innerHTML = `
      <span>${slide.poem1.replace(/\n/g, "<br>")}</span><br>
      <span>${slide.poem2.replace(/\n/g, "<br>")}</span>
  `;

  root.style.setProperty('--primary1', slide.primary1);
  root.style.setProperty('--primary2', slide.primary2);
  root.style.setProperty('--secondary1', slide.secondary1);
  root.style.setProperty('--secondary2', slide.secondary2);
  root.style.setProperty('--wheelRotation', slide.wheelRotation);

  slide.pA1 = dataOverlay[index].pA1;
  slide.pA2 = dataOverlay[index].pA2;
  slide.pB2 = dataOverlay[index].pB2;
  slide.pA3 = dataOverlay[index].pA3;
  slide.pA4 = dataOverlay[index].pA4;

  if (rainInstance) {
    rainInstance.remove();
  }
  if (heatInstance) {
    heatInstance.remove();
  }

  if (mistInstance) {
    mistInstance.remove();
  }

  if (freezeInstance) {
    freezeInstance.remove();
  }

  rainInstance = new p5(rainSketch);
  heatInstance = new p5(heatSketch);
  mistInstance = new p5(mistSketch);
  freezeInstance = new p5(freezeSketch);

  if (slide.pA1 == 0 && rainInstance) {
    rainInstance.remove();
  }

  if (slide.pB2 == 0 && heatInstance) {
    heatInstance.remove();
  }

  if (slide.pA3 == 0 && mistInstance) {
    mistInstance.remove();
  }

  if (slide.pA4 == 0 && freezeInstance) {
    freezeInstance.remove();
  }

  currentSlideIndex = index;

  for (let i = 0; i < audioRanges.length; i++) {
    const [start, end] = audioRanges[i];
    if (index >= start && index <= end) {
      stopCurrentSound();

      if (audioFiles[i]) {
        audioFiles[i].toDestination()
        currentPlayingSound = audioFiles[i];
        //console.log(`Triggering constant ${i + 1}`);
      } else {
        //console.log(`Audio file for constant ${i + 1} is undefined.`);
      }

      currentAudioIndex = i;
      break;
    }
  }
}

//sync slide with date

function showSlideBasedOnDate() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // Adding 1 because getMonth is zero-based
  const currentDay = currentDate.getDate();

  const dateRanges = [
    { start: '02-04', end: '02-18' },
    { start: '02-19', end: '03-05' },
    { start: '03-06', end: '03-20' },
    { start: '03-21', end: '04-04' },
    { start: '04-05', end: '04-19' },
    { start: '04-20', end: '05-05' },
    { start: '05-06', end: '05-20' },
    { start: '05-21', end: '06-05' },
    { start: '06-06', end: '06-20' },
    { start: '06-21', end: '07-06' },
    { start: '07-07', end: '07-22' },
    { start: '07-23', end: '08-07' },
    { start: '08-08', end: '08-22' },
    { start: '08-23', end: '09-07' },
    { start: '09-08', end: '09-22' },
    { start: '09-23', end: '10-07' },
    { start: '10-08', end: '10-22' },
    { start: '10-23', end: '11-06' },
    { start: '11-07', end: '11-21' },
    { start: '11-22', end: '12-06' },
    { start: '12-07', end: '12-21' },
    { start: '12-22', end: '01-05' },
    { start: '01-06', end: '01-19' },
    { start: '01-20', end: '02-03' }
  ];

  let indexToShow = -1;

  dateRanges.forEach((range, index) => {
    const [startMonth, startDay] = range.start.split('-').map(Number);
    const [endMonth, endDay] = range.end.split('-').map(Number);

    if (
      (currentMonth == startMonth && currentDay >= startDay) ||
      (currentMonth == endMonth && currentDay <= endDay) ||
      (currentMonth > startMonth && currentMonth < endMonth)
    ) {
      indexToShow = index;
    }
  });

  return indexToShow;
}

//disconnect the sound

let currentAudioIndex = -1;
let currentPlayingSound = null;

function stopCurrentSound() {
  if (currentPlayingSound) {
    currentPlayingSound.disconnect();
  }
}

// mute

let isMuted = false;

function toggleMuteOutput() {
  Tone.Master.mute = !Tone.Master.mute;
  isMuted = Tone.Master.mute;
  if (isMuted) {
    //console.log('Output muted');
  } else {
    //console.log('Output unmuted');
  }
}

document.addEventListener('keypress', function (event) {
  if (event.key === 'm' || event.key === 'M') {
    toggleMuteOutput();
  }
});

//switch slide

function nextSlide() {
  showSlide((currentSlideIndex + 1) % dataOverlay.length);
}

function prevSlide() {
  showSlide((currentSlideIndex + dataOverlay.length - 1) % dataOverlay.length);
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') {
    prevSlide();
  } else if (e.key === 'ArrowRight') {
    nextSlide();
  }
});

//hide overlay

document.addEventListener('keydown', function (event) {
  if (event.key === 'h' || event.key === 'H') {
    var overlay = document.getElementById('overlay');
    if (overlay.style.opacity === '0') {
      overlay.style.opacity = '1';
    } else {
      overlay.style.opacity = '0';
    }
  }
});

//mobile

let touchstartX = 0;
let touchendX = 0;

document.addEventListener('touchstart', function (event) {
  touchstartX = event.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', function (event) {
  touchendX = event.changedTouches[0].screenX;
  handleGesture();
}, false);

function handleGesture() {
  if (touchendX < touchstartX) {
    nextSlide();
  }

  if (touchendX > touchstartX) {
    prevSlide();
  }
}

//peace

p5.prototype.windowResized = function() {
  this.resizeCanvas(this.windowWidth, this.windowHeight);
};

let bgScene

showSlide(currentSlideIndex)

