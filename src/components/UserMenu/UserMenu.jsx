import { useDispatch, useSelector} from "react-redux";
import { selectUser} from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.wrap}>
      <p className={css.user}>Welcome, {user.name}</p>
      <button className={css.btn} type="button" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
}


// import { useDispatch} from "react-redux";
// import { useAuth } from "../../redux/auth/selectors";
// import { logOut } from "../../redux/auth/operations";
// import css from "./UserMenu.module.css";

// export default function UserMenu() {
//   const dispatch = useDispatch();
//   const user = useAuth();

//   const handleLogout = () => {
//     dispatch(logOut());
//   };

//   return (
//     <div className={css.wrapper}>
//       <p className={css.username}>Welcome, {user.name}</p>
//       <button type="button" onClick={handleLogout}>
//         Log out
//       </button>
//     </div>
//   );
// }

// import { useDispatch } from 'react-redux';
// import { logOut } from '../../redux/auth/operations';
// import { useAuth } from '../../redux/auth/selectors';
// import css from './UserMenu.module.css';

// export default function UserMenu ()  {
//   const dispatch = useDispatch();
//   const { user } = useAuth();

//   return (
//     <div className={css.wrapper}>
//       <p className={css.username}>Welcome, {user.name}</p>
//       <button type="button" onClick={() => dispatch(logOut())}>
//         Logout
//       </button>
//     </div>
//   );
// }