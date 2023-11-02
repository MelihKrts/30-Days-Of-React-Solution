// Object Exercise Solution

// Exercise Level 3 Solution

// Exercise 3.1

const personAccount = {
    firstName: "Melih",
    lastName: "Karataş",
    incomes: [],
    expenses: [],

    addIncome(description, amount) {
        this.incomes.push({ description, amount });
    },

    addExpense(description, amount) {
        this.expenses.push({ description, amount });
    },

    totalIncome() {
        return this.incomes.reduce((total, income) => total + income.amount, 0);
    },

    totalExpense() {
        return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    },

    accountInfo() {
        console.log(`FirstName: ${this.firstName}\n  LastName: ${this.lastName}\n  Incomes: ${this.totalIncome()}\n Expenses: ${this.totalExpense()} `)
    },

    accountBalance() {
        const balance = this.totalIncome() - this.totalExpense();
        console.log(`Account Balance: ${balance}`);
    }

}



personAccount.addIncome("Salary", 5000);
personAccount.addExpense("Rent", 4999);
personAccount.accountInfo();
personAccount.accountBalance();

// Exercise 3.2

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false,
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true,
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true,
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false,
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false,
    },
]

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 },
        ],
        likes: [],
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy'],
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy'],
    },
]

function signUp(users, newUser) {
    const existingUser = users.find(user => user.email === newUser.email);
    if (existingUser) {
        console.log("User with this email already has an account.")
    }
    else {
        users.push(newUser);
        console.log("Sign up successful!");
    }
}

const newUser = {
    _id: "user123",
    username: "userman",
    email: "user@user.com",
    password: "user123",
    createdAt: new Date().toLocaleString(),
    isLoggedIn: false
};

signUp(users, newUser);

function signIn(users, email, password) {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        console.log("Sign in successful!");
    }
    else {
        console.log("Invalid email or password. Please try again.");
    }
}

signIn(users, 'asafb@asab.com', '123456u');

function rateProduct(products, productId, userId, rate) {
    const product = products.find(p => p._id === productId);

    if (product) {
        const existingRating = product.ratings.find(r => r.userId === userId);

        if (existingRating) {
            console.log("You have already rated this product.");
        } else {
            product.ratings.push({ userId, rate });
            console.log("Product rated successfully!");
        }
    } else {
        console.log("Product not found.");
    }
}


rateProduct(products, 'eedfcf', 'ab12ex', 4);

function averageRating(product) {
    const ratings = product.ratings.map(r => r.rate);
    const totalRating = ratings.reduce((sum, rate) => sum + rate, 0);

    if (ratings.length > 0) {
        return totalRating / ratings.length;
    } else {
        return 0;
    }
}


const productToCalculateAverage = products[0];
const avgRating = averageRating(productToCalculateAverage);
console.log(`Average Rating: ${avgRating}`);
