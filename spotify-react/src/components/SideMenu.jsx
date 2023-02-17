import {
  HeartIcon,
  HomeIcon,
  MusicalNoteIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setSearchActiveAction, showSearchAction } from "../redux/actions";
import { Link, useNavigate } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SideMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchActiveRedux = useSelector((state) => state.searchActive.active);
  return (
    <div
      className="flex flex-col overflow-y-auto pt-2 pb-4"
      style={{
        width: "15%",
        height: "100vh",
        backgroundColor: "black",
        position: "fixed",
        zIndex: 1,
      }}
    >
      <div className="flex flex-shrink-0 items-center px-4">
        <img
          className="h-8 w-auto mt-3"
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
          alt="Spotify Inc"
        />
      </div>
      <div className="ml-2 mt-3 flex flex-grow flex-col">
        <nav className="flex-1 space-y-8  px-2" aria-label="Sidebar">
          <div className="space-y-1">
            <a
              key="key"
              href="#href"
              className={classNames(
                "text-gray-300 hover:bg-gray-700 hover:text-white",
                "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              )}
              onClick={() => {
                dispatch(setSearchActiveAction(false));
              }}
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
                // setSearchActive(!searchActive);
                if (searchActiveRedux) {
                  dispatch(showSearchAction(false));
                }
                dispatch(setSearchActiveAction(!searchActiveRedux));
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
              onClick={() => navigate("/favorite")}
            >
              <HeartIcon
                className={classNames(
                  "text-gray-400 group-hover:text-gray-300",
                  "mr-3 flex-shrink-0 h-6 w-6"
                )}
                aria-hidden="true"
              />
              Liked Songs
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideMenu;
