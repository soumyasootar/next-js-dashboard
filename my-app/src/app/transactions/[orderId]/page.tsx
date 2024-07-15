"use client";
import { useParams } from "next/navigation";
import { transactions } from "../../data/transactionData";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

const TransactionDetailsPage = () => {
  const { orderId } = useParams();

  const transaction = transactions.find(
    (t) => t.orderId.split("#")[1] === orderId
  );

  if (!transaction) {
    return <div>Transaction not found</div>;
  }

  return (
    <div>
      <Link href="/payment">
        <button className="font-semibold text-blue-600 border border-solid border-opacity-100 border-blue-600 py-2 px-4 rounded-full flex items-center justify-center text-[16px]">
          <FaArrowLeft className="mr-2" /> Back to Payments
        </button>
      </Link>
      <div className="p-4 bg-[#eeeeee] my-4 max-w-max rounded-md shadow-md">
        <h1 className="text-2xl font-semibold mt-2">
          Transaction Details for Order ID: {transaction.orderId}
        </h1>
        <p className="my-4 text-lg">
          <span className="font-bold">Status:</span>{" "}
          <span
            className={`${
              transaction.status === "Successful"
                ? "text-green-500"
                : transaction.status === "Processing"
                ? "text-yellow-500"
                : "text-red-500"
            } font-semibold`}
          >
            {" "}
            ● {transaction.status}
          </span>
        </p>
        <p className="my-4 text-lg">
          <span className="font-bold">Transaction ID:</span>{" "}
          <span className="font-semibold">{transaction.transactionId}</span>
        </p>
        <p className="my-4 text-lg">
          <span className="font-bold">Refund Date:</span>{" "}
          <span className="font-semibold">{transaction.refundDate}</span>
        </p>
        <p className="my-4 text-lg">
          <span className="font-bold">Order Amount:</span>{" "}
          <span className="font-semibold">{transaction.orderAmount}</span>
        </p>
      </div>
    </div>
  );
};

export default TransactionDetailsPage;
