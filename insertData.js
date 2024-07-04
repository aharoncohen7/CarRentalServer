const CustomerModel = require("./DL/models/customer.model");
const CarModel = require("./DL/models/car.model");
const RentalModel = require("./DL/models/rental.model");

async function insertCustomers(customersArray) {
    try {
        // Disable validation for the password field temporarily
        CustomerModel.schema.path('password').required(false);
        const insertedCustomers = await CustomerModel.insertMany(customersArray);
        console.log(`Successfully inserted ${insertedCustomers.length} customers.`);
        return insertedCustomers;
    } catch (error) {
        console.error('Error inserting customers:', error);
        throw error;
    } finally {
        // Re-enable validation for the password field
        CustomerModel.schema.path('password').required(true);
    }
}

async function insertCars(carsArray) {
    try {
        const insertedCars = await CarModel.insertMany(carsArray);
        console.log(`Successfully inserted ${insertedCars.length} cars.`);
        return insertedCars;
    } catch (error) {
        console.error('Error inserting customers:', error);
        throw error;
    }
}

async function insertRentals(rentalsArray) {
    try {
        const insertedRentals = await RentalModel.insertMany(rentalsArray);
        console.log(`Successfully inserted ${insertedRentals.length} rentals.`);
        return insertedRentals;
    } catch (error) {
        console.error('Error inserting rentals:', error);
        throw error;
    }
}

