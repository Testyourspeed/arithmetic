const questions = [
    // Round 1
    [
        {
            question: "What is the result of 346 × 58?",
            options: ["20,068", "18,868", "19,808", "21,098"],
            correct: 0,
        },
        {
            question: "Simplify: 15 × (20 ÷ 5) + 9",
            options: ["39", "54", "45", "56"],
            correct: 0,
        },
        {
            question: "If a car travels 120 miles in 2 hours, what is the average speed?",
            options: ["50 miles/hour", "60 miles/hour", "55 miles/hour", "45 miles/hour"],
            correct: 1,
        },
        {
            question: "Solve for x: 2x + 5 = 3x + 10",
            options: ["x = -5", "x = 15", "x = 5", "x = -10"],
            correct: 0,
        },
        {
            question: "A store sells 3 items for $15. How much would 10 items cost?",
            options: ["$50", "$45", "$40", "$35"],
            correct: 1,
        },
    ],

    // Round 2
    [
        {
            question: "Calculate the value of 125 ÷ (5 + 10) × 8",
            options: ["50", "75", "60", "100"],
            correct: 2,
        },
        {
            question: "Solve for x: 5x - 3 = 2x + 15",
            options: ["x = 6", "x = 5", "x = 4", "x = 7"],
            correct: 0,
        },
        {
            question: "Find the total cost of 12 items that each cost $18.50",
            options: ["$222", "$200", "$210", "$205"],
            correct: 0,
        },
        {
            question: "If a train travels 75 miles in 1 hour 30 minutes, what is its average speed in miles per hour?",
            options: ["50 mph", "45 mph", "60 mph", "55 mph"],
            correct: 2,
        },
        {
            question: "Simplify: (14 × 3) ÷ 7 + 2",
            options: ["10", "12", "11", "13"],
            correct: 2,
        },
    ],

    // Round 3
    [
        {
            question: "What is 5 times the sum of 24 and 18?",
            options: ["210", "225", "230", "242"],
            correct: 1,
        },
        {
            question: "Solve for y: 3y + 4 = 2y + 9",
            options: ["y = 5", "y = 4", "y = 3", "y = 2"],
            correct: 0,
        },
        {
            question: "If a bag contains 4 red, 6 blue, and 8 green marbles, what is the probability of drawing a red marble?",
            options: ["1/3", "2/5", "1/5", "1/2"],
            correct: 0,
        },
        {
            question: "Simplify: 7 × (9 + 6) ÷ 3",
            options: ["35", "39", "40", "36"],
            correct: 3,
        },
        {
            question: "What is the area of a rectangle with length 15 cm and width 7 cm?",
            options: ["105 cm²", "120 cm²", "110 cm²", "100 cm²"],
            correct: 0,
        },
    ],

    // Round 4
    [
        {
            question: "What is the result of 648 ÷ 9 × 7?",
            options: ["504", "508", "505", "510"],
            correct: 0,
        },
        {
            question: "Simplify: 72 ÷ (6 + 2) × 3",
            options: ["27", "24", "18", "21"],
            correct: 0,
        },
        {
            question: "If a person saves $150 every month for 9 months, how much has the person saved?",
            options: ["$1,350", "$1,450", "$1,500", "$1,600"],
            correct: 0,
        },
        {
            question: "Solve for x: 4(x - 2) = 2x + 8",
            options: ["x = 8", "x = 6", "x = 7", "x = 10"],
            correct: 1,
        },
        {
            question: "What is 30% of 180?",
            options: ["54", "56", "60", "58"],
            correct: 0,
        },
    ],

    // Round 5
    [
        {
            question: "Solve for x: 3(x + 4) = 2(x + 6) + 5",
            options: ["x = 2", "x = 3", "x = 1", "x = 4"],
            correct: 0,
        },
        {
            question: "What is the sum of 2/5 and 3/8?",
            options: ["31/40", "23/40", "27/40", "25/40"],
            correct: 0,
        },
        {
            question: "A piece of fabric is 6 meters long. If it is cut into 8 equal pieces, what is the length of each piece?",
            options: ["0.75 meters", "0.6 meters", "0.5 meters", "0.8 meters"],
            correct: 0,
        },
        {
            question: "Simplify: 45 ÷ (5 × 3) + 7",
            options: ["9", "10", "8", "7"],
            correct: 2,
        },
        {
            question: "If a car travels 480 miles in 8 hours, what is its average speed?",
            options: ["50 miles/hour", "60 miles/hour", "70 miles/hour", "75 miles/hour"],
            correct: 1,
        },
    ],

    // Round 6
    [
        {
            question: "What is the product of 9 × (15 + 5)?",
            options: ["180", "150", "200", "175"],
            correct: 0,
        },
        {
            question: "Simplify: 15 + 20 × 4 ÷ 5",
            options: ["35", "30", "45", "40"],
            correct: 0,
        },
        {
            question: "What is 30% of 250?",
            options: ["75", "80", "85", "90"],
            correct: 0,
        },
        {
            question: "Find the value of x in the equation 3x - 4 = 2x + 8",
            options: ["x = 12", "x = 14", "x = 10", "x = 4"],
            correct: 0,
        },
        {
            question: "A store sold 150 items on Monday, 180 items on Tuesday, and 220 items on Wednesday. What is the average number of items sold per day?",
            options: ["175", "180", "185", "200"],
            correct: 0,
        },
    ],

    // Round 7
    [
        {
            question: "If a rectangle has a perimeter of 40 cm and a length of 12 cm, what is the width?",
            options: ["8 cm", "9 cm", "10 cm", "11 cm"],
            correct: 0,
        },
        {
            question: "Simplify: 50 ÷ (5 × 2) + 4",
            options: ["14", "13", "12", "11"],
            correct: 0,
        },
        {
            question: "What is the result of 784 ÷ 14?",
            options: ["56", "57", "58", "59"],
            correct: 0,
        },
        {
            question: "What is 3/4 of 120?",
            options: ["90", "80", "75", "85"],
            correct: 0,
        },
        {
            question: "Find the area of a triangle with base 18 cm and height 10 cm.",
            options: ["90 cm²", "80 cm²", "95 cm²", "100 cm²"],
            correct: 0,
        },
    ],

    // Round 8
    [
        {
            question: "If a person saves $150 every month for 14 months, how much has the person saved?",
            options: ["$2,000", "$2,100", "$2,200", "$2,300"],
            correct: 1,
        },
        {
            question: "Simplify: (12 × 2 + 5) ÷ 7",
            options: ["5", "6", "7", "8"],
            correct: 0,
        },
        {
            question: "What is the square root of 256?",
            options: ["16", "14", "12", "18"],
            correct: 0,
        },
        {
            question: "What is the sum of the first 50 positive integers?",
            options: ["1275", "1250", "1300", "1350"],
            correct: 0,
        },
        {
            question: "Solve for x: 4(x + 5) = 3(x + 7)",
            options: ["x = 4", "x = 6", "x = 3", "x = 5"],
            correct: 0,
        },
    ],
    // Round 9
    [
        {
            question: "What is the value of 64 ÷ (8 + 4) × 2?",
            options: ["6", "8", "10", "12"],
            correct: 0,
        },
        {
            question: "Solve for y: 7y - 9 = 4y + 11",
            options: ["y = 5", "y = 6", "y = 4", "y = 3"],
            correct: 0,
        },
        {
            question: "If a box contains 24 red marbles, 16 blue marbles, and 8 green marbles, what is the probability of picking a blue marble?",
            options: ["1/3", "2/5", "1/2", "2/3"],
            correct: 1,
        },
        {
            question: "Simplify: (50 - 5 × 4) + 20 ÷ 5",
            options: ["20", "25", "30", "35"],
            correct: 1,
        },
        {
            question: "A car travels 120 miles in 2 hours, and then 180 miles in 3 hours. What is the average speed of the car for the entire trip?",
            options: ["70 miles/hour", "72 miles/hour", "75 miles/hour", "78 miles/hour"],
            correct: 1,
        },
    ],

    // Round 10
    [
        {
            question: "Simplify: 9 × (6 + 4) ÷ 5",
            options: ["18", "12", "14", "16"],
            correct: 1,
        },
        {
            question: "What is 25% of 320?",
            options: ["80", "90", "100", "110"],
            correct: 0,
        },
        {
            question: "Solve for x: 5x - 3 = 4x + 7",
            options: ["x = 10", "x = 7", "x = 6", "x = 4"],
            correct: 0,
        },
        {
            question: "A store offers a 20% discount on a jacket priced at $80. What is the sale price?",
            options: ["$64", "$70", "$75", "$68"],
            correct: 0,
        },
        {
            question: "What is the sum of 345 and 782?",
            options: ["1,127", "1,127", "1,120", "1,150"],
            correct: 0,
        },
    ],

    // Round 11
    [
        {
            question: "Simplify: (12 + 8) × (15 ÷ 3)",
            options: ["100", "80", "90", "110"],
            correct: 1,
        },
        {
            question: "If you divide $300 equally among 5 people, how much will each person get?",
            options: ["$60", "$50", "$55", "$65"],
            correct: 0,
        },
        {
            question: "A box contains 6 red, 3 green, and 9 yellow balls. What is the probability of picking a red ball?",
            options: ["2/3", "1/2", "1/3", "1/4"],
            correct: 0,
        },
        {
            question: "Find the value of 6x + 2 when x = 5",
            options: ["32", "28", "30", "36"],
            correct: 2,
        },
        {
            question: "What is the total cost of 18 items that cost $13.50 each?",
            options: ["$243", "$240", "$235", "$230"],
            correct: 0,
        },
    ],

    // Round 12
    [
        {
            question: "What is the value of (36 ÷ 6) × (7 + 2)?",
            options: ["42", "45", "48", "50"],
            correct: 0,
        },
        {
            question: "What is the sum of 1,234, 876, and 560?",
            options: ["2,770", "2,790", "2,800", "2,810"],
            correct: 0,
        },
        {
            question: "Solve for x: 4(x - 3) = 5x + 2",
            options: ["x = 2", "x = 4", "x = 3", "x = 5"],
            correct: 0,
        },
        {
            question: "If a train travels 80 miles in 1 hour 30 minutes, what is its average speed in miles per hour?",
            options: ["50 mph", "55 mph", "60 mph", "65 mph"],
            correct: 2,
        },
        {
            question: "A piece of wood is 9 feet long. How many 2-foot pieces can be cut from it?",
            options: ["4", "5", "6", "7"],
            correct: 2,
        },
    ],

    // Round 13
    [
        {
            question: "Simplify: 14 + 36 ÷ (8 + 2)",
            options: ["18", "20", "22", "24"],
            correct: 1,
        },
        {
            question: "What is 15% of 150?",
            options: ["20", "25", "30", "35"],
            correct: 2,
        },
        {
            question: "Find the value of x in the equation 3x - 7 = 11",
            options: ["x = 6", "x = 7", "x = 8", "x = 9"],
            correct: 0,
        },
        {
            question: "A store sells 3 pens for $7. How much would 15 pens cost?",
            options: ["$35", "$45", "$50", "$40"],
            correct: 0,
        },
        {
            question: "What is the perimeter of a rectangle with length 12 cm and width 5 cm?",
            options: ["34 cm", "30 cm", "40 cm", "38 cm"],
            correct: 1,
        },
    ],

    // Round 14
    [
        {
            question: "Simplify: 7 × (18 ÷ 3) - 6",
            options: ["36", "40", "42", "44"],
            correct: 0,
        },
        {
            question: "What is the value of 2^5?",
            options: ["32", "64", "16", "25"],
            correct: 0,
        },
        {
            question: "If you save $40 every month, how much will you have saved after 18 months?",
            options: ["$720", "$730", "$740", "$750"],
            correct: 0,
        },
        {
            question: "Simplify: (3 + 4) × 6 ÷ 7",
            options: ["6", "5", "7", "8"],
            correct: 0,
        },
        {
            question: "What is 120 ÷ 8 × 5?",
            options: ["60", "55", "62", "50"],
            correct: 0,
        },
    ],

    // Round 15
    [
        {
            question: "A piece of fabric costs $9 per meter. How much does 12 meters of fabric cost?",
            options: ["$108", "$110", "$120", "$115"],
            correct: 0,
        },
        {
            question: "Solve for x: 2(x + 3) = 16",
            options: ["x = 5", "x = 6", "x = 7", "x = 4"],
            correct: 0,
        },
        {
            question: "What is 25% of 480?",
            options: ["120", "110", "115", "130"],
            correct: 0,
        },
        {
            question: "Simplify: (9 + 15) × (3 - 1)",
            options: ["48", "45", "50", "44"],
            correct: 0,
        },
        {
            question: "What is the total cost of 18 items that cost $25.75 each?",
            options: ["$450", "$470", "$485", "$500"],
            correct: 1,
        },
    ],
      // Round 16
    [
        {
            question: "What is the value of (12 + 6) ÷ (3 × 2)?",
            options: ["3", "4", "5", "6"],
            correct: 0,
        },
        {
            question: "If a discount of 25% is applied to an item that costs $120, what is the sale price?",
            options: ["$90", "$100", "$110", "$115"],
            correct: 0,
        },
        {
            question: "A car travels 75 miles in 2 hours, and then 120 miles in 3 hours. What is the average speed of the car?",
            options: ["55 mph", "60 mph", "65 mph", "70 mph"],
            correct: 1,
        },
        {
            question: "Solve for x: 3(x + 2) = 21",
            options: ["x = 5", "x = 7", "x = 6", "x = 8"],
            correct: 0,
        },
        {
            question: "What is the total cost of 18 items at $14.50 each?",
            options: ["$260", "$270", "$280", "$290"],
            correct: 1,
        },
    ],

    // Round 17
    [
        {
            question: "Simplify: 8 × (4 + 6) ÷ 5",
            options: ["16", "18", "20", "22"],
            correct: 0,
        },
        {
            question: "What is 15% of $240?",
            options: ["$35", "$36", "$38", "$39"],
            correct: 1,
        },
        {
            question: "A box contains 12 red, 8 green, and 6 blue marbles. What is the probability of drawing a green marble?",
            options: ["1/2", "1/3", "1/4", "1/5"],
            correct: 1,
        },
        {
            question: "What is the sum of 5,012 and 8,430?",
            options: ["13,452", "13,442", "13,432", "13,422"],
            correct: 0,
        },
        {
            question: "Find the value of x in the equation 4x + 2 = 18",
            options: ["x = 4", "x = 5", "x = 6", "x = 7"],
            correct: 0,
        },
    ],

    // Round 18
    [
        {
            question: "Simplify: (3 + 7) × (15 ÷ 3)",
            options: ["35", "45", "50", "55"],
            correct: 0,
        },
        {
            question: "A store sells a t-shirt for $18. If it offers a 10% discount, how much is the discount?",
            options: ["$1.80", "$2", "$2.50", "$3"],
            correct: 0,
        },
        {
            question: "A car travels 120 miles in 2 hours, then 90 miles in 3 hours. What is the average speed of the car?",
            options: ["50 mph", "55 mph", "60 mph", "65 mph"],
            correct: 1,
        },
        {
            question: "If you save $40 every month, how much will you have saved after 9 months?",
            options: ["$360", "$350", "$340", "$330"],
            correct: 0,
        },
        {
            question: "What is 12% of 600?",
            options: ["$72", "$76", "$70", "$78"],
            correct: 0,
        },
    ],

    // Round 19
    [
        {
            question: "What is the value of (16 + 24) ÷ (4 × 5)?",
            options: ["2", "4", "5", "6"],
            correct: 0,
        },
        {
            question: "Simplify: 8 × (6 ÷ 2) - 7",
            options: ["25", "30", "35", "40"],
            correct: 0,
        },
        {
            question: "What is 30% of $500?",
            options: ["$150", "$160", "$170", "$180"],
            correct: 0,
        },
        {
            question: "If a piece of fabric is 50 meters long and each piece is 2.5 meters long, how many pieces can be cut?",
            options: ["18", "19", "20", "21"],
            correct: 2,
        },
        {
            question: "What is the total cost of 14 books that cost $18.50 each?",
            options: ["$258", "$260", "$270", "$280"],
            correct: 0,
        },
    ],

    // Round 20
    [
        {
            question: "Simplify: (5 + 3) × (12 ÷ 4)",
            options: ["20", "24", "28", "32"],
            correct: 0,
        },
        {
            question: "What is 35% of $320?",
            options: ["$115", "$110", "$120", "$125"],
            correct: 0,
        },
        {
            question: "What is the value of x in the equation 5x + 3 = 18?",
            options: ["x = 3", "x = 2", "x = 4", "x = 5"],
            correct: 2,
        },
        {
            question: "A piece of fabric costs $12 per yard. How much will 7 yards of fabric cost?",
            options: ["$82", "$84", "$86", "$88"],
            correct: 1,
        },
        {
            question: "What is the sum of 789 and 1,234?",
            options: ["2,023", "2,014", "2,020", "2,030"],
            correct: 0,
        },
    ],

    // Round 21
    [
        {
            question: "What is the value of 9 × (12 ÷ 4) - 6?",
            options: ["12", "18", "24", "30"],
            correct: 0,
        },
        {
            question: "If you divide $500 equally among 10 people, how much does each person get?",
            options: ["$50", "$45", "$55", "$60"],
            correct: 0,
        },
        {
            question: "A store sells a pair of shoes for $90. If there is a 15% discount, what is the sale price?",
            options: ["$75", "$80", "$85", "$70"],
            correct: 0,
        },
        {
            question: "Simplify: 7 × (15 ÷ 3) + 6",
            options: ["33", "35", "37", "40"],
            correct: 0,
        },
        {
            question: "What is the average of 25, 30, and 35?",
            options: ["30", "32", "34", "33"],
            correct: 0,
        },
    ],
    
    // Round 22
    [
        {
            question: "Simplify: 15 × (3 + 7) ÷ 4",
            options: ["30", "35", "40", "45"],
            correct: 1,
        },
        {
            question: "What is 40% of $150?",
            options: ["$60", "$65", "$70", "$75"],
            correct: 0,
        },
        {
            question: "Solve for y: 2(y + 5) = 18",
            options: ["y = 4", "y = 5", "y = 6", "y = 7"],
            correct: 0,
        },
        {
            question: "What is the perimeter of a rectangle with length 15 cm and width 9 cm?",
            options: ["48 cm", "40 cm", "44 cm", "50 cm"],
            correct: 1,
        },
        {
            question: "What is the sum of 487 and 323?",
            options: ["810", "800", "825", "830"],
            correct: 0,
        },
    ],
      // Round 23
    [
        {
            question: "Simplify: 6 × (5 + 3) ÷ 4",
            options: ["12", "14", "15", "16"],
            correct: 0,
        },
        {
            question: "What is 12% of $500?",
            options: ["$60", "$62", "$65", "$68"],
            correct: 0,
        },
        {
            question: "Solve for x: 5(x - 4) = 20",
            options: ["x = 8", "x = 6", "x = 7", "x = 9"],
            correct: 0,
        },
        {
            question: "A student received 18 out of 20 correct answers on a test. What percentage did they score?",
            options: ["90%", "85%", "95%", "80%"],
            correct: 0,
        },
        {
            question: "A piece of fabric costs $5.50 per yard. How much would 8 yards cost?",
            options: ["$40", "$42", "$44", "$45"],
            correct: 1,
        },
    ],

    // Round 24
    [
        {
            question: "What is the value of 20 × (5 + 5) ÷ 10?",
            options: ["20", "25", "30", "35"],
            correct: 0,
        },
        {
            question: "Simplify: 8 × (7 + 5) - 12",
            options: ["84", "90", "96", "100"],
            correct: 0,
        },
        {
            question: "If a book is priced at $25 and is on sale for 40% off, what is the sale price?",
            options: ["$15", "$18", "$20", "$22"],
            correct: 0,
        },
        {
            question: "What is the area of a triangle with a base of 10 cm and height of 5 cm?",
            options: ["25 cm²", "30 cm²", "35 cm²", "40 cm²"],
            correct: 0,
        },
        {
            question: "Solve for y: 3y + 5 = 17",
            options: ["y = 4", "y = 5", "y = 6", "y = 7"],
            correct: 0,
        },
    ],

    // Round 25
    [
        {
            question: "Simplify: 5 × (10 + 4) ÷ 7",
            options: ["10", "12", "14", "16"],
            correct: 1,
        },
        {
            question: "What is 15% of 180?",
            options: ["$25", "$26", "$27", "$28"],
            correct: 2,
        },
        {
            question: "If a bag contains 10 red balls, 6 green balls, and 4 yellow balls, what is the probability of drawing a yellow ball?",
            options: ["1/5", "1/4", "1/3", "1/2"],
            correct: 1,
        },
        {
            question: "A car covers 90 miles in 1.5 hours. What is the average speed in miles per hour?",
            options: ["55 mph", "60 mph", "65 mph", "70 mph"],
            correct: 1,
        },
        {
            question: "What is the cost of 18 items, if each item costs $13.25?",
            options: ["$230.25", "$238.25", "$240.25", "$245.25"],
            correct: 0,
        },
    ],

    // Round 26
    [
        {
            question: "What is the value of 8 × (9 ÷ 3) - 4?",
            options: ["20", "22", "24", "26"],
            correct: 0,
        },
        {
            question: "What is 25% of $400?",
            options: ["$85", "$90", "$95", "$100"],
            correct: 3,
        },
        {
            question: "A store offers a 15% discount on a $200 item. What is the discount amount?",
            options: ["$25", "$30", "$35", "$40"],
            correct: 1,
        },
        {
            question: "Solve for x: 6(x - 2) = 24",
            options: ["x = 4", "x = 5", "x = 6", "x = 7"],
            correct: 0,
        },
        {
            question: "What is the total cost of 7 items at $9.75 each?",
            options: ["$67.25", "$68.25", "$69.75", "$70.75"],
            correct: 0,
        },
    ],

    // Round 27
    [
        {
            question: "What is 36 ÷ (4 × 3) + 2?",
            options: ["4", "5", "6", "7"],
            correct: 0,
        },
        {
            question: "Simplify: 4 × (9 + 5) - 10",
            options: ["30", "32", "34", "36"],
            correct: 0,
        },
        {
            question: "If a store sells 7 pens for $5.60, what is the price of 10 pens?",
            options: ["$8", "$8.50", "$9", "$9.50"],
            correct: 0,
        },
        {
            question: "What is the area of a rectangle with length 16 cm and width 6 cm?",
            options: ["96 cm²", "98 cm²", "100 cm²", "102 cm²"],
            correct: 0,
        },
        {
            question: "What is 18% of 150?",
            options: ["$25.50", "$26.50", "$27.50", "$28.50"],
            correct: 0,
        },
    ],

    // Round 28
    [
        {
            question: "Simplify: 7 × (5 + 2) ÷ 3",
            options: ["16", "18", "20", "22"],
            correct: 1,
        },
        {
            question: "What is 30% of $600?",
            options: ["$170", "$180", "$190", "$200"],
            correct: 1,
        },
        {
            question: "Solve for y: 4y - 5 = 11",
            options: ["y = 4", "y = 5", "y = 6", "y = 7"],
            correct: 0,
        },
        {
            question: "What is the perimeter of a triangle with sides 6 cm, 8 cm, and 10 cm?",
            options: ["24 cm", "22 cm", "20 cm", "18 cm"],
            correct: 0,
        },
        {
            question: "If a car travels 150 miles in 3 hours, what is the average speed?",
            options: ["45 mph", "50 mph", "55 mph", "60 mph"],
            correct: 1,
        },
    ],

    // Round 29
    [
        {
            question: "Simplify: 5 × (7 + 8) ÷ 6",
            options: ["12", "14", "16", "18"],
            correct: 1,
        },
        {
            question: "What is 50% of 240?",
            options: ["$100", "$110", "$120", "$130"],
            correct: 2,
        },
        {
            question: "Solve for x: 8x + 5 = 37",
            options: ["x = 4", "x = 5", "x = 6", "x = 7"],
            correct: 0,
        },
        {
            question: "A student earned $9 per hour for 40 hours of work. What is their total earnings?",
            options: ["$350", "$360", "$370", "$380"],
            correct: 1,
        },
        {
            question: "If a pencil costs $0.75, how much would 20 pencils cost?",
            options: ["$15", "$14", "$13", "$12"],
            correct: 0,
        },
    ],

    // Round 30
    [
        {
            question: "What is the value of (18 ÷ 3) × (4 + 2)?",
            options: ["20", "24", "28", "32"],
            correct: 1,
        },
        {
            question: "What is 20% of 500?",
            options: ["$100", "$110", "$120", "$130"],
            correct: 0,
        },
        {
            question: "Solve for y: 2y + 6 = 16",
            options: ["y = 5", "y = 4", "y = 6", "y = 7"],
            correct: 1,
        },
        {
            question: "What is the total cost of 10 items that cost $15.50 each?",
            options: ["$155", "$156", "$158", "$160"],
            correct: 0,
        },
        {
            question: "Simplify: (10 + 20) × (30 ÷ 5)",
            options: ["120", "130", "140", "150"],
            correct: 0,
        },
    ],

        // Round 31
    [
        {
            question: "Simplify: (15 × 3) ÷ (9 - 6)",
            options: ["15", "18", "20", "25"],
            correct: 1,
        },
        {
            question: "What is 12% of $450?",
            options: ["$52.50", "$53.50", "$54.50", "$55.50"],
            correct: 0,
        },
        {
            question: "A store sells 8 items for $64. What is the price of 15 items?",
            options: ["$112", "$115", "$120", "$125"],
            correct: 0,
        },
        {
            question: "What is the area of a square with side length 6 cm?",
            options: ["36 cm²", "30 cm²", "24 cm²", "18 cm²"],
            correct: 0,
        },
        {
            question: "Solve for x: 2x + 7 = 21",
            options: ["x = 7", "x = 8", "x = 9", "x = 10"],
            correct: 0,
        },
    ],

    // Round 32
    [
        {
            question: "What is 35% of $500?",
            options: ["$175", "$150", "$125", "$100"],
            correct: 0,
        },
        {
            question: "Solve for y: 4y - 3 = 13",
            options: ["y = 4", "y = 5", "y = 6", "y = 7"],
            correct: 1,
        },
        {
            question: "The price of an item is $200 after a 25% discount. What was the original price?",
            options: ["$250", "$260", "$275", "$300"],
            correct: 0,
        },
        {
            question: "A store sells 9 pens for $12. How much would 15 pens cost?",
            options: ["$20", "$22", "$24", "$26"],
            correct: 2,
        },
        {
            question: "A triangle has base 8 cm and height 10 cm. What is its area?",
            options: ["40 cm²", "50 cm²", "60 cm²", "70 cm²"],
            correct: 1,
        },
    ],

    // Round 33
    [
        {
            question: "Simplify: 9 × (6 + 4) ÷ 5",
            options: ["14", "16", "18", "20"],
            correct: 2,
        },
        {
            question: "What is 18% of 250?",
            options: ["$45", "$46", "$47", "$48"],
            correct: 0,
        },
        {
            question: "Solve for x: 5x - 3 = 32",
            options: ["x = 7", "x = 8", "x = 9", "x = 10"],
            correct: 1,
        },
        {
            question: "If 4 pencils cost $3.20, what is the cost of 12 pencils?",
            options: ["$8", "$7", "$9", "$10"],
            correct: 0,
        },
        {
            question: "What is the perimeter of a rectangle with length 12 cm and width 4 cm?",
            options: ["32 cm", "36 cm", "40 cm", "44 cm"],
            correct: 0,
        },
    ],

    // Round 34
    [
        {
            question: "Simplify: (25 ÷ 5) × (7 + 3)",
            options: ["40", "45", "50", "55"],
            correct: 0,
        },
        {
            question: "What is 40% of $350?",
            options: ["$130", "$140", "$150", "$160"],
            correct: 1,
        },
        {
            question: "A shirt costs $40 and is on sale for 30% off. What is the sale price?",
            options: ["$28", "$30", "$32", "$35"],
            correct: 0,
        },
        {
            question: "What is the area of a circle with a radius of 7 cm? (Use π ≈ 3.14)",
            options: ["153.94 cm²", "154.94 cm²", "155.94 cm²", "156.94 cm²"],
            correct: 0,
        },
        {
            question: "Solve for y: 2y + 8 = 22",
            options: ["y = 7", "y = 6", "y = 5", "y = 4"],
            correct: 0,
        },
    ],

    // Round 35
    [
        {
            question: "What is 15% of 320?",
            options: ["$45", "$48", "$50", "$52"],
            correct: 0,
        },
        {
            question: "A school has 320 students. If 15% of the students are absent, how many students are absent?",
            options: ["48", "50", "52", "55"],
            correct: 0,
        },
        {
            question: "Solve for x: 7(x + 2) = 35",
            options: ["x = 3", "x = 4", "x = 5", "x = 6"],
            correct: 0,
        },
        {
            question: "What is the cost of 12 items if each item costs $7.60?",
            options: ["$90", "$92", "$94", "$96"],
            correct: 1,
        },
        {
            question: "What is the perimeter of a square with a side length of 5 cm?",
            options: ["15 cm", "20 cm", "25 cm", "30 cm"],
            correct: 1,
        },
    ],

    // Round 36
    [
        {
            question: "Simplify: 10 × (6 + 2) ÷ 4",
            options: ["15", "20", "25", "30"],
            correct: 1,
        },
        {
            question: "What is 8% of $750?",
            options: ["$60", "$62", "$64", "$66"],
            correct: 0,
        },
        {
            question: "Solve for y: 5y - 6 = 19",
            options: ["y = 5", "y = 6", "y = 7", "y = 8"],
            correct: 2,
        },
        {
            question: "A bottle of juice costs $3.50. If you buy 15 bottles, what is the total cost?",
            options: ["$52", "$53", "$54", "$55"],
            correct: 2,
        },
        {
            question: "What is the area of a triangle with a base of 10 cm and a height of 12 cm?",
            options: ["60 cm²", "65 cm²", "70 cm²", "75 cm²"],
            correct: 0,
        },
    ],

    // Round 37
    [
        {
            question: "What is 20% of 600?",
            options: ["$110", "$120", "$130", "$140"],
            correct: 1,
        },
        {
            question: "Solve for x: 4x + 9 = 33",
            options: ["x = 6", "x = 7", "x = 8", "x = 9"],
            correct: 0,
        },
        {
            question: "The price of a shirt is $45. After a 15% discount, what is the sale price?",
            options: ["$35", "$37", "$38", "$40"],
            correct: 0,
        },
        {
            question: "A car travels 240 miles in 4 hours. What is the average speed in miles per hour?",
            options: ["50 mph", "55 mph", "60 mph", "65 mph"],
            correct: 2,
        },
        {
            question: "What is the perimeter of a rectangle with length 20 cm and width 5 cm?",
            options: ["45 cm", "50 cm", "55 cm", "60 cm"],
            correct: 1,
        },
    ],

    // Round 38
    [
        {
            question: "Simplify: 5 × (12 ÷ 3) + 4",
            options: ["18", "20", "22", "24"],
            correct: 1,
        },
        {
            question: "What is 15% of 240?",
            options: ["$30", "$35", "$36", "$40"],
            correct: 0,
        },
        {
            question: "Solve for x: 2(x + 5) = 20",
            options: ["x = 5", "x = 6", "x = 7", "x = 8"],
            correct: 1,
        },
        {
            question: "If 3 apples cost $2.70, what is the cost of 10 apples?",
            options: ["$8.70", "$9.00", "$9.20", "$9.50"],
            correct: 0,
        },
        {
            question: "What is the area of a rectangle with length 15 cm and width 7 cm?",
            options: ["105 cm²", "110 cm²", "115 cm²", "120 cm²"],
            correct: 0,
        },
    ],

    // Round 39
    [
        {
            question: "Simplify: 12 × (5 + 3) ÷ 6",
            options: ["16", "18", "20", "22"],
            correct: 1,
        },
        {
            question: "What is 25% of 600?",
            options: ["$140", "$150", "$160", "$170"],
            correct: 1,
        },
        {
            question: "A car travels 150 miles in 3 hours. What is the average speed?",
            options: ["50 mph", "55 mph", "60 mph", "65 mph"],
            correct: 0,
        },
        {
            question: "Solve for x: 3x + 5 = 20",
            options: ["x = 5", "x = 6", "x = 7", "x = 8"],
            correct: 1,
        },
        {
            question: "What is the cost of 12 items if each item costs $6.50?",
            options: ["$75", "$77", "$78", "$80"],
            correct: 0,
        },
    ],

    // Round 40
    [
        {
            question: "What is 10% of 950?",
            options: ["$90", "$95", "$100", "$105"],
            correct: 1,
        },
        {
            question: "Simplify: 6 × (10 + 2) ÷ 4",
            options: ["18", "20", "22", "24"],
            correct: 0,
        },
        {
            question: "What is the area of a square with side length 9 cm?",
            options: ["72 cm²", "81 cm²", "90 cm²", "100 cm²"],
            correct: 1,
        },
        {
            question: "A box contains 200 red balls and 300 blue balls. What is the probability of picking a red ball?",
            options: ["2/5", "3/5", "4/5", "1/2"],
            correct: 0,
        },
        {
            question: "If a student answers 30 out of 40 questions correctly, what is the percentage score?",
            options: ["70%", "75%", "80%", "85%"],
            correct: 0,
        },
    ]
];


    


