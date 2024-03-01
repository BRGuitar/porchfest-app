// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
//
//
/*
INSERT INTO schedule (band, startTime, endTime, location)
VALUES ('The Illegal Smiles', '2024-06-08 14:00', '2024-06-08 14:45', '200 Eberly Ave.');
*/
const schedule = [
  {
    Band: 'Samba',
    Start: '1:45PM',
    End: '2:00PM',
    Location: 'Hankey St.',
  },
  {
    Band: 'The Illegal Smiles',
    Start: '2:00PM',
    End: '2:45PM',
    Location: '200 Eberle Ave.',
  },
  {
    Band: 'Sam Shaba & Band',
    Start: '2:15PM',
    End: '3:00PM',
    Location: '707 W. Wooster St.',
  },
  {
    Band: 'Bluegrass Ramplin/Rhythm',
    Start: '2:30PM',
    End: '3:15PM',
    Location: '223 Gorrell Ave.',
  },
  {
    Band: 'Extras',
    Start: '2:45PM',
    End: '3:30PM',
    Location: '250 Eberly Ave.',
  },
  {
    Band: 'Toraigh',
    Start: '3:00PM',
    End: '4:45PM',
    Location: '161 Eberly Ave.',
  },
  {
    Band: "It's Somewhat Humanoid",
    Start: '3:15PM',
    End: '4:00PM',
    Location: 'Arlyns Good Beer',
  },
  {
    Band: 'Jolly Gabbers',
    Start: '3:30PM',
    End: '4:15PM',
    Location: '254 Eberly Ave.',
  },
  {
    Band: 'Joe Baker Band',
    Start: '3:45PM',
    End: '4:30PM',
    Location: "Joe Baker's Garage",
  },
  {
    Band: 'Corduroy Road',
    Start: '4:00PM',
    End: '4:45PM',
    Location: '139 Eberly Ave.',
  },
  {
    Band: 'Rosa Cora Parry & Truth Untold',
    Start: '4:15PM',
    End: '5:00PM',
    Location: '255 Eberly Ave.',
  },
  {
    Band: 'Cigar Box Scott',
    Start: '4:30PM',
    End: '5:15PM',
    Location: 'Arlyns Good Beer',
  },
  {
    Band: 'Tree No Leaves',
    Start: '4:45PM',
    End: '5:30PM',
    Location: '204 Eberly Ave.',
  },
  {
    Band: 'Ginger & the Snaps',
    Start: '5:00PM',
    End: '5:45PM',
    Location: "Don's Garage",
  },
  {
    Band: 'Herbie & the Lovebugs',
    Start: '5:15PM',
    End: '6:00PM',
    Location: '140 Gorrell',
  },
  {
    Band: 'Grubs',
    Start: '5:30PM',
    End: '6:15PM',
    Location: '707 W. Wooster St.',
  },
  {
    Band: 'Tom Gorman & Friends',
    Start: '5:45PM',
    End: '6:30PM',
    Location: "Joe's or Don's Garage",
  },
  {
    Band: 'Kam Frankart',
    Start: '6:00PM',
    End: '6:45PM',
    Location: 'Arlyns Good Beer',
  },
  {
    Band: 'Freight Street',
    Start: '6:15PM',
    End: '7:00PM',
    Location: '208 Eberly Ave.',
  },
];

const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const bands = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Samba',
    bio: 'Testing Bio',
    image_url: '/bands/samba.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: 'Hector Simpson',
    email: 'hector@simpson.com',
    image_url: '/customers/hector-simpson.png',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'Steven Tey',
    email: 'steven@tey.com',
    image_url: '/customers/steven-tey.png',
  },
  {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    name: 'Steph Dietz',
    email: 'steph@dietz.com',
    image_url: '/customers/steph-dietz.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
    name: 'Emil Kowalski',
    email: 'emil@kowalski.com',
    image_url: '/customers/emil-kowalski.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[7].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: customers[6].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: customers[2].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-18',
  },
  {
    customer_id: customers[0].id,
    amount: 8945,
    status: 'paid',
    date: '2023-10-04',
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

module.exports = {
  users,
  bands,
  invoices,
  revenue,
  schedule,
};
