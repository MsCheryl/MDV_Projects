//Cheryl Ferguson MiU 1206




function autoFillData() {
   var json = {
	"member1": {
		"fname": ["First Name:", "Susie"],
		"lname": ["Last Name:", "Williams"],
		"email": ["Email:", "susiepoo@yourmail.com"],
		"tel": ["Phone Number", "123-456-7867"],

	},
	"member2": {
		"fname": ["First Name:", "Becky"],
		"lname": ["Last Name:", "Williams"],
		"email": ["Email:", "beckbeck@mail.com"],
		"tel": ["Phone Number", "123-456-7867"],
	},
	"member3": {
		"fname": ["First Name:", "Sue"],
		"lname": ["Last Name:", "Turner"],
		"email": ["Email:", "trunsue@rmail.com"],
		"tel": ["Phone Number", "123-456-7867"],
	},
	"member4": {
		"fname": ["First Name:", "Marquis"],
		"lname": ["Last Name:", "Williams"],
		"email": ["Email:", "susiepoo@yourmail.com"],
		"tel": ["Phone Number", "123-456-7867"],
	},
	"member5": {
		"fname": ["First Name:", "Johnny"],
		"lname": ["Last Name:", "Walker"],
		"email": ["Email:", "susiepoo@yourmail.com"],
		"tel": ["Phone Number", "123-456-7867"],
	
	},
	"member6": {
		"fname": ["First Name:", "Mykal"],
		"lname": ["Last Name:", "Walker"],
		"email": ["Email:", "actjmd@aol.com"],
		"tel": ["Phone Number", "123-456-7867"],
	},
	"member7": {
		"fname": ["First Name:", "Susie"],
		"lname": ["Last Name:", "Williams"],
		"email": ["Email:", "susiepoo@yourmail.com"],
		"tel": ["Phone Number", "123-456-7867"],
	},
	"member8": {
		"fname": ["First Name:", "Becky"],
		"lname": ["Last Name:", "Williams"],
		"email": ["Email:", "beckbeck@mail.com"],
		"tel": ["Phone Number", "123-456-7867"],		
	},
	"member9": {
		"fname": ["First Name:", "Sue"],
		"lname": ["Last Name:", "Turner"],
		"email": ["Email:", "trunsue@rmail.com"],
		"tel": ["Phone Number", "123-456-7867"],	
	},
	"member10": {
		"fname": ["First Name:", "Marquis"],
		"lname": ["Last Name:", "Williams"],
		"email": ["Email:", "susiepoo@yourmail.com"],
		"tel": ["Phone Number", "123-456-7867"],
	},
	"member11": {
		"fname": ["First Name:", "Johnny"],
		"lname": ["Last Name:", "Walker"],
		"email": ["Email:", "susiepoo@yourmail.com"],
		"tel": ["Phone Number", "123-456-7867"],
	
	},
	"member12": {
		"fname": ["First Name:", "Mykal"],
		"lname": ["Last Name:", "Walker"],
		"email": ["Email:", "actjmd@aol.com"],
		"tel": ["Phone Number", "123-456-7867"],
	},
	"member13": {
		"fname": ["First Name:", "Susie"],
		"lname": ["Last Name:", "Williams"],
		"email": ["Email:", "susiepoo@yourmail.com"],
		"tel": ["Phone Number", "123-456-7867"],
	},
	"member14": {
		"fname": ["First Name:", "Becky"],
		"lname": ["Last Name:", "Williams"],
		"email": ["Email:", "beckbeck@mail.com"],
		"tel": ["Phone Number", "123-456-7867"],
	},
	"member15": {
		"fname": ["First Name:", "Sue"],
		"lname": ["Last Name:", "Turner"],
		"email": ["Email:", "trunsue@rmail.com"],
		"tel": ["Phone Number", "123-456-7867"],
	},
	"member16": {
		"fname": ["First Name:", "Marquis"],
		"lname": ["Last Name:", "Williams"],
		"email": ["Email:", "susiepoo@yourmail.com"],
		"tel": ["Phone Number", "123-456-7867"],
	},
	"member17": {
		"fname": ["First Name:", "Johnny"],
		"lname": ["Last Name:", "Walker"],
		"email": ["Email:", "susiepoo@yourmail.com"],
		"tel": ["Phone Number", "123-456-7867"],
	
	},
	"member18": {
		"fname": ["First Name:", "Mykal"],
		"lname": ["Last Name:", "Walker"],
		"email": ["Email:", "actjmd@aol.com"],
		"tel": ["Phone Number", "123-456-7867"],
	},
	"member19": {
		"fname": ["First Name:", "Susie"],
		"lname": ["Last Name:", "Williams"],
		"email": ["Email:", "susiepoo@yourmail.com"],
		"tel": ["Phone Number", "123-456-7867"],
	},
	"member20": {
		"fname": ["First Name:", "Becky"],
		"lname": ["Last Name:", "Williams"],
		"email": ["Email:", "beckbeck@mail.com"],
		"tel": ["Phone Number", "123-456-7867"],
    }
};


    for (var n in json) {
        var id = Math.floor(Math.random() * 100000001);
        localStorage.setItem(id, JSON.stringify(json[n]));
    }
}
