function isValidEmail(email) {
	const emailType =typeof email === "string"
	const emailinclude= email.includes("@") 
	const emailincludedot= email.includes(".");


	return emailType && emailinclude && emailincludedot
}
module.exports = { isValidEmail };