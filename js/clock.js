const clock = document.querySelector('h2#clock');
const todays = document.querySelector('#date');

function getClock() {
	const today = new Date();
	const hours = String(today.getHours()).padStart(2, '0');
	const minutes = String(today.getMinutes()).padStart(2, '0');

	const Month = String(today.getMonth() + 1);
	const Dates = String(today.getDate());
	const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
	const week = String(weekdays[today.getDay()]);

	clock.innerText = `${hours}:${minutes}`;
	todays.innerText = `${Month}월 ${Dates}일 ${week}요일`;

}
getClock();
setInterval(getClock, 1000);