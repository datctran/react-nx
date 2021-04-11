// import contracts from "./contracts";
// import policies from "./policies";
// import vehicles from "./vehicles";

// export default [
//   contracts,
//   policies,
//   vehicles,
// ];

const Account = () => (
  <div>Account Module</div>
);

export default {
  routeProps: {
    path: '/account/:id',
    component: Account
  },
  name: 'Account',
}
