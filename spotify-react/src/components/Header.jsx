import { Dialog, Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSearchAsync, showSearchAction } from "../redux/actions";

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [visible, setVisible] = useState(true);
  const [query, setQuery] = useState("");
  const searchActiveRedux = useSelector((state) => state.searchActive.active);
  const showSearchRedux = useSelector((state) => state.showSearch.result);
  const dispatch = useDispatch();

  return (
    // <header className="bg-black">
    //   <nav
    //     className="mx-auto max-w-7xl px-6 lg:py-n2 h-0"
    //     style={{ width: "100vr" }}
    //     aria-label="Top"
    //   >
    //     <div className="flex w-full items-center justify-between border-b border-indigo-500 py-2 lg:border-none">
    //       <div className="flex items-center"></div>
    //       <div className="ml-10 space-x-4">
    //         <Menu as="div" className="relative ml-3 p-3">
    //           <div>
    //             <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
    //               <span className="sr-only">Open user menu</span>
    //               <img
    //                 className="h-8  w-10 rounded-full"
    //                 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    //                 alt=""
    //               />
    //               <span className="ml-2 mr-3 text-white">Farhana</span>
    //             </Menu.Button>
    //           </div>
    //           <Transition
    //             as={Fragment}
    //             enter="transition ease-out duration-100"
    //             enterFrom="transform opacity-0 scale-95"
    //             enterTo="transform opacity-100 scale-100"
    //             leave="transition ease-in duration-75"
    //             leaveFrom="transform opacity-100 scale-100"
    //             leaveTo="transform opacity-0 scale-95"
    //           >
    //             <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
    //               {userNavigation.map((item) => (
    //                 <Menu.Item key={item.name}>
    //                   {({ active }) => (
    //                     <a
    //                       href={item.href}
    //                       className={classNames(
    //                         active ? "bg-gray-100" : "",
    //                         "block px-4 py-2 text-sm text-gray-700"
    //                       )}
    //                     >
    //                       {item.name}
    //                     </a>
    //                   )}
    //                 </Menu.Item>
    //               ))}
    //             </Menu.Items>
    //           </Transition>
    //         </Menu>
    //       </div>
    //     </div>
    //   </nav>
    // </header>

    <Container>
      <Navbar fixed="top" expand="lg" bg="black">
        <Navbar.Brand href="#"></Navbar.Brand>
        <div className="flex w-full items-center justify-between border-black-500 p-0 lg:border-none">
          <div className="flex items-center">
            {searchActiveRedux ? (
              <Form
                style={{ paddingLeft: "250px" }}
                onSubmit={(e) => {
                  e.preventDefault();
                  getSearchAsync(query);
                  dispatch(showSearchAction(true));
                }}
              >
                <Form.Group>
                  <Form.Control
                    className="pl-4 "
                    type="text"
                    placeholder="Search"
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                    }}
                  />
                </Form.Group>
              </Form>
            ) : (
              ""
            )}
          </div>
          <div className="ml-10 space-x-4">
            <Menu as="div" className="relative ml-3 py-2">
              <div>
                <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8  w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <span className="ml-2 mr-3 text-white">Farhana</span>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {userNavigation.map((item) => (
                    <Menu.Item key={item.name}>
                      {({ active }) => (
                        <a
                          href={item.href}
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          {item.name}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </Navbar>
    </Container>
  );
}