// Game State
let currentRound = 0;
let currentQuestion = 0;
let timer;
let timeLeft;
let isQuizActive = false;
let timeScore = 0;
let roundScore = 0;

// DOM Elements
const timerBar = document.querySelector('.timer-bar');
const timerDisplay = document.querySelector('.timer-display');
const questionElement = document.querySelector('.question');
const optionsContainer = document.querySelector('.options');
const startButton = document.querySelector('.start-quiz');
const nextRoundButton = document.querySelector('.next-round');
const progressDots = document.querySelectorAll('.progress-dot');
const roundDisplay = document.querySelector('#currentRound');
const timeScoreDisplay = document.querySelector('#timeScore');
const roundScoreDisplay = document.querySelector('#roundScore');
const feedbackElement = document.querySelector('.feedback');
const finalScoresElement = document.querySelector('.final-scores');

// Timer Function
function startTimer() {
    timeLeft = 60;
    timerBar.style.width = '100%';
    
    timer = setInterval(() => {
        timeLeft -= 0.1;
        timerDisplay.textContent = Math.ceil(timeLeft);
        timerBar.style.width = `${(timeLeft / 60) * 100}%`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            showFeedback(false);
            setTimeout(() => nextQuestion(), 1000);
        }
    }, 100);
}

// Display Question Function
function displayQuestion() {
    const currentQuestionData = questions[currentRound][currentQuestion];
    questionElement.textContent = currentQuestionData.question;
    feedbackElement.classList.remove('show', 'correct', 'wrong');
    finalScoresElement.innerHTML = '';
    
    optionsContainer.innerHTML = '';
    currentQuestionData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option fade-in';
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });

    updateProgressDots();
}

