//Cheryl Ferguson MiU 1206




function autoFillData() {
   var json = {
	"member1": {
		"ministryInfo": ["Select Ministry:", "Leadership"],
		"fname": ["First Name:", "Susie"],
		"lname": ["Last Name:", "Williams"],
		"email": ["Email:", "susiepoo@yourmail.com"],

	},
	"member2": {
		"ministryInfo": ["Select Ministry:", "Leadership"],
		"fname": ["First Name:", "Becky"],
		"lname": ["Last Name:", "Williams"],
		"email": ["Email:", "beckbeck@mail.com"],

	},
	"member3": {
		"ministryInfo": ["Select Minstry:", "Leadership"],
		"fname": ["First Name:", "Sue"],
		"lname": ["Last Name:", "Turner"],
		"email": ["Email:", "trunsue@rmail.com"],

	},
	"member4": {
		"ministryInfo": ["Select Ministry:", "Ministries"],
		"fname": ["First Name:", "Marquis"],
		"lname": ["Last Name:", "Williams"],
		"email": ["Email:", "susiepoo@yourmail.com"],

	},
	"member5": {
		"ministryInfo": ["Select Ministry:", "Ministries"],
		"fname": ["First Name:", "Johnny"],
		"lname": ["Last Name:", "Walker"],
		"email": ["Email:", "susiepoo@yourmail.com"],

	
	},
	"member6": {
		"ministryInfo": ["Select Ministry:", "Ministries"],
		"fname": ["First Name:", "Mykal"],
		"lname": ["Last Name:", "Walker"],
		"email": ["Email:", "actjmd@aol.com"],

	}
	"member7": {
		"ministryInfo": ["Select Ministry:", "Lesson"],
		"fname": ["First Name:", "Susie"],
		"lname": ["Last Name:", "Williams"],
		"email": ["Email:", "susiepoo@yourmail.com"],

	},
	"member8": {
		"ministryInfo": ["Select Ministry:", "Lesson"],
		"fname": ["First Name:", "Becky"],
		"lname": ["Last Name:", "Williams"],
		"email": ["Email:", "beckbeck@mail.com"],
		
	},
	"member9": {
		"ministryInfo": ["Select Minstry:", "Upcoming"],
		"fname": ["First Name:", "Sue"],
		"lname": ["Last Name:", "Turner"],
		"email": ["Email:", "trunsue@rmail.com"],
	
	},
	"member10": {
		"ministryInfo": ["Select Ministry:", "Upcoming"],
		"fname": ["First Name:", "Marquis"],
		"lname": ["Last Name:", "Williams"],
		"email": ["Email:", "susiepoo@yourmail.com"],

	},
	"member11": {
		"ministryInfo": ["Select Ministry:", "Lesson"],
		"fname": ["First Name:", "Johnny"],
		"lname": ["Last Name:", "Walker"],
		"email": ["Email:", "susiepoo@yourmail.com"],

	
	}
	"member12": {
		"ministryInfo": ["Select Ministry:", "Lesson"],
		"fname": ["First Name:", "Mykal"],
		"lname": ["Last Name:", "Walker"],
		"email": ["Email:", "actjmd@aol.com"],

	}
	"member13": {
		"ministryInfo": ["Select Ministry:", "Leadership"],
		"fname": ["First Name:", "Susie"],
		"lname": ["Last Name:", "Williams"],
		"email": ["Email:", "susiepoo@yourmail.com"],

	},
	"member14": {
		"ministryInfo": ["Select Ministry:", "Leadership"],
		"fname": ["First Name:", "Becky"],
		"lname": ["Last Name:", "Williams"],
		"email": ["Email:", "beckbeck@mail.com"],

	},
	"member15": {
		"ministryInfo": ["Select Minstry:", "Leadership"],
		"fname": ["First Name:", "Sue"],
		"lname": ["Last Name:", "Turner"],
		"email": ["Email:", "trunsue@rmail.com"],

	},
	"member16": {
		"ministryInfo": ["Select Ministry:", "Upcoming"],
		"fname": ["First Name:", "Marquis"],
		"lname": ["Last Name:", "Williams"],
		"email": ["Email:", "susiepoo@yourmail.com"],

	},
	"member17": {
		"ministryInfo": ["Select Ministry:", "Upcoming"],
		"fname": ["First Name:", "Johnny"],
		"lname": ["Last Name:", "Walker"],
		"email": ["Email:", "susiepoo@yourmail.com"],

	
	}
	"member18": {
		"ministryInfo": ["Select Ministry:", "Membership"],
		"fname": ["First Name:", "Mykal"],
		"lname": ["Last Name:", "Walker"],
		"email": ["Email:", "actjmd@aol.com"],

	}
	"member19": {
		"ministryInfo": ["Select Ministry:", "Membership"],
		"fname": ["First Name:", "Susie"],
		"lname": ["Last Name:", "Williams"],
		"email": ["Email:", "susiepoo@yourmail.com"],

	},
	"member20": {
		"ministryInfo": ["Select Ministry:", "Ministries"],
		"fname": ["First Name:", "Becky"],
		"lname": ["Last Name:", "Williams"],
		"email": ["Email:", "beckbeck@mail.com"],

    };
    for (var n in json) {
        var id = Math.floor(Math.random() * 110100110);
        localStorage.setItem(id, JSON.stringify(json[n]));
    }
}
