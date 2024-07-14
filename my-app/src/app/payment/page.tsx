"use client";

import React, { useState } from "react";
import { CiCircleQuestion } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import { transactions } from "../data/transactionData";
import * as XLSX from "xlsx";
const Payment = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState<string | null>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.orderId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortType(e.target.value);
  };

  const sortedTransactions = [...filteredTransactions].sort((a, b) => {
    if (sortType === "amount-asc") {
      return (
        parseFloat(a.orderAmount.replace("₹", "").replace(",", "")) -
        parseFloat(b.orderAmount.replace("₹", "").replace(",", ""))
      );
    } else if (sortType === "amount-desc") {
      return (
        parseFloat(b.orderAmount.replace("₹", "").replace(",", "")) -
        parseFloat(a.orderAmount.replace("₹", "").replace(",", ""))
      );
    } else if (sortType === "date-asc") {
      return (
        new Date(a.refundDate).getTime() - new Date(b.refundDate).getTime()
      );
    } else if (sortType === "date-desc") {
      return (
        new Date(b.refundDate).getTime() - new Date(a.refundDate).getTime()
      );
    }
    return 0;
  });

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = sortedTransactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(transactions);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Transactions");
    XLSX.writeFile(workbook, "transactions.xlsx");
  };

  return (
    <div className="bg-[#f9f9f9]">
      <div className="flex justify-between">
        <p className="font-bold text-[18px]">Overview</p>
        <p className="text-gray-400">This Month</p>
      </div>
      <br />
      <div className="grid grid-cols-3 gap-2">
        {/* card 1  */}
        <div className="bg-[#0f6eb4] rounded-lg ">
          <div className="bg-[#0f6eb4]  px-4 py-1 rounded-lg text-white">
            <div className="flex items-center gap-1 mt-3">
              <p>Next payout</p>
              <CiCircleQuestion size={15} />
            </div>
            <br />
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold">$2093.23</p>
              <div className="flex items-center">
                <p className="underline cursor-pointer">23 Orders </p>{" "}
                <MdKeyboardArrowRight size={18} />
              </div>
            </div>
          </div>
          <div className="bg-[#0a4b7d]  px-4 py-1 rounded-md text-white flex justify-between">
            <p className="text-[12px]">Next Payout Date :</p>
            <p className="font-medium">Today 4:00PM</p>
          </div>
        </div>
        {/* card 2  */}
        <div className="rounded-lg shadow-lg">
          <div className=" px-4 py-1 rounded-lg">
            <div className="flex items-center gap-1 mt-3">
              <p>Next payout</p>
              <CiCircleQuestion size={15} />
            </div>
            <br />
            <div className="flex justify-between items-center">
              <p className="text-[28px] font-bold">$92093.23</p>
              <div className="flex items-center">
                <p className="underline cursor-pointer">23 Orders </p>{" "}
                <MdKeyboardArrowRight size={18} />
              </div>
            </div>
          </div>
        </div>
        {/* card 3  */}
        <div className="bg-[#0f6eb4] rounded-lg">
          <div className="bg-[#0f6eb4]  px-4 py-1 rounded-lg text-white">
            <div className="flex items-center gap-1 mt-3">
              <p>Next payout</p>
              <CiCircleQuestion size={15} />
            </div>
            <br />
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold">$2093.23</p>
              <div className="flex items-center">
                <p className="underline cursor-pointer">23 Orders </p>{" "}
                <MdKeyboardArrowRight size={18} />
              </div>
            </div>
          </div>
          <div className="bg-[#0a4b7d]  px-4 py-1 rounded-md text-white flex justify-between">
            <p className="text-[12px]">Next Payout Date :</p>
            <p className="font-medium">Today 4:00PM</p>
          </div>
        </div>
      </div>

      <br />
      {/* Transactions Section */}
      <div className="flex justify-start gap-2 items-center">
        <p className="font-semibold text-[20px]">Transactions</p>
        <span className="font-semibold text-[20px]">|</span>
        <p className="font-semibold text-[20px]">This Month</p>
      </div>
      <div className="my-3 flex justify-start gap-2">
        <button className="font-semibold text-[#797979] bg-[#e5e5e5] rounded-full px-4 py-1">
          Payouts (22)
        </button>
        <button className="font-semibold text-[#eaeaea] bg-[#0f6eb4] rounded-full px-4 py-1">
          Refunds (6)
        </button>
      </div>
      {/* Table - top section */}
      <div className="p-2 mx-2 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <input
            type="text"
            placeholder="Search by order ID..."
            className="px-4 py-2 border rounded-md"
            value={searchTerm}
            onChange={handleSearch}
          />
          <div className="flex justify-center gap-1">
            {/* Sorting options */}
            <select
              value={sortType || ""}
              onChange={handleSortChange}
              className="px-4 py-2 text-sm bg-zinc-200 rounded-md"
            >
              <option value="">Sort By</option>
              <option value="amount-asc">Amount (Low to High)</option>
              <option value="amount-desc">Amount (High to Low)</option>
              <option value="date-asc">Date (Oldest to Latest)</option>
              <option value="date-desc">Date (Latest to Oldest)</option>
            </select>
            <button
              className="px-4 py-2 text-sm bg-zinc-200 rounded-md"
              onClick={downloadExcel}
            >
              Download
            </button>
          </div>
        </div>
        {/* Transactions Table */}
        <table className="w-full text-left">
          <thead>
            <tr className="border-b bg-[#F1F1F1]">
              <th className="px-4 py-2 text-sm font-medium">Order ID</th>
              <th className="px-4 py-2 text-sm font-medium">Status</th>
              <th className="px-4 py-2 text-sm font-medium">Transaction ID</th>
              <th className="px-4 py-2 text-sm font-medium">Refund date</th>
              <th className="px-4 py-2 text-sm font-medium">Order amount</th>
            </tr>
          </thead>
          <tbody>
            {currentTransactions.map((transaction, index) => (
              <tr className="border-b" key={index}>
                <td className="px-4 py-2 text-sm font-medium text-sky-600">
                  <Link href={`/transactions/${transaction.orderId.split("#")[1]}`}>
                    {transaction.orderId}
                  </Link>
                </td>
                <td
                  className={`px-4 py-2 text-sm font-medium ${
                    transaction.status === "Successful"
                      ? "text-green-500"
                      : transaction.status === "Processing"
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}
                >
                  {transaction.status}
                </td>
                <td className="px-4 py-2 text-sm font-normal">
                  {transaction.transactionId}
                </td>
                <td className="px-4 py-2 text-sm font-normal">
                  {transaction.refundDate}
                </td>
                <td className="px-4 py-2 text-sm font-normal">
                  {transaction.orderAmount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end mt-4">
          {/* Pagination */}
          <nav>
            <ul className="flex gap-1">
              {Array.from(
                {
                  length: Math.ceil(
                    filteredTransactions.length / transactionsPerPage
                  ),
                },
                (_, index) => (
                  <li key={index} className="cursor-pointer">
                    <button
                      onClick={() => paginate(index + 1)}
                      className={`px-3 py-1 rounded-md ${
                        currentPage === index + 1
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200"
                      }`}
                    >
                      {index + 1}
                    </button>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Payment;
