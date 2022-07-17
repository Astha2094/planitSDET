const fnOrderMenu = (item) => {
    let restaurents = [
        { name: "Papa John's Pizza", item: 'Margharita Pizza', price: 19 },
        { name: "Oporto", item: 'Burger', price: 15 },
        { name: "McDonald's", item: 'Fish and Chips', price: 19.55 },
        { name: "Subway", item: 'Pasta', price: 15 },
        { name: "Oporto", item: 'Salad', price: 18 },
        { name: 'Hungry Jacks', item: 'Burger', price: 15 },
    ];

    let res = restaurents.filter(x => x.item.toLowerCase() === item.toLowerCase()), len = res.length;

    if (len === 0) return item + ' is not available in our system';
    else if (len === 1) return res.map((x) => x.name + ', ' + x.item + ', $' + x.price).toString();
    else {
        return (
            item + ' is available in multiple restaurents \n' +
            res.map((x) => x.name + ', ' + x.item + ', $' + x.price + '\n').toString()
        );
    }
};

console.log(fnOrderMenu('Salad'));