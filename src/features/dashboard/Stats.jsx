import { HiOutlineBriefcase, HiOutlineChartBar } from "react-icons/hi";

import Stat from "./Stat";
import { HiOutlineBanknotes, HiOutlineCalendarDays } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  const numBookings = bookings?.length || 0;
  const sales = bookings?.reduce((acc, cur) => acc + cur.totalPrice, 0) || 0;
  const checkins = confirmedStays?.length || 0;

  const totalNights =
    confirmedStays?.reduce((acc, cur) => acc + cur.numNights, 0) || 0;
  const occupation =
    numDays > 0 && cabinCount > 0 ? totalNights / (numDays * cabinCount) : 0;

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
}

export default Stats;
