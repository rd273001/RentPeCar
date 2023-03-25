/* import { Feedback, RouterRounded } from "@material-ui/icons";*/
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminDashboard from "../../Admin/Components/AdminDashboard";
import Logout from "../../Admin/Fragments/Logout";
import Error from "../../Commons/Error";
import EmployeeDashboard from "../../Employee/Components/EmployeeDashboard";
import ConfirmBooking from "../../Employee/pages/ConfirmBooking";
import AboutUS from "../pages/AboutUS";
import ContactUs from "../pages/ContactUs";
import BookingForm from "../pages/Car/BookingForm";
import CarCategoryByType from "../pages/Car/CarCategoryByType";
import CarCategoryDetails from "../pages/Car/CarCategoryDetails";
import Cars from "../pages/Car/Cars";
import CarType from "../pages/Car/CarType";
import Home from "../pages/Home";
import Billing from "../pages/User/Billing";
import BookingDetails from "../pages/User/BookingDetails";
import Login from "../pages/User/Login";
import MyBookings from "../pages/User/MyBookings";
import ResetPassword from "../pages/User/ResetPassword";
import SignUp from "../pages/User/SignUp";
import UpdateProfile from "../pages/User/UpdateProfile";
import HomeImageSlider from "./HomeImageSlider";
import Pay from "./Pay";
 /* import Feedback from "../../../src/Feedback/component/feedback"; */



const Navbar = () => {
  return (
    <div>
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/signin" component={Login} />
              <Route path="/car_list" component={Cars} />
              <Route path="/register" component={SignUp} />
              <Route path="/cars-category-list" component={CarCategoryByType} />
              <Route path="/employee_dashboard" component={EmployeeDashboard} />
              <Route path="/car_type" component={CarType} />
              <Route path="/update_profile" component={UpdateProfile} />
              <Route path="/my_bookings" component={MyBookings} />
              <Route path="/admin_dashboard" component={AdminDashboard} />
              <Route path="/about_us" component={AboutUS} />
              <Route path="/contact_us" component={ContactUs} />
              
              

              <Route path="/error" component={Error} />
              <Route path="/booking_details" component={BookingDetails} />
              <Route path="/signoff" component={Logout} />
              <Route path="/reset_password" component={ResetPassword}/>
              <Route path="/billing" component={Billing}/>
              <Route path="/confirm_booking" component={ConfirmBooking}/>
            
              <Route path="/pay" component={Pay}></Route>
              <Route
                path="/cars-category-details"
                component={CarCategoryDetails}
              />
              <Route path="/book_car" component={BookingForm} />
              <div>
                <Route path="/" component={HomeImageSlider} />
              </div>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
};
export default Navbar;
