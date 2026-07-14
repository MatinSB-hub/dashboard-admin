import { BiShoppingBag } from "react-icons/bi";
import { HiDocumentText, HiUsers } from "react-icons/hi2";
import { RiAdminFill } from "react-icons/ri";

export const generateSummaries = ({
  productLength = 0,
  usersLength = 0,
  ticketsLength = 0,
  adminsLength = 0,
}) => {
  return [
    {
      id: 1,
      title: "تعداد محصولات",
      value: productLength,
      Icon: BiShoppingBag,
    },
    {
      id: 2,
      title: "تعداد کاربران",
      value: usersLength,
      Icon: HiUsers,
    },
    {
      id: 3,
      title: "تعداد تیکت ها",
      value: ticketsLength,
      Icon: HiDocumentText,
    },
    {
      id: 4,
      title: "تعداد ادمین ها",
      value: adminsLength,
      Icon: RiAdminFill,
    },
  ];
};

export const generateChartData = ({
  productLength = 0,
  usersLength = 0,
  ticketsLength = 0,
  adminsLength = 0,
}) => {
  return [
    { value: productLength, name: "تعداد محصولات" },
    { value: usersLength, name: "تعداد کاربران" },
    { value: ticketsLength, name: "تعداد تیکت ها" },
    { value: adminsLength, name: "تعداد ادمین ها" },
  ];
};
