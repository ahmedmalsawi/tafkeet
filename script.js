/* ones Values* */
/** @format */
var ones = {
	0: "صفر",
	1: "واحد",
	2: "اثنان",
	3: "ثلاثة",
	4: "أربعة",
	5: "خمسة",
	6: "ستة",
	7: "سبعة",
	8: "ثمانية",
	9: "تسعة",
	10: "عشرة",
	11: "أحد عشر",
	12: "اثنى عشر",
};

/* tens Values* */
var tens = {
	1: "عشر",
	2: "عشرون",
	3: "ثلاثون",
	4: "أربعون",
	5: "خمسون",
	6: "ستون",
	7: "سبعون",
	8: "ثمانون",
	9: "تسعون",
};

/* hundreds Values* */
var hundreds = {
	0: "صفر",
	1: "مائة",
	2: "مئتان",
	3: "ثلاثمائة",
	4: "أربعمائة",
	5: "خمسمائة",
	6: "ستمائة",
	7: "سبعمائة",
	8: "ثمانمائة",
	9: "تسعمائة",
};

/* thousands Values* */
var thousands = {
	1: "ألف",
	2: "ألفان",
	39: "آلاف",
	1199: "ألفًا",
};

/* millions Values* */
var millions = {
	1: "مليون",
	2: "مليونان",
	39: "ملايين",
	1199: "مليونًا",
};

/* billions Values* */
var billions = {
	1: "مليار",
	2: "ملياران",
	39: "مليارات",
	1199: "مليارًا",
};

/* trillions Values* */
var trillions = {
	1: "تريليون",
	2: "تريليونان",
	39: "تريليونات",
	1199: "تريليونًا",
};

/**
 *
 * @param {*} number
    * main function
 */
function tafqeet(number) {
	/**
	 * store the number only
	 */

	var value = "";
	number = parseInt(number);
	//check if input is a number and in the valid defined range
	if (
		number.toString().match(/^[0-9]+$/) != null &&
		number.toString().length <= 15
	) {
		switch (number.toString().length) {
			/**
             * from 0 to 99
			 */
			case 1:
			case 2:
				value = oneTen(number);
				break;

			/**
             * from 100 to 999
			 */
			case 3:
				value = hundred(number);
				break;

			/**
             * from 1,000 to 999,999
			 */
			case 4:
			case 5:
			case 6:
				value = thousand(number);
				break;

			/**
			 * from 1,000,000 to 999,999,999
			 */
			case 7:
			case 8:
			case 9:
				value = million(number);
				break;

			/**
			 * from 1,000,000,000 to 999,999,999,999
			 */
			case 10:
			case 11:
			case 12:
				value = billion(number);
				break;

			/**
			 * from 100,000,000,000 to 9,999,999,999,999
			 */
			case 13:
			case 14:
			case 15:
				value = trillion(number);
				break;
		}
	}

	/**
	 * fix some bugs
	 */
	return value
		.replace(/وصفر/g, "")
		.replace(/وundefined/g, "")
		.replace(/ +(?= )/g, "")
		.replace(/صفر و/g, "")
		.replace(/صفر/g, "")
		.replace(/مئتان أ/, "مائتا أ")
		.replace(/مئتان م/, "مائتا م");
}

/**
 *
 * @param {*} number
 * first of tens
 */
function oneTen(number) {
	/**
	 * default value
	 */
	var value = "صفر";

	//from  0 to  12
	if (number <= 12) {
		switch (parseInt(number)) {
			case 0:
				value = ones["0"];
				break;
			case 1:
				value = ones["1"];
				break;
			case 2:
				value = ones["2"];
				break;
			case 3:
				value = ones["3"];
				break;
			case 4:
				value = ones["4"];
				break;
			case 5:
				value = ones["5"];
				break;
			case 6:
				value = ones["6"];
				break;
			case 7:
				value = ones["7"];
				break;
			case 8:
				value = ones["8"];
				break;
			case 9:
				value = ones["9"];
				break;
			case 10:
				value = ones["10"];
				break;
			case 11:
				value = ones["11"];
				break;
			case 12:
				value = ones["12"];
				break;
		}
	} else {

	/**
	 * more than 12 and less than or equal to 99
	 */
		var first = getNth(number, 0, 0);

		var second = getNth(number, 1, 1);

		if (tens[first] == "عشر") {
			value = ones[second] + " " + tens[first];
		} else {
			value = ones[second] + " و" + tens[first];
		}
	}

	return value;
}

/**
 *
 * @param {*} number
 * hundreds
 */
function hundred(number) {
	var value = "";

	/**
    * if number foesn't have three degrees
	 */
	while (number.toString().length != 3) {
		number = "0" + number;
	}

	var first = getNth(number, 0, 0);

	/**
	 * get the value of first index in number
	 */
	switch (parseInt(first)) {
		case 0:
			value = hundreds["0"];
			break;
		case 1:
			value = hundreds["1"];
			break;
		case 2:
			value = hundreds["2"];
			break;
		case 3:
			value = hundreds["3"];
			break;
		case 4:
			value = hundreds["4"];
			break;
		case 5:
			value = hundreds["5"];
			break;
		case 6:
			value = hundreds["6"];
			break;
		case 7:
			value = hundreds["7"];
			break;
		case 8:
			value = hundreds["8"];
			break;
		case 9:
			value = hundreds["9"];
			break;
	}

	/**
	 * tens
	 */
	value = value + " و" + oneTen(parseInt(getNth(number, 1, 2)));
	return value;
}

