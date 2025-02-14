import { Link } from "react-router-dom";

export default function AppBar() {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 mb-2">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/blogs" className="flex">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEUAAAD////u7u4YGBiTk5NMTEzOzs78/Pz39/fe3t7y8vLk5OTq6uqWlpanp6exsbEiIiI4ODiMjIxRUVERERHT09NJSUmrq6tsbGxhYWFaWlqEhITY2NgpKSmcnJwdHR16enrFxcUyMjJAQEALCwu8vLw1NTVwcHAZFt6KAAAF3UlEQVR4nO2di2KiMBBFiW15Iyg+1mKtVrv7/3+4aNWqZUOAzNzA5nwAzakhCclkxhEPxGmRZzOnj8yyvEjjRyHnXi+ZoJvZmUkS/9PQn6Jbp4mpX204RjdMI+MKwzBHt0orefhoGGToNmkmC+4NXXSDCHBvDQN0a0gIvg3DoXXRL7LwajisQeab/GI4pGninvGXoY9uByH+yXAoK5kqpkfDGN0KUuLSMEE3gpSkNOz/14SMiXCG3UnLbuqk6CYQkzoFugnEFM5Q1zMXcmeYS9JvMqefm07qDN3PYrFYLBaLxfLI7GO/X7w0YbGfvKFbrchhlbjByHs8flXAj9bpdo9ufx3F3K9XkeGNlgu0xL9Z7LrZXRg9o02qWc31+B3xN+9onR987PT5HQlN2zR6bjO0yFmbNLYeNHbQG7ZoryvfoQCaWaLNzqz099ALO7TbiV9kfiVztF3JK6WgCZEhi45rmFrghyk/4v+0Az6X3pELCgFdp24ZBKFn7wfql/AL4OF7yiIoBOxQbM8kKD5Rhp9chh4ohCLjEoRNiuP6lunCe4IYjvgMxRYhmDMKYpanjJ20BGEYsRr+4hfMeNYzFwChvaQfvj8BBNhPeQ0B0ctca9IzHv/e4prXUKzYDYP6Rmlly27IO1kIwb7Lf6DfoLmHfbvmSXlV6rufm2cZm9RV+Hexn7ipGs5flWIe97XfmoYa+q/KD8xqhi4zDaNGk9iuf4ZNNx+kv6KRhtuGz5TubJlo2HwnVzbcmGjYfAZb9Mzwd/OnSr45DTRsc9wg6aYGGrb5ZpV8khlo2GZ7TLK7ZaBhmyP4fhlGLZ7ar17qtbhmJFnVGGgo1FfdVyRPM9Gw+amf7NDcRMPmR7eynREjDZvGbEm3YI00FJtGj5RHV5lp2Oi04Y/8UYYairXqgDqp26gx1bB0TPK6vYz3ReHWRnCaa3jEk6P0jGbvNLehDtjDMdgN2WNp2Q1D7oATdkP24zV+Q+5uym/Y5lulZ4Y+b14LgKGIWUMUEYbC4zwIhhgKEU3ZLpmCDEu8eP6ZTumDT3CGZ6I/QzcUwqVd5RhgKEak04cJhq02nftlSHrXxAzD8DB0Q0E4oBpiSHibxhBDwtBhQwwJR1NDDEd0s741ZMIaWkNriMcaWkNriMcQw9HabcK6yaPxhuG4zXHD61gxMRPecNO2BU+bfhh2ub2rdEkVbdjtUHNlvmHX28kK9+Gxhl7nP1Ifh4I17H7BvP5HxBp2z+8ku2FigKGG3dpD7awINdSx0Vd7nRpqqCM6pDanpjXsgO2l5Uij4a+YPdIMf7b4D2b84a/ahr/y7prcSeUDEW3odfoCVolwRxt26ahqydLwhsIbt5k0FmPFDNoGGJaEwbzRbuI8UM+ATmjIkCJZBcoMvNxZlKqhjPvizoRVDWWiOppyCE2hvKKwRMudoKyeUKDlTlCGtqvsSNNDelWIN7tnNbT5IrkTJ1axJjVUO/6ihfZi6Rtar4T41gV+zqdOTMuchbYC8myRVEWQVNGxXykHPdbQX2BnTnj9iM9Q9gL7JrLkbEV+JJJeCbryAjR8YTF0EpggW3kdFyTIVw7igHkVI8IrXY+8I+b9kLVM6Qe/YvjBKVj+itwdNWIvNHvgHW5cxnfwCuekAarC9sLVUyOmib6CKccy3IeWe8w21INquIEV0bswpdzYCMDlOs+8bdYUvdVfb0yqYb0qlvMgikc6iKNgviz4a8wo8aQDtITFYrFYLBaLxWKxWCwWi8ViqYQ35zk/Mwd+KkBM5uToJhCTO+zFvZkpHPZSLsykDuU1KROIHcFaXYGdiXBQQQBMJKXhsLtpXBryBKWCmIqjIe0tGyz+yVBDpgdTOd4NP9U5Heq6JhcXw3CYi9MsvBqS37TB8BXoc67GyxdfzMc5ePJSbzgYWkfNLqFa14rK4bCGm/wab3dTM3pIk8ZNCpHbqtjYMEeN3AWF3tf9jpP+f2lMkvvsHT8qm8dpkWf93J6aZXmR/khO8he6AmU+kue/tAAAAABJRU5ErkJggg=="
              className="h-8 mr-1"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Daily code Blog
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link to="/publish">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Publish
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
