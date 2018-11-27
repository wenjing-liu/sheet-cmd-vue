# simple-spreadsheet
This is a simple spreadsheet which can do some table actions.
## Project setup
```
git clone  https://claire_liu_epam@bitbucket.org/claire_liu_epam/simplespreadsheet.git
cd simplespreadsheet
npm install
npm start
open http://localhost:8080/
```

### Run your unit tests
```
npm run test:unit
```

### Command Guide
To create a table use 'C x y', eg., C 10 20 to create a 10 rows and 20 columns talbe
To insert value to table use 'N x y value, eg., N 10 10 5 to insert 5 to row 10 column 10
To sum value use 'S x1 y1 x2 y2 x3 y3', eg., S 5 5 10 10 11 11 to sum value of (x1, y1) and value (x2, y2) to insert (x3, y3)