/**
 *
 * @param {*} number
 * thosands
 */
function thousand(number) {
	return thousandsTrillions(
		thousands["1"],
		thousands["2"],
		thousands["39"],
		thousands["1199"],
		0,
		parseInt(number),
		getNthReverse(number, 4)
	);
}

/**
 *
 * @param {*} number
 * millions
 */
function million(number) {
	return thousandsTrillions(
		millions["1"],
		millions["2"],
		millions["39"],
		millions["1199"],
		3,
		parseInt(number),
		getNthReverse(number, 7)
	);
}

/**
 *
 * @param {*} number
 * billions
 */
function billion(number) {
	return thousandsTrillions(
		billions["1"],
		billions["2"],
		billions["39"],
		billions["1199"],
		6,
		parseInt(number),
		getNthReverse(number, 10)
	);
}

/**
 *
 * @param {*} number
 * trillions
 */
function trillion(number) {
	return thousandsTrillions(
		trillions["1"],
		trillions["2"],
		trillions["39"],
		trillions["1199"],
		9,
		parseInt(number),
		getNthReverse(number, 13)
	);
}

/**
 *ths is the main function
 * from thosands to trillions
 * @param {*} one
 * @param {*} two
 * @param {*} three
 * @param {*} eleven
 * @param {*} diff
 * @param {*} number
 * @param {*} other
 */
function thousandsTrillions(one, two, three, eleven, diff, number, other) {
	/**
	 * get different places of number
	 */
	other = parseInt(other);
	other = tafqeet(other);

	/**
	 * if remaining is Zeor
	 */
	if (other == "") {
		other = "صفر";
	}

	var value = "";

	number = parseInt(number);

	/**
	 * check the lenght to get category of the finalNumber
	 */
	switch (number.toString().length) {
		/**
		 * Thosands
		 */
		case 4 + diff:
			var ones = parseInt(getNth(number, 0, 0));
			switch (ones) {
				case 1:
					value = one + " و" + other ;
					break;
				case 2:
					value = two + " و" + other ;
					break;
				default:
					value = oneTen(ones) + " " + three + " و" + other ;
					break;
			}
			break;
		/**
		 * Tens
		 */
		case 5 + diff:
			var tens = parseInt(getNth(number, 0, 1));
			switch (tens) {
				case 10:
					value =
						oneTen(tens) + " " + three + " و" + other ;
                        break;
                        default:
                    value = oneTen(tens) + " " +  eleven + " و" +  other;
					break;
                }
                break;
                
                /**
		 *hundreds
		 */
		case 6 + diff:
			var hundreds = parseInt(getNth(number, 0, 2));

			var two = parseInt(getNth(number, 1, 2));
			var th = "";
			switch (two) {
				case 0:
					th = one;
					break;

				default:
					th = eleven;
					break;
			}
			switch (tens) {
				case 100 <= tens <= 199:
					value =
						hundred(hundreds) +
						" " +
						th +
						" و" +
						other;
					break;
				case 200 <= tens <= 299:
					value =	hundred(hundreds) +	" " +th +" و" +	other ;
					break;
				default:
                    value =
                        hundred(hundreds) +
                        " " +
                        th +
                        " و" +
                        other;
					break;
			}
			break;
	}
    // value += " ريال";
	return value;
}

/**
 * get the number
 */
function getNth(number, first, end) {
	var finalNumber = "";
	for (var i = first; i <= end; i++) {
		finalNumber = finalNumber + String(number).charAt(i);
	}
	return finalNumber;
}

/**
 * get numer reversed
 * @param {*} number
 * @param {*} limit
 */
function getNthReverse(number, limit) {
	var finalNumber = "";
	var x = 1;
	while (x != limit) {
		finalNumber =
			String(number).charAt(number.toString().length - x) + finalNumber;
		x++;
	}
    console.log(finalNumber);
	return finalNumber;
}

function main() {
	var fraction = document.getElementById("num").value.split(".");

	if (fraction.length == 2) {
		document.getElementById("result").innerHTML = tafqeet(fraction[0]) + " ريال  و " + tafqeet(fraction[1]);
		document.getElementById("result").innerHTML += " هللة  فقط لا غير";
	} else if (fraction.length == 1) {
        document.getElementById("result").innerHTML =
					tafqeet(fraction[0]) + " ريال فقط لا غير";
	}else if (fraction.length > 2) {
        document.getElementById("result").innerHTML =" يمكنك استخدام رقمين فقط في الكسور";
	}
}


document.getElementById("num").addEventListener("keyup", main);



function copy() {
    var copyText = document.getElementById("result").textContent;
    console.log(copyText);
	// copyText[0].select();
	// copyText.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(copyText);

	var tooltip = document.getElementById("myTooltip");
	tooltip.innerHTML = "تم النسخ بنجاح";
}

function copyOut() {
	var tooltip = document.getElementById("myTooltip");
	tooltip.innerHTML = "اضغط حتي يتم نسخ النتيجة الي الحافظة";
}
