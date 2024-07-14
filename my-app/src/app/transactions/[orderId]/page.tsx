"use client";
import { useParams } from 'next/navigation';
import { transactions } from '../../data/transactionData'; 

const TransactionDetailsPage = () => {
  const { orderId } = useParams();

  const transaction = transactions.find((t) => t.orderId.split('#')[1] === orderId);

  if (!transaction) {
    return <div>Transaction not found</div>;
  }

  return (
    <div>
      <h1>Transaction Details for Order ID: {orderId}</h1>
      <p>Status: {transaction.status}</p>
      <p>Transaction ID: {transaction.transactionId}</p>
      <p>Refund Date: {transaction.refundDate}</p>
      <p>Order Amount: {transaction.orderAmount}</p>
    </div>
  );
};

export default TransactionDetailsPage;
