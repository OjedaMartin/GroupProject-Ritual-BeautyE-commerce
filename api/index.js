//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { db } = require('./src/db.js');
const { Category, Product } = require('./src/db');
const categoryProduct = Category.hasMany(Product)
const json1 = require('./src/data/categories.json');
const json2 = require('./src/data/products.json');

const categories = json1.data;
const products = json2.data;

// Syncing all the models at once.

conn.sync({ force: true }).then(() => {
  server.listen(3001, async() => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
    let arrayPromises = [];
    let productsFiltered
    for(let category of categories){
      productsFiltered = products.filter(prod => prod.idcategory === category.id);
      arrayPromises.push(Category.create({
        id: category.id,
        name: category.name,
        Products: productsFiltered,
      },{
        include: [ categoryProduct ]
      }
      ))
    }
    await Promise.all(arrayPromises);
  });
});
