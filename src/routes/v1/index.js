const express = require("express");

const userRoute = require("../../modules/user/user.route");
const authRoute = require("../../modules/auth/auth.route");
const categoryRoute = require("../../modules/category/category.route");
const carRoute = require("../../modules/car/car.route");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/user",
    route: userRoute,
  },
  {
    path: "/category",
    route: categoryRoute,
  },
  {
    path: "/car",
    route: carRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
