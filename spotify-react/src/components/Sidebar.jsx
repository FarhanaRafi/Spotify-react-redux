import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  Bars3BottomLeftIcon,
  BellIcon,
  HeartIcon,
  HomeIcon,
  MusicalNoteIcon,
  PlusCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Form } from "react-bootstrap";
import GoodMorning from "./GoodMorning";
import RecentlyPlayed from "./RecentlyPlayed";
import Favorite from "./Favorite";
import SearchResult from "./SearchResult";
import { getSearchAsync } from "../redux/actions";
import { Link, useNavigate } from "react-router-dom";

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [visible, setVisible] = useState(true);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      {/* Static sidebar for desktop */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex min-h-0 flex-1 flex-col bg-black">
          <div className="flex h-16 flex-shrink-0 items-center bg-black pl-9">
            <img
              className="h-10 w-auto"
              src="https://icons.iconarchive.com/icons/blackvariant/button-ui-requests-2/512/Spotify-icon.png"
              alt="Your Company"
            />
          </div>
          <div className="flex flex-1 flex-col overflow-y-auto">
            <nav className="flex-1 space-y-1 px-2 py-4">
              <a
                key="key"
                href="#href"
                className={classNames(
                  "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                )}
              >
                <HomeIcon
                  className={classNames(
                    "text-gray-400 group-hover:text-gray-300",
                    "mr-3 flex-shrink-0 h-6 w-6"
                  )}
                  aria-hidden="true"
                />
                Home
              </a>
              <a
                key="key"
                href="#href"
                className={classNames(
                  "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                )}
                onClick={() => {
                  setSearchActive(!searchActive);
                }}
              >
                <MagnifyingGlassIcon
                  className={classNames(
                    "text-gray-400 group-hover:text-gray-300",
                    "mr-3 flex-shrink-0 h-6 w-6"
                  )}
                  aria-hidden="true"
                />
                Search
              </a>
              <a
                key="key"
                href="#href"
                className={classNames(
                  "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                )}
              >
                <MusicalNoteIcon
                  className={classNames(
                    "text-gray-400 group-hover:text-gray-300",
                    "mr-3 flex-shrink-0 h-6 w-6"
                  )}
                  aria-hidden="true"
                />
                Your Library
              </a>
              <a
                key="key"
                href="#href"
                className={classNames(
                  "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                )}
              >
                <PlusCircleIcon
                  className={classNames(
                    "text-gray-400 group-hover:text-gray-300",
                    "mr-3 flex-shrink-0 h-6 w-6"
                  )}
                  aria-hidden="true"
                />
                Create Playlist
              </a>
              <a
                key="key"
                href="#href"
                className={classNames(
                  "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                )}
              >
                <HeartIcon
                  className={classNames(
                    "text-gray-400 group-hover:text-gray-300",
                    "mr-3 flex-shrink-0 h-6 w-6"
                  )}
                  onClick={() => navigate("/favorite")}
                  aria-hidden="true"
                />
                Liked Songs
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:pl-64">
        <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-black shadow">
          <button
            type="button"
            className="border-r  border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex flex-1 justify-between px-4">
            <div className="flex flex-1">
              {searchActive ? (
                <Form
                  className="mt-5 px-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    getSearchAsync(query);
                    setVisible(false);
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
              {/* <form className="flex w-full md:ml-0" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <div className="relative w-400 text-gray-400 focus-within:text-gray-600">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                    <MagnifyingGlassIcon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    id="search-field"
                    className="block bg-black h-full w-200 border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                    placeholder="Search"
                    type="search"
                    name="search"
                  />
                </div>
              </form> */}
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <button
                type="button"
                className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="ml-2 mr-3 ">Farhana</span>
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
        </div>
        <main className=" bg-black ">
          <div className="py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 ">
              {/* <h1 className="text-2xl font-semibold text-white">
                Good Morning
              </h1> */}
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
              {visible ? (
                <>
                  <GoodMorning />
                  <RecentlyPlayed />
                  <Favorite />
                </>
              ) : (
                <SearchResult query={query} />
              )}

              {/* <div className="py-4">
                <div className="h-96 rounded-lg border-4 border-dashed border-gray-700" />
              </div>
        {/* /End replace */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Sidebar;
