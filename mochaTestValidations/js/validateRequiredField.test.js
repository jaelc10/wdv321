
// JavaScript Document

var assert = require('chai').assert;	//Chai assertion library
var validInput = require('../app/validateRequiredField');
var validInput = require('../app/validatePhoneNumber');

describe("Testing Input Required", function(){
	
	it("The letter a should pass", function(){
		assert.isTrue(validInput('a'));		
	});
	
	it("The number 4 should pass", function() {
		assert.isTrue(validInput(4));
	});
	
	it("Empty or '' should fail", function() {
		assert.isFalse(validInput(' '));
	});	
	
	it("A single space should fail", function() {
		assert.isFalse(validInput(' '));
	});
	
	it("Two or more spaces should fail", function(){
		assert.isFalse(validInput('  '));
	});
	
	it("The word null should fail", function() {
		assert.isFalse(validInput('null'));
	});
	
	it("The word undefined should fail", function() {
		assert.isFalse(validInput('undefined'));
	});
	
	it("The value 'a 4' should pass", function(){
		assert.isTrue(validInput('a 4'));
	});
	
});	//end "Testing Input Required"

//describe("Testing Valid Phone Number", function(){
	
	//it("Input is required");
	//it("Input must be numeric");
	//it("Input must be integers");
	//it("Input must be 10 numbers");
	
describe("Testing Valid Phone Number", function(){

	//it("Input is required");
	it("Input is required. Empty should be false", function(){
		assert.isFalse(phoneNumber(""));
	});
	
	//it("Input must be numeric");
	it("Input must be numeric", function(){
		assert.isFalse(phoneNumber("ahdfbvdhjsbhv"));
	});

	//it("Input must be integers");
	it("Input must be integers", function(){
		assert.isFalse(phoneNumber('integer'));
	});
	//it("Input must be 10 numbers");

	it("Input must be 10 numbers", function(){
		assert.isTrue(phoneNumber(1234567890));
	});
	
	
	
});