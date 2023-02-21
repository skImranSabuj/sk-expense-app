import {
  Outlet,
  Link,
  useLoaderData,
  Form,
  redirect,
  NavLink,
  useNavigation,
} from "react-router-dom";
import { getContacts, createContact } from "../contacts";
import SideBar from "./components/Header/SideBar";

export async function loader() {
  const contacts = await getContacts();
  return { contacts };
}

export async function action() {
  // const contact = await createContact();
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
  // return { contact };
}

export default function Root() {
  const { contacts } = useLoaderData();
  const navigation = useNavigation();

  return <SideBar />;
}
