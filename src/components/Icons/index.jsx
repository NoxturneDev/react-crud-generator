import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import AddBoxIcon from "@mui/icons-material/AddBox";
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteForever";
import PreviewIcon from "@mui/icons-material/Preview";
import DownloadIcon from "@mui/icons-material/Download";
import UploadIcon from "@mui/icons-material/Upload";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CategoryIcon from "@mui/icons-material/Category";
import PaymentIcon from "@mui/icons-material/Payment";

export const Dashboard = (props) => <DashboardIcon {...props} />;
export const Supplier = (props) => <PeopleOutlineIcon {...props} />;
export const Customer = (props) => <PeopleOutlineIcon {...props} />;
export const ProductCategory = (props) => <CategoryIcon {...props} />;
export const PaymentMethod = (props) => <PaymentIcon {...props} />;
export const Create = (props) => <AddBoxIcon {...props} />;
export const Save = (props) => <SaveIcon {...props} />;
export const Edit = (props) => <EditIcon {...props} />;
export const Delete = (props) => <DeleteIcon {...props} />;
export const Detail = (props) => <PreviewIcon {...props} />;
export const Export = (props) => <DownloadIcon {...props} />;
export const Import = (props) => <UploadIcon {...props} />;
export const Sale = (props) => <MonetizationOnIcon {...props} />;