// Check Answer Function
function checkAnswer(selectedIndex) {
    clearInterval(timer);
    const currentQuestionData = questions[currentRound][currentQuestion];
    const isCorrect = selectedIndex === currentQuestionData.correct;
    
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.style.pointerEvents = 'none');
    
    options[selectedIndex].classList.add(isCorrect ? 'correct' : 'wrong');
    options[currentQuestionData.correct].classList.add('correct');

    if (isCorrect) {
        roundScore++;
        timeScore += Math.ceil(timeLeft);
        roundScoreDisplay.textContent = roundScore;
        timeScoreDisplay.textContent = timeScore;
    }

    showFeedback(isCorrect);
    progressDots[currentQuestion].classList.add(isCorrect ? 'correct' : 'wrong');

    setTimeout(() => nextQuestion(), 1000);
}

// Show Feedback Function
function showFeedback(isCorrect) {
    feedbackElement.textContent = isCorrect ? 'Correct! 🎉' : 'Wrong! 😞';
    feedbackElement.className = `feedback show ${isCorrect ? 'correct' : 'wrong'}`;
}

// Next Question Function
function nextQuestion() {
    currentQuestion++;

    if (currentQuestion >= questions[currentRound].length) {
        endRound();
    } else {
        displayQuestion();
        startTimer();
    }
}

