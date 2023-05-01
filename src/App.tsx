import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {faker} from "@faker-js/faker" // Changed import to use the default export of faker
import Navbar from "./components/Header";
import "./App.css";
import AboutPage from "./components/About";
import Footer from "./components/Footer";
import ContactPage from "./components/Contact";

interface Users {
id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
	address:string;
	company:string;
}

interface UserProps {
  user: Users;
}

interface DetailedUserProps {
  usersData: Users[];
}

const links = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Contact", url: "/contact" },
];

const App = (): JSX.Element => {
  const [usersData, setUsers] = useState<Users[]>([]);


  useEffect(() => {
    const users = Array.from({ length: 20 }, () => ({
      id: faker.phone.imei(), // Added 'id' property to each user object
      name: faker.name.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      avatar: faker.image.avatar(),
			address: faker.address.city(),
			company: faker.company.name()

    }));

    setUsers(users);
  }, []);

  const User = ({ user }: UserProps) => {
    return (
      <Link to={`/users/${user.id}`}>
        <div className="user-box">
          <img src={user.avatar} alt={user.name} />
					<div>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
					</div>
        </div>
      </Link>
    );
  };

  const DetailedUser = ({ usersData }: DetailedUserProps) => {
		  const { id } = useParams<{ id: string }>();
  console.log(id); // check the value of id
	console.log(usersData); // check the value of usersData

  const user = usersData.find((u) => u.id === id);
  console.log(user); // check the value of user

    if (!user) {
      return <div>User not found</div>;
    }

    return (
      <div>
        <img src={user.avatar} alt="User avatar" />
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Address: {user.address}</p>
        <p>Company: {user.company}</p>
      </div>
    );
  };

  return (
    <BrowserRouter>
      <Navbar title="users" links={links} />
      <Routes>
			<Route path="/users/:id" element={<DetailedUser usersData={usersData} />} /> // Changed 'userId' to 'useParams.id'
        <Route path="/" element={usersData.map((user) => <User key={user.id} user={user} />)} /> // Wrapped JSX expression with parentheses
			<Route path="/about" element={<AboutPage/>}/>
			<Route path="/contact" element={<ContactPage/>}/>
      </Routes>
			<Footer/>
    </BrowserRouter>
  );
};

export default App;