const customersToInsert = [
    {
        name: "Noa Cohen",
        email: "noa.cohen@example.com",
        phone: "0501234567",
        password: 123,
        driverLicense: "12345678",
        address: {
            street: "Herzl",
            houseNumber: 1,
            city: "Tel Aviv",
            state: "TA",
            zipCode: "6100000",
        },
    },
    {
        name: "Eliana Levi",
        email: "eliana.levi@example.com",
        phone: "0522345678",
        password: 123,
        driverLicense: "23456789",
        address: {
            street: "Jaffa",
            houseNumber: 2,
            city: "Jerusalem",
            state: "JM",
            zipCode: "9100000",
        },
    },
    {
        name: "David Katz",
        email: "david.katz@example.com",
        phone: "0533456789",
        password: 123,
        driverLicense: "34567890",
        address: {
            street: "Haifa",
            houseNumber: 3,
            city: "Haifa",
            state: "HA",
            zipCode: "3100000",
        },
    },
    {
        name: "Yael Shapiro",
        email: "yael.shapiro@example.com",
        phone: "0544567890",
        password: 123,
        driverLicense: "45678901",
        address: {
            street: "Dizengoff",
            houseNumber: 4,
            city: "Tel Aviv",
            state: "TA",
            zipCode: "6200000",
        },
    },
    {
        name: "Moshe Friedman",
        email: "moshe.friedman@example.com",
        phone: "0555678901",
        password: 123,
        driverLicense: "56789012",
        address: {
            street: "Ben Yehuda",
            houseNumber: 5,
            city: "Jerusalem",
            state: "JM",
            zipCode: "9200000",
        },
    },
    {
        name: "Tamar Goldstein",
        email: "tamar.goldstein@example.com",
        phone: "0566789012",
        password: 123,
        driverLicense: "67890123",
        address: {
            street: "Rothschild",
            houseNumber: 6,
            city: "Tel Aviv",
            state: "TA",
            zipCode: "6300000",
        },
    },
    {
        name: "Avi Mizrachi",
        email: "avi.mizrachi@example.com",
        phone: "0577890123",
        password: 123,
        driverLicense: "78901234",
        address: {
            street: "King George",
            houseNumber: 7,
            city: "Jerusalem",
            state: "JM",
            zipCode: "9300000",
        },
    },
    {
        name: "Sara Levy",
        email: "sara.levy@example.com",
        phone: "0588901234",
        password: 123,
        driverLicense: "89012345",
        address: {
            street: "Allenby",
            houseNumber: 8,
            city: "Tel Aviv",
            state: "TA",
            zipCode: "6400000",
        },
    },
    {
        name: "Yosef Cohen",
        email: "yosef.cohen@example.com",
        phone: "0599012345",
        password: 123,
        driverLicense: "90123456",
        address: {
            street: "Emek Refaim",
            houseNumber: 9,
            city: "Jerusalem",
            state: "JM",
            zipCode: "9400000",
        },
    },
    {
        name: "Rachel Rosenfeld",
        email: "rachel.rosenfeld@example.com",
        phone: "0501123456",
        password: 123,
        driverLicense: "01234567",
        address: {
            street: "Ibn Gabirol",
            houseNumber: 10,
            city: "Tel Aviv",
            state: "TA",
            zipCode: "6500000",
        },
    },
    {
        name: "Daniel Schwartz",
        email: "daniel.schwartz@example.com",
        phone: "0512234567",
        password: 123,
        driverLicense: "11223344",
        address: {
            street: "Yaffo",
            houseNumber: 11,
            city: "Jerusalem",
            state: "JM",
            zipCode: "9500000",
        },
    },
    {
        name: "Michal Weiss",
        email: "michal.weiss@example.com",
        phone: "0523345678",
        password: 123,
        driverLicense: "22334455",
        address: {
            street: "Bograshov",
            houseNumber: 12,
            city: "Tel Aviv",
            state: "TA",
            zipCode: "6600000",
        },
    },
    {
        name: "Eitan Golan",
        email: "eitan.golan@example.com",
        phone: "0534456789",
        password: 123,
        driverLicense: "33445566",
        address: {
            street: "Azza",
            houseNumber: 13,
            city: "Jerusalem",
            state: "JM",
            zipCode: "9600000",
        },
    },
    {
        name: "Shira Stern",
        email: "shira.stern@example.com",
        phone: "0545567890",
        password: 123,
        driverLicense: "44556677",
        address: {
            street: "Shabazi",
            houseNumber: 14,
            city: "Tel Aviv",
            state: "TA",
            zipCode: "6700000",
        },
    },
    {
        name: "Yonatan Dayan",
        email: "yonatan.dayan@example.com",
        phone: "0556678901",
        password: 123,
        driverLicense: "55667788",
        address: {
            street: "Beit Lechem",
            houseNumber: 15,
            city: "Jerusalem",
            state: "JM",
            zipCode: "9700000",
        },
    },
    {
        name: "Ayelet Goldberg",
        email: "ayelet.goldberg@example.com",
        phone: "0567789012",
        password: 123,
        driverLicense: "66778899",
        address: {
            street: "Nahalat Binyamin",
            houseNumber: 16,
            city: "Tel Aviv",
            state: "TA",
            zipCode: "6800000",
        },
    },
    {
        name: "Ronen Katz",
        email: "ronen.katz@example.com",
        phone: "0578890123",
        password: 123,
        driverLicense: "77889900",
        address: {
            street: "Agripas",
            houseNumber: 17,
            city: "Jerusalem",
            state: "JM",
            zipCode: "9800000",
        },
    },
    {
        name: "Liat Shalom",
        email: "liat.shalom@example.com",
        phone: "0589901234",
        password: 123,
        driverLicense: "88990011",
        address: {
            street: "Dizengoff",
            houseNumber: 18,
            city: "Tel Aviv",
            state: "TA",
            zipCode: "6900000",
        },
    },
    {
        name: "Nadav Cohen",
        email: "nadav.cohen@example.com",
        phone: "0590012345",
        password: 123,
        driverLicense: "99001122",
        address: {
            street: "Hillel",
            houseNumber: 19,
            city: "Jerusalem",
            state: "JM",
            zipCode: "9900000",
        },
    },
    {
        name: "Maya Levin",
        email: "maya.levin@example.com",
        phone: "0501234567",
        password: 123,
        driverLicense: "00112233",
        address: {
            street: "Frishman",
            houseNumber: 20,
            city: "Tel Aviv",
            state: "TA",
            zipCode: "6000000",
        },
    }
]

