This is the server side of the project of an interface for managing a car rental business, which refers to 3 categories - vehicles, customers, and bookings/rental transactions.
There are four types of routes: 3 for the above-mentioned entities, and one more route whose role is to provide the information from the above-mentioned 3 entities in a more flat and basic way, not including information from arrays or internal objects, and this in order to be able to present them in a tabular form.
The server is built using the method of layers, routers, services, controllers and models.
The information itself is stored on the MongoDB server and the information is retrieved and stored through the server.
The server has a bunch of validation tests to make sure that the data is entered according to the strict definitions of the fields and schemes.
Checking that a car cannot be rented when it is not available, that the dates are reasonable and future, and more.

Instructions:
1. To run the project, copy it, navigate to the folder, run "npm i" to install the modules, then "npm run dev".
2. In addition, in the main folder you must create an .env file where you must save (under the name MONGO_URI) the link with your username to MongoDB.
3. In addition, during the initial run, in a one-time manner, insert into the main index.js file, where the insertData function whose role is to fill the tables with data must be removed from the comment, and immediately after the first run it must be turned off.

The client-side complementary project should be copied from https://github.com/aharoncohen7/CarRentalClient
and follow the instructions in the file that exists there.
שליחת משוב



זהו צד השרת בפרוייקט של ממשק לניהול עסק להשכרת רכב, המתייחס ל3 קטגוריות - רכבים, לקוחות, והזמנות/עסקאות השכרה.
ישנם ארבעה סוגי ראוטים: 3 ליישויות הנ"ל, ועוד ראוט אחד שתפקידו לספק את המידע מ3 הישויות הנ"ל בצורה שטוחה ובסיסית יותר, לא כולל מידע מתוך מערכים או אובייקטים פנימיים, וזאת על מנת שיהיה אפשר להציג אותם בצורה טבלאית.
השרת בנוי בשיטת השכבות, ראוטרים, סרוויסים, קונטרולרים ומודלים.
המידע עצמו מאוחסן בשרת של MongoDB והמידע נשלף ומאוחסן דרך השרת.
בשרת יש שלל בדיקות וולידציה לוודא שהנתונים נכנסים בהתאם להגדרות הקשיחות של השדות והסכמות.
בדיקה שלא ניתן לשכר רכב כאשר אינו זמין, שהתאריכים הגיוניים ועתידיים, ועוד.

הוראות:
1.כדי להפעיל את הפרוייקט, יש להעתיק אותו, לנווט לתיקייה, להריץ "npm i" על מנת להתקין את המודולים, ואז "npm run dev".
2.בנוסף, בתקייה הראשית יש ליצור קובץ .env שם יש לשמור (תחת השם MONGO_URI) את הקישור עם שם המתשמש שלכם לMongoDB.
3. בנוסף, בעת ההפעלה הראשונית, באופן חד פעמי, יש הכנס לקובץ index.js הראשי, שם יש להוציא מהערה את הפונציה insertData שתפקידה למלא בנתונים את הטבלאות, ומיד לאחר ההרצה הראשונה יש לכבות אותה.

הפרוייקט המשלים של צד הלקוח יש להעתיק מהכתובת https://github.com/aharoncohen7/CarRentalClient
ולפעול על פי ההוראות בקובץ שקיים שם.


