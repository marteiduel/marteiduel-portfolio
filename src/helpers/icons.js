import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faSpinner,
  faPlusCircle,
  faAddressCard,
  faEnvelope,
  faMapMarkedAlt,
  faLock
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(
    faTrash,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faPlusCircle,
    faAddressCard,
    faEnvelope,
    faMapMarkedAlt,
    faLock
  );
};

export default Icons;
