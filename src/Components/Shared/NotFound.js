import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../images/not-found.png";

const NotFound = () => {
  return (
    <section className="flex items-center h-full p-16 dark:bg-coolGray-900 dark:text-coolGray-100">
      <div className="flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <img src={notFound} alt="" />
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8 dark:text-coolGray-400">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link
            to="/"
            rel="noopener noreferrer"
            href="#"
            className="px-8 btn text-black border-[2px] border-[white] py-3 font-semibold rounded"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};
export default NotFound;
