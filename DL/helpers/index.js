
function createColumn(
    key, 
    type, 
    label,
    sortable,
    filterable,
  ) {
    return { key, type, label, sortable, filterable};
  }
  
  const cUstomerFieldsToSelect = '_id name email phone driverLicense isActive registeredAt';
  const customerTableSchema = {
    name: 'customers',
    columns: [
        createColumn('_id', 'string', "מזהה", false, true),
        createColumn('name', 'string', 'שם לקוח', true, true),
        createColumn('email', 'string', 'אימייל', true, true),
        createColumn('phone', 'string', 'טלפון', true, true),
        createColumn('driverLicense', 'string', 'מספר רשיון', true, true),
        // createColumn('isActive', 'boolean', 'האם פעיל', false, true),
        createColumn('registeredAt', 'Date','תאריך כניסה' , true, true),
    ]
  };
  
  
  const carFieldsToSelect = '_id model year carLicense dailyRate isAvailable fuelType discount updatedAt';
  const carTableSchema = {
    name: 'cars',
    columns: [
        createColumn('_id', 'string', "מזהה", false, true),
        createColumn('model', 'string', 'Model', true, true),
        createColumn('year', 'number', "שנת ייצור", true, true),
        createColumn('carLicense', 'string', 'License', true, true),
        createColumn('dailyRate', 'number', 'מחיר ליום', true, true),
        createColumn('isAvailable', 'boolean', 'האם פנוי', true, true),
        createColumn('fuelType','string', 'סוג הנעה', true, true),
        createColumn('discount','number', 'הנחה', true, true),
        createColumn('updatedAt','Date', "עדכון אחרון", true, true),
    ]
  };



  const rentalFieldsToSelect = '_id customerId carId notes status isPaid quantity totalPrice orderDate';
  const rentalTableSchema = {
    name: 'rentals',
    columns: [
        createColumn('_id', 'string',"מזהה עסקה" , false, true),
        createColumn('customerId', 'string', "מזהה לקוח", false, true),
        createColumn('carId', 'string', "מזהה רכב", true, true),
        createColumn('quantity', 'number', 'כמות ימים', true, true),
        createColumn('totalPrice', 'number', 'מחיר כולל', true, true),
        createColumn('notes', 'string', 'הערות', true, true),
        createColumn('isPaid', 'boolean', 'האם שולם', true, true),
        createColumn('status', 'string', 'סטטוס הזמנה', true, true),
        createColumn('orderDate','Date', 'תאריך הזמנה', true, true),
    ]
  };



const getTableColumns = (tableName) => {
    if (tableName === 'customers') {
        return customerTableSchema;
    }
    if (tableName === 'cars') {
        return carTableSchema;
    }
    if (tableName === 'rentals') {
        return rentalTableSchema;
    }
    return null;
}

// מיון מידע טבלאי
const sortData = (data, key, order) => {
  if (key != undefined) {
      return [...data].sort((a, b) => {
          if (a[key].toString().toLowerCase() < b[key].toString().toLowerCase()) return order === 'asc' ? -1 : 1;
          if (a[key].toString().toLowerCase() > b[key].toString().toLowerCase()) return order === 'asc' ? 1 : -1;
          return 0;
      });
  }
  return data;
};


// פונקציה לקבלת השעה במבנה של 00:00
function getTime(timeString) {
  const parts = timeString.split("T")[1].split(":");
  const hours = parts[0].padStart(2, "0");
  const minutes = parts[1].padStart(2, "0");
  return `${hours}:${minutes}`;
}

// פונקציה לקבלת התאריך במבנה של כיוונית 23/04/24
function getDate(dateString) {
  const parts = dateString.split("T")[0].split("-");
  const year = parts[0].slice(-2);
  const month = parts[1];
  const day = parts[2];
  return `${day}/${month}/${year}`;
}

// פונקציה המשלבת את תוצאות שלשת הפונקציות הקודמות 
function formatDateTime(dateTimeString) {
  const relativeDate = getRelativeDate(dateTimeString);
  const time = getTime(dateTimeString);
  const date = getDate(dateTimeString);
  return `${relativeDate}, ${date}, ${time}`;
}


module.exports = { getTableColumns, sortData, formatDateTime, getDate }
