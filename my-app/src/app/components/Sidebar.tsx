// components/sidebar.tsx

import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="h-screen w-1/6 bg-sidebarBg text-textPrimary">
      <div className="flex flex-col items-start p-4">
        <div className="text-xl font-bold mb-6">Nishyan</div>
        <nav className="space-y-4">
          <Link href="/home">
            <div className="flex items-center space-x-2 hover:text-textSecondary cursor-pointer">
              <span className="material-icons">home</span>
              <span>Home</span>
            </div>
          </Link>
          <Link href="/order">
            <div className="flex items-center space-x-2 hover:text-textSecondary cursor-pointer">
              <span className="material-icons">shopping_cart</span>
              <span>Orders</span>
            </div>
          </Link>
          <Link href="/products">
            <div className="flex items-center space-x-2 hover:text-textSecondary cursor-pointer">
              <span className="material-icons">store</span>
              <span>Products</span>
            </div>
          </Link>
          <Link href="/delivery">
            <div className="flex items-center space-x-2 hover:text-textSecondary cursor-pointer">
              <span className="material-icons">local_shipping</span>
              <span>Delivery</span>
            </div>
          </Link>
          <Link href="/marketing">
            <div className="flex items-center space-x-2 hover:text-textSecondary cursor-pointer">
              <span className="material-icons">campaign</span>
              <span>Marketing</span>
            </div>
          </Link>
          <Link href="/analytics">
            <div className="flex items-center space-x-2 hover:text-textSecondary cursor-pointer">
              <span className="material-icons">analytics</span>
              <span>Analytics</span>
            </div>
          </Link>
          <Link href="/payment">
            <div className="flex items-center space-x-2 hover:text-textSecondary cursor-pointer">
              <span className="material-icons">payment</span>
              <span>Payments</span>
            </div>
          </Link>
          <Link href="/tools">
            <div className="flex items-center space-x-2 hover:text-textSecondary cursor-pointer">
              <span className="material-icons">build</span>
              <span>Tools</span>
            </div>
          </Link>
          <Link href="/discounts">
            <div className="flex items-center space-x-2 hover:text-textSecondary cursor-pointer">
              <span className="material-icons">local_offer</span>
              <span>Discounts</span>
            </div>
          </Link>
          <Link href="/audience">
            <div className="flex items-center space-x-2 hover:text-textSecondary cursor-pointer">
              <span className="material-icons">people</span>
              <span>Audience</span>
            </div>
          </Link>
          <Link href="/appearance">
            <div className="flex items-center space-x-2 hover:text-textSecondary cursor-pointer">
              <span className="material-icons">palette</span>
              <span>Appearance</span>
            </div>
          </Link>
          <Link href="/plugins">
            <div className="flex items-center space-x-2 hover:text-textSecondary cursor-pointer">
              <span className="material-icons">extension</span>
              <span>Plugins</span>
            </div>
          </Link>
        </nav>
      </div>
      <div className="absolute bottom-4 left-4 text-sm">
        Available credits: <span className="font-bold">222.10</span>
      </div>
    </aside>
  );
};

export default Sidebar;
