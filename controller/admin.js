import user from "../models/user.js";
import reservation from "../models/reservation.js";
import item from "../models/menuItem.js";

const home_get = async (req, res) => {
  res.render("admin/admin", {
    users: await user.find(),
    reservations: await reservation.find(),
    menuItems: await item.find(),
  });
};

export default {
  home_get,
};
