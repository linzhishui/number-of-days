const holiday2024 = [
  { name: '元旦', dateStart: '2023.12.30', dateEnd: '2024.1.1' },
  { name: '春节', dateStart: '2024.2.10', dateEnd: '2024.2.17' },
  { name: '清明节', dateStart: '2024.4.4', dateEnd: '2024.4.6' },
  { name: '劳动节', dateStart: '2024.5.1', dateEnd: '2024.5.5' },
  { name: '端午节', dateStart: '2024.6.8', dateEnd: '2024.6.10' },
  { name: '中秋节', dateStart: '2024.9.15', dateEnd: '2024.9.17' },
  { name: '国庆节', dateStart: '2024.10.1', dateEnd: '2024.10.07' },
  { name: '爷爷生日', dateStart: '2024.9.6', dateEnd: '2024.9.6' },
  { name: '奶奶生日', dateStart: '2024.1.4', dateEnd: '2024.1.4' },
  { name: '姥爷生日', dateStart: '2024.9.7', dateEnd: '2024.9.7' },
  { name: '姥姥生日', dateStart: '2024.2.9', dateEnd: '2024.2.9' },
  { name: '爸爸生日', dateStart: '2024.2.7', dateEnd: '2024.2.7' },
  { name: '妈妈生日', dateStart: '2024.4.16', dateEnd: '2024.4.16' },
  { name: '王大生日', dateStart: '2024.10.8', dateEnd: '2024.10.8' },
  { name: '王二生日', dateStart: '2024.12.4', dateEnd: '2024.12.4' },
];
const bgcColors = ['#3498db', '#2ecc71', '#e74c3c', '#f39c12', '#9b59b6', '#1abc9c'];

const container = document.querySelector('.container');

function culDaysDiff(date1, date2) {
  return Math.ceil((date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24));
}

let holiday2024Sort = holiday2024
  .filter((holiday) => {
    const [startYear, startMonth, startDay] = holiday.dateStart.split('.').map((str) => parseInt(str));
    const [endYear, endMonth, endDay] = holiday.dateEnd.split('.').map((str) => parseInt(str));
    const holidayStartDate = new Date(startYear, startMonth - 1, startDay);
    const holidayEndDate = new Date(endYear, endMonth - 1, endDay + 1);
    const nowDate = new Date();

    if (holiday.dateStart === holiday.dateEnd) {
      holiday.range = `${startMonth}.${startDay}`;
    } else {
      holiday.range = `${startMonth}.${startDay} - ${endMonth}.${endDay} | ${culDaysDiff(holidayEndDate, holidayStartDate)} 天`;
    }
    holiday.daysDiff = culDaysDiff(holidayStartDate, nowDate);

    if (nowDate.getTime() - holidayEndDate.getTime() > 0) {
      return;
    } else if (nowDate.getTime() - holidayStartDate.getTime() < 0) {
      holiday.html = `
    <div class="holiday">
      <div class="holiday-info">
        <h3>${holiday.name}</h3>
        <div>${holiday.range}</div>
      </div>
      <div class="holiday-num">
        <h1>${holiday.daysDiff}</h1>
        <p>天</p>
      </div>
    </div>`;
    } else {
      holiday.html = `
    <div class="holiday active">
      <div class="holiday-info">
        <h3>${holiday.name}</h3>
        <div>${holiday.range}</div>
      </div>
      <div class="holiday-num">
        <h1>😊节日快乐！</h1>
      </div>       
    </div>`;
    }
    return holiday;
  })
  .sort((a, b) => a.daysDiff - b.daysDiff);

for (let i = 0; i < holiday2024Sort.length; i++) {
  const holidayEl = document.createElement('div');
  holidayEl.innerHTML = holiday2024Sort[i].html;
  holidayEl.children[0].style.backgroundColor = bgcColors[i % bgcColors.length];
  container.appendChild(holidayEl);
}