// Update Progress Dots Function
function updateProgressDots() {
    progressDots.forEach((dot, index) => {
        if (index === currentQuestion) {
            dot.classList.add('active');
        } else if (index < currentQuestion) {
            dot.classList.remove('active');
        }
    });
}

// End Round Function
function endRound() {
    isQuizActive = false;
    timerDisplay.textContent = '60';
    timerBar.style.width = '100%';
    questionElement.textContent = 'Round Complete! 🎯';
    optionsContainer.innerHTML = '';
    feedbackElement.classList.remove('show');
    
    finalScoresElement.innerHTML = `
        <div>Round Score: ${roundScore}/5 correct answers</div>
        <div>Time Bonus Points: ${timeScore}</div>
        <div>Great job! 🎉</div>
    `;
    
    nextRoundButton.style.display = 'block';
    startButton.style.display = 'none';
}

// Start New Round Function
function startNewRound() {
    currentQuestion = 0;
    currentRound++;
    roundScore = 0;
    roundDisplay.textContent = currentRound + 1;
    roundScoreDisplay.textContent = '0';
    nextRoundButton.style.display = 'none';
    startButton.style.display = 'block';
    questionElement.textContent = `Ready for Round ${currentRound + 1}? 🤩`;
    optionsContainer.innerHTML = '';
    feedbackElement.classList.remove('show');
    finalScoresElement.innerHTML = '';
    
    // Reset progress dots
    progressDots.forEach(dot => {
        dot.className = 'progress-dot';
    });
    progressDots[0].classList.add('active');
}

// Event Listeners
startButton.addEventListener('click', () => {
    if (!isQuizActive) {
        isQuizActive = true;
        startButton.style.display = 'none';
        displayQuestion();
        startTimer();
    }
});

nextRoundButton.addEventListener('click', () => {
    if (currentRound < questions.length - 1) {
        startNewRound();
    } else {
        // End of all rounds
        questionElement.textContent = 'Quiz Complete! 🎉';
        finalScoresElement.innerHTML = `
            <div>Final Score: ${timeScore} points</div>
            <div>Thank you for playing! 🌟</div>
        `;
        nextRoundButton.style.display = 'none';
    }
});

// Initialize first round
questionElement.textContent = 'Ready for Round 1? 🏁';
