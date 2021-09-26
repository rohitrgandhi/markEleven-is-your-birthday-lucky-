# markEleven (Build Basics)
## is your birthday lucky?
- Take user's complete birthday
- And his/her lucky number.
- Now, find out if sum of digits of birthday is divisible by the lucky number.
- Show the result to user with some graphics.

# additional
- Create this as a website, put a privacy notice. Say that you're not storing data.
- Use the footer to redirect to your social media accounts and your portfolio.

# hint
Use modulo operator to separate digits.

## ex.0: Input date of birth and the lucky number to check
Challenge:
Input date of birth and the lucky number to check then console the values.

Understand:
There are multiple ways to take user input for date like:

- Using select and option elements for taking inputs for Date, Month and Year.
- Read about select and option how they work and how can you take user input.
- or by using the **input element**.

Use Input element for date and define its type.

- Define two input elements one for **date of birth** and another for **lucky number**.
add type attributes to both as date and number
- Create a button and trigger an event using querySelector and addEventListener on click of that button console the values.

## ex: 01 calculate the sum of digits of the date.
Challenge:
Notice the value you get from date input, we get that as a string with a special character i.e hyphen but we need to calculate the sum of digits which are basically numbers.

The challenge here is to remove any special character from the input value.

Understand:
- Use replaceAll to replace the special characters from the string.
- Read about replaceAll and good to know other available methods which we can use for string manipulation.
- Once you remove them sum up all the digits.
- Use for loop for adding all the digits, use charAt to index each value. Make sure you typecast character to Number.
- Read about typecasting here which datatypes can be typecasted from and to what type.
- You can also sum the digits using while loop using modulus