const carsToInsert = [
    {
        carLicense: "12-345-11",
        model: "Toyota Corolla",
        year: 2022,
        dailyRate: 150,
        isAvailable: true,
        fuelType: "hybrid",
        discount: 5,
        images: ["https://www.icar.co.il/_media/images/models/bgremoval/toyota-corolla-new.jpg", "https://auto-yashir.com/wp-content/uploads/2018/04/%D7%98%D7%95%D7%99%D7%95%D7%98%D7%94-%D7%A7%D7%95%D7%A8%D7%95%D7%9C%D7%94-2.jpg"],
        updatedAt: new Date("2023-06-15")
    },
    {
        carLicense: "23-456-11",
        model: "Honda Civic",
        year: 2021,
        dailyRate: 140,
        isAvailable: true,
        fuelType: "petrol",
        discount: 0,
        images: ["https://cars.usnews.com/static/images/Auto/izmo/i159614422/2021_honda_civic_frontview.jpg", "civic_interior.jpghttps://www.civic11forum.com/attachments/2022-honda-civic-si-sedan-dashboard-carbuzz-921612-jpg.7107/"],
        updatedAt: new Date("2023-07-01")
    },
    {
        carLicense: "34-567-11",
        model: "Tesla Model 3",
        year: 2023,
        dailyRate: 250,
        isAvailable: true,
        fuelType: "electric",
        discount: 10,
        images: ["https://cars.usnews.com/static/images/Auto/izmo/i159614700/2020_tesla_model_s_frontview.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMK_gJt0eaS4ErJc0tQPtyH0yVO0f4AWnQ3A&s", "https://media.ed.edmunds-media.com/tesla/model-s/2024/oem/2024_tesla_model-s_sedan_plaid_fq_oem_1_1600.jpg"],
        updatedAt: new Date("2023-06-28")
    },
    {
        carLicense: "45-678-11",
        model: "Ford Focus",
        year: 2020,
        dailyRate: 130,
        isAvailable: false,
        fuelType: "petrol",
        discount: 0,
        images: ["https://cars.usnews.com/static/images/Auto/izmo/i4458/2014_ford_focus_sideview.jpg", "https://cars.usnews.com/static/images/Auto/izmo/i4458/2014_ford_focus_frontview.jpg"],
        updatedAt: new Date("2023-06-20")
    },
    {
        carLicense: "56-789-11",
        model: "Hyundai Ioniq",
        year: 2022,
        dailyRate: 180,
        isAvailable: true,
        fuelType: "hybrid",
        discount: 7,
        images: ["https://car-images.bauersecure.com/wp-images/166673/ioniq5n2.jpg", "https://www.topgear.com/sites/default/files/2024/03/hyundai-ioniq-5-n-line-model-0324-exterior-01_jpg_bfc_off.jpg"],
        updatedAt: new Date("2023-07-05")
    },
    {
        carLicense: "67-890-11",
        model: "Mazda 3",
        year: 2021,
        dailyRate: 145,
        isAvailable: true,
        fuelType: "petrol",
        discount: 0,
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLYSAKIM5XvI2QHext4sxZ-heNceoRA59W_Q&s", "https://di-uploads-development.dealerinspire.com/whittenmazda/uploads/2018/01/2018-mazda-3-sedan-car-front-soul-red.jpg"],
        updatedAt: new Date("2023-06-25")
    },
    {
        carLicense: "78-901-11",
        model: "Volkswagen Golf",
        year: 2022,
        dailyRate: 155,
        isAvailable: true,
        fuelType: "diesel",
        discount: 3,
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0RulgUXchIwmB5kWvWbPQ_YtaS3qfIbNKMg&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGkdZB1vNgix6K7ykYRWu8-5BkwB7fAz2my04cbDjt3m12wioN7ZR0sRBpA22vhAPE7NA&usqp=CAU"],
        updatedAt: new Date("2023-07-10")
    },
    {
        carLicense: "89-012-11",
        model: "Nissan Leaf",
        year: 2021,
        dailyRate: 170,
        isAvailable: true,
        fuelType: "electric",
        discount: 5,
        images: ["https://ev-database.org/img/auto/Nissan_Leaf_2018/Nissan_Leaf_2018-01@2x.jpg", "https://www.topgear.com/sites/default/files/2021/10/nissan_leaf_e_61.jpg"],
        updatedAt: new Date("2023-06-30")
    },
    {
        carLicense: "90-123-11",
        model: "Kia Sportage",
        year: 2023,
        dailyRate: 200,
        isAvailable: true,
        fuelType: "hybrid",
        discount: 8,
        images: ["https://cars.usnews.com/static/images/Auto/izmo/i159614604/2021_kia_sportage_frontview.jpg", "https://cars.usnews.com/static/images/Auto/izmo/i159614604/2021_kia_sportage_rearview.jpg"],
        updatedAt: new Date("2023-07-08")
    },
    {
        carLicense: "01-234-11",
        model: "Skoda Octavia",
        year: 2022,
        dailyRate: 160,
        isAvailable: false,
        fuelType: "petrol",
        discount: 0,
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-iRrn1XrMaNxbzAHsGBwdrqOOEsyodvMBDg&s", "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/170883/octavia-facelift-exterior-rear-view.jpeg?isig=0&q=80&q=80"],
        updatedAt: new Date("2023-06-22")
    },
    {
        carLicense: "12-345-11",
        model: "Renault Zoe",
        year: 2021,
        dailyRate: 165,
        isAvailable: true,
        fuelType: "electric",
        discount: 6,
        images: ["https://v2charge.com/wp-content/uploads/2024/05/solucion-problemas-carga-renault-zoe-electrico.jpg", "https://car-images.bauersecure.com/wp-images/3541/zoe_053.jpg"],
        updatedAt: new Date("2023-07-03")
    },
    {
        carLicense: "23-456-11",
        model: "Peugeot 308",
        year: 2022,
        dailyRate: 155,
        isAvailable: true,
        fuelType: "diesel",
        discount: 0,
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuRR9_CjtSxZp1ZtcXI4jFMtNsK_oumMA1Ig&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThifjUg5fD_QPfdzGr0zMM-H1q3O6k2q0Xdg&s"],
        updatedAt: new Date("2023-06-27")
    },
    // {
    //     carLicense: "34-567-90",
    //     model: "BMW i3",
    //     year: 2021,
    //     dailyRate: 210,
    //     isAvailable: true,
    //     fuelType: "electric",
    //     discount: 10,
    //     images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuRR9_CjtSxZp1ZtcXI4jFMtNsK_oumMA1Ig&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThifjUg5fD_QPfdzGr0zMM-H1q3O6k2q0Xdg&s"],
    //     updatedAt: new Date("2023-07-12")
    // },
    // {
    //     carLicense: "45-678-91",
    //     model: "Audi A3",
    //     year: 2023,
    //     dailyRate: 220,
    //     isAvailable: true,
    //     fuelType: "petrol",
    //     discount: 5,
    //     images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-iRrn1XrMaNxbzAHsGBwdrqOOEsyodvMBDg&s", "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/170883/octavia-facelift-exterior-rear-view.jpeg?isig=0&q=80&q=80"],
    //     updatedAt: new Date("2023-07-06")
    // },
    // {
    //     carLicense: "56-789-02",
    //     model: "Fiat 500",
    //     year: 2022,
    //     dailyRate: 130,
    //     isAvailable: true,
    //     fuelType: "hybrid",
    //     discount: 0,
    //     images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-iRrn1XrMaNxbzAHsGBwdrqOOEsyodvMBDg&s", "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/170883/octavia-facelift-exterior-rear-view.jpeg?isig=0&q=80&q=80"],
    //     updatedAt: new Date("2023-06-29")
    // },
    // {
    //     carLicense: "67-890-13",
    //     model: "Volvo XC40",
    //     year: 2023,
    //     dailyRate: 240,
    //     isAvailable: true,
    //     fuelType: "hybrid",
    //     discount: 8,
    //     images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0RulgUXchIwmB5kWvWbPQ_YtaS3qfIbNKMg&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGkdZB1vNgix6K7ykYRWu8-5BkwB7fAz2my04cbDjt3m12wioN7ZR0sRBpA22vhAPE7NA&usqp=CAU"],
    //     updatedAt: new Date("2023-07-11")
    // },
    {
        carLicense: "78-901-11",
        model: "Opel Corsa",
        year: 2021,
        dailyRate: 135,
        isAvailable: false,
        fuelType: "petrol",
        discount: 0,
        images: ["https://wallpapers.com/images/hd/red-opel-corsa-side-view-jlbgzdximvklvuxk.jpg", "https://atthelights.com/store/uploads/2014/07/2014-opel-corsa-exterior-front-left-dynamic.jpg"],
        updatedAt: new Date("2023-06-24")
    },
    {
        carLicense: "89-012-11",
        model: "Citroen C3",
        year: 2022,
        dailyRate: 140,
        isAvailable: true,
        fuelType: "diesel",
        discount: 3,
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRscFOk2Xw75H2Mp4GA_fkuW-sU7PIt7E7pQQ&s", "https://w7.pngwing.com/pngs/195/361/png-transparent-citroen-c1-citroen-c3-citroen-c2-citroen-2cv-fourth-generation-honda-civic-compact-car-car-mode-of-transport.png"],
        updatedAt: new Date("2023-07-02")
    },
    {
        carLicense: "90-123-11",
        model: "Mercedes A-Class",
        year: 2023,
        dailyRate: 230,
        isAvailable: true,
        fuelType: "hybrid",
        discount: 7,
        images: ["https://stage-drupal.car.co.uk/s3fs-public/styles/original_size/public/2020-07/mercedes-a-class-review.jpg?mdfv4fIMBMosHzr1MfJnIC2YN49FC3Gs&itok=b46UUiWN", "https://static-eu.cargurus.com/images/forsale/2023/06/30/15/13/2016_mercedes-benz_a-class-pic-3157639825747611387-1024x768.jpeg"],
        updatedAt: new Date("2023-07-09")
    },
    {
        carLicense: "01-234-11",
        model: "Suzuki Swift",
        year: 2021,
        dailyRate: 125,
        isAvailable: true,
        fuelType: "petrol",
        discount: 0,
        images: ["https://www.suzuki.co.il/sites/default/files/styles/model_by_color/public/field/image/18.png?itok=8_Yg79Z9", "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/new_suzuki_swift_interior.jpg?itok=SrdMCRNW"],
        updatedAt: new Date("2023-06-26")
    }
];

