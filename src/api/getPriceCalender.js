import axios from "axios";

export default async function PriceCalender(selectedFromSkyId, selectedToSkyId) {
  const options = {
    method: "GET",
    url: "https://sky-scrapper.p.rapidapi.com/api/v1/flights/getPriceCalendar",
    params: {
      originSkyId: selectedFromSkyId,
      destinationSkyId: selectedToSkyId,
      fromDate: "2024-02-20",
      currency: "USD",
    },
    headers: {
      "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
      "x-rapidapi-host": process.env.REACT_APP_RAPIDAPI_HOST,
    },
  };

  try {
    // const response = await axios.request(options);
    const response = {
      status: true,
      timestamp: 1691009466416,
      data: {
        flights: {
          noPriceLabel: "No price information",
          groups: [
            {
              id: "low",
              label: "$",
            },
            {
              id: "medium",
              label: "$$",
            },
            {
              id: "high",
              label: "$$$",
            },
          ],
          days: [
            {
              day: "2023-08-03",
              group: "high",
              price: 1146.99,
            },
            {
              day: "2023-08-04",
              group: "high",
              price: 1205.14,
            },
            {
              day: "2023-08-05",
              group: "high",
              price: 1043.07,
            },
            {
              day: "2023-08-06",
              group: "high",
              price: 1246.98,
            },
            {
              day: "2023-08-07",
              group: "high",
              price: 1027.98,
            },
            {
              day: "2023-08-08",
              group: "high",
              price: 1274.29,
            },
            {
              day: "2023-08-09",
              group: "high",
              price: 1191.99,
            },
            {
              day: "2023-08-10",
              group: "high",
              price: 1012.99,
            },
            {
              day: "2023-08-11",
              group: "high",
              price: 1142.49,
            },
            {
              day: "2023-08-12",
              group: "high",
              price: 1125.07,
            },
            {
              day: "2023-08-13",
              group: "high",
              price: 1132.64,
            },
            {
              day: "2023-08-14",
              group: "high",
              price: 1217.79,
            },
            {
              day: "2023-08-15",
              group: "high",
              price: 1169.27,
            },
            {
              day: "2023-08-16",
              group: "high",
              price: 1158.29,
            },
            {
              day: "2023-08-17",
              group: "high",
              price: 1323.69,
            },
            {
              day: "2023-08-18",
              group: "high",
              price: 1242.99,
            },
            {
              day: "2023-08-19",
              group: "high",
              price: 1247.98,
            },
            {
              day: "2023-08-20",
              group: "high",
              price: 965.98,
            },
            {
              day: "2023-08-21",
              group: "high",
              price: 1216.98,
            },
            {
              day: "2023-08-22",
              group: "high",
              price: 985.89,
            },
            {
              day: "2023-08-23",
              group: "high",
              price: 1104.59,
            },
            {
              day: "2023-08-24",
              group: "high",
              price: 1057.39,
            },
            {
              day: "2023-08-25",
              group: "high",
              price: 958.84,
            },
            {
              day: "2023-08-26",
              group: "high",
              price: 1471.78,
            },
            {
              day: "2023-08-27",
              group: "high",
              price: 977.99,
            },
            {
              day: "2023-08-28",
              group: "high",
              price: 1125.07,
            },
            {
              day: "2023-08-29",
              group: "high",
              price: 811.99,
            },
            {
              day: "2023-08-30",
              group: "high",
              price: 860.29,
            },
            {
              day: "2023-08-31",
              group: "high",
              price: 799.89,
            },
            {
              day: "2023-09-01",
              group: "high",
              price: 829.09,
            },
            {
              day: "2023-09-02",
              group: "high",
              price: 1312.5,
            },
            {
              day: "2023-09-03",
              group: "high",
              price: 1132.64,
            },
            {
              day: "2023-09-04",
              group: "high",
              price: 787.94,
            },
            {
              day: "2023-09-05",
              group: "medium",
              price: 731.79,
            },
            {
              day: "2023-09-06",
              group: "medium",
              price: 691.99,
            },
            {
              day: "2023-09-07",
              group: "medium",
              price: 650.39,
            },
            {
              day: "2023-09-08",
              group: "medium",
              price: 682.99,
            },
            {
              day: "2023-09-09",
              group: "medium",
              price: 690.61,
            },
            {
              day: "2023-09-10",
              group: "low",
              price: 552.39,
            },
            {
              day: "2023-09-11",
              group: "medium",
              price: 680.63,
            },
            {
              day: "2023-09-12",
              group: "low",
              price: 549.4,
            },
            {
              day: "2023-09-13",
              group: "low",
              price: 548.99,
            },
            {
              day: "2023-09-14",
              group: "low",
              price: 506.46,
            },
            {
              day: "2023-09-15",
              group: "low",
              price: 560.34,
            },
            {
              day: "2023-09-16",
              group: "medium",
              price: 610.46,
            },
            {
              day: "2023-09-17",
              group: "medium",
              price: 610.01,
            },
            {
              day: "2023-09-18",
              group: "medium",
              price: 571.15,
            },
            {
              day: "2023-09-19",
              group: "low",
              price: 564.23,
            },
            {
              day: "2023-09-20",
              group: "low",
              price: 525.23,
            },
            {
              day: "2023-09-21",
              group: "medium",
              price: 612.66,
            },
            {
              day: "2023-09-22",
              group: "low",
              price: 507.09,
            },
            {
              day: "2023-09-23",
              group: "medium",
              price: 589.21,
            },
            {
              day: "2023-09-24",
              group: "low",
              price: 475.21,
            },
            {
              day: "2023-09-25",
              group: "low",
              price: 541.66,
            },
            {
              day: "2023-09-26",
              group: "low",
              price: 549.4,
            },
            {
              day: "2023-09-27",
              group: "low",
              price: 562.7,
            },
            {
              day: "2023-09-28",
              group: "low",
              price: 507.09,
            },
            {
              day: "2023-09-29",
              group: "low",
              price: 565.23,
            },
            {
              day: "2023-09-30",
              group: "medium",
              price: 610.46,
            },
            {
              day: "2023-10-01",
              group: "medium",
              price: 593.33,
            },
            {
              day: "2023-10-02",
              group: "low",
              price: 525.73,
            },
            {
              day: "2023-10-03",
              group: "low",
              price: 549.4,
            },
            {
              day: "2023-10-04",
              group: "low",
              price: 534.46,
            },
            {
              day: "2023-10-05",
              group: "low",
              price: 563.34,
            },
            {
              day: "2023-10-06",
              group: "low",
              price: 537.07,
            },
            {
              day: "2023-10-07",
              group: "medium",
              price: 594.12,
            },
            {
              day: "2023-10-08",
              group: "medium",
              price: 576.52,
            },
            {
              day: "2023-10-09",
              group: "low",
              price: 509.88,
            },
            {
              day: "2023-10-10",
              group: "medium",
              price: 576.95,
            },
            {
              day: "2023-10-11",
              group: "medium",
              price: 571.03,
            },
            {
              day: "2023-10-12",
              group: "low",
              price: 424.87,
            },
            {
              day: "2023-10-13",
              group: "medium",
              price: 572.26,
            },
            {
              day: "2023-10-14",
              group: "medium",
              price: 575.21,
            },
            {
              day: "2023-10-15",
              group: "medium",
              price: 581.29,
            },
            {
              day: "2023-10-16",
              group: "medium",
              price: 571.65,
            },
            {
              day: "2023-10-17",
              group: "low",
              price: 543.14,
            },
            {
              day: "2023-10-18",
              group: "low",
              price: 545.73,
            },
            {
              day: "2023-10-19",
              group: "medium",
              price: 569.97,
            },
            {
              day: "2023-10-20",
              group: "medium",
              price: 610.46,
            },
            {
              day: "2023-10-21",
              group: "medium",
              price: 608.16,
            },
            {
              day: "2023-10-22",
              group: "medium",
              price: 610.46,
            },
            {
              day: "2023-10-23",
              group: "medium",
              price: 571.65,
            },
            {
              day: "2023-10-24",
              group: "low",
              price: 561.62,
            },
            {
              day: "2023-10-25",
              group: "low",
              price: 561.62,
            },
            {
              day: "2023-10-26",
              group: "medium",
              price: 571.65,
            },
            {
              day: "2023-10-27",
              group: "medium",
              price: 610.46,
            },
            {
              day: "2023-10-28",
              group: "medium",
              price: 610.46,
            },
            {
              day: "2023-10-29",
              group: "medium",
              price: 617.78,
            },
            {
              day: "2023-10-30",
              group: "medium",
              price: 571.65,
            },
            {
              day: "2023-10-31",
              group: "low",
              price: 562.19,
            },
            {
              day: "2023-11-01",
              group: "low",
              price: 562.76,
            },
            {
              day: "2023-11-02",
              group: "low",
              price: 548.99,
            },
            {
              day: "2023-11-03",
              group: "medium",
              price: 591.64,
            },
            {
              day: "2023-11-04",
              group: "medium",
              price: 610.46,
            },
            {
              day: "2023-11-05",
              group: "medium",
              price: 593.35,
            },
            {
              day: "2023-11-06",
              group: "low",
              price: 542.66,
            },
            {
              day: "2023-11-07",
              group: "low",
              price: 541.61,
            },
            {
              day: "2023-11-08",
              group: "low",
              price: 531.74,
            },
            {
              day: "2023-11-09",
              group: "medium",
              price: 717.54,
            },
            {
              day: "2023-11-10",
              group: "medium",
              price: 610.2,
            },
            {
              day: "2023-11-11",
              group: "medium",
              price: 610.01,
            },
            {
              day: "2023-11-13",
              group: "low",
              price: 569.56,
            },
            {
              day: "2023-11-14",
              group: "medium",
              price: 569.97,
            },
            {
              day: "2023-11-15",
              group: "low",
              price: 562.19,
            },
            {
              day: "2023-11-16",
              group: "medium",
              price: 571.22,
            },
            {
              day: "2023-11-17",
              group: "medium",
              price: 590.03,
            },
            {
              day: "2023-11-18",
              group: "medium",
              price: 599.27,
            },
            {
              day: "2023-11-19",
              group: "medium",
              price: 611.46,
            },
            {
              day: "2023-11-21",
              group: "medium",
              price: 569.97,
            },
            {
              day: "2023-11-22",
              group: "medium",
              price: 569.97,
            },
            {
              day: "2023-11-23",
              group: "low",
              price: 547.48,
            },
            {
              day: "2023-11-24",
              group: "medium",
              price: 578.22,
            },
            {
              day: "2023-11-25",
              group: "medium",
              price: 610.46,
            },
            {
              day: "2023-11-26",
              group: "medium",
              price: 623.95,
            },
            {
              day: "2023-11-27",
              group: "medium",
              price: 606.66,
            },
            {
              day: "2023-11-28",
              group: "medium",
              price: 606.66,
            },
            {
              day: "2023-11-29",
              group: "low",
              price: 563.34,
            },
            {
              day: "2023-11-30",
              group: "low",
              price: 560.92,
            },
            {
              day: "2023-12-01",
              group: "medium",
              price: 624.04,
            },
            {
              day: "2023-12-02",
              group: "medium",
              price: 715.29,
            },
            {
              day: "2023-12-03",
              group: "medium",
              price: 611.51,
            },
            {
              day: "2023-12-04",
              group: "medium",
              price: 580.74,
            },
            {
              day: "2023-12-05",
              group: "medium",
              price: 579.74,
            },
            {
              day: "2023-12-07",
              group: "low",
              price: 563.34,
            },
            {
              day: "2023-12-08",
              group: "medium",
              price: 621.35,
            },
            {
              day: "2023-12-09",
              group: "medium",
              price: 617.32,
            },
            {
              day: "2023-12-10",
              group: "medium",
              price: 620.89,
            },
            {
              day: "2023-12-11",
              group: "low",
              price: 569.44,
            },
            {
              day: "2023-12-12",
              group: "medium",
              price: 575.1,
            },
            {
              day: "2023-12-13",
              group: "medium",
              price: 572.8,
            },
            {
              day: "2023-12-14",
              group: "low",
              price: 563.34,
            },
            {
              day: "2023-12-15",
              group: "medium",
              price: 597.89,
            },
            {
              day: "2023-12-16",
              group: "high",
              price: 777.69,
            },
            {
              day: "2023-12-17",
              group: "medium",
              price: 578.22,
            },
            {
              day: "2023-12-18",
              group: "medium",
              price: 571.65,
            },
            {
              day: "2023-12-20",
              group: "high",
              price: 745.82,
            },
            {
              day: "2023-12-22",
              group: "medium",
              price: 620.89,
            },
            {
              day: "2023-12-24",
              group: "medium",
              price: 621.35,
            },
            {
              day: "2023-12-25",
              group: "medium",
              price: 582.72,
            },
            {
              day: "2023-12-26",
              group: "medium",
              price: 683.57,
            },
            {
              day: "2023-12-27",
              group: "medium",
              price: 681.73,
            },
            {
              day: "2023-12-28",
              group: "medium",
              price: 745.81,
            },
            {
              day: "2023-12-29",
              group: "high",
              price: 828.96,
            },
            {
              day: "2023-12-30",
              group: "high",
              price: 780.3,
            },
            {
              day: "2023-12-31",
              group: "high",
              price: 868.42,
            },
            {
              day: "2024-01-01",
              group: "high",
              price: 995.29,
            },
            {
              day: "2024-01-02",
              group: "high",
              price: 867.32,
            },
            {
              day: "2024-01-03",
              group: "high",
              price: 795.58,
            },
            {
              day: "2024-01-04",
              group: "high",
              price: 758.17,
            },
            {
              day: "2024-01-05",
              group: "high",
              price: 796.41,
            },
            {
              day: "2024-01-06",
              group: "high",
              price: 859.39,
            },
            {
              day: "2024-01-07",
              group: "high",
              price: 797.91,
            },
            {
              day: "2024-01-08",
              group: "high",
              price: 849.98,
            },
            {
              day: "2024-01-09",
              group: "medium",
              price: 665.46,
            },
            {
              day: "2024-01-10",
              group: "medium",
              price: 699.22,
            },
            {
              day: "2024-01-11",
              group: "high",
              price: 754.77,
            },
            {
              day: "2024-01-12",
              group: "medium",
              price: 690.73,
            },
            {
              day: "2024-01-13",
              group: "medium",
              price: 744.19,
            },
            {
              day: "2024-01-14",
              group: "medium",
              price: 732.05,
            },
            {
              day: "2024-01-15",
              group: "medium",
              price: 647.99,
            },
            {
              day: "2024-01-16",
              group: "medium",
              price: 614.44,
            },
            {
              day: "2024-01-17",
              group: "medium",
              price: 678.84,
            },
            {
              day: "2024-01-18",
              group: "medium",
              price: 707.2,
            },
            {
              day: "2024-01-19",
              group: "medium",
              price: 717.79,
            },
            {
              day: "2024-01-20",
              group: "medium",
              price: 718.11,
            },
            {
              day: "2024-01-21",
              group: "medium",
              price: 619.51,
            },
            {
              day: "2024-01-22",
              group: "medium",
              price: 575.54,
            },
            {
              day: "2024-01-24",
              group: "medium",
              price: 575.22,
            },
            {
              day: "2024-01-26",
              group: "medium",
              price: 615.94,
            },
            {
              day: "2024-01-27",
              group: "high",
              price: 2386.23,
            },
            {
              day: "2024-01-28",
              group: "high",
              price: 1506.57,
            },
            {
              day: "2024-01-30",
              group: "low",
              price: 538.71,
            },
            {
              day: "2024-01-31",
              group: "medium",
              price: 575.22,
            },
            {
              day: "2024-02-01",
              group: "medium",
              price: 571.65,
            },
            {
              day: "2024-02-02",
              group: "medium",
              price: 598.52,
            },
            {
              day: "2024-02-03",
              group: "medium",
              price: 598.52,
            },
            {
              day: "2024-02-04",
              group: "low",
              price: 538.71,
            },
            {
              day: "2024-02-05",
              group: "low",
              price: 569.44,
            },
            {
              day: "2024-02-06",
              group: "low",
              price: 536.65,
            },
            {
              day: "2024-02-07",
              group: "medium",
              price: 606.66,
            },
            {
              day: "2024-02-10",
              group: "medium",
              price: 631.48,
            },
            {
              day: "2024-02-13",
              group: "low",
              price: 536.65,
            },
            {
              day: "2024-02-16",
              group: "medium",
              price: 617.78,
            },
            {
              day: "2024-02-18",
              group: "low",
              price: 526.8,
            },
            {
              day: "2024-02-21",
              group: "medium",
              price: 569.97,
            },
            {
              day: "2024-02-22",
              group: "medium",
              price: 571.65,
            },
            {
              day: "2024-02-25",
              group: "low",
              price: 544.66,
            },
            {
              day: "2024-02-26",
              group: "low",
              price: 569.44,
            },
            {
              day: "2024-02-27",
              group: "low",
              price: 526.67,
            },
            {
              day: "2024-02-28",
              group: "high",
              price: 2343.32,
            },
            {
              day: "2024-02-29",
              group: "low",
              price: 566.86,
            },
            {
              day: "2024-03-01",
              group: "medium",
              price: 615.94,
            },
            {
              day: "2024-03-02",
              group: "medium",
              price: 615.5,
            },
            {
              day: "2024-03-04",
              group: "medium",
              price: 584.08,
            },
            {
              day: "2024-03-06",
              group: "low",
              price: 569.38,
            },
            {
              day: "2024-03-07",
              group: "high",
              price: 1084.26,
            },
            {
              day: "2024-03-09",
              group: "medium",
              price: 615.5,
            },
            {
              day: "2024-03-10",
              group: "low",
              price: 536.65,
            },
            {
              day: "2024-03-15",
              group: "medium",
              price: 615.5,
            },
            {
              day: "2024-03-18",
              group: "low",
              price: 569.38,
            },
            {
              day: "2024-03-21",
              group: "low",
              price: 569.45,
            },
            {
              day: "2024-03-25",
              group: "medium",
              price: 571.65,
            },
            {
              day: "2024-03-26",
              group: "medium",
              price: 571.95,
            },
            {
              day: "2024-04-02",
              group: "medium",
              price: 569.97,
            },
            {
              day: "2024-04-04",
              group: "medium",
              price: 571.22,
            },
            {
              day: "2024-04-07",
              group: "medium",
              price: 647.69,
            },
            {
              day: "2024-04-11",
              group: "low",
              price: 569.45,
            },
            {
              day: "2024-04-12",
              group: "medium",
              price: 617.32,
            },
            {
              day: "2024-04-15",
              group: "high",
              price: 1085.78,
            },
            {
              day: "2024-04-17",
              group: "high",
              price: 754.74,
            },
            {
              day: "2024-04-21",
              group: "medium",
              price: 597.89,
            },
            {
              day: "2024-04-23",
              group: "medium",
              price: 569.97,
            },
            {
              day: "2024-04-24",
              group: "medium",
              price: 716.21,
            },
            {
              day: "2024-04-29",
              group: "low",
              price: 569.45,
            },
            {
              day: "2024-05-01",
              group: "medium",
              price: 654.72,
            },
            {
              day: "2024-05-04",
              group: "medium",
              price: 655.62,
            },
            {
              day: "2024-05-06",
              group: "medium",
              price: 652.34,
            },
            {
              day: "2024-05-08",
              group: "medium",
              price: 610.57,
            },
            {
              day: "2024-05-10",
              group: "medium",
              price: 617.32,
            },
            {
              day: "2024-05-15",
              group: "medium",
              price: 716.12,
            },
            {
              day: "2024-05-19",
              group: "medium",
              price: 615.5,
            },
            {
              day: "2024-05-21",
              group: "medium",
              price: 571.65,
            },
            {
              day: "2024-05-22",
              group: "medium",
              price: 571.65,
            },
            {
              day: "2024-05-28",
              group: "low",
              price: 569.45,
            },
            {
              day: "2024-05-30",
              group: "low",
              price: 566.47,
            },
            {
              day: "2024-05-31",
              group: "medium",
              price: 617.78,
            },
            {
              day: "2024-06-01",
              group: "medium",
              price: 621.35,
            },
            {
              day: "2024-06-02",
              group: "medium",
              price: 603.36,
            },
            {
              day: "2024-06-08",
              group: "medium",
              price: 716.21,
            },
            {
              day: "2024-06-10",
              group: "medium",
              price: 571.65,
            },
            {
              day: "2024-06-12",
              group: "medium",
              price: 569.97,
            },
            {
              day: "2024-06-16",
              group: "medium",
              price: 603.98,
            },
            {
              day: "2024-06-19",
              group: "high",
              price: 757.99,
            },
            {
              day: "2024-06-25",
              group: "low",
              price: 569.38,
            },
            {
              day: "2024-06-26",
              group: "medium",
              price: 571.53,
            },
            {
              day: "2024-06-28",
              group: "high",
              price: 1066.76,
            },
            {
              day: "2024-06-30",
              group: "medium",
              price: 619.08,
            },
            {
              day: "2024-07-01",
              group: "medium",
              price: 707.4,
            },
            {
              day: "2024-07-12",
              group: "high",
              price: 756.06,
            },
            {
              day: "2024-07-17",
              group: "high",
              price: 1044.98,
            },
            {
              day: "2024-07-18",
              group: "high",
              price: 756.34,
            },
            {
              day: "2024-07-21",
              group: "high",
              price: 756.06,
            },
            {
              day: "2024-07-25",
              group: "high",
              price: 767.8,
            },
            {
              day: "2024-07-26",
              group: "high",
              price: 1482.57,
            },
          ],
          currency: "USD",
        },
      },
    };
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
