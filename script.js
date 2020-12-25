let bill1 = 124,
	bill2 = 48,
	bill3 = 175,
	bill4 = 268;
let tip;
let budget = 750;

const calculateTips = (bill) => {
	if (bill < 50) {
		tip = bill * 0.2;
	} else if (bill > 50 && bill < 200) {
		tip = bill * 0.15;
	} else if (bill >= 200) {
		tip = bill * 0.1;
	}
	return Math.round(tip);
};

console.log('Tip for 1st bill: ' + calculateTips(bill1));
console.log('Tip for 2nd bill: ' + calculateTips(bill2));
console.log('Tip for 3rd bill: ' + calculateTips(bill3));
console.log('Tip for 4th bill: ' + calculateTips(bill4));

const getTotalTips = () => {
	let totalTips =
		calculateTips(bill1) +
		calculateTips(bill2) +
		calculateTips(bill3) +
		calculateTips(bill4);

	return totalTips;
};

const budgetDust = () => {
	return budget - (getTotalTips() + bill1 + bill2 + bill3 + bill4);
};

console.log(`John has ` + budgetDust() + ' dollars left');

if (budgetDust() > budget * 0.2) {
	console.log('John has enough money');
} else {
	console.log(`John should save money, he has a little amount of money!!!`);
}
