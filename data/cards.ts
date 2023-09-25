export type Card = {
    id: number;
    name: string;
    profit: string;
    img: string;
    price: number; // Change the type of price to number
    stock: string;
  };
  
  export const jdCards: Card[] = [
    {
      id: 1,
      name: "JDe卡系列100测试卡(限购5张)",
      profit: "10-13",
      img: "/jd/jd100.png",
      price: 86, // Change price to a number
      stock: "未知",
    },
    {
      id: 2,
      name: "JDe卡500面额",
      profit: "70-75",
      img: "/jd/jd500.png",
      price: 425, // Change price to a number
      stock: "9999",
    },
    {
      id: 3,
      name: "JDe卡1000面额",
      profit: "150-175",
      img: "/jd/jd1000.png",
      price: 825, // Change price to a number
      stock: "9999",
    },
  ];
  
  export const shiHuaCards = [
    {
      id: 1,
      name: "中石化加油卡1000",
      profit: "140",
      img: "/shihua.png",
      price: 1000, // Change price to a number
      stock: "未知",
    },
  ];
  
  export const walmartCards = [
    {
      id: 1,
      name: "沃尔玛卡500",
      profit: "70-75",
      img: "/walmart/walmart500.png",
      price: 430, // Change price to a number
      stock: "未知",
    },
    {
      id: 2,
      name: "沃尔玛卡1000",
      profit: "150-175",
      img: "/walmart/walmart1000.png",
      price: 830, // Change price to a number
      stock: "未知",
    },
  ];
  
  export const huarunCards = [
    {
      id: 1,
      name: "华润万家卡200",
      profit: "140",
      img: "/huarun/huarun200.png",
      price: 86, // Change price to a number
      stock: "未知",
    },
    {
      id: 2,
      name: "华润万家卡500",
      profit: "140",
      img: "/huarun/huarun500.png",
      price: 425, // Change price to a number
      stock: "未知",
    },
    {
      id: 3,
      name: "华润万家卡1000",
      profit: "140",
      img: "/huarun/huarun1000.png",
      price: 825, // Change price to a number
      stock: "未知",
    },
  ];
  