const rentalsToInsert = [
    {
        customerId: "668511da39dbaad18f7eb541",
        carId: "668511dd39dbaad18f7eb55e",
        from: new Date("2024-07-10"),
        to: new Date("2024-07-15"),
        quantity: 1,
        totalPrice: 750,
        notes: "First time customer",
        isPaid: true,
        status: "open",
        orderDate: new Date("2024-07-03")
    },
    {
        customerId: "668511da39dbaad18f7eb542",
        carId: "668511dd39dbaad18f7eb557",
        from: new Date("2024-07-12"),
        to: new Date("2024-07-14"),
        quantity: 1,
        totalPrice: 280,
        notes: "Weekend rental",
        isPaid: false,
        status: "open",
        orderDate: new Date("2024-07-03")
    },
    {
        customerId: "668511da39dbaad18f7eb543",
        carId: "668511dd39dbaad18f7eb557",
        from: new Date("2024-07-15"),
        to: new Date("2024-07-22"),
        quantity: 1,
        totalPrice: 1750,
        notes: "Business trip",
        isPaid: true,
        status: "open",
        orderDate: new Date("2024-07-03")
    },
    {
        customerId: "668511da39dbaad18f7eb544",
        carId: "668511dd39dbaad18f7eb557",
        from: new Date("2024-07-20"),
        to: new Date("2024-07-25"),
        quantity: 1,
        totalPrice: 650,
        notes: "Family vacation",
        isPaid: false,
        status: "open",
        orderDate: new Date("2024-07-03")
    },
    {
        customerId: "668511da39dbaad18f7eb545",
        carId: "668511dd39dbaad18f7eb558",
        from: new Date("2024-07-18"),
        to: new Date("2024-07-23"),
        quantity: 1,
        totalPrice: 900,
        notes: "Airport pickup",
        isPaid: true,
        status: "open",
        orderDate: new Date("2024-07-03")
    },
    {
        customerId: "668511da39dbaad18f7eb546",
        carId: "668511dd39dbaad18f7eb558",
        from: new Date("2024-07-25"),
        to: new Date("2024-07-28"),
        quantity: 1,
        totalPrice: 435,
        notes: "City tour",
        isPaid: false,
        status: "open",
        orderDate: new Date("2024-07-03")
    },
    {
        customerId: "668511da39dbaad18f7eb547",
        carId: "668511dd39dbaad18f7eb559",
        from: new Date("2024-08-01"),
        to: new Date("2024-08-08"),
        quantity: 1,
        totalPrice: 1085,
        notes: "Long-term rental",
        isPaid: true,
        status: "open",
        orderDate: new Date("2024-07-03")
    },
    {
        customerId: "668511da39dbaad18f7eb548",
        carId: "668511dd39dbaad18f7eb559",
        from: new Date("2024-07-30"),
        to: new Date("2024-08-02"),
        quantity: 1,
        totalPrice: 510,
        notes: "Weekend getaway",
        isPaid: false,
        status: "open",
        orderDate: new Date("2024-07-03")
    },
    {
        customerId: "668511da39dbaad18f7eb549",
        carId: "668511dd39dbaad18f7eb559",
        from: new Date("2024-08-05"),
        to: new Date("2024-08-10"),
        quantity: 1,
        totalPrice: 1000,
        notes: "Business conference",
        isPaid: true,
        status: "open",
        orderDate: new Date("2024-07-03")
    },
    {
        customerId: "668511da39dbaad18f7eb549",
        carId: "668511dd39dbaad18f7eb55a",
        from: new Date("2024-08-12"),
        to: new Date("2024-08-14"),
        quantity: 1,
        totalPrice: 320,
        notes: "Short trip",
        isPaid: false,
        status: "open",
        orderDate: new Date("2024-07-03")
    },
    {
        customerId: "668511da39dbaad18f7eb546",
        carId: "668511dd39dbaad18f7eb55a",
        from: new Date("2024-08-15"),
        to: new Date("2024-08-22"),
        quantity: 1,
        totalPrice: 1155,
        notes: "Family reunion",
        isPaid: true,
        status: "open",
        orderDate: new Date("2024-07-03")
    },
    {
        customerId: "668511da39dbaad18f7eb542",
        carId: "668511dd39dbaad18f7eb55b",
        from: new Date("2024-08-20"),
        to: new Date("2024-08-25"),
        quantity: 1,
        totalPrice: 775,
        notes: "Road trip",
        isPaid: false,
        status: "open",
        orderDate: new Date("2024-07-03")
    },
    {
        customerId: "668511da39dbaad18f7eb541",
        carId: "668511dd39dbaad18f7eb55b",
        from: new Date("2024-08-25"),
        to: new Date("2024-08-30"),
        quantity: 1,
        totalPrice: 1050,
        notes: "Wedding transportation",
        isPaid: true,
        status: "open",
        orderDate: new Date("2024-07-03")
    },
    {
        customerId: "668511da39dbaad18f7eb544",
        carId: "668511dd39dbaad18f7eb55c",
        from: new Date("2024-09-01"),
        to: new Date("2024-09-03"),
        quantity: 1,
        totalPrice: 440,
        notes: "Labor Day weekend",
        isPaid: false,
        status: "open",
        orderDate: new Date("2024-07-03")
    },
    {
        customerId: "668511da39dbaad18f7eb548",
        carId: "668511dd39dbaad18f7eb55c",
        from: new Date("2024-09-05"),
        to: new Date("2024-09-10"),
        quantity: 1,
        totalPrice: 650,
        notes: "College move-in",
        isPaid: true,
        status: "open",
        orderDate: new Date("2024-07-03")
    },
    {
        customerId: "668511da39dbaad18f7eb543",
        carId: "668511dd39dbaad18f7eb55c",
        from: new Date("2024-09-12"),
        to: new Date("2024-09-15"),
        quantity: 1,
        totalPrice: 720,
        notes: "Business meeting",
        isPaid: false,
        status: "open",
        orderDate: new Date("2024-07-03")
    },
    {
        customerId: "668511da39dbaad18f7eb549",
        carId: "668511dd39dbaad18f7eb55d",
        from: new Date("2024-09-18"),
        to: new Date("2024-09-25"),
        quantity: 1,
        totalPrice: 945,
        notes: "Extended test drive",
        isPaid: true,
        status: "open",
        orderDate: new Date("2024-07-03")
    },
    {
        customerId: "668511da39dbaad18f7eb540",
        carId: "668511dd39dbaad18f7eb55d",
        from: new Date("2024-09-28"),
        to: new Date("2024-09-30"),
        quantity: 1,
        totalPrice: 270,
        notes: "Weekend rental",
        isPaid: false,
        status: "open",
        orderDate: new Date("2024-07-03")
    },
    {
        customerId: "668511da39dbaad18f7eb541",
        carId: "668511dd39dbaad18f7eb55d",
        from: new Date("2024-10-01"),
        to: new Date("2024-10-08"),
        quantity: 1,
        totalPrice: 1610,
        notes: "Fall foliage tour",
        isPaid: true,
        status: "open",
        orderDate: new Date("2024-07-03")
    },
    {
        customerId: "668511da39dbaad18f7eb541",
        carId: "668511dd39dbaad18f7eb55e",
        from: new Date("2024-10-10"),
        to: new Date("2024-10-12"),
        quantity: 1,
        totalPrice: 250,
        notes: "Quick trip",
        isPaid: false,
        status: "open",
        orderDate: new Date("2024-07-03")
    }
]

const insertData = async () => {
    console.log("Inserting");
    try {
        const insertedCustomers = await insertCustomers(customersToInsert);
        console.log('Inserted customers:', insertedCustomers);
        const insertedCars = await insertCars(carsToInsert);
        console.log('Inserted cars', insertedCars);
        const insertedRentals = await insertRentals(rentalsToInsert);
        console.log('Inserted rentals',insertedRentals);
    } catch (error) {
        console.error('Failed to insert data:', error);
    }
};


module.exports = { insertData };